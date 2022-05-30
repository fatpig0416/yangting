<template>
  <div class="main-container page-2-2 px-5" id="particles-js">
    <div class="w-100 h-100">
      <div class="row header-container">
        <div class="col-3"></div>
        <div class="col-6 page-header">
          <h1 class="pt-1 m-0 gradient-text font-weight-bold">三级页面2</h1>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row content-container">
        <div
          class="col-3 d-flex flex-column align-items-center justify-content-center h-100"
        >
          <div class="container block-btns left-side small-block mb-3">
            <div class="sub-header">
              <span class="gradient-text">经营指标</span>
            </div>
            <div class="row">
              <div class="col">
                <video ref="video" id="video" autoplay></video>
              </div>
            </div>
          </div>
          <div class="block-btns small-block left-side mb-3">
            <div class="sub-header">
              <span class="gradient-text">条件建设</span>
            </div>
            <div class="row">
              <div class="col">
                <div id="chart2" class="chart-area"></div>
              </div>
            </div>
          </div>
          <div class="block-btns small-block left-side">
            <div class="sub-header">
              <span class="gradient-text">供应物流</span>
            </div>
            <div class="row">
              <div class="col">
                <div id="chart3" class="chart-area"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-6 d-flex flex-column align-items-center justify-content-around h-100"
        >
          <div class="row model-container w-100">
            <div class="col-1"></div>
            <div class="col-10 flex-column justify-content-end">
              <img src="~assets/img/model-7.png" class="w-100" />
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row comment-container w-100 px-5">
            <div class="col-12 text-center pt-4 mt-3 font-weight-bold">
              <h2 class="gradient-text">999</h2>
            </div>
            <div class="col-4">
              <div class="line-number green">9825</div>
              <img src="~assets/img/item-4.png" width="200" />
            </div>
            <div class="col-4">
              <div class="line-number yellow">9825</div>
              <img src="~assets/img/item-4.png" width="200" />
            </div>
            <div class="col-4">
              <div class="line-number pink">9825</div>
              <img src="~assets/img/item-4.png" width="200" />
            </div>
          </div>
        </div>
        <div
          class="col-3 d-flex flex-column align-items-center justify-content-center h-100"
        >
          <div class="block-btns small-block right-side mb-3">
            <div class="sub-header">
              <span class="gradient-text">管理工作</span>
            </div>
            <div class="row">
              <div class="col">
                <div id="chart4" class="chart-area"></div>
              </div>
            </div>
          </div>
          <div class="block-btns small-block right-side mb-3">
            <div class="sub-header">
              <span class="gradient-text">建档工作</span>
            </div>
            <div class="row">
              <div class="col">
                <div id="chart5" class="chart-area"></div>
              </div>
            </div>
          </div>
          <div class="block-btns small-block right-side">
            <div class="sub-header">
              <span class="gradient-text">远程试验</span>
            </div>
            <div class="row">
              <div class="col">
                <div id="chart6" class="chart-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 2,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
    this.video = this.$refs.video;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          console.log(stream);
          video.srcObject = stream;
          this.video.play();
        });
    }
    let chart2 = echarts.init(document.getElementById("chart2"));
    let chart3 = echarts.init(document.getElementById("chart3"));
    let chart4 = echarts.init(document.getElementById("chart4"));
    let chart5 = echarts.init(document.getElementById("chart5"));
    let chart6 = echarts.init(document.getElementById("chart6"));

    const data2 = [
      ["2000-06-05", 116],
      ["2000-06-06", 129],
      ["2000-06-07", 135],
      ["2000-06-08", 86],
      ["2000-06-09", 73],
      ["2000-06-10", 85],
      ["2000-06-11", 73],
      ["2000-06-12", 68],
      ["2000-06-13", 92],
      ["2000-06-14", 130],
      ["2000-06-15", 245],
      ["2000-06-16", 139],
      ["2000-06-17", 115],
      ["2000-06-18", 111],
      ["2000-06-19", 309],
      ["2000-06-20", 206],
      ["2000-06-21", 137],
      ["2000-06-22", 128],
      ["2000-06-23", 85],
      ["2000-06-24", 94],
      ["2000-06-25", 71],
      ["2000-06-26", 106],
      ["2000-06-27", 84],
      ["2000-06-28", 93],
      ["2000-06-29", 85],
      ["2000-06-30", 73],
      ["2000-07-01", 83],
      ["2000-07-02", 125],
      ["2000-07-03", 107],
      ["2000-07-04", 82],
      ["2000-07-05", 44],
      ["2000-07-06", 72],
      ["2000-07-07", 106],
      ["2000-07-08", 107],
      ["2000-07-09", 66],
      ["2000-07-10", 91],
      ["2000-07-11", 92],
      ["2000-07-12", 113],
      ["2000-07-13", 107],
      ["2000-07-14", 131],
      ["2000-07-15", 111],
      ["2000-07-16", 64],
      ["2000-07-17", 69],
      ["2000-07-18", 88],
      ["2000-07-19", 77],
      ["2000-07-20", 83],
      ["2000-07-21", 111],
      ["2000-07-22", 57],
      ["2000-07-23", 55],
      ["2000-07-24", 60],
    ];
    const dateList2 = data2.map(function (item) {
      return item[0];
    });
    const valueList2 = data2.map(function (item) {
      return item[1];
    });
    let option2 = {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: "continuous",
          seriesIndex: 0,
          min: 0,
          max: 400,
        },
      ],
      tooltip: {
        trigger: "axis",
      },

      xAxis: {
        data: dateList2,
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      yAxis: {
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      series: [
        {
          type: "line",
          showSymbol: false,
          data: valueList2,
        },
      ],
    };

    let option3 = {
      dataset: {
        source: [
          ["score", "amount", "product"],
          [89.3, 58212, "Matcha Latte"],
          [57.1, 78254, "Milk Tea"],
          [74.4, 41032, "Cheese Cocoa"],
          [50.1, 12755, "Cheese Brownie"],
          [89.7, 20145, "Matcha Cocoa"],
          [68.1, 79146, "Tea"],
          [19.6, 91852, "Orange Juice"],
          [10.6, 101852, "Lemon Juice"],
          [32.7, 20112, "Walnut Brownie"],
        ],
      },
      grid: { containLabel: true },
      xAxis: {
        name: "amount",
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      yAxis: {
        type: "category",
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      series: [
        {
          type: "bar",
          itemStyle: {
            color: "#ebbe35",
          },
          encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product",
          },
        },
      ],
    };

    const data5 = [
      [5000, 10000, 6785.71],
      [4000, 10000, 6825],
      [3000, 6500, 4463.33],
      [2500, 5600, 3793.83],
      [2000, 4000, 3060],
      [2000, 4000, 3222.33],
      [2500, 4000, 3133.33],
      [1800, 4000, 3100],
      [2000, 3500, 2750],
      [2000, 3000, 2500],
      [1800, 3000, 2433.33],
      [2000, 2700, 2375],
      [1500, 2800, 2150],
      [1500, 2300, 2100],
      [1600, 3500, 2057.14],
      [1500, 2600, 2037.5],
      [1500, 2417.54, 1905.85],
      [1500, 2000, 1775],
      [1500, 1800, 1650],
    ];
    // prettier-ignore
    const cities5 = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
    const barHeight5 = 50;
    let option5 = {
      grid: {
        top: 100,
      },
      angleAxis: {
        type: "category",
        data: cities5,
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          const id = params.dataIndex;
          return (
            cities5[id] +
            "<br>Lowest：" +
            data5[id][0] +
            "<br>Highest：" +
            data5[id][1] +
            "<br>Average：" +
            data5[id][2]
          );
        },
      },
      radiusAxis: {
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      polar: {},
      series: [
        {
          type: "bar",
          itemStyle: {
            color: "transparent",
          },
          data: data5.map(function (d) {
            return d[0];
          }),
          coordinateSystem: "polar",
          stack: "Min Max",
          silent: true,
        },
        {
          type: "bar",
          itemStyle: {
            color: "#bc30ea",
          },
          data: data5.map(function (d) {
            return d[1] - d[0];
          }),
          coordinateSystem: "polar",
          name: "Range",
          stack: "Min Max",
        },
        {
          type: "bar",
          itemStyle: {
            color: "transparent",
          },
          data: data5.map(function (d) {
            return d[2] - barHeight5;
          }),
          coordinateSystem: "polar",
          stack: "Average",
          silent: true,
          z: 10,
        },
        {
          type: "bar",
          data: data5.map(function (d) {
            return barHeight5 * 2;
          }),
          coordinateSystem: "polar",
          name: "Average",
          stack: "Average",
          barGap: "-100%",
          z: 10,
        },
      ],
    };
    let option4 = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10,
        },
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
          itemStyle: {
            color: "#14e362",
          },
        },
      ],
    };

    let option6 = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            color: "#28e8fa",
            fontSize: 10,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "ml",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value} ml",
          },

          axisLabel: {
            color: "#28e8fa",
            fontSize: 10,
          },
        },
        {
          show: false,
          type: "value",
          name: "°C",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value} °C",
          },
          axisLabel: {
            color: "#28e8fa",
            fontSize: 10,
          },
        },
      ],
      series: [
        {
          name: "ml",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " ml";
            },
          },
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
        },
        {
          name: "°C",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " °C";
            },
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4],
        },
      ],
    };
    option2 && chart2.setOption(option2);
    option3 && chart3.setOption(option3);
    option4 && chart4.setOption(option4);
    option5 && chart5.setOption(option5);
    option6 && chart6.setOption(option6);
  },
};
</script>

