import React from "react";
import { img2 } from "../../Images";

const Post: React.FC = () => {
  return (
    <div className="post">
      <img src={img2} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut,
        numquam nihil voluptas optio est error et adipisci id quaerat deleniti
        obcaecati nemo fugiat! Inventore eum qui quia facere possimus? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quas aut, numquam
        nihil voluptas optio est error et adipisci id quaerat deleniti obcaecati
        nemo fugiat! Inventore eum qui quia facere possimus? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quas aut, numquam nihil voluptas
        optio est error et adipisci id quaerat deleniti obcaecati nemo fugiat!
        Inventore eum qui quia facere possimus? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quas aut, numquam nihil voluptas optio est
        error et adipisci id quaerat deleniti obcaecati nemo fugiat! Inventore
        eum qui quia facere possimus? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quas aut, numquam nihil voluptas optio est error et
        adipisci id quaerat deleniti obcaecati nemo fugiat! Inventore eum qui
        quia facere possimus? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quas aut, numquam nihil voluptas optio est error et adipisci id
        quaerat deleniti obcaecati nemo fugiat! Inventore eum qui quia facere
        possimus?
      </p>
    </div>
  );
};

export default Post;
