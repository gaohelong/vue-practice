<template>
  <div>
    <div v-if="$store.state.mask" class="global-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'globalMask'
}
</script>

<style scoped lang="scss">
  .global-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.3;
    overflow: hidden;
  }
</style>
