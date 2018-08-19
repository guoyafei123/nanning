<template>
	<div id="mapindex" class="xzmap"></div>
</template>

<script>
	import { mapState } from "vuex"
	export default {
		data() {
			return {
				maxroom: 19,
				minroom: 15,
				zoom: 16,
				point: [108.363609, 22.815612],
				mp: Object
			}
		},

		methods: {
			getMapToDiv(divId) {
				var MAP_STYLE_SMALL = [{
						"featureType": "land",
						"elementType": "all",
						"stylers": {
							"color": "#000000ff",
							"hue": "#000000"
						}
					},
					{
						"featureType": "highway",
						"elementType": "all",
						"stylers": {
							"lightness": -42,
							"saturation": -91
						}
					},
					{
						"featureType": "arterial",
						"elementType": "geometry",
						"stylers": {
							"color": "#111111ff",
							"lightness": 1
						}
					},
					{
						"featureType": "green",
						"elementType": "geometry",
						"stylers": {
							"color": "#1b1b1b"
						}
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": {
							"color": "#181818"
						}
					},
					{
						"featureType": "subway",
						"elementType": "geometry.stroke",
						"stylers": {
							"color": "#181818"
						}
					},
					{
						"featureType": "subway",
						"elementType": "all",
						"stylers": {
							"color": "#444444ff",
							"visibility": "off"
						}
					},
					{
						"featureType": "all",
						"elementType": "labels.text.stroke",
						"stylers": {
							"color": "#313131"
						}
					},
					{
						"featureType": "all",
						"elementType": "labels.text.fill",
						"stylers": {
							"color": "#8b8787"
						}
					},
					{
						"featureType": "manmade",
						"elementType": "geometry",
						"stylers": {
							"color": "#1b1b1b"
						}
					},
					{
						"featureType": "local",
						"elementType": "geometry",
						"stylers": {
							"color": "#1a1a1aff"
						}
					},
					{
						"featureType": "subway",
						"elementType": "geometry",
						"stylers": {
							"lightness": -65
						}
					},
					{
						"featureType": "railway",
						"elementType": "all",
						"stylers": {
							"lightness": -40
						}
					},
					{
						"featureType": "boundary",
						"elementType": "geometry",
						"stylers": {
							"color": "#8b8787",
							"weight": "1",
							"lightness": -29
						}
					},
					{
						"featureType": "building",
						"elementType": "all",
						"stylers": {
							"color": "#111111ff",
							"visibility": "on"
						}
					},
					{
						"featureType": "poilabel",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "subwaystation",
						"elementType": "all",
						"stylers": {
							"color": "#666666ff"
						}
					},
					{
						"featureType": "local",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "arterial",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "highway",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "manmade",
						"elementType": "all",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "town",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "district",
						"elementType": "labels",
						"stylers": {
							"visibility": "off"
						}
					},
					{
						"featureType": "railway",
						"elementType": "geometry",
						"stylers": {
							"color": "#111111ff"
						}
					}
				];
				var MAP_CENTER_POINT = new BMap.Point(this.point[0], this.point[1]);
				var mapArr = {};
				var map_id = ['right_top_map', 'mapindex'];
				var map = mapArr[divId];
				if(map != null && map != undefined && map_id.indexOf(divId) > -1) {
					return map;
				}
				map = new BMap.Map(divId, {
					enableMapClick: false
				});
				map.centerAndZoom(MAP_CENTER_POINT, this.zoom); // 初始化地图,设置中心点坐标和地图级别
				map.setMinZoom(this.minroom);
				map.setMaxZoom(this.maxroom);
				map.disableDoubleClickZoom();
				map.enableScrollWheelZoom();
				map.setMapStyle({
					styleJson: MAP_STYLE_SMALL
				});
				map.setCurrentCity("北京");
				mapArr[divId] = map;
				return map;
			},

			addlandmark(name, value, p) {
				let that = this;
				// let map=this.getMapToDiv('allmap');
				function landmark(point, name, value) {
					this._point = point;
					this._name = name;
					this._value = value;
				}
				landmark.prototype = new BMap.Overlay();
				landmark.prototype.initialize = function(map) {
					this._map = map;
					var div = this._div = document.createElement('div');
					$(div).addClass('landmark_marker')
					div.style.position = "absolute";

					$(div).append(that.legend_landmark(this._name, this._value));
					map.getPanes().labelPane.appendChild(div);
					return div;
				}
				landmark.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				}
				var marker = new landmark(new BMap.Point(p[0], p[1]), name, value);
				return marker;
			},
			addpeople(img, value, p) {
				let that = this;
				// let map=this.getMapToDiv('allmap');
				function people(point, img, value) {
					this._point = point;
					this._img = img;
					this._value = value;
				}
				people.prototype = new BMap.Overlay();
				people.prototype.initialize = function(map) {
					this._map = map;
					var div = this._div = document.createElement('div');
					$(div).addClass('landmark_marker')
					div.style.position = "absolute";

					$(div).append(that.legend_people(this._img, this._value));
					map.getPanes().labelPane.appendChild(div);
					return div;
				}
				people.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				}
				var marker = new people(new BMap.Point(p[0], p[1]), img, value);
				return marker;
			},
			addalarm(img, value, size, p) {
				let that = this;

				// let map=this.getMapToDiv('allmap');
				function alarm(point, img, value, size) {
					this._point = point;
					this._img = img;
					this._value = value;
					this._size = size;
				}
				alarm.prototype = new BMap.Overlay();
				alarm.prototype.initialize = function(map) {
					this._map = map;
					var div = this._div = document.createElement('div');
					$(div).addClass('landmark_marker')
					div.style.position = "absolute";
					$(div).append(that.legend_alarm(this._img, this._value, this._size));

					map.getPanes().labelPane.appendChild(div);
					return div;
				}
				alarm.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - 0 + "px";
					this._div.style.top = pixel.y - 0 + "px";
				}
				var l = size * 0.54;
				var marker = new alarm(new BMap.Point(p[0], p[1]), img, value, l);
				var circle = new BMap.Circle(new BMap.Point(p[0], p[1]), size, {});
				var fillcolor = '#bad616';
				if(value <= 3) {
					fillcolor = '#bad616';
				} else if(value <= 6) {
					fillcolor = '#c69e00';
				} else if(value <= 9) {
					fillcolor = '#ff7800';
				} else {
					fillcolor = '#f13131';
				}

				circle.setStrokeStyle("dashed");
				circle.setFillColor('rgba(0,0,0,0 )');
				circle.setStrokeWeight(1);
				circle.setStrokeColor(fillcolor);
				return [marker, circle];
			},

			// 创建百度地图api 默认markeer
			addMarker(map, point, html) {
				var pt = new BMap.Point(point[0], point[1]);
				var myIcon = new BMap.Icon(html, new BMap.Size(300, 127));
				var marker2 = new BMap.Marker(pt, {
					icon: myIcon
				}); // 创建标注
				map.addOverlay(marker2);
			},
			addline(array) {
				var pois = [];
				for(var i = 0; i < array.length; i++) {
					pois.push(new BMap.Point(array[i][0], array[i][1]))
				}

				var polyline = new BMap.Polyline(pois, {
					enableEditing: false, //是否启用线编辑，默认为false
					enableClicking: true, //是否响应点击事件，默认为true
					// icons:[icons],
					strokeWeight: '2', //折线的宽度，以像素为单位
					strokeOpacity: 1, //折线的透明度，取值范围0 - 1
					strokeColor: "#bad616" //折线颜色
				});
				return polyline;
			},
			// 创建自定义marker-建筑标志和值
			legend_landmark(name, value) {
				var style;
				if(value <= 1) {
					style = 'bg-blue';
				} else if(value <= 2) {
					style = 'bg-yellow';
				} else if(value <= 9) {
					style = 'bg-orange';
				} else {
					style = 'bg-red';
				}

				var html = `
            <div class="legend-landmark font-block" style="top:-88px;left:-20px">
                <span class="landmark-rect ` + style + `"></span>
                <span class="marker-name">` + name + `</span><br/>
                <span class="font-block ` + style + `">` + value + `</span>
            </div>
          `
				return html;
			},
			legend_people(img, value) {
				var style;
				var trian;
				if(value <= 1) {
					style = 'bg-gray-ccc';
					trian = 'people-trianlixian';
				} else if(value <= 2) {
					style = 'bg-blue';
					trian = 'people-trianzaixian';
				}

				var html = `
          <div class="legend-people ` + style + `" style="top:-60px;left:-25px">
              <div>
                  <img src="` + img + `">
              </div>
              <span class="` + trian + `"></span>
          </div>
          `
				return html;
			},
			legend_alarm(img, value, size) {
				var style_bg;
				var style_border;
				var style_shadow;
				if(value <= 3) {
					style_bg = 'bg-blue';
					style_border = 'border-blue';
					style_shadow = 'shadow-blue'
				} else if(value <= 6) {
					style_bg = 'bg-yellow';
					style_border = 'border-yellow';
					style_shadow = 'shadow-yellow'
				} else if(value <= 9) {
					style_bg = 'bg-orange';
					style_border = 'border-orange';
					style_shadow = 'shadow-orange'
				} else {
					style_bg = 'bg-red';
					style_border = 'border-red';
					style_shadow = 'shadow-red'
				}
				var pointdiv = size / 2 - size;
				var html = `
          <div class="legend-alarm" style="top:` + pointdiv + `px;left:` + pointdiv + `px;width:` + size + `px;height:` + size + `px">
              <span class="alarm-ani alarm-item ` + style_shadow + `"></span>
              <span class="alarm-ani alarm-item1 ` + style_shadow + `"></span>
              <span class="alarm-ani alarm-item2 ` + style_shadow + `"></span>
              <span class="alarm-ani alarm-item3 ` + style_shadow + `"></span>
              <span class="alarm-ani alarm-item4 ` + style_shadow + `"></span>
              <span class="alarm-ani alarm-item5 ` + style_shadow + `"></span>
              <span class="alarm-min ` + style_bg + `"></span>
              <span class="alarm-max ` + style_border + `"></span>
          </div>
        `
				return html;
			}

		},
		computed: mapState([
			'queryUnitBuildList',
			'queryInspectionLineList'
		]),
		watch: {
			// 所有巡检单位
			queryUnitBuildList() {
				this.queryUnitBuildList.unitBuildList.forEach(element => {
					this.mp.addOverlay(this.addlandmark(element.name, element.status, [element.pointX, element.pointY]))
				});
			},

			// 正在巡检的路线
			queryInspectionLineList() {
				this.queryInspectionLineList.inspectionLineList.forEach(element => {
					if(element.inspectionNodeUserList != 0) {
						let array = []
						element.inspectionNodeUserList.forEach(item => {
							if(item.xRate != null || item.xRate != '' || item.xRate != 0 || item.xRate != 1) {
								this.mp.addOverlay(this.addlandmark(item.buildingName, item.status, [item.xRate, item.yRate]))
								array.push([item.xRate, item.yRate]);
								this.mp.addOverlay(this.addline(array));

							}
						})
					}
					// this.mp.addOverlay(this.addlandmark(element.name,element.status,[element.pointX,element.pointY]))
					console.log(element.buildingName);
				});
			}
		},
		mounted() {
			var map = this.getMapToDiv('mapindex');
			this.mp = map;
			var alarmsize = 500;
			var alarmsize1 = 1000;
			var that = this;
			var scale = {
				19: 20,
				18: 50,
				17: 100,
				16: 200,
				15: 400
			}
			// map.addOverlay(this.addlandmark("银湖",'3',[108.378000,22.795000]))
			// map.addOverlay(this.addlandmark("银湖海",'6',[108.385000,22.795000]))
			// map.addOverlay(this.addlandmark("银湖海岸",'9',[108.381257,22.801501]))
			// map.addOverlay(this.addlandmark("银湖海岸城",'12',[108.385257,22.805501]))
			// map.addOverlay(this.addpeople("银湖海岸城1",'2',[108.382500,22.799300]))
			// var alarm=this.addalarm("银湖海岸城1",'6',alarmsize,[108.385000,22.795000]);
			// map.addOverlay(alarm[0])
			// map.addOverlay(alarm[1])

			// var alarm1=this.addalarm("银湖海岸城1",'12',alarmsize1,[108.385257,22.805501]);
			// map.addOverlay(alarm1[0])
			// map.addOverlay(alarm1[1])

			// map.addEventListener("zoomend", function(evt){
			//   var listenerScale = scale[that.zoom] / scale[map.getZoom()] * alarmsize ;
			//   map.removeOverlay(alarm[0])
			//   alarm=that.addalarm("银湖海岸城1",'6',listenerScale,[108.385000,22.795000])
			//   map.addOverlay(alarm[0])

			//   var listenerScale1 = scale[that.zoom] / scale[map.getZoom()] * alarmsize1 ;
			//   map.removeOverlay(alarm1[0])
			//   alarm1=that.addalarm("银湖海岸城1",'12',listenerScale1,[108.385257,22.805501])
			//   map.addOverlay(alarm1[0])
			// });
			// var linearray = [
			//   [108.378000,22.795000],
			//   [108.385000,22.795000],
			//   [108.381257,22.801501],
			//   [108.385257,22.805501]
			// ];
			// map.addOverlay(this.addline(linearray));
			if(typeof module === 'object') {
				window.jQuery = window.$ = module.exports;
			};
		}
	}
</script>

<style scoped>
	.xzmap {
		width: 100%!important;
		height: 100%!important;
		position: absolute !important;
		background-color: rgb(31, 31, 31)!important;
		/**bottom: 1px;*/
	}
</style>