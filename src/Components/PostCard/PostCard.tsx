import React from "react";
import { img2 } from "../../Images";

const PostCard: React.FC = () => {
  return (
    <div className="postCard">
      <img src={img2} alt="" className="postCardImg" />
      <div className="postCardInfo">
        <div className="postCardCats">
          <span className="postCardCat">Music</span>
          <span className="postCardCat">Life</span>
        </div>
        <span className="postCardTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postCardDate">1 hour ago</span>
      </div>
      <p className="postCardDesc">
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

export default PostCard;
