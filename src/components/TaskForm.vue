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
  border-radius: 5px;
  color: #bad63c;
  font-weight: bold;
}
form {
  background-color:#a2c2e8;
  padding: 10px 10px;
}
input {
  display: inline-block;
  width: 550px;
  margin-bottom: 10px;
}
</style>
