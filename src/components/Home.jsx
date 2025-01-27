import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        This is home route
        <div className='router__container'>
            <Link to="/caller">Go to caller route</Link>
            <Link to="/dialpad">Go to dialpad</Link>
        </div>
    </div>
  )
}

export default Home