<template lang="html">
  <form>
    <input type="text">
    <button>{{ buttonText }}</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add task'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
