import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Form , Nav, Navbar} from 'react-bootstrap'

const Top = () => {
    return (
        <Row>
            <Col className='top-col1'>
                <div className="title">fev<span className='title-half'>ents</span></div>
                <p className="top-p1">Nepals First Virtual Comic and Cosplay Convention</p>
                <p className="top-p2">COMIC AND COSPLAY CONVENTION NEPAL</p>
                <img src='images/top.png' className="top-img" />
                <img src='images/play.png' className="play" />

                <p className="top-p3">There was an idea. To bring together fans of Anime, Manga, Comics, Cosplay, Games and Pop Culture from Nepal. To see if we could experience something more, So that when they needed a forum, We could bring a convention unlike never before.</p>
            <Link className='top-button1' type='submit' to='/register'><p className='top-button-p1'> Register for the Event </p></Link>
            <Link className='top-button2' type='sumbit' to='/more'><p className='top-button-p2'> Learn More </p></Link>
            <img className='top-image1'  src='images/image5.png'/>
           <img className='top-image2'  src='images/image6.png'/>
           <img className='top-image3'  src='images/image7.png'/>
            </Col>
            <Col className="top-col2">
                {/* <div className='top-col2-p'> */}
                <Navbar >
                    <Nav.Link href="#home" className="top-col2-p" >Home</Nav.Link>
                    <Nav.Link href="/news" className="top-col2-p">News</Nav.Link>
                    <Nav.Link href="/community" className="top-col2-p">Community</Nav.Link>
                    <Nav.Link href="/manga" className="top-col2-p">Manga</Nav.Link>
                    <Nav.Link href="/event" className="top-col2-p">Event</Nav.Link>
                </Navbar>
                {/* <span className='span-p'> Home </span> <span  className='span-p'>News </span> <span  className='span-p'>Community </span> <span  className='span-p'>  Manga </span> <span  className='span-p'>Event</span> */}
                {/* </div> */}
            
            </Col>
        </Row>
    )
}

export default Top
