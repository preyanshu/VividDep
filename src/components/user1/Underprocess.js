import React from 'react'
import { Link } from 'react-router-dom'

const Underprocess = () => {
  return (
    <div className=' d-flex ' style={{justifyContent:"center",alignItems:"center",height:"100vh",border:"0px solid black"}}>
        <h1>
        Under Development
        <Link to='/user1' style={{marginLeft:"20px"}}>Go Back</Link>
        
        </h1>
    </div>
  )
}

export default Underprocess