<style lang="scss">
.main-container.page-2-2 {
  background-image: url("~assets/img/bg-4.png");
  .header-container {
    height: 100px;
    .page-header {
      background-image: url("~assets/img/header-2.png");
      background-size: 100% 100%;
      text-align: center;
      height: 80px;
    }
  }
  .content-container {
    height: calc(100vh - 100px);
    .model-container {
      height: 60%;
      .col-10 {
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .comment-container {
      height: 30%;
      background-image: url("~assets/img/bg-block-3.png");
      background-size: 100% 100%;
      .col-4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        margin-top: -90px;
        img {
          width: 50%;
          margin-top: -30px;
        }
        .line-number {
          &.green {
            color: #00eaff;
          }
          &.yellow {
            color: #b8b72b;
          }
          &.pink {
            color: #b82ba0;
          }
        }
      }
    }
    .block-btns {
      background-image: url("~assets/img/bg-block-3.png");
      display: block;
      text-align: center;
      &.left-side {
        transform: skewY(-7deg);
      }
      &.right-side {
        transform: skewY(7deg);
      }
      &.small-block {
        width: 90%;
        height: 30%;
        video {
          width: 100%;
          height: calc(100% - 70px);
          object-fit: cover;
          object-position: center;
          border-radius: 15px;
        }
        font-size: 14px;
        &.large {
          height: 28%;
        }
        &.small {
          height: 22%;
        }
      }
      .sub-header {
        background-image: none;
        width: 100%;
        height: 30px;
        text-align: center;
        font-weight: bold;
        line-height: 30px;
        margin-top: 10px;
      }
      .row {
        height: calc(100% - 40px);
        .col-2,
        .col-4,
        .col-5 {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .model-title {
        background-image: url("~assets/img/bg-block-5.png");
        background-size: 100% 100%;
        width: 100px;
        height: 20x;
        text-align: center;
      }
      .big-number {
        font-size: 100px;
        font-weight: bold;
        line-height: 100px;
        &.blue {
          color: #00ffff;
        }
        &.orange {
          color: #fe9603;
        }
        &.red {
          color: #e75114;
        }
      }
    }
  }
}
</style>
