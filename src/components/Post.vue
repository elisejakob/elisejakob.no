<template>
  <article class="post" :id="id">
    <div class="text">
      <h2>{{ title }}</h2>
      <p class="lead">{{ lead }}</p>
      <div v-for="(item, index) in content" :key="`item-${index}`">
        <p v-if="item.type === 'text'">{{ item.body }}</p>
        <figure v-else>
          <img :src="item.url" :alt="item.alt" />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    lead: String,
    content: Array,
    slug: String,
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.post {
  max-width: 36rem;
  position: relative;
  padding-bottom: 3rem;
  border-bottom: 1px solid #242424;
  margin-bottom: 3rem;

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    font-size: 3rem;
  }

  figure {
    margin: 0;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0 10vw 0 16vw;

    @media (max-width: $media-s) {
      padding: 0 1rem;
    }

    img {
      width: 100%;
    }

    figcaption {
      font-family: $monospace;
      font-size: $font-xs;
    }
  }
}
</style>
