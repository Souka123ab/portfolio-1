import React from 'react';

function Home({ menuOpen }) {
  return (
    <div>
    <div className={`home ${menuOpen ? 'pushed' : ''}`}>
      <div className="pho">
        <p id='name'>Soukayna Machraa</p>
        <h1>{"Hi I'm Soukayna".toUpperCase()}</h1>
        <h3 id='role'>I’M A DEVELOPER | DESIGNER </h3>
        <p>
          Yet my passion for crafting elegant digital solutions is unshakable.
          I merge creativity and code to bring ideas to life, building engaging 
          user experiences that truly make a difference.
        </p>

        <div className="he">
          <p>GET IN TOUCH →</p>
          <div className="group">
            <a href="https://github.com/Souka123ab"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/souk__aynae/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/soukayna-machraa-201ba329a"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="photo-wrapper">
        <div className="photo-container">
          <img src="/Image/WhatsApp_Image_2025-07-31_at_18.27.14-removebg-preview.png" alt="Soukayna" />
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="lines-background"></div>
        </div>
      </div>
    </div>
   <div className="section-2" id='about'>
  <div className="circle-background"></div>

  <div className="about-content" >
    <h3>About Me</h3>
    <p>
      I am a passionate software developer and designer with a solid background in both front-end and back-end technologies.  
      I studied at <strong>Solicode</strong>, where I acquired strong skills in web development, UI/UX design, and database management.  
      Throughout my training, I worked on various real-world projects that strengthened my ability to solve problems, collaborate in teams, and deliver high-quality digital products.
    </p>
    <p>
      With a creative mind and a structured approach, I constantly seek to learn and improve. My goal is to build impactful digital experiences that combine functionality, aesthetics, and usability.
    </p>
  </div>
</div>
  <div className='section-3'  id='skills'>
  <h3>My Skills</h3>
  <div className="grop">

 
  <div className="skills-container">

  <div className="skill-item">
    <label>HTML <span className="percent">90%</span></label>
    <div className="progress-bar"><span style={{ width: '90%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>CSS <span className="percent">85%</span></label>
    <div className="progress-bar"><span style={{ width: '85%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>JavaScript <span className="percent">80%</span></label>
    <div className="progress-bar"><span style={{ width: '80%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>React <span className="percent">75%</span></label>
    <div className="progress-bar"><span style={{ width: '75%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>PHP <span className="percent">70%</span></label>
    <div className="progress-bar"><span style={{ width: '70%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>MySQL <span className="percent">80%</span></label>
    <div className="progress-bar"><span style={{ width: '80%' }}></span></div>
  </div>

  <div className="skill-item">
    <label>UI/UX Design <span className="percent">85%</span></label>
    <div className="progress-bar"><span style={{ width: '85%' }}></span></div>
  </div>


</div>
<div className="cercle">
<div className='cercle-1'>
  <div className="cercle-2">
      <div className="cercle-3">
          <div className="cercle-4">
            <div className="cercle-5">
              <div className="cercle-6">
                <div className="cercle-7">
                  <div className="cercle-8">
                    <div className="cercle-9"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</div>
<div className="cercle-petite"></div>
<div className="cercle-petite-1"></div>
</div>

</div>
<div className="section-4">
  <h3>My Projects</h3>
  <div className="project">
    <a href="https://github.com/Souka123abr" target="_blank" rel="noopener noreferrer">
      🌐 Voir mes projets sur GitHub
    </a>
  </div>
</div>

 </div>
    </div>
  );
}

export default Home;
