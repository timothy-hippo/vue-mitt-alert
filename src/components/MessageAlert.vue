<template>
  <div class="alert fade position-absolute" ref="alert" role="alert"></div>
</template>

<script>
export default {
  props: ['alertData'],
  watch: {
    alertData () {
      const { style, msg } = this.alertData
      const alertEl = this.$refs.alert
      alertEl.classList.add('show', `alert-${style}`)
      alertEl.textContent = msg
      setTimeout(() => {
        alertEl.classList.remove('show', `alert-${style}`)
      }, 1000)
    }
  }
}
</script>
