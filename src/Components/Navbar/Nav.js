import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <div className="profilelogo"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile-Logo" /></div>
      <div className="navheader">
        <span className="home">Home</span>
        <span className="shows">Shows</span>
        <span className="movies">Movies</span>
      </div>
      <div className="log">
        <img src="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/360773/360773-1520262091652-fa603e15cdcd2.jpg" alt="Netflix-Logo" />
      </div>
    </div>
  )
}

export default Nav