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
        <header>
          <section class="navBar">
            <div class="title">
              <h2>Skyler Tran</h2>Designed for GUI Fall 2019</div>
            <div class="link">
              <div><a href="#bio">Biography</a></div>
              <div><a href="#grades">Academic Records</a></div>
              <div><a href="#contact">Contact Me</a></div>
            </div>
          </section>
        </header>

        <main>

          <section class="background-img">
            <div><img src="https://i.ibb.co/7SnFG31/file-14.jpg" alt="Image here" /></div>
          </section>

          <section class="bio" id="bio">
            <h1>Skyler Tran</h1>
            <article>My name is Skyler Tran and I am currently a senior in Computer Science department. I have taken Database class and I am
              taking User interface this semester in order to become a full-stack developer. I am also passionate about cyber security and
              virtual reality. I used to be an officer in Cyber Security club here at SMU and I am currently a pro-active member
              of Virtual Reality club that is currently working on Dance Dance Revolution simulation. My current goal is to be selected as a volunteer
              for Red Team in the upcoming Cyber Force Competition by Department of Energy.
            </article>
          </section>
          <div class="clear"></div>

          <section class="favBooks">
            <h2>Favorite Books</h2>
            <ul>
              <li>Great Gatsby - <span id="author">F. Scott Fitzgerald</span></li>
              <li>Picture of Dorian Gray - <span id="author">Oscar Wilde</span></li>
              <li>Looking for Alaska - <span id="author">John Green</span></li>
            </ul>
          </section>

          <div class="bookImages">
            <img class="z-0" src="https://i.ibb.co/vcRYYjF/great-gastby.jpg" alt="great-gastby"/>
            <img class="z-1" src="https://i.ibb.co/syFQ6gy/dorian-gray.jpg" alt="dorian-gray"/>
            <img class="z-2" src="https://i.ibb.co/w76tsN9/looking-for-alaska.jpg" alt="looking-for-alaska"/>
          </div>

          <section class="favQuotes">
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
          <section class="interests">
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

          <section class="awards">
            <h2>Awards</h2>
            <div class="awards-item">
              <p>Local 1st Place in Cyber Force Competition</p>
              <p class="sponsor">Department of Energy (DOE)</p>
            </div>

            <div class="awards-item">
              <p>2nd place in cyber competition - Capture The Flag</p>
              <p class="sponsor">StateFarm</p>
            </div>

            <div class="awards-item">
              <p>Honor Transfer Scholarship</p>
              <p class="sponsor">Southern Methodist University</p>
            </div>

            <div class="awards-item">
              <p>Honor Roll Distinction</p>
              <p class="sponsor">Southern Methodist University</p>
            </div>

            <div class="awards-item">
              <p>3rd place in Calculus Bowl</p>
              <p class="sponsor">The University of Texas at Arlington</p>
            </div>
          </section>

          <hr />

          <section class="gradeTable" id="grades">
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


          <section class="contactMe" id="contact">
            <h4>Get in touch today</h4>
            <hr/>
            <article id="bold">Southern Methodist University</article>
            <article id="bold">123 Boaz lane, Dallas, Texas 75123</article>
            <article><span id="redItalic">Phone:</span> 469.969.5979</article>
            <article><span id="redItalic">Email:</span> skylert@smu.edu</article>
          </section>

          <br/>
          <hr/>
          <section id="comment" class="form-field">
            <h2>Leave Your Comment</h2>
            <form id="leaveComment" name="leaveComment">
              <div class="form-field">
                <div>
                  <label class="label-block" for="commenter">Name</label>
                  <input
                  type="text"
                  name="commenter"
                  id="commenter"
                  value={this.state.name}
                  onChange={event => {this.setState({name: event.target.value})}}
                  />
                  <br/>
                </div>

                <div>
                  <label for="rate">How do you rate this biography page?</label>
                  <div class="radio">
                    <label for="1">
                      <input type="radio" name="chooseOne" id="1" /> 1
                    </label>

                    <label for="2">
                      <input type="radio" name="chooseOne" id="2" /> 2
                    </label>

                    <label for="3">
                      <input type="radio" name="chooseOne" id="3" /> 3
                    </label>

                    <label for="4">
                      <input type="radio" name="chooseOne" id="4" /> 4
                    </label>

                    <label for="5">
                      <input type="radio" name="chooseOne" id="5" /> 5
                    </label>

                    <label for="6">
                      <input type="radio" name="chooseOne" id="6" /> 6
                    </label>

                    <label for="7">
                      <input type="radio" name="chooseOne" id="7" /> 7
                    </label>

                    <label for="8">
                      <input type="radio" name="chooseOne" id="8" /> 8
                    </label>

                    <label for="9">
                      <input type="radio" name="chooseOne" id="9" /> 9
                    </label>

                    <label for="10">
                      <input type="radio" name="chooseOne" id="10" /> 10
                    </label>
                  </div>
                </div>
                <div>
                  <label for="reVisit">Will you revisit this page?</label>
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

                <div class="leaveComment">
                  <label class="label-block" for="extraComment">Extra Comment</label>
                  <textarea
                  rows="4"
                  type="text"
                  name="extraComment"
                  id="extraComment"
                  value={this.state.extraComment}
                  onChange={event => this.setState({extraComment: event.target.value})}
                  ></textarea>
                </div>
                <button
                id="button"
                type="button"
                onClick={this.handleSubmit}
                >Submit Comment</button>
              </div>
            </form>
          </section>
          <br/>

        </main>

        <footer class="footer">
          <h5>Created by Skyler Tran. Powered by Plunker v1.23.1</h5>
        </footer>
      </div>
    );
  }
}
