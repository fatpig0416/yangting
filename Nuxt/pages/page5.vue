<template>
  <div class="container-fluid px-5 page3-container">
    <!-- Header -->
    <div class="row">
      <div class="col-12">
        <div class="text-center page-header">
          <img src="~assets/img/title3.png" class="header-title-img">
        </div>
      </div>
    </div>
    <!-- Body -->
    <div class="row page-body">
      <div class="col-12">
        <div class="body-row">
          <div class="side-container">
            <div class="block-container block-sm">
              <div class="block-title">
                科研计划概况
              </div>
              <div class="block-content position-relative pl-3">
                <div class="chart-container chart-col d-flex justify-content-start align-items-center">
                  <img src="~assets/img/chart-2-1.png" style="width: 130px; margin-top: 10px;">
                </div>
                <div class="chart-container chart-col">
                  <div class="chart-area">
                    <PreresearchChartComponent />
                  </div>
                </div>
                <div class="labels-container">
                  <div class="chart-title label">型号</div>
                  <div class="chart-title label">预研</div>
                </div>
              </div>
            </div>
            <div class="block-container block-sm">
              <div class="block-title">
                责任令
              </div>
              <div class="block-content">
                <div class="chart-container chart-col justify-content-center align-items-center">
                  <img src="~assets/img/donut-chart.png" class="donut-chart">
                  <div class="chart-title">
                    70%
                  </div>
                  <div class="chart-subtitle">
                    -blah
                  </div>
                </div>
                <div class="chart-container chart-col">
                  <div class="chart-area chart-area-col">
                    <div class="px-2 chart-label">
                      总数：
                    </div>
                    <div class="px-2 chart-label">
                      已完成：
                    </div>
                    <div class="px-2 chart-label">
                      未完成：
                    </div>
                    <div class="px-2 chart-label">
                      风险项：
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="blocks-container">
              <div class="sub-block-container">
                <div class="block-title">
                  设计任务
                </div>
                <div class="block-content">
                  <div class="chart-container chart-col">
                    <div class="chart-area d-flex flex-column align-items-center justify-content-center">
                      <img src="~assets/img/chart-2-3.png" class="task-design">
                    </div>
                  </div>
                  <div class="chart-container chart-col">
                    <div class="chart-area-col">
                      <div class="px-2 chart-label">
                        总数：
                      </div>
                      <div class="px-2 chart-label">
                        已完成：
                      </div>
                      <div class="px-2 chart-label">
                        未完成：
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sub-block-container">
                <div class="block-title">
                  配套生产
                </div>
                <div class="block-content">
                  <div class="chart-container chart-col">
                    <div class="chart-area">
                      <SupportingProductionChartComponentVue />
                    </div>
                  </div>
                  <div class="chart-container chart-col">
                    <div class="chart-area-col">
                      <div class="px-2 chart-label">
                        总数：
                      </div>
                      <div class="px-2 chart-label">
                        已完成：
                      </div>
                      <div class="px-2 chart-label">
                        未完成：
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="middle-container">
            <div class="project-container">
              <img src="~assets/img/bg-main-2.png" class="main-bg">
              <div class="projects">
                <div class="project top">
                  <img src="~assets/img/item-3.png" class="project-img">
                  <div class="project-name">
                    项目一
                  </div>
                </div>
                <div class="project">
                  <img src="~assets/img/item-3.png" class="project-img">
                  <div class="project-name">
                    项目二
                  </div>
                </div>
                <div class="project">
                  <img src="~assets/img/item-3.png" class="project-img">
                  <div class="project-name">
                    项目三
                  </div>
                </div>
                <div class="project top">
                  <img src="~assets/img/item-3.png" class="project-img">
                  <div class="project-name">
                    项目四
                  </div>
                </div>
              </div>
            </div>
            <div class="digital-container">
              <div class="block-title">
                数字装试
              </div>
              <div class="digital-items">
                <div class="items-container">
                  <div class="item-container">
                    <div class="item-title">
                      装配
                    </div>
                    <div class="item-value item-1">
                      883
                    </div>
                    <div class="item-value-divider item-1" />
                    <div class="item-value item-1">
                      2637
                    </div>
                    <img src="~assets/img/item-5.png" class="item-image">
                  </div>
                  <div class="item-container">
                    <div class="item-title">
                      零部件试验
                    </div>
                    <div class="item-value item-2">
                      883
                    </div>
                    <div class="item-value-divider item-2" />
                    <div class="item-value item-2">
                      2637
                    </div>
                    <img src="~assets/img/item-5.png" class="item-image">
                  </div>
                  <div class="item-container">
                    <div class="item-title">
                      航机试车
                    </div>
                    <div class="item-value item-3">
                      883
                    </div>
                    <div class="item-value-divider item-3" />
                    <div class="item-value item-3">
                      2637
                    </div>
                    <img src="~assets/img/item-5.png" class="item-image">
                  </div>
                  <div class="item-container">
                    <div class="item-title">
                      燃机试车
                    </div>
                    <div class="item-value item-4">
                      883
                    </div>
                    <div class="item-value-divider item-4" />
                    <div class="item-value item-4">
                      2637
                    </div>
                    <img src="~assets/img/item-5.png" class="item-image">
                  </div>
                  <div class="item-container">
                    <div class="item-title">
                      科研试飞
                    </div>
                    <div class="item-value item-5">
                      883
                    </div>
                    <div class="item-value-divider item-5" />
                    <div class="item-value item-5">
                      2637
                    </div>
                    <img src="~assets/img/item-5.png" class="item-image">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="side-container">
            <div class="block-container block-sm">
              <div class="block-title">
                质量工作
              </div>
              <div class="block-content">
                <div class="chart-container chart-col">
                  <div class="chart-area">
                    <QualityChartComponentVue :label="`3/5`" :color="`#ff0000`" :percent="60" />
                  </div>
                  <div class="block-button">
                    <div class="dot red" />
                    <div class="block-button-title">
                      重大严重
                    </div>
                  </div>
                </div>
                <div class="chart-container chart-col">
                  <div class="chart-area">
                    <QualityChartComponentVue :label="`1/3`" :color="`#ffff00`" :percent="33" />
                  </div>
                  <div class="block-button">
                    <div class="dot yellow" />
                    <div class="block-button-title">
                      一本帐问题
                    </div>
                  </div>
                </div>
                <div class="chart-container chart-col">
                  <div class="chart-area">
                    <QualityChartComponentVue :label="`1/2`" :color="`#008000`" :percent="50" />
                  </div>
                  <div class="block-button">
                    <div class="dot green" />
                    <div class="block-button-title">
                      连接挂帐问题
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-container block-sm">
              <div class="block-title">
                外场保障
              </div>
              <div class="block-content">
                <img src="~assets/img/chart-2-6.png" class="world-map">
              </div>
            </div>
            <div class="block-container block-sm">
              <div class="block-title">
                经费管理
              </div>
              <div class="block-content">
                <div class="chart-container chart-col justify-content-center align-items-center">
                  <img src="~assets/img/chart-2-7.png">
                </div>
                <div class="chart-labels-container">
                  <div class="kind-label kind-1">
                    类型1
                  </div>
                  <div class="kind-label kind-2">
                    类型2
                  </div>
                  <div class="kind-label kind-3">
                    类型3
                  </div>
                  <div class="kind-label kind-4">
                    类型4
                  </div>
                  <div class="kind-label kind-5">
                    类型5
                  </div>
                  <div class="kind-label kind-6">
                    类型6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreresearchChartComponent from '~/components/PreresearchChart.component.vue'
