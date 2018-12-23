<template>
  <div class="list">
    <div v-for="row in list" :key="'news-list-' + row.id" style="padding: 6px;">
      <span>id: {{ row.id }}</span>
      <span><router-link :to="'/news/detail/' + row.id">title: {{ row.title }}</router-link></span>
      <span>date: {{ row.date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  props: {
    list: {
      type: Array,
      defautl: function () {
        return []
      }
    }
  }

}
</script>

<style scoped lang="scss">
  span { margin-right: 10px; }
</style>
