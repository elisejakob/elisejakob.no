<template>
  <main class="blog">
    <Post 
      v-for="(post, index) in posts" 
      :key="`post-${index}`"
      :title="post.title"
      :lead="post.lead"
      :content="post.content"
      :slug="post.slug"
    />
  </main>
</template>

<script>
import posts from '@/data/blog.json'
import Post from '@/components/Post.vue'

export default {
  name: 'all',
  components: {
    Post
  },
  data: function() {
    return {
      posts
    }
  },
  mounted() {
    document.body.classList.add('blog');
  },
  destroyed() {
    document.body.classList.remove('blog');
  }
}
</script>

<style lang="scss" scoped>
@import '@/css/variables.scss';
.blog {
  position: relative;
  padding-top: 2rem;

  p {
    font-size: 1.2rem;
  }
}
</style>
