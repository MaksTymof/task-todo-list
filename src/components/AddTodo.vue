<template>
  <p>
  <button @click="addNewTasksList" class="addTodo">
    {{text}}
  </button>
  </p>
</template>

<script>

export default {

  name: 'addTodoButton',
  props: {
    text: String
  },
  methods: {
    addNewTasksList () {
      const taskList = {
        title: 'New tasks list',
        _id: Math.random(1000)
      }
      this.$store.dispatch('addNewTasksList', taskList)
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
