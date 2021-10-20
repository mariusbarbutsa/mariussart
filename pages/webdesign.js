export default class WebDesign {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="webdesign" class="page">
      <p class="webdesign-tag">WEB DESIGN.</p>

      <div class="webdesign-flexbox">
        <div class="webdesign-subflexbox" data-aos="fade-left">
          <p data-fill="01" class="numbering">01</p>
          <a class="project-image5" href="#webapp" target="_blank">
            <div class="overlay">
              <div class="project-textbox">
                <p class="project-header">Web Application Exam: Selfly</p>
                <p class="project-description">
                  It is normal to have your feelings fluctuate throughout the day - we are humans after all. But what's important is the way we cope with emotional burdens or bad days. Sometimes we just lack ideas of how we can care for ourselves. This is where Selfly, our self-care mobile app, can be a useful tool to support and help people to find new ways to boost their well-being. 
                </p>
                <p class="project-date">
                  Exam Project 3rd Sem. Fall 2021 - Business Academy Aarhus
                </p>
              </div>
            </div>
          </a>
        </div>

      <div class="webdesign-flexbox">
        <div class="webdesign-subflexbox" data-aos="fade-left">
          <p data-fill="02" class="numbering">02</p>
          <a class="project-image4" href="#frontloberne" target="_blank">
            <div class="overlay">
              <div class="project-textbox">
                <p class="project-header">Group Exam Project: Frontløberne</p>
                <p class="project-description">
                  How can our team help Frontløberne with a digital solution
                  that raises awareness of the impact that Frontløberne has on
                  the creative community in Aarhus, reflects their offline
                  presence accurately and attracts new members?
                </p>
                <p class="project-date">
                  Exam Project 2nd Sem. Spring 2021 - Business Academy Aarhus
                </p>
              </div>
            </div>
          </a>
        </div>

        <div class="webdesign-subflexbox" data-aos="fade-left">
          <p data-fill="03" class="numbering">03</p>
          <a class="project-image3" href="#uxui" target="_blank">
            <div class="overlay">
              <div class="project-textbox">
                <p class="project-header">
                UX/UI Project: Student Dorm 
                </p>
                <p class="project-description">
                 Our purpose was to create a mobile app for Skejbo Kollegiet residents that would help them to be informed about the dorm's latest updates and news. Skejbo residents would be able to use the mobile app to communicate with each other, post and share news, events and learn more about practical matters of life in the dorm. 
                </p>
                <p class="project-date">
                  Project 2nd Sem. Spring 2021 - Business Academy Aarhus
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

        <div class="webdesign-subflexbox" data-aos="fade-left">
          <p data-fill="04" class="numbering">04</p>
          <a class="project-image2" href="#uxchallenge" target="_blank">
            <div class="overlay">
              <div class="project-textbox">
                <p class="project-header">
                  200 SME's UX Challenge: Group 6
                </p>
                <p class="project-description">
                  This challenge was a 3-day event with 32 solvers, 8 companies and 8 mentors. We went through all 5 phases of a Design Sprint in just 3 days. Our problem statement was: How can a user sell multiple items fast under one listing, while still keeping the announce informative?
                </p>
                <p class="project-date">
                  UX Challenge Project, March 2021 - Dansk Design Center
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

        <div class="webdesign-subflexbox" data-aos="fade-left">
          <p data-fill="05" class="numbering">05</p>
          <a class="project-image" href="#sleepbuds" target="_blank">
            <div class="overlay">
              <div class="project-textbox">
                <p class="project-header">
                  Individual Exam Project: Sleep Buds
                </p>
                <p class="project-description">
                  For this exam project I have chosen to create a website for
                  the Bose company, more specifically for the Bose Sleep Buds, a
                  type of earphones they sell for customers that encounter
                  problems with their sleep schedule, stress, insomnia, or
                  different noises such as neighbors’ fuss.
                </p>
                <p class="project-date">
                  Exam Project 1nd Sem. Winter 2020 - Business Academy Aarhus
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>


      <div class="navigation-arrows">
        <a class="label-arrow" href="#home"
          ><img
            class="arrow rotate180"
            src="images/icons/right-arrow.svg"
            alt="right-arrow"
          />
          <p class="label-description">homepage</p></a
        >
        <a class="label-arrow" href="#grdesign"
          ><p class="label-description">graphic design</p>
          <img
            class="arrow"
            src="images/icons/right-arrow.svg"
            alt="right-arrow"/></a>
      </div>
      </section>
    `;
  }
}
