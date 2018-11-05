import React from 'react';
import { Link } from 'react-router';

const PostTile = (props) => {
  let post_art = props.post_art
  let description = props.description
  return(

    <div className="post-tile tilebreak ">

      <Link to={`/posts/${props.id}`} >
      <img src={post_art}/>
      <p>{description}</p>

      </Link>
      </div>

  )
}

export default PostTile;
