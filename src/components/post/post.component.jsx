import React, { useState } from "react";

import Card from "../card/card.component";

const Post = () => {
  const [post, setPost] = useState(null);

  return (
    <Card>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>No post found</p>
      )}
    </Card>
  );
};

export default Post;
