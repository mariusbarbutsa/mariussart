export default class UxUi {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="uxui" class="page">
      <div div class = "project-container">
            <div class="project-box">
             <p p class = "project-title">UX/UI PROJECT: STUDENT DORM</p>
              <p class="project-label label">Project 2nd Sem. Spring 2021 - Business Academy Aarhus</p>
              <img class="project-illustration" src="./images/icons/m-illustration.svg" alt="illustration">
              <p class="project-label">Our purpose was to create a mobile app for Skejbo Kollegiet residents that would help them to be informed about the dorm's latest updates and news. Skejbo residents would be able to use the mobile app to communicate with each other, post and share news, events and learn more about practical matters of life in the dorm. </p>
            </div>
            <img class="project-gif" src="./images/project/design/uxui/uxuipresentation.gif" alt="project gif">
       </div>
      

        <marquee class="project-animated-title2" scrollamount="30" direction="left" behavior="scroll">UX/UI PROJECT: STUDENT DORM</marquee>
      <div class="project-container-secondary">
            <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Analysis</p>
             <p class="project-info">During our research on the target audience, we found the most common struggles that Skejbo residents are experiencing to be the lack of information and communication with Skejbo administration.  
That’s why we made a list of possible content that residents could benefit from having an easier access to. And after conducting user research – surveys and interviews, we were able to determine the most wanted ones like dorm’s news, events, rules, how to’s etc.
</p>
            </div>
            <img class="project-image-01" src="./images/project/research/uxui/brief.png" alt="persona" data-aos="fade-right">
            <img class="project-image-02" src="./images/project/research/uxui/styletile.png" alt="persona" data-aos="fade-left">
             <br style="clear:both" />
             <div div class = "project-box-secondary" data-aos="zoom-in" >
             <p class="project-title">Design Process</p>
             <p p class = "project-info" >After deciding on the final wireframe, we began to forge it into the mockups. We gave colors to them and the app started to look natural.
We tried to implement decluttering, in other words to keep the content to a minimum, to preserve the user with only what they need to know, and keep interface elements to a minimum, to keep the user at ease with the product.
</p>
            </div>
            <div class="projects-design" data-aos="zoom-in">
            <div class="projects-multipics">
             <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-01.jpg" alt="mockup">
            <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-02.jpg" alt="mockup">
            <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-03.jpg" alt="mockup">
            <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-04.jpg" alt="mockup">
            <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-05.jpg" alt="mockup">
            <img class="project-image-04 " src="./images/project/design/uxui/uxui-mobile-06.jpg" alt="mockup">
            </div>
            </div>
             <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Prototypes</p>
             <p class="project-info">We believe that we created something that would be useful on a day to day basis for the SKEJBO residents, coming from a current resident. But we also got the same feedback from other residents as well. Current situation of the information online is messy and all over the place and our solution organises and puts it in easy navigable space. We also focused on making our solution valuable for the newcomer as well as for a person who is moving out. </p>
             <p class="links"><a target="_blank" class="red" href="https://xd.adobe.com/view/2abb9ee2-da4d-40e7-8521-9841aeb55fbd-7fe8/">ADOBE XD MOCKUPS</a> / <a target="_blank" class="red" href="http://dormbuddy.mariussart.com">WORKING PROTOTYPE</a></p>
             </div>
    

        <div class="navigation-arrows">
         <a class="label-arrow"  href="#frontloberne" onclick="scrollToTop()"><img class="arrow rotate180" src="./images/icons/right-arrow.svg" alt="right-arrow"> <p class="label-description">&nbsp;frontloberne</p></a>
         <a class="label-arrow"  href="#uxchallenge" onclick="scrollToTop()"><p class="label-description">ux challenge</p> <img class="arrow" src="./images/icons/right-arrow.svg" alt="right-arrow"></a>
        </div>
        </div>
      </section>
       
     
      
       
    `;
  }
}
