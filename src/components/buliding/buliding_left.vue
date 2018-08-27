<template>
        <div class="toolleft margin-right0">
          <section>
            <div class="row toolcount">
              <div class="col-sm-6 font-gray-999 padding-right0">
                <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                  <li>
                    <h1 class="toolcount-p1 margin-bottom0">
                      {{buildCountDataStats.TOTALBUILD ? buildCountDataStats.TOTALBUILD:"0"}}
                    </h1>
                  </li>
                  <li><p class="size-10">Buliding Total</p></li>
                  <li>
                    <p class="size-18 font-blue">建筑总数</p>
                  </li>
                </ul> 
              </div>
              <div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12">
                <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                  <li class="margin-top60">
                    <p class="set-width-50">木质结构</p>
                    <p class="display-inline-block font-white size-14">
                      {{buildCountDataStats.STRUCTURE ? buildCountDataStats.STRUCTURE:"0"}}
                    </p>
                  </li>
                  <li>
                    <p class="set-width-50">高层建筑</p>
                    <p class="display-inline-block font-yellow size-14">
                      {{buildCountDataStats.HIGHRISE ? buildCountDataStats.HIGHRISE:"0"}}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolcompanyrate margin-top30" @click="tobuildDetailinfo(buildCountDataSocre)">
              <ul class="row padding0 margin0 size-12 font-gray-999">
                <li class="col-sm-12">
                  <div class="row margin0 padding0">
                    <div class="toolcompanyrate-char col-sm-9 padding-left5">
                      <small class="font-red">
                        高风险建筑
                      </small>
                      <p class="size-14 font-gray-ccc">
                        {{buildCountDataSocre.buildingName ? buildCountDataSocre.buildingName : "暂无建筑"}}
                        <small class="font-gray-999">- {{buildCountDataSocre.unitName ? buildCountDataSocre.unitName : "暂无单位"}}</small></p> 
  
                    </div>
                    <div class="col-sm-3 text-center">
                      <span class="size-36 font-red">{{buildCountDataSocre.totalScore ? buildCountDataSocre.totalScore : "-"}}</span>
                      <small>安全评分</small>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section>
			<div class="toolroute font-gray-ccc margin-top30">
				<span class="toolroute-rect bg-blue"></span>
				<ul class="padding-left10 clearfix">
					<li>
            <p class="font-gray-666 size-10">Buliding Info</p>
          </li>
					<li>
						<p class="font-blue size-16">建筑信息
							<span class="float-right toolroute-padding8 popup-routebtn font-gray-666" @click="fullList = true">
                      <el-tooltip content="全屏" placement="top">
                          <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                        </el-tooltip>
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
                        <tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
                          <td>
                            <el-tooltip placement="top">
                              <div slot="content">{{item.name == null ? '-' : item.name}}</div>
                              <span>{{item.name == null ? '-' : item.name}}</span>
                            </el-tooltip>
                          </td>
                          <td v-if="item.unitName">
                            <el-tooltip placement="top">
                              <div slot="content">{{item.unitName == null ? '-' : item.unitName}}</div>
                              <span>{{item.unitName == null ? '-' : item.unitName}}</span>
                            </el-tooltip>
                          </td>
                          <td>{{item.floors ? item.floors:"0"}}</td>
                          <td>{{item.countofbuilding?item.countofbuilding:"0"}}</td>
                          <td>
                            <a v-on:click="toitmeinfo(item)">
                              <el-tooltip content="查看位置" placement="top">
                              <i class="el-icon-location"></i>
                              </el-tooltip>
                            </a>
                          </td>
                          <td>
                            <a @click="moren">
                              <el-tooltip content="查看详情" placement="top">
                                <i class="fas fa-chevron-circle-right"></i>
                              </el-tooltip>
                            </a>
                          </td>
                        </tr>
                      </tbody> 
                    </table>
                </li>
                 <li class="upd-pagin">
                    <div>
                      <el-pagination class="pull-left" 
                        small
                        layout="total"
                        :total="tableData.totalRow">
                      </el-pagination>
                      <span>{{Math.ceil(tableData.totalRow/this.queryBuildList_parameter.pageSize)}}页</span>
                      <el-pagination class="pull-right" 
                        small
                        layout="prev, pager, next"
                        :page-size="this.queryBuildList_parameter.pageSize"
                        :total="tableData.totalRow" 
                        current-page.sync="this.getAlarmList_parameter.currentPage"
                        @current-change="handleCurrentChange">
                      </el-pagination>
                    </div>
                  </li>
              </ul>
            </div>
          </section>
