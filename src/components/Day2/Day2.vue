<template>
  <div>
    <div class="card">
      <input type="radio" name="author" v-model="isAuthor" :value="true"> Есть автор
      <input type="radio" name="author" v-model="isAuthor" :value="false"> Нет автора
    </div>

    <div class="card">
      <p>Отфильтрованные цитаты</p>
      <hr>
      <div class="quote" v-for="item in filteredQuotes" :key="item.quote">
        <h3 :class="item.quote.length > 40 && 'red'">{{item.quote}}</h3>
        <p>{{item.source}}</p>
      </div>
    </div>

    <div class="card">
      <p>Отсортированные цитаты</p>
      <hr>
      <div class="quote" v-for="item in sortedQuotes" :key="item.quote">
        <h3 :class="item.quote.length > 40 && 'red'">{{item.quote}}</h3>
        <p>{{item.source}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {quotesArray} from "./quotesArray";

  export default {
    data() {
      return {
        isAuthor: "",
        quotes: quotesArray,
      }
    },
    methods: {

    },
    computed: {
      filteredQuotes() {
        return quotesArray.filter(item => this.isAuthor === Boolean(item.source));
      },
      sortedQuotes() {
        let newQuotes = [...quotesArray];
        return newQuotes.sort((a, b) => (a.source > b.source) ? 1 : -1);
      }
    }
  }
</script>

<style scoped>
.card {
  border: 2px solid #ccc;
  padding: 20px;
  margin-bottom: 15px;
}
.red {
  color: red;
}
</style>