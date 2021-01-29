<template lang="html">
  <form>
    <input placeholder="Enter task">
    <button> {{ task }}</button>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',
  props: {
    task: String
  }
}
</script>

<style lang="css" scoped>
</style>
