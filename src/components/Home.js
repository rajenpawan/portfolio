import React, {Component} from 'react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import SectionCenter from '../components/SectionCenter';
import SectionSite from '../components/SectionSite';
import Content from '../components/Content';

export default class Home extends Component{
  render(){
    return(
      <div className="App">

          <div id="wrapper" className="divided">

              <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                  <h1>My PortFolio</h1>
                <p className="major">My Live Projects which i Worked as freelancer</p>
                  <ul className="actions vertical">
                    <li><a href="https://github.com/rajenpawan"target="_blank" className="button big wide smooth-scroll-middle">My github</a></li>
                  </ul>
                </div>
                <div className="image">
                  <img src="images/pexels-photo-561654.jpeg" alt="" />
                </div>
              </section>
            </div>

            <Section id="first" title="GallerisA" orient="orient-right" />
          <SectionSite title="ReactSite" orient="orient-left" />
        <SectionCenter title="Other Projects" />
            <Content />
          <Footer />
          </div>
    )
  }
}