import SupportingProductionChartComponentVue from '~/components/SupportingProductionChart.component.vue'
import QualityChartComponentVue from '~/components/QualityChart.component.vue'

export default {
  name: 'IndexPage',
  components: { PreresearchChartComponent, SupportingProductionChartComponentVue, QualityChartComponentVue },
  mounted () {}
}
</script>

<style lang="scss">
.page3-container {
  background-image: url("~assets/img/bg-7.png");
  width: 100vw;
  height: 100vh;
  color: #28e8fa;
  background-size: 100% 100%;
  font-family: "Microsoft YaHei";
  display: flex;
  flex-direction: column;
}

.page-header {
  width: 100%;
  height: 120px;
  background-image: url("~assets/img/header-1.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.header-title-img {
  height: 35px;
  margin-top: 10px;
}

.page-body {
  flex: 1;
  /* border: 1px solid red; */
}

.body-row {
  display: flex;
  flex-direction: row;
  gap: 30px;
  height: 100%;
}

.side-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  flex: 1;
  /* gap: 15px; */
}

.middle-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1.8;
  gap: 22.5px;
}

.block-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}

.block-container.block-sm {
  background-image: url(~assets/img/bg-block-9.png);
  background-size: 100% 100%;
  background-color: transparent;
  border: 0;
  align-items: center;
  justify-content: center;
  height: calc((100% - 45px) / 3);
}

