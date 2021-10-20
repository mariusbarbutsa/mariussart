export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <section id="home" class="page">
    <div class="homepage-wallpaper"></div>
    <div class="homepage-tags">
      <p data-fill="WEB DESIGN." class="homepage-bluetag">WEB DESIGN.</p>
       <p data-fill="GRAPHIC DESIGN." class="homepage-bluetag">
        GRAPHIC DESIGN.
      </p>
      <p data-fill="DIGITAL PAINTING." class="homepage-redtag">
        DIGITAL PAINTING.
      </p>
      <p data-fill="PHOTOGRAPHY." class="homepage-redtag">PHOTOGRAPHY.</p>
     
    </div>

    <div class="homepage-flexbox">
      <p class="homepage-description" data-aos="fade-right">
        My name is Marius 👋, a passionate student who moved to Denmark to
        study Multimedia Design at the Business Academy Aarhus 👨‍💻. My
        education, skills and experience show what am I most fit for, yet I am
        open to further development, ready to undertake any training, and
        learn new things 📖. I am a perfectionist; thus I tend to do my best
        regardless of the challenge 💪. Besides my education, I am fond of
        digital drawing👨‍🎨 and photography. I believe that art is the way
        within people can manifest themselves the best;
        <i class="red changing">I create, therefore I am.</i>
      </p>
      <div class="homepage-avatar" data-aos="fade-left"></div>
    </div>

    

    <div class="homepage-flexbox-articles">
      <div class="homepage-subflexbox-articles">
        <div class="homepage-webdesign-illustration" data-aos="zoom-in-left"></div>
        <div class="homepage-article" data-aos="zoom-in-right">
          <p class="title">web design.</p>
          <p class="description">
            Web Design – the process of creating websites. I am currently
            studying this subject at the Academy and here are the projects
            that I created myself and the projects that I worked with my
            colleagues on. For websites’ prototyping were used HTML, CSS and
            JavaScript.
          </p>
          <a class="label-arrow" href="#webdesign">
            <p class="label-description">my work</p>
            <img class="arrow" src="images/icons/right-arrow.svg" alt="right-arrow" />
          </a>
        </div>
      </div>
      <div class="homepage-subflexbox-articles">
        <div class="homepage-graphicdesign-illustration" data-aos="zoom-in-right"></div>
        <div class="homepage-article" data-aos="zoom-in-left">
          <p class="title">graphic design.</p>
          <p class="description">
            Graphic Design – an old passion of mine towards creating printing
            art, such as logos, flyers, banners etc. I have some experience
            from working as a freelancer and from volunteering. I am looking
            forward to creating my own templates and start merchandising.
          </p>
          <a class="label-arrow" href="#grdesign">
            <p class="label-description">my work</p>
            <img class="arrow" src="images/icons/right-arrow.svg" alt="right-arrow" />
          </a>
        </div>
      </div>
      <div class="homepage-subflexbox-articles" data-aos="zoom-in-right">
        <div class="homepage-photography-illustration" data-aos="zoom-in-left"></div>
        <div class="homepage-article">
          <p class="title">digital painting.</p>
          <p class="description">
            Another passion of mine is digital painting, it’s both different
            and similar to the traditional painting, but it’s mostly a matter
              of your own preferences. It mesmerizes me due to the plethora of
              possibilities you have, should you want you can even replicate
            traditional painting.
          </p>
          <a class="label-arrow" href="#digitalart">
            <p class="label-description">my work</p>
            <img class="arrow" src="images/icons/right-arrow.svg" alt="right-arrow" />
          </a>
        </div>
      </div>
      <div class="homepage-subflexbox-articles">
        <div class="homepage-digitalpainting-illustration" data-aos="zoom-in-right"></div>
        <div class="homepage-article" data-aos="zoom-in-left">
          <p class="title">photography.</p>
          <p class="description">
            The art of photography is a passion of mine that comes from
            everything that’s around me. Every time I take my phone and open
            my camera I get a good flow of inspiration to enjoy life, to live
            the moment, to desire experiencing more, and to take risks.
          </p>
          <a class="label-arrow" href="#photos">
            <p class="label-description">my work</p>
            <img class="arrow" src="images/icons/right-arrow.svg" alt="right-arrow" />
          </a>
        </div>
      </div>
    </div>
     
</section>
    `;
  }
}
