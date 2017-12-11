import React, {Component} from 'react';

class Footer extends Component{

  render(){
    return(
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://plus.google.com/u/0/+PawanRajen"target="_blank" className="icon style2 fa fa-google-plus"><span className="label">Google+</span></a></li>
          <li><a href="https://github.com/rajenpawan"target="_blank" className="icon style2 fa fa-github"><span className="label">github</span></a></li>
        <li><a href="https://www.linkedin.com/in/rajendra-pawan-44745611a/"target="_blank" className="icon style2 fa-linkedin"><span className="label" >LinkedIn</span></a></li>
          </ul>
          <br />
        <p id="par"><i>Copyright &copy; pawarajendra 2017</i></p>
        </div>
      </footer>
    )
  }
}
export default Footer;
