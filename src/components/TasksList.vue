<template lang="html">
  <div class="tasks">
    <TasksListHeader />
    <TaskForm />
    <div class="tasks--list">
      <Task />
      <Task />
      <Task />
    </div>
  </div>
</template>

<script>
import TasksListHeader from '@/components/TasksListHeader.vue'
import TaskForm from '@/components/TaskForm.vue'
import Task from '@/components/Task.vue'

export default {
  components: {
    TasksListHeader,
    TaskForm,
    Task
  }
}
</script>

<style lang="css" scoped>
.tasks {
  margin-top: 15px;
}
</style>
