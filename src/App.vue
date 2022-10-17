<template>
  <div class="container position-relative">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link class="ms-3" to="/about">ABOUT</router-link>
    </nav>
    <MessageAlert :alertData="alertData"></MessageAlert>
    <!-- <div class="alert fade position-absolute" ref="alert" role="alert"></div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import MessageAlert from '@/components/MessageAlert.vue'
export default {
  components: {
    MessageAlert
  },
  data () {
    return {
      alertData: {}
    }
  },
  mounted () {
    emitter.on('pushMessage', (alertData) => {
      this.alertData = { ...alertData }
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
