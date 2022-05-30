<template>
  <div class="main-container page-1 px-5" id="particles-js">
    <div class="w-100 h-100">
      <div class="row header-container">
        <div class="col-2"></div>
        <div class="col-8 page-header pt-2">
          <h1 class="m-0 gradient-text font-weight-bold">二级页面</h1>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row content-container">
        <div class="col-3 d-flex flex-column align-items-center justify-content-center h-100">
          <div class="container block-btns small-block mb-3">
            <div class="sub-header">栏目1</div>
            <div class="row">
              <div class="col-2">
                <img src="~assets/img/btn-left-1.png" width="15">
              </div>
              <div class="col-4 flex-column">
                <img src="~assets/img/model-4.png" class="w-100 mb-3">
                <div class="model-title">000</div>
              </div>
              <div class="col-4 flex-column">
                <img src="~assets/img/model-4.png" class="w-100 mb-3">
                <div class="model-title">111</div>
              </div>
              <div class="col-2">
                <img src="~assets/img/btn-right-1.png" width="15">
              </div>
            </div>
          </div>
          <div class="block-btns small-block mb-3">
            <div class="sub-header">栏目2</div>
            <div class="row">
              <div class="col-1"></div>
              <div class="col-5">
                <img src="~assets/img/model-1.png" class="w-100">
              </div>
              <div class="col-5 flex-column align-items-start">
                <div>1: 4564</div>
                <div>2: 456445</div>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
          <div class="block-btns small-block">
            <div class="sub-header">栏目3</div>
            <div class="row">
              <div class="col">
                <div id="chart3" class="chart-area"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex flex-column align-items-center justify-content-around h-100">
          <div class="row model-container w-100">
            <div class="col-1"></div>
            <div class="col-10">
              <img src="~assets/img/model-2.png">
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row comment-container w-100">
            <div class="col">
            </div>
          </div>
        </div>
        <div class="col-3 d-flex flex-column align-items-center justify-content-center h-100">
          <div class="block-btns small-block mb-3">
            <div class="sub-header">栏目4</div>
            <div class="row">
              <div class="col-1"></div>
              <div class="col-5">
                <img src="~assets/img/model-5.png" class="w-100">
              </div>
              <div class="col-5">
                <img src="~assets/img/model-6.png" class="w-100">
              </div>
              <div class="col-1"></div>
            </div>
          </div>
          <div class="block-btns small-block mb-3">
            <div class="sub-header">栏目5</div>
            <div class="row">
              <div class="col">
                <div id="chart5" class="chart-area"></div>
              </div>
            </div>
          </div>
          <div class="block-btns small-block">
            <div class="sub-header">栏目6</div>
            <div class="row px-3">
              <div class="col-4 flex-column">
                <div class="model-title">2</div>
                <div class="big-number blue">9</div>
              </div>
              <div class="col-4 flex-column">
                <div class="model-title">3</div>
                <div class="big-number orange">9</div>
              </div>
              <div class="col-4 flex-column">
                <div class="model-title">4</div>
                <div class="big-number red">9</div>
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
  name: 'IndexPage',
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
    
    let chart3 = echarts.init(document.getElementById("chart3"));
    let chart5 = echarts.init(document.getElementById("chart5"));

    let option1 = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    const data2 = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
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
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        },
      ],
      tooltip: {
        trigger: 'axis'
      },

      xAxis: {
        data: dateList2,
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10
        },
      },
      yAxis: {
        axisLabel: {
          color: "#28e8fa",
          fontSize: 10
        },
      },
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList2
        },
      ]
    };

    option1 && chart3.setOption(option1);
    option2 && chart5.setOption(option2);
  },
}
</script>

<style lang="scss">
  .main-container {
    &.page-1 {
      background-image: url('~assets/img/bg-2.jpg');
    }
    .header-container {
      height: 100px;
      .page-header {
        background-image: url('~assets/img/header-1.png');
        background-size: 100%;
        text-align: center;
        height: 100px;
      }
    }
    .content-container {
      height: calc(100vh - 100px);
      .model-container {
        height: 60%;
        margin-top: -40px;
        .col-10 {
          background-image: url('~assets/img/bg-block-2.png');
          background-size: 100% 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 80%;
          }
        }
      }
      .comment-container {
        height: 30%;
        .col {
          background-image: url('~assets/img/bg-block-3.png');
          background-size: 100% 100%;
        }
      }
      .block-btns {
        background-image: url('~assets/img/bg-block-2.png');
        display: block;
        &.small-block {
          width: 90%;
          height: 30%;
          font-size: 14px;
        }
        .sub-header {
          background-image: url('~assets/img/block-header-1.png');
          background-size: 100% 100%;
          width: 100%;
          height: 30px;
          text-align: center;
          font-weight: bold;
          line-height: 30px;
        }
        .row {
          height: calc(100% - 30px);
          .col-2, .col-4, .col-5 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .model-title {
          background-image: url('~assets/img/bg-block-5.png');
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
