<template>
  <div class="container block-btns mb-4 flex-column" :class="title ? 'small-block' : 'big-block'">
    <!-- <img src="~assets/img/bg-title.png" style="width: 100%; height: 30px"> -->

    <div v-if="title" class="">
      <div style="margin-top: 7px; font-weight: 600; font-size: 16px;">{{ title }}</div>
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
.block-btns {
  background-image: url('~assets/img/bg-block-8.png');
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
</style>
