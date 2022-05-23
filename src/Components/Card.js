import React from "react";

function Card({name,location,description,likes,postImage,createdAt,timeAt}) {
  return (
    <div className="card">
      <nav className="section-nav">
        <div className="profileName">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <p className="dots">...</p>
      </nav>
      <img
        className="card-img"
        src={process.env.REACT_APP_TOKEN+'/image/'+postImage}
        alt={"Childhood"}
      />
      <div className="Details"> 
        <div className="likeCommentIconsDate"> 
          <div>{"\u2661"}</div> 
          <div>{"\u27A2"}</div>
        </div>
        <div className="Date" style={{marginRight:'10px'}}>{createdAt}</div>
      </div>
      <div className="likesTime">
      <p className="numberOfLikes" style={{marginLeft:'10px'}}>{likes} likes </p>
      <p className="time" style={{marginRight:'10px'}} >{timeAt}</p>
      </div>
      <h3 className="describe" >{description}</h3>
    </div>
  )
}

export default Card;
