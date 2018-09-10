<template>
  <section>
    <!-- 标题 -->
    
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      
      <!-- 表格 -->
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :highlight-current-row="true"
          :default-sort = "{prop: 'Serial_number', order: 'descending'}">
          <el-table-column
            prop="Serial_number"
            type="index"
            fixed="left"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            :show-overflow-tooltip="true"
            label="设备名称">
          </el-table-column>
          <el-table-column
            prop="location"
            :show-overflow-tooltip="true"
            label="设备位置">
          </el-table-column>
          <el-table-column
            prop="deviceTypeName"
            :show-overflow-tooltip="true"
            label="设备类型">
          </el-table-column>
          <el-table-column
            prop="height"
            label="相对地板高度 (cm)">
          </el-table-column>
          <el-table-column
            prop="fheight"
            label="相对天花板高度 (cm)">
          </el-table-column>
          <el-table-column
            prop="startDate"
            :show-overflow-tooltip="true"
            :formatter="data"
            label="投入使用时间">
          </el-table-column>
          <el-table-column
            prop="startDate"
            :formatter="formatter"
            label="运行时长 (天)">
          </el-table-column>
          <el-table-column
            prop="lifeMonth"
            label="更换周期 (天)">
          </el-table-column>
          <el-table-column 
            prop="status"
            label="状态">
            <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.status === 1 ? 'green' : 'red'"
                    disable-transitions v-if='scope.row.status==1'>正常</el-tag>
                  <el-tag
                    :type="scope.row.status === 2 ? 'orange' : 'green'"
                    disable-transitions v-if='scope.row.status==2'>故障</el-tag>
                  <el-tag
                    :type="scope.row.status === 2 ? 'red' : 'green'"
                    disable-transitions v-if='scope.row.status==3'>警报</el-tag>
                </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            width="140px"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>
            <a href="javascript:;" @click="qrcode">导出二维码</a>
          </div>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="14"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="14"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 编辑Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改设备</h4>
            <h5 class="modal-p font-blue">{{this.form.name}}</h5>
          </div>
          <div class="modal-body">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
            <div class="main_content">
              <el-form class="row" ref="form" status-icon :label-position="labelPosition" :model="form">
                <el-form-item label="设备名称" prop="name" :rules="rules.name" class="not-null">
                  <!-- <span class="hint-error">设备名称有误或重复</span> -->
                  <el-input v-model="form.name"  class="col-sm-8"></el-input>
                </el-form-item>
                <el-form-item label="所属单位" prop="unitId" :rules="rules.unitId" class="not-null">
                  <el-select v-model="form.unitId"  placeholder="选择单位" class="select selectUnit col-sm-4">
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="设备类型" prop="equipmentId" :rules="rules.equipmentId" class="not-null">
                  <el-select
                    v-model="form.equipmentId"
                    placeholder="选择设备类型" class="start col-sm-4">
                    <el-option
                      v-for="item in equipmentList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="设备位置" prop="buildingId" :rules="rules.buildingId" class="not-null">
                  <el-select
                    v-model="form.buildingId"
                    placeholder="选择建筑"
                    class="start col-sm-4">
                    <el-option
                      v-for="item in form.buildList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.floorId"
                    placeholder="选择楼层"
                    class="start col-sm-4">
                    <el-option
                      v-for="item in form.floorList"
                      :label="item.floor+'层'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="form.roomId"
                    placeholder="选择房间"
                    class="start col-sm-4">
                    <el-option
                      v-for="item in form.roomList"
                      :label="item.roomNumber+'房间'"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item v-if="this.form.buildingId==0"  label="地图坐标" prop="point" :rules="rules.point" class="not-null">
                  <el-input placeholder="经度,纬度" :disabled="true"  v-model="form.point" class=" col-sm-8"></el-input>
                  <el-tooltip class="item icon-help font-blue pull-right" content="右侧地图添加位置" placement="top">
                    <i class="el-icon-question size-16"></i>
                  </el-tooltip>
                </el-form-item>
                <el-form-item v-if="this.form.buildingId!=0" label="平面图坐标" prop="Rate" :rules="rules.Rate" class="not-null">
                  <el-input placeholder="X,Y" :disabled="true"  v-model="form.Rate" class="col-sm-8"></el-input>
                </el-form-item>
                <div class="col-sm-12">
                  <div class="row">
                    <el-form-item label="物理地址" prop="PhysicalAddress"  :rules="rules.PhysicalAddress" class="not-null col-sm-4">
                      <el-input v-model="form.PhysicalAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="控制器ID" prop="controlId" :rules="rules.controlId" class="not-null col-sm-4">
                      <el-input v-model="form.controlId"></el-input>
                    </el-form-item>
                  </div>
                </div>
                <el-form-item label="相对房顶高度 (cm)" prop="RoofHeight"  :rules="rules.RoofHeight" class="not-null col-sm-4">
                  <el-input v-model="form.RoofHeight"></el-input>
                </el-form-item>
                <el-form-item label="相对地板高度 (cm)" prop="floorHeight" :rules="rules.floorHeight" class=" not-null col-sm-4">
                  <el-input v-model="form.floorHeight"></el-input>
                </el-form-item>
                <div class="col-sm-12">
                    <div class="row">
                      <el-form-item label="生产商" prop="Bike" :rules="this.form.Bike == '' ? [{ required: false, trigger: 'blur', message: '请填写生厂商(非必填)' }] : rules.Bike"  class="col-sm-4">
                        <el-input v-model="form.Bike"></el-input>
                      </el-form-item>
                      <el-form-item label="生产日期" prop="ProductionDay" :rules="this.form.ProductionDay == '' ? [{ required: false, trigger: 'blur', message: '请选择生产日期(非必填)' }] : rules.ProductionDay"  class="col-sm-4">
                        <div class="block">
                          <el-date-picker
                            v-model="form.ProductionDay"
                            type="date"
                            :editable="false"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                        </div>
                      </el-form-item>
                      <el-form-item label="投入使用日期" prop="startDate" :rules="rules.startDate" class="not-null col-sm-4">
                        <div class="block">
                          <el-date-picker
                            v-model="form.startDate"
                            type="date"
                            :editable="false"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                          </div>
                        </el-form-item>
                      </div>
                    </div>
                  <div class="col-sm-12">
                    <div class="row">
                      <el-form-item label="维保单位" prop="Refundable"  :rules="this.form.Refundable == '' ? [{ required: false, trigger: 'blur',  message: '请填写维保单位(非必填)' }] : rules.Refundable" class="col-sm-4">
                        <el-input v-model="form.Refundable"></el-input>
                      </el-form-item>
                      <el-form-item label="维保人员"  prop="linkname"  :rules="this.form.linkname == '' ? [{ required: false, trigger: 'blur',  validator: linkName  }] : rules.linkname" class="col-sm-4">
                        <el-input v-model="form.linkname"></el-input>
                      </el-form-item>
                      <el-form-item label="维保电话" prop="phone"  :rules="this.form.phone == '' ? [{ required: false, trigger: 'blur',  validator: validPhone }] : rules.phone" class="col-sm-4">
                        <el-input maxlength="11" v-model.number="form.phone"></el-input>
                      </el-form-item>
                    </div>
                </div>
                <div class="col-sm-12 margin-bottom20">
                  <div class="row">
                    <el-form-item label="更换周期 (天)" prop="Retroperiod" :rules="rules.Retroperiod" class="not-null col-sm-4">
                      <el-input v-model.number="form.Retroperiod"></el-input>
                    </el-form-item>
                  </div>
                </div>                 
              </el-form>
               <p class="not-null font-red text-center">非必填选项，如若不填写不影响提交</p>
            </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow('form')" icon="el-icon-circle-check-outline" class="primary">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除设备Modal -->
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel2">提示</h4>
                <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
              </div>
              <div class="modal-body text-center container-padding40">
                <h3 class="font-red size-14">是否删除</h3>
                <p class="font-white size-16">{{ deviceName }}</p>
              </div>
              <div class="modal-footer">
                <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-delete" class="danger" data-dismiss="modal">删除</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { realconsole } from "../../assets/js/management.js";
