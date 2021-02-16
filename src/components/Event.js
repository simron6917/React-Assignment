import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

const Event = () => {
    return (
        <div className='event'>
            <Row>
                <Col>
                    <Row className='row1'>
                        <Col className='col-md-4'>
                            <img src="images/event1.png" className='event1' />
                        </Col>
                        <Col>
                            <p className="p1">Ani Dance Competition</p>
                            <p className="p2">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
                        </Col>
                    </Row>
                    <Row className='row2'>
                        <Col className='col-md-4'>
                        <img src="images/event2.png" className='event2' />                   
                        </Col>
                        <Col>
                            <p className="p3">Ani Song Cover Contest</p>
                            <p className="p4">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
                        </Col>
                    </Row>
                    <Row className='row3' >
                        <Col className='col-md-4'>
                        <img src="images/event3.png" className='event3' />
                        </Col>
                        <Col>
                            <p className="p5">AMV Contest & Showcase</p>
                            <p className="p6">To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more,</p>
                        </Col>
                    </Row>
                </Col>
                <Col className='col2'>
                    <p className='col-p1'>Watchlist for the event</p>
                    <p className="col-p2">Event Highlights</p>
                    <div className="col-p3">There was an idea. To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more, So that when they needed a forum, We could bring a convention unlike never before.</div>
                    <Link className='button-event'  type='submit' to='/register'><p className="button-p">
                    Register for the Event
                    </p></Link>
                </Col>
            </Row>
        </div>
    )
}

export default Event
