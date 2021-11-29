export default class Photography {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="photos" class="page">
      <p class="webdesign-tag">PHOTOGRAPHY.</p>

      <div class="graphicdesign-wrapper">
        <section class="portfolio" id="Portfolio">
          <div class="container">
            <p class="gallery-text">
              Pictures taken with my smartphone
              <span class="red">ONEPLUS 6</span> ☁️
            </p>
            <div class="row">
            <div class="portfolio-gallery photos">
              

              </div>
            </div>
        </section>
      </div>
        <div class="button-showmore"><button onclick="showMoreButtonPhotos()" class="showmore" id="showButtonPhotos">show more</button></div>


      <div class="navigation-arrows">
        <a class="label-arrow" href="#home"
          ><img
            class="arrow rotate180"
            src="images/icons/right-arrow.svg"
            alt="right-arrow"
          />
          <p class="label-description">&nbsp;homepage</p></a
        >
        <a class="label-arrow" href="#webdesign"
          ><p class="label-description">web design</p>
          <img
            class="arrow"
            src="images/icons/right-arrow.svg"
            alt="right-arrow"
        /></a>
      </div>
   
      </section>
    `;
  }
}
