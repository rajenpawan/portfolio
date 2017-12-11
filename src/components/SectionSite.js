import React, {Component} from 'react';

export default(props) => {
  const orient = props.orient || 'orient-right'
  const containerClass = 'spotlight style1 '+orient+' content-align-left image-position-center onscroll-image-fade-in'

return(
  <section className={containerClass}>
    <div className="content">
      <h2>{props.title}</h2>
    <p>ReactSite is a WebSite </p>
      <ul className="actions vertical">
        <li><a href="https://enigmatic-headland-80012.herokuapp.com/"target="_blank" className="button">Learn More</a></li>
      </ul>
    </div>
    <div className="image">
      {/* <img src="images/spotlight01.jpg" alt="" /> */}
      <iframe className="rect" width="98%" height="425px" scrolling="no"  src="https://enigmatic-headland-80012.herokuapp.com/">

      </iframe>
    </div>
  </section>
)
};
