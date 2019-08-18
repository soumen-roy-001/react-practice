import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col, ButtonToolbar } from 'react-bootstrap'
import axios from '../../../axios'
import Aux from '../../../hoc/Aux/Aux'


class MyModal extends Component {

    state = {
        loadedPost: null,
        showEdit: false,
        title: '',
        body: '',
        userId: ''
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        // console.log(response.data.title)
                        this.setState({ 
                            loadedPost: response.data, 
                            title:response.data.title,
                            body:response.data.body,
                            userId:response.data.userId
                         })

                    })
            }

        }
    }

    deletePost = () => {
        if (window.confirm(`Are sure to delete this post: ${this.props.id} ?`)) {
            axios.delete('/posts/' + this.props.id)
                .then(res => {
                    console.log(res)
                    alert('Deleted. Find the response in console.')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    editPost = () => {
        this.setState({ showEdit: true })

    }

    submitPost = (event) => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
        }
        console.log('Before data submission: ')
        console.log(data)
        axios.put('/posts/' + this.props.id, data)
            .then(res => {
                // console.log(res)
                console.log('After data submission:')
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }
        if (this.state.loadedPost && (this.state.loadedPost.id !== this.props.id)) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost && this.state.showEdit === true) {
            post = (
                <Aux>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Post
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formPost.InputTitle">
                                <Form.Label column sm={2}>
                                    Title
                    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} type="text" placeholder="Post Title" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPost.InputBody">
                                <Form.Label column sm={2}>
                                    Details
                    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={this.state.body} onChange={(event) => this.setState({ body: event.target.value })} as="textarea" rows="3" placeholder="Post Details" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPost.InputUserId">
                                <Form.Label column sm={2}>
                                    UserId
                    </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={this.state.userId} onChange={(event) => this.setState({ userId: event.target.value })} type="number" placeholder="UserId" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <ButtonToolbar>
                                        <Button type="submit" style={{ marginRight: 10 }} size="sm" onClick={this.submitPost}>Update Post</Button>
                                        <Button variant="danger" size="sm" onClick={this.props.onHide}>Cancel</Button>
                                    </ButtonToolbar>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button onClick={props.onHide}>Close</Button> */}

                    </Modal.Footer>
                </Aux>
            )
        }

        if (this.state.loadedPost && this.state.showEdit === false) {
            //post = {...this.state.loadedPost}
            post = (
                <Aux>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.loadedPost.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>UserId {this.state.loadedPost.userId}</h4>

                        <p>
                            {this.state.loadedPost.body}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button onClick={props.onHide}>Close</Button> */}
                        <Button variant="primary" onClick={this.editPost}>Edit</Button>
                        <Button variant="danger" onClick={this.deletePost}>Delete</Button>
                    </Modal.Footer>
                </Aux>
            )
        }
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {post}
            </Modal>
        )
    }
}

export default MyModal