import {
  isvalidPhone,
  isName,
  isvalidName,
  isLng
} from "../../assets/js/validate";
export default {
  data() {
    var validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码(非必填)"));
      } else if (!isvalidPhone(value)) {
        callback(new Error("请输入正确的11位手机号码(非必填)"));
      } else {
        callback();
      }
    };
    var validName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入设备名称"));
      } else if (!isvalidName(value)) {
        callback(new Error("请输入正确的设备名称"));
      } else {
        callback();
      }
    };
    var linkName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入维保人员姓名(非必填)"));
      } else if (!isName(value)) {
        callback(new Error("请输入正确的维保人员姓名(非必填)"));
      } else {
        callback();
      }
    };
    var Lng = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入坐标"));
      } else if (!isLng(value)) {
        callback(new Error("请输入正确的坐标点"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "top",
      form: {
        id: "",
        name: "",
        unitId: null,
        unitName: "",
        buildingId: "",
        buildingName: "",
        floorId: "",
        floorNumber: "",
        roomId: "",
        roomNumber: "",
        equipmentId: "",
        deviceTypeName: "",
        roomList: [],
        floorList: [],
        buildList: [],
        point: [],
        Rate: [],
        PhysicalAddress: "",
        startDate: "",
        lifeMonth: "",
        RoofHeight: "",
        floorHeight: "",
        Retroperiod: "",
        Bike: "",
        ProductionDay: "",
        Refundable: "",
        linkname: "",
        phone: ""
      },

      optionList: [], //全部单位列表
      tableData: [], //设备列表
      page: null, //总页数
      currentPage4: 1, //当前页
      totalList: null, //总条数
      deviceIndex: "",
      deviceName: "",
      rules: {
        name: [{ required: true, trigger: "blur", validator: validName }],
        unitId: [{ required: true, message: "请选择单位", trigger: "change" }],
        equipmentId: [
          { required: true, message: "请选择设备类型", trigger: "change" }
        ],
        buildingId: [
          { required: true, message: "请选择设备位置", trigger: "change" }
        ],
        PhysicalAddress: [
          { required: true, message: "请填写物理地址", trigger: "blur" }
        ],
        controlId: [
          { required: true, trigger: "blur", message: "请输入控制器ID" }
        ],
        RoofHeight: [
          { required: true, trigger: "blur", message: "相对房顶高度" },
          { type: "number", message: "必须为数字值" }
        ],
        floorHeight: [
          { required: true, trigger: "blur", message: "请输入相对地板高度" },
          { type: "number", message: "必须为数字值" }
        ],
        Bike: [
          { required: true, trigger: "blur", message: "请填写生厂商(非必填)" }
        ],
        ProductionDay: [
          {
            required: true,
            trigger: "change",
            message: "请选择生产日期(非必填)"
          }
        ],
        startDate: [
          { required: true, trigger: "change", message: "请选择投入使用日期" }
        ],
        Refundable: [
          { required: true, trigger: "blur", message: "请填写维保单位(非必填)" }
        ],
        linkname: [{ required: true, trigger: "blur", validator: linkName }],
        phone: [{ required: true, trigger: "blur", validator: validPhone }],
        Retroperiod: [
          { required: true, trigger: "blur", message: "请输入更换周期" },
          { type: "number", message: "必须为数字值" }
        ],
        point: [{ required: true, trigger: "blur", validator: Lng }],
        Rate: [{ required: true, trigger: "blur", message: "请填写平面图坐标" }]
      }
    };
  },
  methods: {
    data(row, column) {
      return row.startDate.substr(0, 10);
    },
    formatter(row, column) {
      if (row.startDate) {
        return this.dateMinus(row.startDate);
      }
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      $(".el-pager li.active")
        .css({ color: "#fff", "background-color": "#333333" })
        .siblings()
        .css({ color: "#666", "background-color": "transparent" });
    },
    start_plan(row) {
      //修改
      this.deviceIndex = row.id;
      this.tableData.forEach((item, index) => {
        if (item.id == row.id) {
          this.form.id = item.id;
          this.form.name = item.name;
          this.form.unitId = item.unitId;
          this.form.unitName = item.unitName;

          if (item.buildingId == 0) {
            this.form.buildingId = 0;
          } else {
            this.form.buildingId = item.buildingId;
          }
          this.form.buildingName = item.buildingName;

          if (item.floorId == 0) {
            this.form.floorId = "";
          } else {
            this.form.floorId = item.floorId;
          }

          this.form.floorNumber = item.floorNumber;

          if (item.roomId == 0) {
            this.form.roomId = "";
          } else {
            this.form.roomId = item.roomId;
          }
          this.form.roomNumber = item.roomNumber;
          this.form.equipmentId = item.deviceTypeId;
          this.form.deviceTypeName = item.deviceTypeName;
          this.form.point[0] = item.pointX;
          this.form.point[1] = item.pointY;
          this.form.Rate[0] = item.xRate;
          this.form.Rate[1] = item.yRate;
          this.form.PhysicalAddress = item.mac;
          this.form.startDate = item.startDate;
          this.form.RoofHeight = item.height;
          this.form.floorHeight = item.fheight;
          this.form.Retroperiod = item.lifeMonth;
          this.form.Bike = item.firm;
          this.form.ProductionDay = item.productDate;
          this.form.Refundable = item.maintenanceUnit;
          this.form.linkname = item.maintenanceUser;
          this.form.phone = item.maintenancePhone;
          this.form.controlId = item.controllerId;
        }
      });
    },
    startRow(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
          var point = this.form.point;
          if (typeof point == "string") {
            var pointList = point.split(",");
          } else {
            var pointList = this.form.point;
          }
          var Rate = this.form.Rate;
          // console.log(typeof(point))
          if (typeof Rate == "string") {
            var RateList = Rate.split(",");
          } else {
            var RateList = this.form.Rate;
          }
          this.$fetch("/api/device/updateDevice", {
            id: this.form.id,
            name: this.form.name,
            unitId: this.form.unitId,
            unitName: this.form.unitName,
            buildingId: this.form.buildingId,
            buildingName: this.form.buildingName,
            floorId: this.form.floorId,
            floorNumber: this.form.floorNumber,
            roomId: this.form.roomId,
            roomNumber: this.form.roomNumber,
            deviceTypeId: this.form.equipmentId,
            deviceTypeName: this.form.deviceTypeName,
            pointX: pointList[0],
            pointY: pointList[1],
            xRate: RateList[0],
            yRate: RateList[1],
            mac: this.form.PhysicalAddress,
            startDate: this.form.startDate,
            height: this.form.RoofHeight,
            fheight: this.form.floorHeight,
            lifeMonth: this.form.Retroperiod,
            firm: this.form.Bike,
            productDate: this.form.ProductionDay,
            maintenanceUnit: this.form.Refundable,
            maintenanceUser: this.form.linkname,
            maintenancePhone: this.form.phone,
            controllerId: this.form.controlId
          }).then(response => {
            if (response) {
              //console.log('修改成功...'+ JSON.stringify(response));
              this.tableList();
            }
          });
          $(".primary").attr("data-dismiss", "modal");
          // 修改成功提示
          this.$message({
            dangerouslyUseHTMLString: true,
            message: "<strong> 修改成功</strong>",
            center: true,
            showClose: true,
            iconClass: "el-icon-circle-check",
            customClass: "edit-ok-notification"
          });
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
    delete_plan(row) {
      //删除
      this.deviceName = row.name;
      this.deviceIndex = row.id;
    },
    show3(row) {
      //跳转
      //console.log(row.id);
      this.$store.commit("currentPage", this.currentPage4);
      this.$store.commit("deviceId", row);
      $(".plan").show();
      $(".mapTable").hide();
      $(".total").hide();
    },
    deleteRow() {
      //console.log(this.deviceIndex);
      this.$fetch("/api/device/deleteDevice", {
        deviceId: this.deviceIndex
      })
        .then(response => {
          if (response) {
            //console.log('删除成功...'+ JSON.stringify(response));
            this.tableData.splice(this.deviceIndex, 1);
            this.tableList();
          }
        })
        .then(err => {
          //console.log(err);
        });
    },
    dateMinus(sDate) {
      var sdate = new Date(sDate.replace(/-/g, "/"));
      var now = new Date();
      var days = now.getTime() - sdate.getTime();
      var day = parseInt(days / (1000 * 60 * 60 * 24));
      return day;
    },
    qrcode() {
      window.open(
        "/api/qrcode/deviceImgs?unitId=" +
          this.EquipmentUnit[0] +
          "&buildingId=" +
          this.EquipmentBuild[0] +
          "&floorId=" +
          this.EquipmentFloor[0] +
          "&roomId=" +
          this.EquipmentRoom[0] +
          "&deviceTypeId=" +
          this.Equipment[0]
      );
    },
    unitSearch() {
      this.$fetch("/api/unit/queryUnit")
        .then(response => {
          if (response) {
            //console.log(response);
            this.optionList = response.data.unitList;
            //console.log(this.optionList);
            $(" .el-select-dropdown__item").mouseover(function() {
              $(this)
                .css({ color: "#fff", background: "#222" })
                .siblings()
                .css({ color: "#999", background: "#000" });
            });
          }
        })
        .then(err => {
          // //console.log(err);
        });
    },
    tableList() {
      this.$fetch("/api/device/deviceList", {
        unitId: this.EquipmentUnit[0],
        deviceTypeId: this.Equipment[0],
        buildingId: this.EquipmentBuild[0],
        floorId: this.EquipmentFloor[0],
        roomId: this.EquipmentRoom[0],
        currentPage: this.currentPage4,
        pageSize: 14
      })
        .then(response => {
          //console.log('设备111111111111111111'+JSON.stringify(response));
          if (response) {
            // //console.log(response.data.inspectionPlanList);
            this.totalList = response.data.pager.totalRow;
            this.tableData = response.data.pager.result;
            this.tableData.forEach((item, index) => {
              // //console.log(111)
              if (index == this.tableData.length - 1) {
                this.$store.commit("deviceId", item);
              }
            });
            if (this.totalList % 14 == 0) {
              this.page = parseInt(this.totalList / 14);
            } else {
              this.page = parseInt(this.totalList / 14) + 1;
            }
          }
        })
        .then(err => {
          // //console.log(err);
        });
    },

    formBuildSearch(unitId) {
      this.$fetch("/api/building/selectNode", {
        unitId: unitId
      }).then(response => {
        //console.log('formBuildSearch:'+JSON.stringify(response));
        if (response) {
          this.form.buildList = response.data.list;
          console.log(this.form.buildList);
        }
      });
    },
    formFloorSearch(buildIngId) {
      this.$fetch("/api/building/selectNode", {
        buildIngId: buildIngId
      }).then(response => {
        //console.log('formFloorSearch:'+response);
        if (response) {
          this.form.floorList = response.data.list;
          //console.log(this.form.floorList);
        }
      });
    },
    formRoomSearch(floorId) {
      this.$fetch("/api/building/selectNode", {
        floorId: floorId
      }).then(response => {
        //console.log('formRoomSearch:'+response);
        if (response) {
          this.form.roomList = response.data.list;
          //console.log(this.form.roomList);
        }
      });
    }
  },
  computed: {
    ...mapState([
      "Refresh",
      "EquipmentUnit",
      "EquipmentBuild",
      "EquipmentFloor",
      "EquipmentRoom",
      "Equipment"
    ]),
    unitId() {
      return this.form.unitId;
    },
    buildingId() {
      return this.form.buildingId;
    },
    floorId() {
      return this.form.floorId;
    },
    roomId() {
      return this.form.roomId;
    },
    equipmentId() {
      return this.form.equipmentId;
    }
  },
  watch: {
    currentPage4(val, oldVal) {
      this.currentPage4 = val;
      //console.log(this.currentPage4);
      this.tableList();
    },
    EquipmentUnit() {
      this.tableList();
    },
    EquipmentBuild() {
      this.tableList();
    },
    EquipmentFloor() {
      this.tableList();
    },
    EquipmentRoom() {
      this.tableList();
    },
    Equipment() {
      this.tableList();
    },
    unitId(curVal, oldVal) {
      this.form.unitId = curVal;
      // console.log(curVal);
      this.form.buildingId = "";
      this.form.floorId = "";
      this.form.roomId = "";
      this.formBuildSearch(this.form.unitId);
      console.log(this.form.unitId);
    },
    buildingId(curVal, oldVal) {
      this.form.buildingId = curVal;
      //console.log(this.form.buildingId)
      this.form.floorId = "";
      this.form.roomId = "";
      this.formFloorSearch(this.form.buildingId);
    },
    floorId(curVal, oldVal) {
      this.form.floorId = curVal;
      this.form.roomId = "";
      if (this.form.floorId !== 0) {
        this.formRoomSearch(this.form.floorId);
      }
    },
    roomId(curVal, oldVal) {
      this.form.roomId = curVal;
    },
    equipmentId(curVal, oldVal) {
      this.form.equipmentId = curVal;
    },
    Refresh() {
      // this.floor
    }
  },
  mounted() {
    realconsole();
    this.tableList();
    this.unitSearch();
    $("#right").show();
    var roleId = JSON.parse(sessionStorage.getItem("roleId"));
    // if(roleId == 1 || roleId == 2){
    //  }
    // this.$store.commit('Unit',this.unit);
    if (this.$route.path == "/Equipment_management/all") {
      $(".mapTable").hide();
      $(".total").hide();
      $(".plan").show();
    }
  }
};
</script>
