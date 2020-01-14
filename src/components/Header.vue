<template>
  <header class="site-header">
    <nav class="main-nav">
      <div>
        <!--<ul class="site-nav">
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>-->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import '../css/variables.scss';
.site-header {
  position: relative;
  padding: 1rem;
}
.main-nav {
  text-transform: uppercase;
  text-align: center;

  .site-nav {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;

    li {
      display: inline-block;
      margin: 0 1rem 1rem 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;

    &:hover {
      color: $color-link;
    }
    &.router-link-exact-active {
      padding-bottom: 0.1rem;
      margin-bottom: 0.1rem;
      border-bottom: 1px solid $color-black;
      &:hover {
        color: inherit;
      }
    }
  }
}
</style>
