import React, {Component} from 'react';

export default(props) => {
  const orient = props.orient || 'orient-right'
  const containerClass = 'spotlight style1 '+orient+' content-align-left image-position-center onscroll-image-fade-in'

return(
  <section className={containerClass}>
    <div className="content">
      <h2>{props.title}</h2>
    <p>GallerisA is a WebApplication where user can SignUp/ Login and can post images,
         add Description, comment on each others posts and also can view active users profile.</p>
      <ul className="actions vertical">
        <li><a href="https://gallerisa.herokuapp.com"target="_blank" className="button">Learn More</a></li>
      </ul>
    </div>
    <div className="image left">
      {/* <img src="images/spotlight01.jpg" alt="" /> */}
      <iframe margin="3px" width="98%" height="98%" src="https://gallerisa.herokuapp.com">

      </iframe>
    </div>
  </section>
)
};
