<template>
  <div class="bgcolor">
      <div class="search_div">
        <div class="search_wrap">
          <span class="icon-1-15 iconsearch"></span>
          <input type="text">
        </div>
      </div>
      <ul class="moredetail">
        <li>

        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'eatPage',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bgcolor{background: #f0f0f0;width: 100%; height: 100%}
  .search_div{height: .86rem; padding-top:.3rem; border-bottom:solid 1px #d6d6d6; background: #f4f4f4}
  .search_wrap{width: 75%; border: solid 1px #f0f0f0;border-radius: 15px;height: .57rem; margin: 0 auto;position: relative;}
  .iconsearch{position:absolute;left:.3rem;top: .15rem;width: .26rem;height: .26rem;}
  .search_wrap input{height: .57rem;width: 85%;margin-left: 15%;line-break: .57rem}
  .moredetail li:first-child{border-top: none}
  .moredetail li{height: 3.26rem;border-top: solid 1px #e7e7e7;border-bottom:solid 1px #e7e7e7;background:#fff}

</style>
