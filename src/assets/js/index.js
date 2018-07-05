// 跳转添加样式
var pathname = window.location.pathname;
console.log(pathname);
$("a[href='" + pathname + "']").parent().addClass("footer-nav-active");

function mini_go(id, num) {
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

setInterval(function () {
    // var a = (99 * Math.random()).toFixed(2);
    mini_go('header-canvas-people', 1 - ((99 * Math.random()).toFixed(2) / 100));
    mini_go('header-canvas-host', 1 - ((99 * Math.random()).toFixed(2) / 100));
    mini_go('header-canvas-cpu', 1 - ((99 * Math.random()).toFixed(2) / 100));
    mini_go('header-canvas-memory', 1 - ((99 * Math.random()).toFixed(2) / 100));
}, 2000)
mini_go('header-canvas-people', 88.88);
mini_go('header-canvas-host', 88.88);
mini_go('header-canvas-cpu', 88.88);
mini_go('header-canvas-memory', 88.88);

// 巡检右下角图表

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', '123', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: true,
        axisLine: {
            lineStyle: {
                color: '#999',

            }
        }
    },

    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#999',

            }
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#333']
            }
        },
    },
    // 图例
    legend: {
        data: ['高', '低']
    },

    // 调整实际显示的 margin
    grid: {
        y: 30,
        x2: 10,
        y2: 30,
        x: 40,
        borderWidth: 1
    },
    // 数据
    series: [{
        data: [100, 499, 50, 1111, 45, 345, 907],
        name: '低',
        type: 'line',
        symbol: 'none',
        smooth: true,
        color: {
            colorStops: [{
                offset: 0,
                color: '#333'
            }]
        }
    }, {
        data: [300, 950, 900, 800, 700, 600, 700],
        name: '高',
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle: { normal: {} },
        color: {
            colorStops: [{
                offset: 0,
                color: 'rgba(255,255,255,0.3)' // 0% 处的颜色
            }],
        },

    }],
    tooltip: {
        enterable: true,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
};
pie = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '70%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            color: ['#bad616', '#333'],
            data: [
                { value: 335, name: '50%', selected: true },
                { value: 679, name: '' }
            ]
        }
    ]
};

// 没有错开的饼图
pie1 = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },

    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '70%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 90, name: '直接访问' },
                { value: 210, name: '邮件营销' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 根据值判断柱子颜色的柱状图
option1 = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            show:true,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '12'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            show:false,
        }
    ],
    grid: {
        y: 40,
        x2: 0,
        y2: 20,
        x: 0,
        borderWidth: 1
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220, 192],
            itemStyle: {
                normal: {
                    // 值显示在柱子顶部
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: function (params) {
                                if (params.value > 0 && params.value < 100) {
                                    return "#333333";
                                } else if (params.value >= 100 && params.value <= 200) {
                                    return "#666666";
                                } else if (params.value >= 200 && params.value <= 300) {
                                    return "#999999";
                                }
                                return "#bad616";
                            }
                        },
                        formatter: function (params) {
                            if (params.value == 0) {
                                return '';
                            } else {
                                return params.value;
                            }
                        }
                    },
                    color: function (params) {
                        if (params.value > 0 && params.value < 100) {
                            return "#333333";
                        } else if (params.value >= 100 && params.value <= 200) {
                            return "#666666";
                        } else if (params.value >= 200 && params.value <= 300) {
                            return "#999999";
                        }
                        return "#bad616";
                    }
                }
            }
        }
    ]
};






if (document.getElementById("pie1")) {
    var pie1 = echarts.init(document.getElementById("pie1"));
    pie1.setOption(pie, true);
}
if (document.getElementById("pie2")) {
    var pie2 = echarts.init(document.getElementById("pie2"));
    pie2.setOption(pie, true);
}
if (document.getElementById("pie3")) {
    var pie3 = echarts.init(document.getElementById("pie3"));
    pie3.setOption(pie, true);
}
if (document.getElementById("pieb1")) {
    var pieb1 = echarts.init(document.getElementById("pieb1"));
    pieb1.setOption(pie, true);
}



$(function () {
    // $(".form-control").datetimepicker({
    //     format: 'yyyy-mm-dd',
    //     minView: "month",
    // });
})
// 巡检路线弹唱

// 弹窗的三个参数
// a:要点击的按钮
// b:要弹出的目标窗
function set_popup(a, b) {
    var index_left_xunjianluxian_re = 0;
    $(a).click(function () {
        if (index_left_xunjianluxian_re == 0) {
            $(b).css('left', '0px');
            index_left_xunjianluxian_re = 1;
            $(this).addClass('set-popup-active');
            $(b).children("div:first").children("span:first").children("i:last").click(function () {
                $(b).css('left', '-100%');
                index_left_xunjianluxian_re = 0;
                $(a).removeClass('set-popup-active');
            })
        } else {
            $(b).css('left', '-100%');
            index_left_xunjianluxian_re = 0;
            $(this).removeClass('set-popup-active');
        }
    })
}
set_popup('.popup-routebtn', '.popup-route')
set_popup('.popup-inspectbtn', '.popup-inspect')


// 测试巡检状态切换
$('#ceshi-moren').click(function () {
    $('#inspectbtn-company').addClass('display-block').removeClass('display-none')
    $('#inspectbtn-bulidinfo').addClass('display-none').removeClass('display-block')
    $('#inspectbtn-linepeople').addClass('display-none').removeClass('display-block')
})

$('#ceshi-jianzhu').click(function () {
    $('#inspectbtn-company').addClass('display-none').removeClass('display-block')
    $('#inspectbtn-bulidinfo').addClass('display-block').removeClass('display-none')
    $('#inspectbtn-linepeople').addClass('display-none').removeClass('display-block')
})

$('#ceshi-luxian').click(function () {
    $('#inspectbtn-company').addClass('display-none').removeClass('display-block')
    $('#inspectbtn-bulidinfo').addClass('display-none').removeClass('display-block')
    $('#inspectbtn-linepeople').addClass('display-block').removeClass('display-none')
})

$('#ceshi-tubiao').click(function () {
    $('#information-info').addClass('display-none').removeClass('display-block')
    $('#information-char').addClass('display-block').removeClass('display-none')
})
$('#ceshi-xiangqing').click(function () {
    $('#information-char').addClass('display-none').removeClass('display-block')
    $('#information-info').addClass('display-block').removeClass('display-none')
})
