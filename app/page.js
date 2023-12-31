import Image from 'next/image'

export default function Home() {
  return (
   <>
    <header>
      <nav>
        <div className="left">Pramod's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <section className="firstSection">
        <div className="leftSection">
         <div>Hi, My name is <span className="purple">Pramod</span></div> 
          <div>and I am a</div>
          <span id="element"></span>
          <div className="button">
          <button className="btn">Download Resume</button>
          <button className="btn">Visit Github</button>
        </div>
        </div>
        <div className="rightSection">
          {/* <img src="/Assects/Web-developer-.png" alt="Image" /> */}
          <img src="/Web-developer-.png" alt="" />
        </div>
      </section>
      <hr />
      <section className="secondSection">
        <span className="textgray">What I have done so far </span>
        <h1>Past Experience</h1>
        <div className="box1">
          <div className="verticle">
            <img className="image-top" src="/hw.png" alt="" />
            <div className="verticle-text">HTML Developer (2016-2018)</div>
            <div className="verticle-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem pariatur ex odit quis quae excepturi aliquam
              aperiam ducimus maxime sed?
            </div>
          </div>
          
          <div className="verticle">
            <img className="image-top" src="/1764972.webp" alt="" />
            <div className="verticle-text">Node JS Developer (2018-2019)</div>
            <div className="verticle-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem pariatur ex odit quis quae excepturi aliquam
              aperiam ducimus maxime sed?
            </div>
          </div>
          <div className="verticle"> <img className="image-top" src="/transparent-instagram-logo----6.png" alt="" />
            <div className="verticle-text">Frontend Developer - Instagrm (2019-2021)</div>
            <div className="verticle-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem pariatur ex odit quis quae excepturi aliquam
              aperiam ducimus maxime sed?
            </div></div>
            <div className="verticle1">
            <div className="verticle">
                <img className="image-top" src="/linkedIn_PNG39.png" alt="" />
                <div className="verticle-text">Full Stack Developer - Linkdin (2021-2023)</div>
                <div className="verticle-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem pariatur ex odit quis quae excepturi aliquam
                  aperiam ducimus maxime sed?
                </div>
              </div>
              </div>
        </div>
      </section>
    </main>

    <footer>
        <div className="footer">
            <div className="footer-first">
                <h2>Pramod's Portfolio</h2>
            </div>
            <div className="footer-second">
                <ul className="style">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul className="style"> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-fourth">
                <ul className="style">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
           Copyright &#169; www.pramod'sportfolio.com | All rights reseved
        </div>
    </footer>
   </>
  )
}
