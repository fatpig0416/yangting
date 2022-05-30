<template>
  <div id="particles-js" class="main-container page-1 px-5">
    <div class="w-100 h-100">
      <div class="row header-container">
        <div class="col-2" />
        <div class="col-8 page-header pt-2">
          <h1 class="m-0 gradient-text font-weight-bold">
            二级页面
          </h1>
        </div>
        <div class="col-2" />
      </div>
      <div class="row content-container">
        <div class="col-3 d-flex flex-column align-items-center justify-content-center h-100">
          <CardComponent title="产品谱系">
            <div class="row">
              <div class="col-2">
                <img src="~assets/img/btn-left-1.png" width="15">
              </div>
              <div class="col-4 flex-column">
                <img src="~assets/img/model-4.png" class="w-100 mb-3">
                <div class="model-title">
                  F15
                </div>
              </div>
              <div class="col-4 flex-column">
                <img src="~assets/img/model-4.png" class="w-100 mb-3">
                <div class="model-title">
                  F100
                </div>
              </div>
              <div class="col-2">
                <img src="~assets/img/btn-right-1.png" width="15">
              </div>
            </div>
          </CardComponent>

          <CardComponent title="仿真能力">
            <div class="row align-items-center">
              <div class="col-1" />
              <div class="col-6">
                <img src="~assets/img/rocket.png" class="w-100">
              </div>
              <div class="col-4 flex-column align-items-start" style="color: #fff">
                <div>仿真技术：4564</div><br>
                <div>仿真类型：45646</div>
              </div>
              <div class="col-1" />
            </div>
          </CardComponent>

          <CardComponent title="人力资源">
            <div class="row">
              <div class="col">
                <div id="chart3" class="chart-area" />
              </div>
            </div>
          </CardComponent>
        </div>

        <div class="col-6 d-flex flex-column align-items-center justify-content-center h-100">
          <CardComponent>
            <div class="row d-flex align-items-center justify-content-center p-4">
              <img src="~assets/img/model-2.png" style="width: 70%; height: 55%; margin-top: 60px;">
              <img src="~assets/img/bg-h.png" style="width: 80%; height: 33%">
            </div>
          </CardComponent>

          <CardComponent title="AEOS+新时代武器装备质量体系">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="layer17 flex-col">
                <div class="layer18 flex-col" />

                <div class="d-flex flex-row mt-2 flex-wrap justify-content-center">
                  <BtnComponent title="战略" />
                  <img
                    style="width: 25px; height: 16px; margin: 9px 4px"
                    referrerpolicy="no-referrer"
                    src="~assets/img/arrow.png"
                  >
                  <BtnComponent title="5.0产品研发" />
                  <BtnComponent title="6.0生产制造" />
                </div>

                <div class="d-flex flex-row mt-2 flex-wrap justify-content-center">
                  <BtnComponent title="运营类" blue="true" />
                  <img
                    style="width: 25px; height: 16px; margin: 9px 4px"
                    referrerpolicy="no-referrer"
                    src="~assets/img/arrow.png"
                  >
                  <BtnComponent title="1.0产品研发" blue="true" />
                  <BtnComponent title="2.0生产制造" blue="true" />
                  <BtnComponent title="3.0供应商管理" blue="true" />
                  <BtnComponent title="4.0服务保障" blue="true" />
                </div>

                <div class="d-flex flex-row mt-2 flex-wrap justify-content-center">
                  <BtnComponent title="管理与支持类" yellow="true" />
                  <img
                    style="width: 25px; height: 16px; margin: 9px 4px"
                    referrerpolicy="no-referrer"
                    src="~assets/img/arrow.png"
                  >
                  <BtnComponent title="7.0管理人力资源" yellow="true" />
                  <BtnComponent title="8.0管理财务资源" yellow="true" />
                  <BtnComponent title="9.0管理条件建设" yellow="true" />
                  <BtnComponent title="10.0管理业务流程与IT" yellow="true" />
                  <BtnComponent title="11.0安全︱环境︱健康" yellow="true" />
                  <BtnComponent title="12.0管理其他基础支撑" yellow="true" />
                </div>

                <!-- <div class="layer22 flex-row justify-between">
                  <div class="box14 flex-col">
                    <span class="txt14">11.0安全︱环境︱健康</span>
                  </div>
                  <div class="box15 flex-col">
                    <span class="txt15">12.0管理其他基础支撑</span>
                  </div>
                </div> -->
              </div>
            </div>
          </CardComponent>
        </div>

        <div class="col-3 d-flex flex-column align-items-center justify-content-center h-100">
          <CardComponent title="技术发展">
            <div class="row align-items-center">
              <div class="col-4">
                <img src="~assets/img/model-5.png" class="w-100">
              </div>
              <div class="col-4">
                <img src="~assets/img/model-6.png" class="w-100">
              </div>
              <div class="col-4 flex-column" style="color: #fff; font-size: 13px;">
                <div>核心技术：5000项</div> <br/>
                <div>关键技术：2361项</div>
              </div>
            </div>
          </CardComponent>

          <CardComponent title="试验能力">
            <div class="row">
              <div class="col">
                <div id="chart5" class="chart-area" />
              </div>
            </div>
          </CardComponent>

          <CardComponent title="创新平台">
            <div class="row px-3">
              <div class="col-4 flex-column">
                <div class="model-title">
                  重点实验室
                </div>
                <div class="big-number blue">
                  9
                </div>
              </div>
              <div class="col-4 flex-column">
                <div class="model-title">
                  联合实验室
                </div>
                <div class="big-number orange">
                  9
                </div>
              </div>
              <div class="col-4 flex-column">
                <div class="model-title">
                  工程中心
                </div>
                <div class="big-number red">
                  9
                </div>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CardComponent from '../components/CardComponent.vue'
