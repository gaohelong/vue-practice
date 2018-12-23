<template>
  <div class="new-container">
    <div>Detail: </div>
    <news-detail :detail="detail"></news-detail>
  </div>
</template>

<script scoped>
import NewsDetail from '@/components/news/Detail.vue'

export default {
  name: 'detail',
  data () {
    return {
      detail: {
        id: 1,
        title: 'a',
        date: '2018-02-10'
      }
    }
  },
  mounted () {
    console.log('detail-mounted', this.$route.params)
  },
  components: {
    NewsDetail
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped src="../assets/css/main.scss"></style>
<style scoped lang="scss">

</style>
