<template>
  <div class="QualityChart">
    <apexcharts
      class="chart"
      type="radialBar"
      width="230"
      height="230"
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
  props: [
    'text'
  ],
  data () {
    return {
      series: [70],
      chartOptions: {
        chart: {
          id: 'PreresearchChart'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        colors: ['#d59056'],
        labels: ['2/5']
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
.QualityChart {
  background: transparent;
  position: relative;
  // .chart {
  //   background: transparent;
  //   position: absolute;
  //   left: 0px;
  //   top: 0px;
  //   -moz-transform: scale(-1, 1);
  //   -webkit-transform: scale(-1, 1);
  //   -o-transform: scale(-1, 1);
  //   -ms-transform: scale(-1, 1);
  //   transform: scale(-1, 1);
  // }
}
</style>