import BtnComponent from '~/components/BtnComponent.vue'

export default {
  name: 'IndexPage',
  components: { BtnComponent },
  mounted () {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 1200
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 2,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover'
      }
    })
    const chart3 = echarts.init(document.getElementById('chart3'))
    const chart5 = echarts.init(document.getElementById('chart5'))
    const option1 = {
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
    }
    const data2 = [['2000-06-05', 116], ['2000-06-06', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85], ['2000-06-11', 73], ['2000-06-12', 68], ['2000-06-13', 92], ['2000-06-14', 130], ['2000-06-15', 245], ['2000-06-16', 139], ['2000-06-17', 115], ['2000-06-18', 111], ['2000-06-19', 309], ['2000-06-20', 206], ['2000-06-21', 137], ['2000-06-22', 128], ['2000-06-23', 85], ['2000-06-24', 94], ['2000-06-25', 71], ['2000-06-26', 106], ['2000-06-27', 84], ['2000-06-28', 93], ['2000-06-29', 85], ['2000-06-30', 73], ['2000-07-01', 83], ['2000-07-02', 125], ['2000-07-03', 107], ['2000-07-04', 82], ['2000-07-05', 44], ['2000-07-06', 72], ['2000-07-07', 106], ['2000-07-08', 107], ['2000-07-09', 66], ['2000-07-10', 91], ['2000-07-11', 92], ['2000-07-12', 113], ['2000-07-13', 107], ['2000-07-14', 131], ['2000-07-15', 111], ['2000-07-16', 64], ['2000-07-17', 69], ['2000-07-18', 88], ['2000-07-19', 77], ['2000-07-20', 83], ['2000-07-21', 111], ['2000-07-22', 57], ['2000-07-23', 55], ['2000-07-24', 60]]
    const dateList2 = data2.map(function (item) {
      return item[0]
    })
    const valueList2 = data2.map(function (item) {
      return item[1]
    })
    const option2 = {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: dateList2,
        axisLabel: {
          color: '#28e8fa',
          fontSize: 10
        }
      },
      yAxis: {
        axisLabel: {
          color: '#28e8fa',
          fontSize: 10
        }
      },
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList2
        }
      ]
    }
    option1 && chart3.setOption(option1)
    option2 && chart5.setOption(option2)
  }
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

  }
}
</style>
