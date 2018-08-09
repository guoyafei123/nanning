<template>
  <div class="toolleft margin-right0">
    <section>
      <div class="row toolcount">
        <div class="col-sm-6 font-gray-999 padding-right0">
          <ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
            <li>
              <h1 class="toolcount-p1">26</h1>
            </li>
            <li>
              <p class="size-10">Worker On line</p>
            </li>
            <li>
              <p class="size-18 font-blue">人员在线数量</p>
            </li>
            <!-- <li v-for="todo in todos">
                        {{ todo.text }}lg
                    </li> -->
          </ul>
        </div>
        <div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12 margin-top20">
          <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 margin-top5">
            <li>
              <p class="set-width-50" @click="tovuex">人员总数</p>
              <p class="display-inline-block font-italic size-14">123</p>
            </li>
            <li>
              <p class="set-width-50" @click="tovuex1">巡检人员</p>
              <p class="display-inline-block font-italic size-14">
                <span class="font-blue font-italic">3 </span>/
                <span>120</span>
              </p>
            </li>
            <li>
              <p class="set-width-50">监控人员</p>
              <p class="display-inline-block font-italic">
                <span class="font-yellow font-italic size-14">4 </span>/
                <span>8</span>
              </p>
            </li>
            <li>
              <p class="set-width-50">管理人员</p>
              <p class="display-inline-block font-italic size-14">63.7%</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="toolcompanyrate margin-top50">
        <ul class="row padding0 margin0 size-12 font-gray-999">
          <li class="col-sm-6">
            <div class="row margin0 padding0">
              <div class="toolcompanyrate-char col-sm-7 padding-top10 padding-left15">
                <small class="font-blue">
                  执行任务
                </small>
                <p class="size-16">段亚伟</p>
              </div>
              <div class="col-sm-5 padding-left0 text-left">
                <span class="size-40 font-white">24</span>
                <sub class="position-absolute size-10 companyrateci padding-left5">次</sub>
              </div>
            </div>
          </li>
          <li class="col-sm-6">
            <div class="row margin0 padding0">
              <div class="toolcompanyrate-char col-sm-7 padding-top10 padding-left15">
                <small class="font-yellow">
                  隐患解决
                </small>
                <p class="size-16">赵堆船</p>
              </div>
              <div class="col-sm-5 padding-left0 text-left">
                <span class="size-40 font-white">36</span>
                <sub class="position-absolute size-10 companyrateci padding-left5">次</sub>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="toolroute font-gray-ccc margin-left37">
        <span class="toolroute-rect bg-blue"></span>
        <ul class="padding-left10 padding-right5 clearfix">
          <li>
            <p class="font-gray-666 size-12">中心小学</p>
          </li>
          <li>
            <p class="font-blue size-16">人员信息
                <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                  <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                </span>
            </p>
          </li>
          <li>
            <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部单位"  @change="tolineitem">
                <el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
                </el-option>
            </el-select>
          </li>
          <li>
              <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>手机号</th>
                  <th>单位名称</th>                  
                  <th>状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>段亚伟</td>
                  <td>18601246987</td>
                  <td>瑞和家园</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>王金</td>
                  <td>18601246987</td>
                  <td>中心小学</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>陈磊</td>
                  <td>18601246987</td>
                  <td>中心小学</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>王晓波</td>
                  <td>18601246987</td>
                  <td>瑞和家园</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>刘健</td>
                  <td>18601246987</td>
                  <td>中心小学</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>魏世星</td>
                  <td>18601246987</td>
                  <td>瑞和家园</td>
                  <td>
                    <i class="fas fa-link font-blue"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>崔幸福</td>
                  <td>18601246987</td>
                  <td>实验小学</td>
                  <td>
                    <i class="fas fa-link font-gray-333"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>徐金玲</td>
                  <td>18601246987</td>
                  <td>实验小学</td>
                  <td>
                    <i class="fas fa-link font-gray-333"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>刘杰</td>
                  <td>18601246987</td>
                  <td>瑞和家园</td>
                  <td>
                    <i class="fas fa-link font-gray-333"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>赵堆船</td>
                  <td>18601246987</td>
                  <td>瑞和家园</td>
                  <td>
                    <i class="fas fa-link font-gray-333"></i>
                  </td>
                  <td>
                    <a @click="moren">
                    <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                    </a>
                  </td>
                </tr>
                </tbody>
              </table>
          </li>
          <li>
            <span class="size-12">分页</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    // import{mapState} from "vuex"
    export default {
      data(){
        return{
          jsonp:{
            a:1,b:2
          },
          arrays:[1,2,3,4,5,6,7,8,9,10],
          vuextest:'兄弟组件传参'
        }

      },
      methods: {
        tovuex(){
          console.log(1);
          this.$store.commit('setvuextest',this.arrays);
        },
        tovuex1(){
          console.log(1);
          this.$store.commit('setvuextest',this.vuextest);
        },
      }
    }
</script>

<style scoped>

</style>
