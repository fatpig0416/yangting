<template>
  <div class="PreresearchChartContent">
    <div>
      <apexcharts
        class="chart"
        type="radialBar"
        width="230"
        height="230"
        :options="chartOptions"
        :series="series"
      />
      <span class="itemText">预研</span>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'PreresearchChart',
  components: {
    apexcharts: VueApexCharts
  },
  props: [
    'width',
    'height'
  ],
  data () {
    return {
      series: [100, 95, 61, 90, 51],
      chartOptions: {
        chart: {
          id: 'PreresearchChart'
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 20,
              size: '10%',
              background: 'transparent'
            },
            track: {
              background: '#044c80cc'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ['#d59056', '#f8c84c', '#08e99b', '#02abff', '#015dff'],
        legend: {
          show: true,
          floating: true,
          position: 'left',
          labels: {
            useSeriesColors: true
          },
          markers: {
            width: 4,
            height: 4,
            offsetX: 0,
            offsetY: -8
          },
          itemMargin: {
            vertical: -3.5,
            horizontal: 100
          },
          formatter () {
            return ''
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: true
            }
          }
        }]
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.PreresearchChartContent {
  background: transparent;
  position: relative;
  .chart {
    background: transparent;
    position: absolute;
    left: 0px;
    top: 0px;
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }
}
.itemText {
  position: absolute;
  width: 40px;
  height: 18px;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: MicrosoftYaHei;
  margin: 200px 0 0 95px;
}
</style>
