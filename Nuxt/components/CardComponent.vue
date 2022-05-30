<template>
  <div class="container block-btns mb-4 flex-column" :class="title ? 'small-block' : 'big-block'">
    <img v-if="title" src="~assets/img/bg-block-header-2.png" style="width: 100%; height: 30px;">

    <div v-if="title" style="margin-top: -34px;">
      <div style="margin-top: 7px; font-weight: 600; font-size: 16px; text-align: center;">{{ title }}</div>
    </div>
    <slot>
      This is content
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style lang="scss">

</style>
