<template>
  <div class="new-container">
    <div>Detail: </div>
    <news-detail :detail="detail"></news-detail>
    <GlobalMask></GlobalMask>
  </div>
</template>

<script scoped>
import NewsDetail from '@/components/news/Detail.vue'
import GlobalMask from '@/components/GlobalMask.vue'

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
    console.log(this.$store.state.mask)

    console.log('detail-mounted', this.$route.params)

    this.closeMask()
  },
  methods: {
    closeMask () {
      let that = this
      setTimeout(function () {
        that.$store.commit('maskOnOff', false)
      }, 2000)
    }
  },
  components: {
    NewsDetail,
    GlobalMask
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped src="../assets/css/main.scss"></style>
<style scoped lang="scss">

</style>
