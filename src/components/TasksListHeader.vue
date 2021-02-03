<template lang="pug">
  .tasks--header
    div
      font-awesome-icon(icon="th-list")
      .tasts--title header here
    .tasks--options
      font-awesome-icon(icon="pencil-alt")
      font-awesome-icon(icon="minus-circle")
</template>

<script>
export default {
}
</script>

  <style lang="sass" scoped>
  .tasks--options
    opacity: 0
    .tasks--header:hover &
      opacity: 1
  .tasks--header
    cursor: pointer
    display: flex
    justify-content: space-between
    border-radius: 2px
    padding: 10px 15px
    background-image: linear-gradient(to bottom, #323777, #404b8c, #4f5fa1, #5f74b6, #6f8acb, #6d9cdb, #6aadeb, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)
    color: #fff
    & > div
      display: flex
      justify-content: space-between
  </style>
