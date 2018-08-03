<template>
  <header id="header" class="position-fixed-top z-index-30">
    <div class="header-main">
    <div class="header-left margin-top40 position-left37">
        <p class="font-white size-16 version-title">数雨如歌智慧消防大数据监控平台 政府版
            <span class="size-10 version-num">BETA3.0</span>
        </p>
        <el-select v-model="areavalue" placeholder="全部区域" size="mini" class="el-sel">
            <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="unitvalue" placeholder="全部单位" size="mini" class="el-sel">
            <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
            </el-option>
        </el-select>
        <!-- <i class="fa fa-th-large font-gray-666"></i>
        <div class="dropdown public-dropdown display-inline-block">
            <button class="btn btn-default dropdown-toggle size-12 font-blue dropdown-btnstyle" type="button" id="aaaa" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                中心小学
                <span class="caret font-blue"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="aaaa">
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
        </div> -->
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
                <p class="font-blue size-12"> <i class="icon iconfont icon-qinglang-mian- size-14"></i><span>晴朗</span></p>
                <p class="size-36 font-white">09:50:55</p>
            </li>
            <li>
                <canvas class="bg-none" id="header-canvas-cpu" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span>173</span>
                    </p>
                    <p class="size-12">建筑数量</p>
                </div>
            </li>
            <li>
                <canvas class="bg-none" id="header-canvas-memory" width="50" height="50"></canvas>
                <div class="display-inline-block">
                    <p>
                        <span>3649</span>
                    </p>
                    <p class="size-12">设备数量</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="header-right margin-top40 font-gray-666">
        <div class="header-head">            
            <span class="">
                <div class="display-inline-block">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <span class="header-head-portrait">
                            <img src="../assets/images/people.png">
                        </span>
                        <span class="user-name">段亚伟</span>
                        <span class="caret"></span>
                      </span>
                      <el-dropdown-menu slot="dropdown">                        
                        <el-dropdown-item>签到</el-dropdown-item>
                        <el-dropdown-item>操作记录</el-dropdown-item>
                        <el-dropdown-item disabled>个人资料</el-dropdown-item>
                        <el-dropdown-item disabled>修改密码</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </span>
        </div>
        <ul class="top-btn">
            <li>
                <span class="point"></span>
                <a @click="showMessages()">
                    <i class="icon iconfont icon-xiaoxi-mian--" data-toggle="tooltip" title="消息"></i>
                </a>
            </li>
            <li>
                <a href="#" data-toggle="tooltip" title="搜索">
                    <i class="icon iconfont icon-sousuo-mian-"></i>
                </a>
            </li>            
            <li>
                <router-link to="/Equipment_management" data-toggle="tooltip" title="管理">
                    <i class="icon iconfont icon-shezhi-mian-"></i>
                </router-link>
            </li>
            <li>
                <a href="#" data-toggle="tooltip" title="九屏监控">
                    <i class="icon iconfont icon-jiuping-mian-"></i>
                </a>
            </li>
            <li>
                <a @click="voice()" class="voice" data-toggle="tooltip" title="声音">
                    <i class="icon iconfont icon-tongzhi-mian-"></i>
                </a>
            </li>
            <li>
                <a href="#" data-toggle="tooltip" title="帮助">
                    <i class="icon iconfont icon-bangzhu-mian-"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
<!-- 模态窗 -->
<div class="modal fade" id="showmessages" aria-labelledby="messagesLabel" aria-hidden="true">
    <!-- 消息中心 -->
    <messages-vue></messages-vue>
</div>
</header>

</template>

<script>
  import messagesVue from './messages.vue';
  export default {
    components:{
      'messages-vue':messagesVue
    },
    // 选择器
    data() {
      return {
        options: [{
          value: '选项1',
          label: '全部区域'
        }, {
          value: '选项2',
          label: '南宁市良庆区'
        }, {
          value: '选项3',
          label: '南宁市兴宁区'
        }, {
          value: '选项4',
          label: '南宁市横县'
        }],
        areavalue: "选项2",
        unitvalue:'全部单位'
      }
    },
    //其他
    mounted(){

      this.mini_go('header-canvas-people', 88.88);
      this.mini_go('header-canvas-host', 88.88);
      this.mini_go('header-canvas-cpu', 88.88);
      this.mini_go('header-canvas-memory', 88.88);
      $("[data-toggle='tooltip']").tooltip();
    },
    methods:{
        // 显示模态窗
        showMessages(){            
            $('#showmessages').modal('toggle');
            $('#showmessages').on('show.bs.modal', function () {
                  $(".icon-xiaoxi-mian--").addClass("font-white");
            });
        },
        // 开关声音
        voice(){
            $(".icon-tongzhi-mian-").toggleClass("font-blue");
        },

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
