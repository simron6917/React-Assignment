import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const Bottom = () => {
    return (
        <div className='buttom-div'>
            <Container>
                <p className='bottom-div-one'>
                Interactive Contests, Games and Live Giveaways
                </p>
                <p className='bottom-div-two'>
                This festive season celebrate Animation, Comics, Games and Pop Culture at
                </p>
                <Link className='button' to='/register'> 
                    <p className='button-text'>Register for the Event</p>
                </Link>

            </Container>
        </div>
    )
}

export default Bottom
