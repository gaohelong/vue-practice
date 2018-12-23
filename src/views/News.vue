<template>
  <div class="new-container">
    <header class="new-header">New List</header>
    <div class="main">
      <news-list :list="list"></news-list>
    </div>
    <router-view></router-view>
    <footer class="new-footer">source -> source.com</footer>
  </div>
</template>

<script>
import NewsList from '@/components/news/List.vue'

export default {
  name: 'news',
  data () {
    return {
      list: [
        { id: 1, title: 'a', date: '2018-02-10' },
        { id: 2, title: 'b', date: '2018-02-11' },
        { id: 3, title: 'c', date: '2018-02-12' }
      ]
    }
  },
  components: {
    NewsList
  },
  mounted () {
    console.log('mounted', this.$route.params)
  },
  beforeUpdate () {
    console.log('beforeUpdated', this.$route.params)
  },
  updated () {
    console.log('update', this.$route.params)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped src="../assets/css/main.scss"></style>
<style scoped lang="scss">

</style>
