<template>
  <div>
    <div :style="styleobj" @mouseover="changeColor" @mouseout="changeColor"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        styleobj: {
          width: "200px",
          height: "200px",
          backgroundColor: "rgb(196, 90, 90)",
        }
      }
    },
    methods: {
      changeColor: function () {
        this.styleobj.backgroundColor = this.styleobj.backgroundColor == "green" ? "rgb(196, 90, 90)" : "green";
      }
    }
  }
</script>