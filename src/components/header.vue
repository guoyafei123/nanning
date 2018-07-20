<template>
  <header id="header" class="position-fixed-top z-index-30">
    <div class="header-main">
    <div class="header-left margin-top40 position-left37">
        <p class="font-white size-16 version-title">数雨如歌智慧消防大数据监控平台 政府版
            <span class="size-10 version-num">BETA3.0</span>
        </p>
        <i class="fa fa-th-large font-gray-666"></i>
        <div class="dropdown public-dropdown display-inline-block">
            <button class="btn btn-default dropdown-toggle size-12 dropdown-btnstyle" type="button" id="aaaa" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                南宁市良庆区
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu xunjian-left-main-bottom-pan bg-gray-99" aria-labelledby="aaaa">
                <li>
                    <a href="#">南宁市良庆区</a>
                </li>
                <li>
                    <a href="#">南宁市良庆区</a>
                </li>
                <li>
                    <a href="#">南宁市良庆区</a>
                </li>
            </ul>
        </div>
        <i class="fa fa-th-large font-gray-666"></i>
        <div class="dropdown public-dropdown display-inline-block">
            <button class="btn btn-default dropdown-toggle size-12 font-blue dropdown-btnstyle" type="button" id="aaaa" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                中心小学
                <span class="caret font-blue"></span>
            </button>
            <ul class="dropdown-menu xunjian-left-main-bottom-pan bg-gray-99" aria-labelledby="aaaa">
                <li>
                    <a href="#">中心小学</a>
                </li>
                <li>
                    <a href="#">中心小学</a>
                </li>
                <li>
                    <a href="#">中心小学</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="header-middle font-gray-ccc">
        <ul>
            <li>
                <canvas class="bg-none" id="header-canvas-people" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span class="font-blue">131</span>/
                        <span>203</span>
                    </p>
                    <p class="size-12">人员在线</p>
                </div>
            </li>
            <li>
                <canvas class="bg-none" id="header-canvas-host" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span class="font-blue">88</span>/
                        <span>106</span>
                    </p>
                    <p class="size-12">主机在线</p>
                </div>
            </li>
            <li class="header-time">
                <p> <i class="fa fa-th-large font-blue"></i><span class="font-blue size-12"> 晴朗</span></p>
                <p class="size-36">09:50:55</p>
            </li>
            <li>
                <canvas class="bg-none" id="header-canvas-cpu" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span>75.5%</span>
                    </p>
                    <p class="size-12">CPU占用</p>
                </div>
            </li>
            <li>
                <canvas class="bg-none" id="header-canvas-memory" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span>26.1%</span>
                    </p>
                    <p class="size-12">内存占用</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="header-right  margin-top40 position-right37">
        <div>
            <span class="header-head-portrait">
                <img src="/src/assets/images/icon/logo.png">
            </span>
            <span class="font-gray-666">
                <div class="display-inline-block">
                    <button class="btn btn-default dropdown-toggle dropdown-btnstyle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true" >
                        段亚伟
                        <span style="color: #fff;" class="caret"></span>
                    </button>
                    <ul class="dropdown-menu xunjian-left-main-bottom-pan bg-gray-999" aria-labelledby="dropdownMenu1">
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                        <li>
                            <a href="#">段亚伟</a>
                        </li>
                    </ul>
                </div>
            </span>
        </div>
        <ul>
            <li>
                <a href="#" class="tooltip-test" data-toggle="tooltip" title="消息提示">
                    <i class="fa fa-th-large font-gray-666 active-header-right-tool"></i>
                </a>
            </li>
            <li>
                <a href="#" class="tooltip-test" data-toggle="tooltip" title="搜索">
                    <i class="fa fa-th-large font-gray-666"></i>
                </a>
            </li>
            <li>
                <a href="#" class="tooltip-test" data-toggle="tooltip" title="九屏监控">
                    <i class="fa fa-th-large font-gray-666"></i>
                </a>
            </li>
            <li>
                <router-link to="/Equipment_management" class="tooltip-test" data-toggle="tooltip" title="设置">
                    <i class="fa fa-th-large font-gray-666"></i>
                </router-link>
            </li>
            <li>
                <a href="#" class="tooltip-test" data-toggle="tooltip" title="公告">
                    <i class="fa fa-th-large font-gray-666"></i>
                </a>
            </li>
            <li>
                <a href="#" class="tooltip-test" data-toggle="tooltip" title="帮助">
                    <i class="fa fa-th-large font-gray-666"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
  </header>
</template>

<script>
  export default{
    mounted(){

      this.mini_go('header-canvas-people', 88.88);
      this.mini_go('header-canvas-host', 88.88);
      this.mini_go('header-canvas-cpu', 88.88);
      this.mini_go('header-canvas-memory', 88.88);

    },
    methods:{
      mini_go(id, num) {
        //画底圆
        //mini图配置
        var canvas_mini = document.getElementById(id);

        canvas_mini.width = canvas_mini.width;
        canvas_mini.height = canvas_mini.height;
        var cxt_mini = canvas_mini.getContext("2d");
        cxt_mini.fillStyle = 'rgba(255, 255, 255, 0)';
        // cxt_mini.globalAlpha= (Math.sin(0) + 1) / 2;
        var mini_width = canvas_mini.width;
        var mini_height = canvas_mini.height;
        var mini_r = mini_width / 2;
        cxt_mini.translate(mini_width / 2, mini_height / 2);
        var radi2_mini = mini_r * 0.855;
        cxt_mini.rotate(5.5);
        // 画底圆
        cxt_mini.translate(-25, -25);
        cxt_mini.translate(mini_width / 2, mini_height / 2);
        cxt_mini.clearRect(0, 0, mini_width, mini_height);
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = '#fff';
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI);
        cxt_mini.stroke();
        cxt_mini.closePath();
        //画比例圆
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = '#bad616';
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI * num, true);
        cxt_mini.stroke();
        cxt_mini.closePath();
        //画斜杠
        cxt_mini.beginPath();
        cxt_mini.lineWidth = 2;
        cxt_mini.strokeStyle = '#fff';
        var moveto = mini_width * 0.133333333;
        var lineto = mini_width * 0.377777777;
        cxt_mini.moveTo(moveto, 0);
        cxt_mini.lineTo(lineto, 0);
        cxt_mini.stroke();
        cxt_mini.closePath();
      }
    }
  }
</script>

<style scoped>

</style>
