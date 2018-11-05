import React from 'react';
import { browserHistory, Link } from 'react-router';

const PostShow = (props) => { debugger

  return(
    <div className="row">
    <div>
    <h1> {props.posts.user_id}</h1>
    </div>
      <div className="album-artist-release_date large-6 columns">
      <div className="post_art">
      <img src={props.posts.post_art} />
        </div>


        </div>
        <div className="description">
        {props.posts.description}

      </div>
      </div>

  )
}

export default PostShow;
