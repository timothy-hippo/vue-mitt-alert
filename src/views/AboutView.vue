<template>
  <div class="home">
    <div class="btn btn-warning" @click="handleOpenAlert">About開啟Alert</div>
  </div>
</template>

<script>
import pushMessageAlert from '@/methods/pushMessageAlert'
export default {
  methods: {
    handleOpenAlert () {
      pushMessageAlert(false, 'test fail')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  margin-top: 120px;
}
</style>
