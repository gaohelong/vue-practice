<template>
  <div class="detail">
    <div>id: {{ $route.params.id }}</div>
    <div>title: {{ detail.title }}</div>
    <div>date: {{ detail.date }}</div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    detail: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  .detail { width: 100% }
</style>
