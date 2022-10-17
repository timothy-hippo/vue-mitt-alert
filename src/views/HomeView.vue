<template>
  <div class="home">
    <div class="btn btn-primary" @click="handleOpenAlert">HOME開啟Alert</div>
  </div>
</template>

<script>
import pushMessageAlert from '@/methods/pushMessageAlert'
export default {
  methods: {
    handleOpenAlert () {
      pushMessageAlert(true, 'test success')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  margin-top: 120px;
}
</style>
