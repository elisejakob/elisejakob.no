<template>
  <footer class="site-footer">
    <a href="mailto:hei@elisejakob.no">email</a>
    <a href="http://instagram.com/elisejakob">instagram</a>
    <a href="https://no.linkedin.com/in/elisejakob">linkedin</a>
    <a href="https://github.com/elisejakob">github</a>
    <span class="moon" @click="changeTheme()">&#9790;</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    changeTheme: function() {
      document.body.classList.toggle('light-theme');
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/css/variables.scss';
.site-footer {
  position: relative;
  padding: 0 2rem 2rem;

  font-family: $monospace;
  font-size: 14px;
  a, span {
    display: inline-block;
    margin: 0 .3rem .3rem 0;
  }
  a {
    background: $color-green-dark;
    color: $color-white;
    padding: 0 3rem;

    &:hover {
      background: blue;
      color: white;
    }
  }
  span {
    margin: 0 0 0 auto;
  }
}
.light-theme {
  .site-footer {
    a {
      background: $color-green;
      color: $color-black;

      &:hover {
        background: $color-yellow;
      }
    }
  }
}
</style>
