<template>
  <div class="PreresearchChartContent">
    <apexcharts
      class="chart"
      type="radialBar"
      width="180"
      height="180"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'PreresearchChart',
  components: {
    apexcharts: VueApexCharts
  },
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
            offsetX: -24,
            offsetY: -12
          },
          itemMargin: {
            vertical: -5.5,
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
</style>
