<template>
  <div id="headTitle">
     {{headTitle}}
  </div>

</template>

<script>
export default{
    name:'header',
    data(){
        return{

      }
    },
  props:['headTitle']
}

</script>

<style scoped>
#header{
  background: #878787;
  color: #000;
  height: 0.4rem;
}

</style>
