import React, { Component } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

// const [isDesktop, setIsDesktop] = useState(false);
// const [isMobile, setIsMobile] = useState(false);

class Resume extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     setIsDesktop: false,
  //     setIsMobile:false
  //   };
  // }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



  useEffect() {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    }
    else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }

  render() {


    if (this.props.data) {

      var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   console.log(education);

      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <strong className="date">{work.years}</strong></p>
          <p className="presume">{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">
        <div className="row work">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div>
              <h1><span>Work</span></h1>
            </div>

            <div>
              {work}
            </div>
          </Fade>
        </div>
        <div className="row skill">
          <Fade bottom duration={1000} delay={1000} distance="40px">
            <div>
              <h1><span>Skills</span></h1>
            </div>
            <div style={{ minWidth: '80%' }}>
              <div className="bars">
                <ul className="skills">
                  {skills}
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Resume;
