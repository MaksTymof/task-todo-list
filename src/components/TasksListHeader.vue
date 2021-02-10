<template lang="pug">
  .tasks--header
    div
      font-awesome-icon(icon="th-list")
      .tasks--title(ref="editableDiv") Task List Title
    .tasks--options
      font-awesome-icon(icon="pencil-alt" v-on:click="editableTextInDiv")
      font-awesome-icon(icon="minus-circle")
</template>

<script>
export default {
  methods: {
    editableTextInDiv () {
      const $ref = this.$refs.editableDiv
      $ref.contentEditable = 'true'
    }
  }
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
    border-radius: 7px 7px 0px 0px
    padding: 10px 15px
    background: #126311
    color:#ced426
    & > div
      display: flex
      justify-content: space-between
  .tasks--title
    margin-left: 15px
    font-size: 1.6em
  svg
    font-size: 1em
    margin-top: 7px
  </style>
