<template>
  <p>
  <button @click="addNewTasksList" class="addTodo">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
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
  button{
      margin-top: 25px;
      width:200px;
      height:70px;
      background-image: linear-gradient(to bottom, #323777, #404b8c, #4f5fa1, #5f74b6, #6f8acb, #6d9cdb, #6aadeb, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
      border-style: none;
      border-radius: 10px;
      color: #fcdb03;
      font-size: 23px;
      letter-spacing: 3px;
      font-family: 'Lato';
      font-weight: 600;
      outline: none;
      cursor: pointer;
      position: relative;
      padding: 0px;
      overflow: hidden;
      transition: all .5s;
      box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  }
  button span{
      position: absolute;
      display: block;
  }
  button span:nth-child(1){
      height: 3px;
      width:200px;
      top:0px;
      left:-200px;
      background: linear-gradient(to right, rgba(0,0,0,0), #f6e58d);
      border-top-right-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span1 2s linear infinite;
      animation-delay: 1s;
  }

  @keyframes span1{
      0%{
          left:-200px
      }
      100%{
          left:200px;
      }
  }
  button span:nth-child(2){
      height: 70px;
      width: 3px;
      top:-70px;
      right:0px;
      background: linear-gradient(to bottom, rgba(0,0,0,0), #f6e58d);
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
      animation: span2 2s linear infinite;
      animation-delay: 2s;
  }
  @keyframes span2{
      0%{
          top:-70px;
      }
      100%{
          top:70px;
      }
  }
  button span:nth-child(3){
      height:3px;
      width:200px;
      right:-200px;
      bottom: 0px;
      background: linear-gradient(to left, rgba(0,0,0,0), #f6e58d);
      border-top-left-radius: 1px;
      border-bottom-left-radius: 1px;
      animation: span3 2s linear infinite;
      animation-delay: 3s;
  }
  @keyframes span3{
      0%{
          right:-200px;
      }
      100%{
          right: 200px;
      }
  }

  button span:nth-child(4){
      height:70px;
      width:3px;
      bottom:-70px;
      left:0px;
      background: linear-gradient(to top, rgba(0,0,0,0), #f6e58d);
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
      animation: span4 2s linear infinite;
      animation-delay: 4s;
  }
  @keyframes span4{
      0%{
          bottom: -70px;
      }
      100%{
          bottom:70px;
      }
  }

  button:hover {
      transition: all .5s;
      transform: rotate(-3deg) scale(1.1);
      box-shadow: 0px 3px 5px rgba(0,0,0,.4);
  }
  button:hover span {
      animation-play-state: paused;
  }
</style>
