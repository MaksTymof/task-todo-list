<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddTodo :text="buttonText"/>
    <TaskForm :task="textTask"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import TaskForm from '@/components/TaskForm.vue'

export default {
  name: 'Home',
  components: {
    AddTodo,
    TaskForm
  },
  data () {
    return {
      buttonText: 'Add Todo List',
      textTask: 'Add Task'
    }
  }
}
</script>
