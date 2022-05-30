<template>
  <div class="QualityChart">
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
  name: 'QualityChart',
  components: {
    VChart
  },
  // provide: {
  //   [THEME_KEY]: 'dark'
  // },
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff0',
              borderWidth: 2
            },
            data: [
              { value: 26 },
              { value: 12 }
            ],
            color: ['#da0051', '#33576e']
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.QualityChart {
  background: transparent;
  .chart {
    width: 330px;
    height: 300px;
  }
}
</style>
