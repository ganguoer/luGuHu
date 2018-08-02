<template>
  <div class="hello">
    <h2>我的字体</h2>
    <span class="icon-1-13"></span>
    <span class="icon-1-13"></span>
    <span class="icon-1-13"></span>
    <span class="icon-1-13"></span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h2 {
  font-weight: normal;
   font-size: .12rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
