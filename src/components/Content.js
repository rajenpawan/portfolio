import React, {Component} from 'react';

export default class Content extends Component{
  render(){
    return(
      <section className="wrapper style1 align-center">
        <div className="inner medium">
          <h2>Get In Touch</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" value="" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" value="" />
            </div>
            <div className="field">
              <label for="message">Message</label>
            <textarea name="message" id="message" rows="6" placeholder="Enter Text.."></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
            </ul>
          </form>

        </div>
      </section>
    )
  }
}
