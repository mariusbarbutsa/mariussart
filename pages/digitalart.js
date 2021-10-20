export default class DigitalArt {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section section id = "digitalart" class = "page" >
      <p class="webdesign-tag">DIGITAL PAINTING.</p>

      <div class="graphicdesign-wrapper">
        <section class="portfolio" id="Portfolio">
            <p class="gallery-text">
              Painted in <span class="red">Adobe Photoshop</span>, the root of
              my design career ❤️
            </p>
             <div class="row">
            <div class="portfolio-gallery drawings">
             
            </div>
          </div>
        </section>
      </div>
      <div class="button-showmore"><button onclick="showMoreButtonDrawings()" class="showmore" id="showButtonDrawings">show more</button></div>

      <div class="navigation-arrows">
        <a class="label-arrow" href="#home"
          ><img class="arrow rotate180" src="images/icons/right-arrow.svg" alt="right-arrow" />
          <p class="label-description">&nbsp;homepage</p></a>
        <a class="label-arrow" href="#photos"
          ><p class="label-description">photography</p>
          <img class="arrow" src="images/icons/right-arrow.svg" alt="right-arrow" /></a>
          
      </section>
    `;
  }
}
