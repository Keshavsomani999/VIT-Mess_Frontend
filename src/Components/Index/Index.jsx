import React from 'react'
import "./Index.css"
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div>
      <div className="float-container">

<div className="float-child">
    <div className="whiteBox"></div>

    <div className="lightText"><Link to="/adminLogin">Admin</Link> </div>
</div>

<div className="float-child" >
<Link to="/form">
    <div className="black"></div>
    <div className="blue">Student</div>
    </Link>
</div>

</div>
    </div>
  )
}
