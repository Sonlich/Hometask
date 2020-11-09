import React from 'react'

function App() {
  return (
    <div>
      <header>
        <div className="mainhead">
          <span className="home">Home</span>
          <span>
            <a href="#AboutMe"></a>Abot me
          </span>
          <span>
            <a href="#Skills"></a>Skills
          </span>
          <span>
            <a href="#Portfolio"></a>Portfolio
          </span>
          <span>
            <a href="#Contacts"></a>Contacts
          </span>
        </div>
      </header>
      <h1 className="name">
        Denis<br></br>Novik
      </h1>
      <div className="worker">
        <p>
          UX | UI designer <br></br>24 years old, Minsk
        </p>
      </div>
      <img
        src="https://sun9-40.userapi.com/Ldz1itp69iBToNuFA42GpvCr5buuVpwqSE2m5g/sQQhvPFOC8A.jpg"
        alt="man"
      />
      <div className="AboutMe">
        <a name="AboutMe"></a>
        <h1 class="AM">About me</h1>
        <div className="paragraph">
          <p>
            Hi, I'm Denis – UX/UI designer from Minsk. <br></br>I'm interested
            in design and everything connected with it.
          </p>
          <p>
            I'm studying at courses "Web and mobile design<br></br> interfaces"
            in IT-Academy.
          </p>
          <p>
            Ready to implement excellent projects<br></br> with wonderful
            people.
          </p>
        </div>
      </div>
      <div className="Skills">
        <a name="Skills"></a>
        <h1>Skills</h1>
        <p> I work in such programs as</p>

        <div className="skillsImg">
          <img
            src="https://sun9-31.userapi.com/j4tx6JzMA60J8lPfekQOiakwXvgmnBd3aPJ1YQ/JWL7gHlmEW0.jpg"
            alt="PS"
          />
          <img
            src="https://sun9-47.userapi.com/FPqtRpEkm704jJ33T1PLyIyyEASxdWJyrKOEXQ/ZXJaEqWFgow.jpg"
            alt="Ai"
          />
          <img
            src="https://sun9-63.userapi.com/XyL8vEgssMJGuHMRh9GytnSWPsdpjrloS6z4ag/v4Wt49mfw9U.jpg"
            alt="Ae"
          />
          <img
            src="https://sun9-22.userapi.com/Nqcx9w5BPll34fAAbAiDxshVChDEUj-PRxwYkA/0hBNvliVDG8.jpg"
            alt="Figma"
          />
        </div>
      </div>
      <div className="Portfolio">
        <a name="Portfolio"></a>
        <h1>Portfolio</h1>
        <img
          src="https://sun9-59.userapi.com/rzVYqbw4_-t8dgt-hAcAbynb18DW2K4XXd9oAQ/kbyRuhJym5s.jpg"
          alt="woman"
        />
        <p className="PortText">Online fashion store - Homepage</p>
        <img
          src="https://sun9-64.userapi.com/vnujH37JZjkQHt8U2QpvDwp6BSbug3xz5ug1MQ/etnpsjVvOt0.jpg"
          alt="reebok"
        />
        <p className="PortText">Reebok Store - Concept</p>
        <img
          src="https://sun1-88.userapi.com/n_L2zH0qPMFZgBkIwt5b6fVL9B_OFxW8SkG-Gg/0CYiQG9NUpY.jpg"
          alt="macro"
        />
        <p className="PortText">Braun Landing Page - Concept</p>
      </div>
      <div class="Contacts">
        <a name="Contacts"></a>
        <div className="look">
          <h1>Contacts</h1>
          <p>
            Want to know more or just chat?<br></br>You are welcome!
          </p>
        </div>
        <button class="SendMessage">Send Message</button>
        <div className="SocNet">
          <img
            src="https://sun9-76.userapi.com/rAW_NU3WhMxDvPTFyB_DG5rL5lz-i-_4h1cEIg/t6uxgBZYFGI.jpg"
            alt="Linkedln"
          />
          <img
            src="https://sun9-41.userapi.com/goUr2M_ewUqx25ASoKM3-BT37PNoS1PvBf7xbg/PWYObwWLKbg.jpg"
            alt="Instagram"
          />
          <img
            src="https://sun9-13.userapi.com/XUejHX-t3vrOJG4APznDNo4YHq2BMtLbV7vrUQ/HvYDUIk019E.jpg"
            alt="Behance"
          />
          <img
            src="https://sun9-58.userapi.com/T2MMaTNLarZ9n-fKY6g5kwylgChRU9ifiU_Rtw/aQkFevFUKQY.jpg"
            alt="Dribble"
          />
        </div>
        <p className="end">
          Like me on<br></br>
          LinkedIn, Instagram, Behance, Dribble
        </p>
      </div>
    </div>
  )
}

export default App
