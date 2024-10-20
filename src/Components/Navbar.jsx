import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className="navBackGround navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex align-top ps-10" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="news_app/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="news_app/bussiness">Bussiness</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="news_app/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="news_app/tecnology">Tecnology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="news_app/Parent">Parent</Link>
        </li>
        
        
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <div className='d-flex justify-content-center align-items-center '>
          
        <i className='fa fa-brands fa-facebook mx-1'></i>
        <i className='fa fa-brands fa-instagram mx-1'></i>
        <i className='fa fa-brands fa-twitter mx-1'></i>
        <i className='fa fa-brands fa-spotify mx-1'></i>

        </div>

       
       
       
        
        </ul>
        
      </ul>


      
      
    </div>
  </div>
</nav>
    </>
   
  )
}

export default Navbar