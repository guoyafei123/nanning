<template>
  <div class="toolleft margin-right0">
    <section>
      <div class="row toolcount">
        <div class="col-sm-6  font-gray-999 padding-right0">
          <ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
            <li>
              <p>26</p>
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
        <div class="col-sm-6 font-gray-999 padding-left0 padding-right0">
          <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
            <li>
              <p class="set-width-50 size-12">人员总数</p>
              <p class="display-inline-block font-italic" @click="tovuex">123</p>
            </li>
            <li>
              <p class="set-width-50 size-12">巡检人员</p>
              <p class="display-inline-block font-italic">
                <span class="font-blue font-italic margin-bottom0">3 </span>/
                <span class="margin-bottom0">120</span>
              </p>
            </li>
            <li>
              <p class="set-width-50 size-12">监控人员</p>
              <p class="display-inline-block font-italic">
                <span class="font-yellow font-italic margin-bottom0">4 </span>/
                <span class="margin-bottom0">8</span>
              </p>
            </li>
            <li>
              <p class="set-width-50 size-12">管理人员</p>
              <p class="display-inline-block font-italic">63.7%</p>
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
              <div class="toolcompanyrate-char col-sm-6 padding0">
                <p class="font-blue">
                  执行任务
                </p>
                <p class="size-16">段亚伟</p>
              </div>
              <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                <span class="size-22">36</span>
                <span class="position-absolute size-10 companyrateci">次</span>
              </div>
            </div>
          </li>
          <li class="col-sm-6">
            <div class="row margin0 padding0">
              <div class="toolcompanyrate-char col-sm-6 padding0">
                <p class="font-blue">
                  隐患解决
                </p>
                <p class="size-16">赵堆船</p>
              </div>
              <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                <span class="size-22">24</span>
                <span class="position-absolute size-10 companyrateci">次</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="toolroute font-gray-ccc margin-left37">
        <span class="toolroute-rect bg-blue"></span>
        <ul class="padding-left5 padding-right5">
          <li>
            <p class="font-gray-666 size-12">中心小学</p>
          </li>
          <li>
            <p class="font-blue size-16">人员评估
              <span class="float-right toolroute-padding8 popup-routebtn font-gray-666">
                            <i class="fa fa-th-large"></i>
                        </span>
            </p>
          </li>
          <li>
            <div class="input-group bg-none toolroute-padding8">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle dropdown-btnstyle bg-black02" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">巡检人员
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu toolroute-pan font-gray-666">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>

                </ul>
              </div>
              <!-- /btn-group -->
              <input type="text" class="form-control bg-none toolroute-sec " aria-label="hellow">
              <span class="input-group-btn">
                            <button class="btn btn-default dropdown-btnstyle bg-black02 glyphicon-searchdiv" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </span>

            </div>
            <!-- /input-group -->
          </li>
          <li>
            <div class="table-responsive">
              <table class="table size-12 table-condensed toolroute-table margin-top10">
                <tr>
                  <th>排名</th>
                  <th>姓名</th>
                  <th>单位名称</th>
                  <th>综合评估</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-blue"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-blue"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-blue"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-blue"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-blue"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-blue"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>控烟严格巡检</td>
                  <td>
                    <span class="font-blue">10</span>/30</td>
                  <td>
                    <i class="fa fa-th-large font-gray-666"></i>
                  </td>
                  <td>08:08:08</td>
                  <td>
                    <a>
                      <i class="fa fa-th-large font-gray-666"></i>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </li>
          <li>
            分页
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
    import{mapState} from "vuex"
    export default {
      data(){
        return{
          vuextest:'兄弟组件传参'
        }
        
      },
      methods: {
        tovuex(){
          console.log(1);
          this.$store.commit('tovuex',this.vuextest);
        },
      },
      
      computed:mapState([
        'setvuextest',
      ])
      
    }
</script>

<style scoped>

</style>
