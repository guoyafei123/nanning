<template>
        <div class="toolleft margin-right0">
          <section>
            <div class="row toolcount">
              <div class="col-sm-6 font-gray-999 padding-right0">
                <ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
                  <li>
                    <h1 class="toolcount-p1 margin-bottom0">26</h1>
                  </li>
                  <li>
                    <p class="size-18 font-blue">建筑数量</p>
                  </li>
                </ul> 
              </div>
              <div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12">
                <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                  <li class="margin-top10">
                    <p class="set-width-50">木质结构</p>
                    <p class="display-inline-block font-white font-italic size-14">452</p>
                  </li>
                  <li class="margin-top20">
                    <p class="set-width-50">高层建筑</p>
                    <p class="display-inline-block font-yellow font-italic size-14">34</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolcompanyrate margin-top20">
              <ul class="row padding0 margin0 size-12 font-gray-999">
                <li class="col-sm-12">
                  <div class="row margin0 padding0">
                    <div class="toolcompanyrate-char col-sm-7 padding-top10 padding-left5">
                      <small class="font-red">
                        高风险建筑 安全评分最低
                      </small>
                      <p class="size-12 font-yellow">XX单位-XXXXXXX楼</p>
                    </div>
                    <div class="col-sm-5 padding-left0 text-left">
                      <span class="size-40 font-red">2.6<i class="fas fa-chevron-circle-right size-20 margin-left10" data-toggle="tooltip" title="查看详情"></i>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-ccc margin-left37 margin-top20">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left10 padding-right5 clearfix">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">建筑信息
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </p>
                </li>
                <li>
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="value7" placeholder="全部单位"  @change="tolineitem">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                  </el-select>
                </li>
                <li>
                    <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
                      <thead>
                      <tr>
                        <th>建筑名称</th>
                        <th>所属单位</th>
                        <th>房间</th>
                        <th>楼层</th>
                        <th>位置</th>
                        <th>操作</th>
                      </tr>
                      </thead>
                      <tbody id="">
                      <tr>
                        <td>实验室教学楼1号</td>
                        <td>中心小学</td>
                        <td>124</td>
                        <td>318</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>瑞和家园3号商业楼</td>
                        <td>瑞和家园</td>
                        <td>108</td>
                        <td>424</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>瑞和家园1号商业楼</td>
                        <td>瑞和家园</td>
                        <td>108</td>
                        <td>373</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>四年级教学楼</td>
                        <td>中心小学</td>
                        <td>20</td>
                        <td>72</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>瑞和家园2号楼</td>
                        <td>瑞和家园</td>
                        <td>124</td>
                        <td>318</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>瑞和家园2号楼</td>
                        <td>瑞和家园</td>
                        <td>88</td>
                        <td>248</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>六年级教学楼</td>
                        <td>中心小学</td>
                        <td>12</td>
                        <td>36</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>二年级教学楼</td>
                        <td>中心小学</td>
                        <td>12</td>
                        <td>89</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>瑞和家园7号楼</td>
                        <td>瑞和家园</td>
                        <td>124</td>
                        <td>364</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>实验室教学楼12号</td>
                        <td>中心小学</td>
                        <td>68</td>
                        <td>675</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
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
  import HeaderVue from '../publick/header.vue';
  export default {
  components:{
      'header-vue':HeaderVue
  },
  data() {
    return {
      value7: "",
      options: [
        {
          value: "选项1",
          label: "怀化市"
        },
        {
          value: "选项2",
          label: "怀化市兴宁区"
        },
        {
          value: "选项3",
          label: "怀化市横县"
        }
      ],
    };
  },
  methods: {
    moren() {
      $(".bulid-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".bulid-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
  },
  mounted() {
    
  }
};
</script>
