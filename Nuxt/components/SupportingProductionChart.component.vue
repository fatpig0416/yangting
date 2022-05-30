<template>
  <div class="SupportingProductionChart">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

export default {
  name: 'SupportingProductionChart',
  components: {
    VChart
  },
  // provide: {
  //   [THEME_KEY]: 'dark'
  // },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{d}%'
        },
        series: [
          {
            type: 'pie',
            roseType: 'area',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: 26, name: '26%' },
              { value: 12, name: '12%' },
              { value: 20, name: '20%' },
              { value: 42, name: '42%' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.SupportingProductionChart {
  background: transparent;
  .chart {
    width: 230px;
    height: 200px;
  }
}
</style>
