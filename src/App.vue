<template>
  <div id="app">
     <header :headTitle="headMsg"></header>
     <div class="content">
        <router-view/>
     </div>

  </div>
</template>

<script>
  import header from './components/header'
export default {
  name: 'App',
  data(){
      return{
        headMsg:'wodedingbujjjjjj'
      }
  },
  components:{
      'header':header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  background: #878787;
  color: #000;
  height: 0.4rem;
}

</style>
