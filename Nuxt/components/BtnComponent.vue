<template>
  <div class="cBtn" :class="yellow ? 'cYellow' : blue ? 'cBlue' : 'cRed'">
    <span class="txt13">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    yellow: String,
    blue: String,
    red: String,
  }
}
</script>

<style lang="scss">
.cBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(254, 150, 3, 1);
  border-radius: 5px;
  color: #fff;
  margin-left: 11px;
  padding: 3px 7px;
  margin: 4px;
  font-size: 12px;
  min-width: 80px;
}
.cRed {
  background-color: #e85113;
}
.cYellow {
  background-color: rgba(254, 150, 3, 1);
}
.cBlue {
  background-color: #04adf0
}
</style>