.block-title {
  background-image: url(~assets/img/block-header-2.png);
  background-size: 100% 100%;
  width: 100%;
  height: 30px;
  text-align: center;
  font-weight: bold;
  line-height: 30px;
}

.block-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  gap: 10px;
}

.chart-container {
  display: flex;
  height: 100%;
  width: 50%;
}

.chart-col {
  flex-direction: column;
  justify-content: center;
}

.chart-area {
  width: 100%;
  flex: 1;
  /* border: 1px solid white; */
}

.chart-area-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.chart-title {
  text-align: center;
  font-size: 14px;
  color: #FFFFFF;
  padding-top: 5px;
}

.chart-subtitle {
  text-align: center;
  font-size: 11px;
  color: #FFFFFF;
}

.chart-label {
  text-align: left;
  font-size: 12px;
  color: #FFFFFF;
}

.blocks-container {
  background-image: url(~assets/img/bg-block-9.png);
  background-size: 100% 100%;
  background-color: transparent;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  padding: 0 5%;
  height: calc((100% - 45px) / 3);
}

.sub-block-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block-button {
  border: 1px solid #03adf0;
  background-color: #FFFFFF25;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 7px;
}

.dot.red {
  background-color: red;
}

.dot.yellow {
  background-color: yellow;
}

.dot.green {
  background-color: green;
}

.block-button-title {
  padding-left: 5px;
  font-size: 12px;
  color: #FFFFFF;
}

.chart-labels-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex: 1;
}

.kind-label {
  flex: 1;
  min-width: 45%;
  position: relative;
  padding-left: 20px;
  font-size: 12px;
  color: #FFFFFF;
}

.kind-label::before {
  position: absolute;
  content: ' ';
  width: 10px;
  height: 10px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.kind-label.kind-1::before {
  background-color: #03adf0;
}
.kind-label.kind-2::before {
  background-color: #0ec0c9;
}
.kind-label.kind-3::before {
  background-color: #fd328c;
}
.kind-label.kind-4::before {
  background-color: #0ec94b;
}
.kind-label.kind-5::before {
  background-color: #f9e14d;
}
.kind-label.kind-6::before {
  background-color: #c9780e;
}

.project-container {
  background-image: url(~assets/img/bg-block-9.png);
  background-size: 100% 100%;
  background-color: transparent;
  border: 0;
  height: calc(100% - 15px);
  flex: 1;
  position: relative;
  display: flex;
  padding: 50px 0;
}

.projects {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  height: 220px;
  align-self: center;
  padding-top: 100px;
}
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -120px;
}

.project.top {
  margin-bottom: -40px;
}

.project-img {
  width: 100px;
  height: auto;
}

.project-name {
  font-size: 14px;
  color: #FFFFFF;
  margin-top: 10px;
}

.main-bg {
  width: 100%;
  height: auto;
  z-index: 0;
  position: absolute;
  z-index: 0;
}

.digital-container {
  background-image: url(~assets/img/bg-block-9.png);
  background-size: 100% 100%;
  background-color: transparent;
  border: 0;
  align-items: center;
  justify-content: center;
  height: calc((100% - 45px) / 3);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
}
.digital-items {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.items-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 110px;
  padding-bottom: 38px;
  position: relative;
}

.item-title {
  font-size: 14px;
  color: #FFFFFF;
  padding-bottom: 2px;
}
.item-value {
  font-size: 14px;
  font-weight: 600;
}
.item-value-divider {
  width: 50%;
  height: 2px;
}
.item-image {
  width: 96px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}
.item-value.item-1 {
  color: #00bdda;
}
.item-value-divider.item-1 {
  background-color: #00bdda;
}
.item-value.item-2 {
  color: #ebbe35;
}
.item-value-divider.item-2 {
  background-color: #ebbe35;
}
.item-value.item-3 {
  color: #bc30ea;
}
.item-value-divider.item-3 {
  background-color: #bc30ea;
}
.item-value.item-4 {
  color: #14e362;
}
.item-value-divider.item-4 {
  background-color: #14e362;
}
.item-value.item-5 {
  color: #00bdda;
}
.item-value-divider.item-5 {
  background-color: #00bdda;
}
.task-design {
  width: 100px;
  height: auto;
}
.quality-img {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
}
.world-map {
  width: 90%;
}
.donut-chart {
  width: 120px;
}
.labels-container {
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  left: -0.25rem;
}
.chart-title.label {
  flex: 1;
  text-align: center;
}
</style>
