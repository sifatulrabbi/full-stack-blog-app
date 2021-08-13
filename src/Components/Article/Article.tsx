import React from 'react';
import { img2 } from '../../Images';

const Article: React.FC = () => {
  return (
    <div className="article">
      <div className="articleWrapper">
        <img className="articleImg" src={img2} alt="" />
        <h1 className="articleTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <div className="articleEdit">
            <i className="articleIcon far fa-edit"></i>
            <i className="articleIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="articleInfo">
          <span className="articleAuthor">
            Author: <b>Author Name</b>
          </span>
          <span className="articleDate">1 hour ago</span>
        </div>
        <p className="articleDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eius. Molestiae suscipit facere odio aliquid, fuga, maxime omnis
          delectus aut beatae labore officia reprehenderit expedita quos
          voluptates mollitia ducimus ipsum assumenda perspiciatis facilis!
          Suscipit cum aliquid fugit! Ipsam, totam quibusdam quis accusantium
          debitis aliquam consequatur perspiciatis nemo obcaecati, tempore dicta
          animi cupiditate nam non voluptas eveniet necessitatibus alias vero
          accusamus. Quae magnam reiciendis ea, illo dicta optio quis saepe
          officia nisi officiis facere sunt deleniti et sapiente temporibus,
          beatae, corrupti voluptatum! Natus temporibus dignissimos molestias,
          itaque quasi assumenda beatae, reprehenderit porro dolores quia
          voluptatum minus sunt ducimus. Magni, iste officiis fugiat ratione
          ullam exercitationem dolorum consequuntur quaerat itaque aliquid
          architecto non reiciendis saepe dolorem, rerum sed id ipsam cumque
          nesciunt reprehenderit. Mollitia sed enim est debitis cum doloribus
          tempora exercitationem officia reprehenderit, consequatur atque, unde
          tenetur dolorem nulla harum. Aperiam dolorum inventore corrupti
          sapiente exercitationem natus maiores reiciendis similique aut!
        </p>
      </div>
    </div>
  );
};

export default Article;
