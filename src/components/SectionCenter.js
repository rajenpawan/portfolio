import React, {Component} from 'react';

class SectionCenter extends Component  {
  render(){
    return(
      <section className="wrapper style1 align-center">
        <div className="inner">
          <h2>{this.props.title}</h2>
        <p>These Other Projects where part of my Training and as a Practice</p>
          <div className="items style1 medium onscroll-fade-in">
            <section>
              <span className="icon style2 major fa-diamond"></span>
            <h3>Weather App</h3>
          <p>This is a Weather Application built with Reactjs. where user can get info on weather for any location Globally</p>
          <ul className="actions vertical">
            <li><a href="http://rocky-springs-53283.herokuapp.com"target="_blank" className="button">To View</a></li>
          </ul>
            </section>
            <section>
              <span className="icon style2 major fa-save"></span>
            <h3>The Great RGB Color Game</h3>
          <p>It is an Simple Javascript based Game where it displays a set of Random Colors based on css property rgb, now User has to identify the color concept of rgb mention and then click on correct Color</p>
              <ul className="actions vertical">
                <li><a href="http://evening-ocean-43131.herokuapp.com/"target="_blank" className="button">To View</a></li>
              </ul>
          </section>
            <section>
              <span className="icon style2 major fa-bar-chart"></span>
              <h3>Dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
            </section>
          
          </div>
        </div>
      </section>
    )
  }
}

export default SectionCenter;
