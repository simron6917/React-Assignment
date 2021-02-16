import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    return (
        <div >
            <FormContainer>
            <br /> <br />
            <h1 style={{textAlign:'center'}}>Sign In</h1>
           
            <Form>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary' style={{marginLeft:'212px'}} >
                    Sign In
                </Button>
                </Form>
                <Row className='py-3'>
                    <Col  style={{textAlign:'center'}}>
                        New Customer? <Link to={'/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
        </FormContainer>
 </div>
    
    )
}

export default LoginScreen
