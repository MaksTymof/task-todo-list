<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDoList msg="Welcome to My ToDoList.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'Home',
  components: {
    ToDoList
  }
}
</script>