<!-- 大列表弹窗 -->
    <el-dialog show-close :visible.sync="fullList" center lock-scroll fullscreen="ture" show-close="false" append-to-body="ture" class="dialog-cont">      
      <div class="dialog-content clearfix">
        <button type="button" class="btn-close position-absolute-right" @click="fullList = false">
         <i class="el-icon el-icon-close"></i>关闭
        </button>
        <fullList-vue></fullList-vue>
      </div>      
    </el-dialog>
        </div>
      </template>

<script>
  import{mapState} from "vuex";
  import HeaderVue from '../publick/header.vue';
  import fullListVue from '../../management/Building_management/all.vue';
  export default {
  components:{
      'header-vue':HeaderVue,
      'fullList-vue':fullListVue
  },
  data() {
    return {
      fullList: false,
      // 表格
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      // 单位
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
      itemtrue: false,
      //建筑统计参数
      build_buildCount_parameter:{
        unitId: null
      },
      //建筑统计返回对象
      buildCountDataSocre: Object,
      buildCountDataStats: Object,
      // 表格-请求
      queryBuildList_parameter: {
        unitId: null,
        property: null,
        structure: null,
        currentPage: 1,
        pageSize: 10
      },
      // 表格返回
      tableData: Object,
      getunitid:Object,
      counts:1
    };
  },
  computed:mapState([
    'unitid'
  ]),
  watch:{
    unitid(){
      // //console.log(this.queryAlarmData_parmar.unitId)
      if(this.unitid!=0){
        this.getunitid=this.unitid;
      }else{
        this.getunitid=null;
      }
      this.build_buildCount_parameter.unitId=this.getunitid;
      this.queryBuildList_parameter.unitId=this.getunitid;
      this.getRiskData();  
      this.getRiskTable(); 
      
    }
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
    // 获取统计数据
    getRiskData() {
      this.$fetch(
          "/api/building/queryBuildStatisInfo", 
          this.build_buildCount_parameter
          ).then(response => {
            if (response.data) {
                let data = response.data;
                this.buildCountDataStats = response.data.buildStats,
                this.buildCountDataSocre = response.data.assessScore
                this.$store.commit("buildCountDataSocre", this.buildCountDataSocre);
            }
        });
    },
    // 获取表格
    getRiskTable() {
      this.$fetch(
        "/api/building/findPageBuildIng",
        this.queryBuildList_parameter
      ).then(response => {
          if (response) {
            this.tableData = response.data.pageBuildIng;
          }
        })
        .then(err => {
          //console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.queryBuildList_parameter.currentPage = val;
      this.getRiskTable();
    },
    //获取详情
    toitmeinfo(data) {
      this.itemdata = data;
      this.$store.commit("tobuilditem", this.itemdata);
    },
    tobuildDetailinfo(data) {
      this.counts++;
      this.moren();
      this.itemdata = data;
      this.$store.commit("buildDetailinfos", [this.itemdata,this.counts]);
    }
  },
  mounted() {
    if(sessionStorage.unitid !=undefined || sessionStorage.unitid !=''){
      this.build_buildCount_parameter.unitId=sessionStorage.unitid;
      this.queryBuildList_parameter.unitId=sessionStorage.unitid;
    }
    if(sessionStorage.unitid==0){
      this.build_buildCount_parameter.unitId=null;
      this.queryBuildList_parameter.unitId=null;
    }
    this.getRiskData();  
    this.getRiskTable(); 
    
  }
};
</script>
