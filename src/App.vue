<template>
  <div class="container position-relative">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link class="ms-3" to="/about">ABOUT</router-link>
    </nav>
    <div class="alert alert-primary fade position-absolute" ref="alert" role="alert">A simple primary alert—check it out!</div>
    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
export default {
  mounted () {
    emitter.on('pushMessage', (alertData) => {
      // console.log(alertData)
      const alertEl = this.$refs.alert
      alertEl.classList.add('show', `alert-${alertData.style}`)
      alertEl.textContent = alertData.msg
      setTimeout(() => {
        alertEl.classList.remove('show')
      }, 1000)
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/all.scss";
.container{
  max-width: 768px;
}
.alert{
  width: calc(100% - 12px - 12px);
  top:36px
}
</style>
