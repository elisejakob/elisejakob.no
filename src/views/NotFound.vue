<template>
  <div class="notfound">
    <main>
      <section>
        <h1>404: Ånei! Denne siden finnes ikke!</h1>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Notfound'
}
</script>

<style scoped lang="scss">
@import '../css/variables.scss';
h1 {
  color: $color-red;
}
</style>