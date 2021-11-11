<template>
  <div>
    <div class="item">
      <span>Enter Age:</span>
      <input type="number" v-model.number="age">
    </div>
    <div class="item">
      <span>Enter Message:</span>
      <input type="text" v-model.lazy="msg">
    </div>
    <div class="item">
      <span>Enter Message:</span>
      <input type="text" v-model.trim="message">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        age: null,
        msg: '',
        message: '',
      }
    }
  }
</script>

<style scoped>
  .item{
    margin-bottom: 10px;
  }
  span {
    margin-right: 5px;
  }
</style>