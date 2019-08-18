import React, { Component } from 'react'

import axios from '../../axios'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import NewPost from '../../components/Post/NewPost/NewPost'
import PostModal from '../../components/UI/Modal/Modal'

class Posts extends Component {
    state = {
        posts: [],
        totalPost: 0,
        show: false,
        curPostId: null,
        showView: false
    }

    componentDidMount() {
        // axios.get('/posts', {
        //         params: {
        //             userId: 1
        //         }
        //     })
        axios.get('/posts')
            .then(res => {
                // console.log(res);
                const posts = res.data.slice(0, 18);
                // const posts = res.data;
                const updatedPosts = posts.map(post => {
                    return { ...post }
                })
                this.setState({ posts: updatedPosts, totalPost: updatedPosts.length })
            })
            .catch(err => {
                console.log(err)
            });
    }

    viewModal = (id) => {
        this.setState({ show: true, showView:true, curPostId: id  })
    }
    closeModal = () => {
        this.setState({ show: false, showView:false })
    }

    // deletePost = (postId) =>{
    //     if(window.confirm('Are sure to delete this post?')){
    //         axios.delete('/posts/'+postId)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
        
    // }


    

    render() {         
        let posts = <div>No such post found!</div>
        if ( this.state.posts.length > 0 ) {
            posts = <Col><p style={{ textAlign: 'center' }}>Loading...</p></Col>
        }
        posts = this.state.posts.map(post => {
            return (
                <Col key={post.id}>
                    {/* <Card style={{ width: '21rem' }}> */}
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">UserId: {post.userId}</Card.Subtitle>
                        <Card.Text>{post.body}</Card.Text>
                        {/* <Card.Link href="#">View</Card.Link> */}
                        <Button variant="primary" size="sm" onClick={() => this.viewModal(post.id)}>View Details</Button>
                        {/* <Button variant="danger" size="sm" onClick={() => this.deletePost(post.id)} >Delete Post</Button> */}
                    </Card.Body>
                    {/* </Card> */}
                </Col>
            );
        })
        return (
            <Container style={{ marginTop: 20 }}>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h2>
                                    Create a new post
                                </h2>
                                <NewPost />
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <div>Total posts: {this.state.totalPost}</div>
                        <Row>
                            {/* {this.state.posts.length===0? <p>No such post found!</p>:posts} */}
                            {posts}</Row>
                    </Col>

                </Row>
                <PostModal 
                show={this.state.show} 
                onHide={this.closeModal} 
                id={this.state.curPostId}
                showView={this.state.showView}/>                
            </Container>
        )
    }
}


export default Posts
