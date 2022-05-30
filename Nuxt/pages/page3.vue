<template>
  <div id="particles-js" class="main-container page-1 px-5">
    <div class="w-100 h-100">
      <div class="row header-container">
        <div class="col-2" />
        <div class="col-8 page-header pt-2">
          <h1 class="m-0 gradient-text font-weight-bold">
            能力展示
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
                <img src="~assets/img/chart-0.png" style="width: 100%; margin-top: 20px;">
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

          <CardComponent title="AEOS+新时代武器装备质量体系" center="true">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="layer17 flex-col p-3">
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
                <div>核心技术：5000项</div> <br>
                <div>关键技术：2361项</div>
              </div>
            </div>
          </CardComponent>

          <CardComponent title="试验能力">
            <div class="row px-3">
              <div class="col-4 flex-column">
                <div class="model-title">
                  露天试车台
                </div>
                <img src="~assets/img/chart-1.png" style="width: 90%; margin-top: 10px;">
              </div>

              <div class="col-4 flex-column">
                <div class="model-title ">
                  室内整机试车台
                </div>
                <img src="~assets/img/chart-2.png" style="width: 90%; margin-top: 20px;">
              </div>
              <div class="col-4 flex-column">
                <div class="model-title ">
                  不见/系统级试验器
                </div>
                <img src="~assets/img/chart-1.png" style="width: 90%; margin-top: 10px;">
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
import DoughnutChart from '../components/Doughnut.vue'
import BtnComponent from '~/components/BtnComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    BtnComponent
  },
  head: {
    script: [
      {
        src: 'https://canvasjs.com/assets/script/canvasjs.min.js',
        body: true
      }
    ]
  }
}
</script>

<style lang="scss">
.main-container {
  &.page-1 {
    background-image: url('~assets/img/bg-0.png');
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
      background-image: url('~assets/img/bg-block-0.png');
      display: block;

      &.small-block {
        width: 100%;
        height: 220px;
        font-size: 14px;
      }

      &.big-block {
        width: 100%;
        height: 465px;
        margin-top: 6px;
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

        .col-2,
        .col-4,
        .col-5 {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .model-title {
        background-image: url('~assets/img/bg-block-5.png');
        background-size: 100% 100%;
        width: 100px;
        height: 22x;
        text-align: center;
        color: #fff;
        padding: 2px;
        font-size: 11px;
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
