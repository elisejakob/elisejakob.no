<template>
  <div class="home">
    <main>
      <section class="intro" id="intro">
        Hi! My name is Elise. <img class="inline-image day" @click="sizeUpImage($event)" src="/static/images/elise-at-day.jpg" /><img class="inline-image night" @click="sizeUpImage($event)" src="/static/images/elise-at-night.jpg" /> I'm a graphic designer specialising in web design and front end development <img class="inline-image" @click="sizeUpImage($event)" src="/static/images/sexmachine.gif" /> Currently based in Oslo, running my own little design studio <a href="https://jakobsenfrukt.no" target="_blank">JF&amp;G</a>.
      </section>
      <section class="cv">
        <div class="clients">
          <h2>I've worked with</h2>
          <ul>
            <li><a href="https://www.gyldendal.no/" target="_blank">Gyldendal</a>, </li>
            <li><a href="https://www.ruter.no/" target="_blank">Ruter</a>, </li>
            <li><a href="https://www.telenor.no/" target="_blank">Telenor</a>, </li>
            <li><a href="https://www.marcusandmartinus/" target="_blank">Marcus &amp; Martinus</a>, </li>
            <li><a href="https://www.uio.no/" target="_blank">The University of Oslo</a>, </li>
            <li><a href="https://kreftforeningen.no/" target="_blank">The Norwegian Cancer Society</a>, </li>
            <li><a href="http://khio.no/" target="_blank">Oslo National Academy of the Arts</a>, </li>
            <li><a href="https://www.skogbrand.no/" target="_blank">Skogbrand</a>, </li>
            <li><a href="https://www.studentersamfundet.no" target="_blank">Chateau Neuf</a>, </li>
            <li><a href="https://dibk.no/" target="_blank">The Norwegian Building Authority</a>, </li>
            <li>among others.</li>
          </ul>
        </div>
        <div class="etc">
          <h2>I've also</h2>
          <ul>
            <li>done some teaching at <a href="http://khio.no/" target="_blank">KHiO</a>, <a href="https://www.webdagene.no/" target="_blank">Webdagene</a>, and <a href="https://igm.no/interaksjonsdesign-brukervennlighet/" target="_blank">IGM</a>, </li>
            <li>sat on the jury for <a href="https://www.gulltaggen.no/" target="_blank">Gulltaggen</a> a couple of times, </li>
            <li>made some web-based <a href="http://procrastination.elisejakob.com" target="_blank">games</a>, </li>
            <li>won an <a href="http://www.grafill.no/visuelt/vinnere/2015/digital-design/studentarbeid/" target="_blank">award</a>, </li>
            <li>and been interviewed by <a href="http://www.grafill.no/feature/intervju-visueltvinner-elise-jakobsen" target="_blank">Grafill</a> and <a href="https://www.kode24.no/ukas-koder/jeg-har-blitt-veldig-glad-i-vue/72025574" target="_blank">Kode24</a>.</li>
          </ul>
        </div>
        <div class="links">
          <h2>Get in touch!</h2>
          <p>
            Want to work with me, book me for a speaking/teaching thing, or just have a chat? I'd love to hear from you! Write me an <a href="mailto:hei@elisejakob.no" target="_blank">email</a> or message me over at <a href="https://instagram.com/jakobsenfrukt" target="_blank">instagram</a> :)
          </p>
        </div>
        <div class="archive" style="display: none">
          <h2>Archive</h2>
          <ul>
            <li><a href="http://designavgang.no">designavgang.no</a> (<a href="http://2015.designavgang.no">2015</a>/<a href="http://2014.designavgang.no">2014</a>/<a href="http://2013.designavgang.no">2013</a>), </li>
            <li><a href="http://teateremma.khio.no/">teateremma.khio.no</a>, </li>
            <li><a href="http://ekd.khio.no">ekd.khio.no</a>, </li>
            <li><a href="http://elisejakob.no/jenter">elisejakob.no/jenter</a>, </li>
            <li><a href="http://tommyjorgensen.no">tommyjorgensen.no</a>, </li>
            <li><a href="http://spoton.khio.no">spoton.khio.no</a> </li>
          </ul>
        </div>
      </section>
      <section class="site-footer">
        <a href="mailto:hei@elisejakob.no" target="_blank">email</a>
        <a href="http://instagram.com/elisejakob" target="_blank">instagram</a>
        <a href="https://no.linkedin.com/in/elisejakob" target="_blank">linkedin</a>
        <a href="https://github.com/elisejakob" target="_blank">github</a>
        <span class="lightswitch" @click="changeTheme()">lights <template v-if="lights">off</template><template v-else>on</template></span>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      intro: "Hi! My name is Elise. I'm a graphic designer specialising in web design and front end development. Currently based in Oslo, running my own lil design studio JF&G.",
      lights: false
    }
  },
  methods: {
    changeTheme: function() {
      document.body.classList.toggle('light-theme');
      this.lights = !this.lights;
    },
    sizeUpImage: function(event) {
      event.currentTarget.classList.toggle('large');
    }
  },
  beforeMount: function() {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light-theme');
      this.lights = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../css/variables.scss';
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 94vh;
}
.intro {
  font-size: 3.6rem;
  line-height: 1.3;
  margin-bottom: 4rem;
  padding: 0 2rem;


  background: linear-gradient(90deg, $color-yellow, $color-green);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  a {
    color: $color-green;
    &:hover {
      color: $color-green;
    }
  }
}
.inline-image {
  width: .8em;
  height: .8em;
  object-fit: contain;
  display: inline-block;
  margin: 0 .1em;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &.large {
    width: 220px;
    height: 220px;
    vertical-align: bottom;
  }
}
.cv {
  font-size: 13px;
  font-family: $monospace;
  display: flex;
  margin: auto 0 2rem;
  color: $color-white;

  div {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: inherit;
    margin: 0 auto;
    display: inline;
  }

  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;

    li {
      display: inline;
    }
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
}
.site-footer {
  font-size: 2rem;
  padding: 0 2rem 1rem;
  a, .lightswitch {
    display: inline-block;
    color: $color-white;
    margin-right: 1.6rem;
    cursor: pointer;

    &:hover {
      color: $color-green;
    }
  }
}
.light-theme {
  .intro {
    background: linear-gradient(90deg, $color-purple, $color-red);
    background-attachment: fixed;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .cv {
    color: $color-black;
  }
  .site-footer {
    a, .lightswitch {
      color: $color-black;

      &:hover {
        color: $color-purple;
      }
    }
  }
}
@media (max-width: $media-s) {
  .intro {
    font-size: 2.4rem;
  }
  .cv {
    display: block;
    font-size: 12px;

    div {
      margin-bottom: 2rem;
    }
  }
}
</style>
