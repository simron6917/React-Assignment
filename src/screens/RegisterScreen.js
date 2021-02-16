import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button,Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
    return (
        <FormContainer>
        <br /> <br />
          <h2 style={{textAlign:'center'}}><b>Sign Up!!!</b> </h2> 
          <h6 style={{textAlign:'center'}}><b>( You can register here )</b> </h6> 

             <Form>
                 <Form.Group controlId='name'>
                     <Form.Label>Full Name</Form.Label>
                     <Form.Control type='name' placeholder='Enter your name'></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='email'>
                     <Form.Label>Email Address</Form.Label>
                     <Form.Control type='email' placeholder='Enter your email address'></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='password'>
                     <Form.Label>Password</Form.Label>
                     <Form.Control type='password' placeholder='Enter your password' ></Form.Control>
                 </Form.Group>
                 <Form.Group controlId='confirmPassword'>
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control type='password' placeholder='Renter your password' ></Form.Control>
                 </Form.Group>
                 <Button type='submit' variant='primary' style={{marginLeft:'212px'}}>
                     Register
                 </Button>
                 
                 <Row className='py-3'>
                     <Col style={{textAlign:'center'}}>
                         Have an account?{''} <Link to='/login'>
                             Login
                         </Link>
                     </Col>
                 </Row>
         </Form>

        </FormContainer>
    )
}

export default RegisterScreen
