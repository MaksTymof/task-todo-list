<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddTodo :text="buttonText"/>
    <TaskForm v-show="showTaskForm" :task="textTask"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import TaskForm from '@/components/TaskForm.vue'

import { mapState } from 'vuex'
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
  },
  computed: {
    ...mapState([
      'showTaskForm'
    ])
  }
}
</script>
