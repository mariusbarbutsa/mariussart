export default class FrontloberneProject {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="frontloberne" class="page">
      <div div class = "project-container">
            <div class="project-box">
             <p p class = "project-title" > GROUP EXAM PROJECT: FRONTLOBERNE</p>
              <p class="project-label label"> Exam Project 2nd Sem. Spring 2021 - Business Academy Aarhus</p>
              <img class="project-illustration" src="./images/icons/m-illustration.svg" alt="illustration">
              <p class="project-label">Frontløberne is an open creative space for young culture creators and entrepreneurs. Their enthusiasm to be the voice of youth culture and provide a place where everyone is welcome to contribute in cultural aspects motivated us to reach out to them and learn more. And we created a digital solution for them.</p>
            </div>
            <img class="project-gif" src="./images/project/design/frontloberne/presentation.gif" alt="project gif">
       </div>
      

        <marquee class="project-animated-title2" scrollamount="30" direction="left" behavior="scroll">GROUP EXAM PROJECT: FRONTLOBERNE</marquee>
      <div class="project-container-secondary">
            <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Analysis</p>
             <p class="project-info"> We focused on young adults aged between 25-34 years as our interviews were mostly with people in this age group and they also tend to be the most active members of cultural houses like Frontløberne.</p>
            </div>
            <img class="project-image-01" src="./images/project/research/frontloberne/First Persona.jpg" alt="persona" data-aos="fade-right">
            <img class="project-image-02" src="./images/project/research/frontloberne/Second Persona.jpg" alt="persona" data-aos="fade-left">
             <br style="clear:both" />
             <div div class = "project-box-secondary" data-aos="zoom-in" >
             <p class="project-title">Design Process</p>
             <p p class = "project-info" > We have designed the layout considering our target audience 's interests. Our client is a cultural center thus we focused on creating something creative and full of life. The colors we have used are considered the most appealing based on the user testing we have conducted.</p>
            </div>
            <div class="projects-design">
            <div class="projects-design-column">
            <img class="project-image-03" src="./images/project/design/frontloberne/frontloberne-desktop-01.jpg" alt="mockup" data-aos="zoom-in-right">
            <img class="project-image-03" src="./images/project/design/frontloberne/frontloberne-desktop-02.jpg" alt="mockup" data-aos="zoom-in-left">
            </div>
            <div div div class = "projects-design-row" data-aos = "zoom-out-down" >
            <img class="project-image-04" src="./images/project/design/frontloberne/frontloberne-mobile-01.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/frontloberne/frontloberne-mobile-02.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/frontloberne/frontloberne-mobile-03.jpg" alt="mockup">
            </div>
            </div>
             <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Prototypes</p>
             <p class="project-info">Our final prototype is definitely not flawless, but we tried to make it as similar to the mockups as possible, so that the users can actually use it on a daily basis, both on mobile and desktop.</p>
             <p class="links"><a  target="_blank" class="red" href="https://xd.adobe.com/view/82345914-b3d3-406f-8686-9d8cea83adf2-d767/">ADOBE XD MOCKUPS</a> / <a target="_blank" class="red" href="http://frontloberne.mariussart.com">WORKING PROTOTYPE</a></p>
             </div>
    

        <div class="navigation-arrows">
         <a class="label-arrow"  href="#webapp" onclick="scrollToTop()"><img class="arrow rotate180" src="./images/icons/right-arrow.svg" alt="right-arrow"> <p class="label-description">&nbsp;web app</p></a>
         <a class="label-arrow"  href="#uxui" onclick="scrollToTop()" ><p class="label-description">ux/ui project</p> <img class="arrow" src="./images/icons/right-arrow.svg" alt="right-arrow"></a>
        </div>
        </div>
      </section>
       
     
      
       
    `;
  }
}
