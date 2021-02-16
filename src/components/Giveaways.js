import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'

const Giveaways = () => {
    return (
        <div className='giveaway'>
        <Container>
            <p className="giveaway-text-one">Interactive Contests, Games and Live Giveaways</p>
            <p className='giveaway-text-two'>This festive season celebrate Animation, Comics, Games and Pop Culture at</p>
            <Row>
                <Col className='col-md-3'>
                     <img className='img-one'  src='images/img1.png'/>
                </Col>
                <Col className='col-md-9'>
                    <Row>
                        <Col className='col-md-3'>
                        <img className='img-two'  src='images/img2.png'/>

                        </Col>
                        <Col className='col-md-3'>
                        <img className='img-three'  src='images/img3.png'/>

                        </Col>
                        <Col className='col-md-3'>
                        <img className='img-four'  src='images/img4.png'/>

                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-3'>
                        <img className='img-five'  src='images/img5.png'/>

                        </Col>
                        <Col className='col-md-3'>
                        <img className='img-six'  src='images/img6.png'/>

                        </Col>
                        <Col className='col-md-3'>
                     <img className='img-seven'  src='images/img7.png'/>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Giveaways
