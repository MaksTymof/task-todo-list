<template lang="html">
  <form>
    <input type="text" placeholder="Start typing here">
    <button class="button">{{ buttonText }}</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      buttonText: 'Add Task'
    }
  }
}
</script>

<style lang="css" scoped>
button {
  background-color:#147527;
  border-radius: 0 5px 5px 0;
  color: #fff;
}
form {
  background-color: #96a399;
  padding: 10px 10px;
}
input {
  display: inline-block;
  width: 550px;
}
</style>
