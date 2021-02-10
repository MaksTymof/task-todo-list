<template lang="html">
  <div class="task" ref="editableDiv">
    <input type="checkbox"
           class="checkbox"
           ref="checkBox"
           @click="doneTask"/>
    <div class="text"
         ref="textDiv"
         @click="$event.target.classList.toggle('linethrough')">
      My New Task
    </div>
    <div class="updatedelete">
      <font-awesome-icon
        v-on:click="editableTextInDiv();
                    setCaret()"
        icon="pencil-alt"/>
      <font-awesome-icon icon="minus-circle"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    editableTextInDiv () {
      const $ref = this.$refs.editableDiv
      $ref.contentEditable = 'true'
    },
    setCaret () {
      const $el = this.$refs.textDiv
      $el.contentEditable = 'true'
      var range = document.createRange()
      var sel = window.getSelection()
      range.setStart($el.childNodes[0], $el.childNodes[0].length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    },
    doneTask (event) {
      const textDiv = this.$refs.textDiv
      if (event) {
        textDiv.className += ' linethrough'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.task{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aeb0a4;
  background-color: #85d156;
  text-align: left;
  border: 1px solid #379936;
  margin-bottom: 2px;
  border-radius: 0 0 7px 7px;
}
.task:hover, .text:hover {
  outline-style: none;
  cursor:pointer;
  background-color: #e3dd6f;
}
.checkbox{
  display: inline-block;
  justify-content: flex-start;
  margin: 10px;
}
.linethrough {
  text-decoration: line-through;
}
.text {
  width: 100%;
  height: 35px;
  border-left: 1px solid #379936;
  border-right: 1px solid #379936;
  outline-style: none;
  text-align: left;
  padding-left: 10px;
  line-height: 35px;
  color: #5d1d85;
  caret-color: #8d42f5;
}
.updatedelete {
  display:flex;
  justify-content: space-between;
  margin: 10px;
  color: #37066b;
}
.task:hover > .updatedelete {
    opacity: 1;
}
</style>
