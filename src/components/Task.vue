<template lang="html">
  <div class="task">
    <input class="checkbox" type="checkbox"/>
    <input class="text" type="text" name="" value=""/>
    <div class="ud">
      <font-awesome-icon icon="pencil-alt"/>
      <font-awesome-icon icon="minus-circle"/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.task{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aeb0a4;
}
.task:hover, .text:hover {
  background-color: #dce884;
  border: none;
  cursor:pointer;
}
.checkbox{
  display: inline-block;
  justify-content: flex-start;
  margin-top: 10px;
}
.text {
  display: inline-block;
  width: 100%;
  height: 35px;
  border: none;
  border-left: 1px solid #aeb0a4;
  border-right: 1px solid #aeb0a4;

}
.ud {
  display:flex;
  justify-content: space-between;
  margin-top: 10px;
}
.task:hover > .ud {
    opacity: 1;
}
</style>
