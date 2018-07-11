<template>
  <div id="legend"></div>
</template>

<script>
  export default {
    mounted() {
      this.legend_landmark('实验教学楼1号', '1.7', '300', '400');
      this.legend_landmark('实验教学楼2号', '4.5', '500', '600');
      this.legend_landmark('实验教学楼3号', '8.1', '700', '200');
      this.legend_landmark('实验教学楼4号', '12.8', '1000', '800');

      this.legend_people('src/assets/images/people.png', '2', '500', '200');
      this.legend_people('src/assets/images/people.png', '1', '1200', '700');

      this.legend_alarm('实验教学楼1号', '1.7', '700', '400', 400);
      this.legend_alarm('实验教学楼2号', '4.5', '1360', '200', 500);
      this.legend_alarm('实验教学楼3号', '8.1', '100', '100', 300);
      this.legend_alarm('实验教学楼4号', '12.8', '1200', '700', 200);
    },
    methods: {
      legend_landmark(name, value, left, top) {
        var style;
        if (value <= 3) {
          style = 'bg-blue';
        } else if (value <= 6) {
          style = 'bg-yellow';
        } else if (value <= 9) {
          style = 'bg-orange';
        } else {
          style = 'bg-red';
        }

        var landmark_html = `
        <div class="legend-landmark font-block" style="top:` + top + `px;left:` + left + `px">
            <span class="landmark-rect ` + style + `"></span>
            <span>` + name + `</span><br/>
            <span class="font-block ` + style + `">` + value + `</span>
        </div>
    `
        $('#legend').append(landmark_html);
      },
      legend_people(img, value, left, top) {
        var style;
        var trian;
        if (value <= 1) {
          style = 'bg-gray-ccc';
          trian = 'people-trianlixian';
        } else if (value <= 2) {
          style = 'bg-blue';
          trian = 'people-trianzaixian';
        }

        var landmark_html = `
        <div class="legend-people ` + style + `" style="top:` + top + `px;left:` + left + `px">
            <div>
                <img src="` + img + `">
            </div>
            <span class="` + trian + `"></span>
        </div>
    `
        $('#legend').append(landmark_html);
      },
      legend_alarm(img, value, left, top, size) {
        var style_bg;
        var style_border;
        var style_shadow;
        if (value <= 3) {
          style_bg = 'bg-blue';
          style_border = 'border-blue';
          style_shadow='shadow-blue'
        } else if (value <= 6) {
          style_bg = 'bg-yellow';
          style_border = 'border-yellow';
          style_shadow='shadow-yellow'
        } else if (value <= 9) {
          style_bg = 'bg-orange';
          style_border = 'border-orange';
          style_shadow='shadow-orange'
        } else {
          style_bg = 'bg-red';
          style_border = 'border-red';
          style_shadow='shadow-red'
        }
        var landmark_html = `
        <div class="legend-alarm" style="top:` + top + `px;left:` + left + `px;width:` + size + `px;height:` + size + `px">
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
        $('#legend').append(landmark_html);
        // <span class="alarm-max ` + style_border + `"></span>
      }
    }
  }
</script>

<style scoped>

</style>
