<template>
  <p>
  <button @click="addForm" class="addTodo">
    {{text}}
  </button>
  </p>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'HelloWorld',
  props: {
    text: String
  },
  methods: {
    addForm () {
      $('p').append(`<form>
              <input type="text">
              <button>Add Task</button>
              </form>`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
