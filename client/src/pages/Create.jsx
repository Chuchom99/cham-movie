import axios from 'axios';
import React,{useState} from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import "./Signup.css"


const Create = () => {

    const [movie, setMovie] = useState({
        name: "",
        img: "",
        rating: "",
        year: "",
        ind: "",
    })
    console.log(movie);
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e) => {
        setMovie(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const onClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/post-movies", movie)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <Container>
        <Row>
            <Col md={6} className="login-form-container" >
              <Form >
                  <h1>Add your favourite movie</h1>
                  <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Movie name" name='name'  onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Cover image</Form.Label>
                      <Form.Control type="text" placeholder="Enter cover link" name='img' onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control type="text" placeholder="Enter rating" name='rating' onChange={handleChange}/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Year</Form.Label>
                      <Form.Control type="text" placeholder="Enter year of production" name='year' onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>industry</Form.Label>
                      <Form.Control type="text" placeholder="Enter industry" name='ind' onChange={handleChange} />
                  </Form.Group>
                  <Form.Group>
                      <Button type="submit"  onClick={onClick} >Create</Button>
                  </Form.Group>
                 
              </Form>
            </Col>
            <Col md={6} className="signup-image" >

            </Col>
        </Row>
    </Container>
  )
}

export default Create