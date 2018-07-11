<template>
  <footer id="footer"  class="col-sm-12 position-fixed-bottom z-index-10">
    <div class="footer">
      <ul class="list-inline">
        <li class="footer-nav-active">
          <router-link to="/index">综合</router-link>
        </li>
        <li>
          <router-link to="/risk">风险</router-link>
        </li>
        <li>
          <router-link to="/inspection">巡查</router-link>
        </li>
        <li>
          <router-link to="/callpolice">报警</router-link>
        </li>
        <li>
          <router-link to="/danger">隐患</router-link>
        </li>
        <li>
          <router-link to="/buliding">建筑</router-link>
        </li>
        <li>
          <router-link to="/information">设备</router-link>
        </li>
        <li>
          <router-link to="/personnel">人员</router-link>
        </li>
        <li>
          <router-link to="">预案</router-link>
        </li>
        <li>
          <router-link to="">联控</router-link>
        </li>
        <!-- <li>
          <router-link to="">
            <i class="fa fa-th-large"></i>
          </router-link>
        </li> -->
      </ul>
      <abbr class="size-12 font-gray-666">数雨如歌智慧消防大数据监控平台 政府版
        <span>BETA3.0</span>
      </abbr>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods: {

    chart_one () {
      $ ('.list-inline').on('click','li',function(){
        $ (this).addClass("footer-nav-active").siblings().removeClass('footer-nav-active')
      })
    }
  },
  mounted () {
    this.chart_one()
  }
}
</script>

<style scoped>

</style>
