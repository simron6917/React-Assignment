import React from 'react'
import {Link} from 'react-router-dom'

const EventScreen = () => {
    return (
        <div>
             <h2>This is the Event Screen</h2> 
             <p> You can register to the Event ...<Link to='/register' type='submit'>Click to register</Link> </p>
        </div>
    )
}

export default EventScreen
