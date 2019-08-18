import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from '../../../axios'

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        userId: ''
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
        axios.post('/posts', data)
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
        return (
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
                        <Button type="submit" onClick={this.submitPost}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

export default NewPost