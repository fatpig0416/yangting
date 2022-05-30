<template>
  <div class="QualityChart">
    <apexcharts
      class="chart"
      type="radialBar"
      width="140"
      height="140"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'QualityChart',
  components: {
    apexcharts: VueApexCharts
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#000000'
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      series: [70],
      chartOptions: {
        chart: {
          id: 'QualityChart'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%'
            },
            track: {
              background: '#044c80cc'
            },
            dataLabels: {
              name: {
                show: true,
                color: '#ffffff'
              },
              value: {
                show: false,
                color: '#ff0000'
              }
            }
          }
        },
        colors: ['#d59056'],
        labels: ['']
      }
    }
  },
  created () {
    this.chartOptions.labels = [this.label]
    this.chartOptions.colors = [this.color]
    this.series = [this.percent]
  },
  methods: {
  }
}
</script>
<style lang="scss">
.QualityChart {
  background: transparent;
  position: relative;
}
</style>
