<template>
  <view class="page-head">
    <view class="page-head-title">{{title}}</view>
    <view class="page-head-line"></view>
    <view v-if="desc" class="page-head-desc">{{desc}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    title: '',
    desc: ''
  }
}
</script>

<style>
</style>
