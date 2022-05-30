<template>
  <div id="particles-js" class="main-container page-2 px-5">
    <!-- <PreresearchChartComponent/> -->
    <!-- <SupportingProductionChartComponentVue /> -->
    <QualityChartComponentVue :label="`3/5`" :color="`#ffff00`" :percent="90" />
  </div>
</template>

<script>
import PreresearchChartComponent from '~/components/PreresearchChart.component.vue'
import SupportingProductionChartComponentVue from '~/components/SupportingProductionChart.component.vue'
import QualityChartComponentVue from '~/components/QualityChart.component.vue'
export default {
  components: { PreresearchChartComponent, SupportingProductionChartComponentVue, QualityChartComponentVue },
  data () {
    return {
      series: [76, 67, 61, 90, 150]
    }
  }
}
</script>

<style lang="scss">
.main-container.page-2 {
  background-image: url("~assets/img/bg-5.png");
}
</style>
