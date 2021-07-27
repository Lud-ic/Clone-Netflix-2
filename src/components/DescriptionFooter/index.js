import './style.scss';

import React from 'react';

const DescriptionFooter = () => {
  return (
    <>
      <div id="footerup">
        <div className="container">
          <img src="../../assets/DescriptionFooter/plus.svg" alt="optionPoster" />
          <p>Adicionar à listas</p>
        </div>
        <div className="container">
          <img src="../../assets/DescriptionFooter/like-svgrepo-com.svg" alt="optionPoster" />
          <p>Classifique</p>
        </div>
        <div className="container">
          <img src="../../assets/DescriptionFooter/share.svg" alt="optionPoster" />
          <p>Compartilhe</p>
        </div>
        <div className="container">
          <img src="../../assets/DescriptionFooter/indiqueamigo.svg" alt="optionPoster" />
          <p>Indique à um amigo</p>
        </div>
      </div>
      <div id="footerdown">
        <div className="container-line">
          <hr className="episode" />
        </div>
        <ul>
          <li className="corrently">EPISÓDIOS</li>
          <li>TRAILERS E MAIS </li>
          <li>TÍTULOS SEMB </li>
        </ul>

      </div>
    </>
  )
}

export { DescriptionFooter };