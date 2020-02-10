// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import RouteToBackend from '../api/RouteToBackend'
export default class Home extends React.Component {
  routeToBackend = new RouteToBackend();
  constructor(props){
  super(props);

  this.state = {
    name: "",
    reVisit: "",
    score: "",
    extraComment: ""
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(){
    alert("Thank you! Your comment has been received to improve my website.")

    const content = {
      name: this.state.name,
      reVisit: this.state.reVisit,
      score: this.state.score,
      extraComment: this.state.extraComment
    }

    this.setState({
      name: "",
      reVisit: "",
      score: "",
      extraComment: ""
    })

    this.routeToBackend.sendEmail(content);
  }

  render() {
    return(
      <div>
        <main>
          <section className="background-img">
            <div><img src="https://i.ibb.co/7SnFG31/file-14.jpg" alt="Image here" /></div>
          </section>

          <section className="bio" id="bio">
            <h1>Skyler Tran</h1>
            <article>My name is Skyler Tran and I am currently a senior in Computer Science department. I am currently taking Artificial
             Intelligence and Machine Learning classes. I am also passionate about cyber security and virtual reality.
             I used to be an officer in Cyber Security club here at SMU and I am currently a pro-active member
              of Virtual Reality club. My current goal is to get a job where I can help build software/hardward and start coding after I graduate.
            </article>
          </section>
          <div className="clear"></div>

          <section className="favBooks">
            <h2>Favorite Books</h2>
            <ul>
              <li>Great Gatsby - <span id="author">F. Scott Fitzgerald</span></li>
              <li>Picture of Dorian Gray - <span id="author">Oscar Wilde</span></li>
              <li>Looking for Alaska - <span id="author">John Green</span></li>
            </ul>
          </section>

          <div className="bookImages">
            <img className="z-0" src="https://i.ibb.co/vcRYYjF/great-gastby.jpg" alt="great-gastby"/>
            <img className="z-1" src="https://i.ibb.co/syFQ6gy/dorian-gray.jpg" alt="dorian-gray"/>
            <img className="z-2" src="https://i.ibb.co/w76tsN9/looking-for-alaska.jpg" alt="looking-for-alaska"/>
          </div>

          <section className="favQuotes">
            <h2>Favorite Quotes</h2>
            <div>
              <p>"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid."</p>
              <span id="author">Jane Austen</span>
            </div>

            <div>
              <p>"An investment in knowledge pays the best interest."</p>
              <span id="author">Benjamin Franklin</span>
            </div>
          </section>

          <h2>Interests + Hobbies</h2>
          <section className="interests">
            <ul>
              <li>Technology</li>
              <li>Programming</li>
              <li>Cyber security</li>
              <li>Virtual reality</li>
              <li>Playing tennis</li>
              <li>Swimming</li>
              <li>Reading</li>
              <li>Mix drinks</li>
              <li>Sitcom series</li>
            </ul>
          </section>

          <section className="awards">
            <h2>Awards</h2>
            <div className="awards-item">
              <p>Local 1st Place in Cyber Force Competition</p>
              <p className="sponsor">Department of Energy (DOE)</p>
            </div>

            <div className="awards-item">
              <p>2nd place in cyber competition - Capture The Flag</p>
              <p className="sponsor">StateFarm</p>
            </div>

            <div className="awards-item">
              <p>Honor Transfer Scholarship</p>
              <p className="sponsor">Southern Methodist University</p>
            </div>

            <div className="awards-item">
              <p>Honor Roll Distinction</p>
              <p className="sponsor">Southern Methodist University</p>
            </div>

            <div className="awards-item">
              <p>3rd place in Calculus Bowl</p>
              <p className="sponsor">The University of Texas at Arlington</p>
            </div>
          </section>

          <hr />

          <section className="gradeTable" id="grades">
            <h1>Academic Records</h1>
            <table id="gradeTable">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Subject</th>
                  <th>Title</th>
                  <th>Course Title</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fall 2018</td>
                  <td>ANTH</td>
                  <td>1301</td>
                  <td>Culture At Risk</td>
                  <td>A</td>
                </tr>

                <tr>
                  <td>Spring 2019</td>
                  <td>CSE</td>
                  <td>3381</td>
                  <td>Digital Logic Design</td>
                  <td>A-</td>
                </tr>

                <tr>
                  <td>May 2019</td>
                  <td>RELI</td>
                  <td>1301</td>
                  <td>Introduction to Asian Religions</td>
                  <td>A-</td>
                </tr>

                <tr>
                  <td>Summer 2019</td>
                  <td>CSE</td>
                  <td>4381</td>
                  <td>Operating Systems</td>
                  <td>A</td>
                </tr>

                <tr>
                  <td>Fall 2019</td>
                  <td>CSE</td>
                  <td>3345</td>
                  <td>Graphic User Interface</td>
                  <td>TBD</td>
                </tr>

                <tr>
                  <td>Fall 2019</td>
                  <td>CSE</td>
                  <td>4381</td>
                  <td>Digital Computing Design</td>
                  <td>TBD</td>
                </tr>

              </tbody>
            </table>
          </section>
          <hr/>


          <section className="contactMe" id="contact">
            <h4>Get in touch today</h4>
            <hr/>
            <article id="bold">Southern Methodist University</article>
            <article id="bold">123 Boaz lane, Dallas, Texas 75123</article>
            <article><span id="redItalic">Phone:</span> 469.969.5979</article>
            <article><span id="redItalic">Email:</span> skylert@smu.edu</article>
          </section>

          <br/>
          <hr/>
          <section id="comment" className="form-field">
            <h2>Leave Your Comment</h2>
            <form id="leaveComment" name="leaveComment">
              <div className="form-field">
                <div>
                  <label className="label-block"htmlFor="commenter">Name</label>
                  <input
                  type="text"
                  name="commenter"
                  id="commenter"
                  value={this.state.name}
                  onChange={event => {this.setState({name: event.target.value})}}
                  />
                  <br/>
                </div>

                <label htmlFor="rate">How do you rate this biography page?</label>
                <div>
                {
                  [1,2,3,4,5,6,7,8,9,10].map(x => (
                      <label htmlFor={x}>
                        <input
                        type="radio"
                        name="chooseOne"
                        checked={this.state.score == `${x}`}
                        value-for-radio={x}
                        id="rate"
                        value={this.state.score}
                        onChange={event => this.setState({score: event.target.attributes.getNamedItem('value-for-radio').value})}/> {x}
                      </label>
                  )
                )
                }
                </div>

                <div>
                  <label htmlFor="reVisit">Will you revisit this page?</label>
                  <select
                  name="yes_no"
                  id="yes_no"
                  value={this.state.reVisit}
                  onChange={event => this.setState({reVisit: event.target.value})}
                  >
                    <option></option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="leaveComment">
                  <label className="label-block" htmlFor="extraComment">Extra Comment</label>
                  <textarea
                  rows="4"
                  type="text"
                  name="extraComment"
                  id="extraComment"
                  value={this.state.extraComment}
                  onChange={event => this.setState({extraComment: event.target.value})}
                  ></textarea>
                </div>
              </div>
              <button
              id="button"
              type="button"
              onClick={this.handleSubmit}
              >Submit Comment</button>
            </form>
          </section>
          <br/>
        </main>
      </div>
    );
  }
}
