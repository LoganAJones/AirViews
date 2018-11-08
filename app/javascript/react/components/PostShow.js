import React from 'react';
import { browserHistory, Link } from 'react-router';

const PostShow = (props) => {
  let image_url = null
  let display = null
  let filearray = []
  if (props.post.post_art) {
    image_url = props.post.post_art.url
    filearray = props.post.post_art.url.split(".")
    if (filearray[filearray.length-1] == "MP4" || filearray[filearray.length-1] == "mov"){
      display = <video width="470" height="252" src={image_url} controls autoPlay/>


    } else {
      display = <img src={image_url} />
    }
  }

  return(
    <div className="row postform">
    <div className="center">
    <h1> {props.post.user_id}</h1>
    </div>
      <div className="album-artist-release_date large-6 columns">
      <div className="post_art">
      {display}
        </div>


        </div>
        <div className="description p">

        {props.post.description}
      </div>

      <div className="center">
        <Link to={`/homefeed`}>
        <button className="button2 floatR">
          <p>Home</p>
          </button>
        </Link>
      </div>
      <p1>Upload Date {props.post.created_at}</p1>
    </div>

  )
}

export default PostShow;
