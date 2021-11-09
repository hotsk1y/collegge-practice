<template>
  <div>
    <input type="text" class="search" placeholder="Student name..." v-model="search"/>
    <div class="card" v-for="st in searchStud()" :key="st.id">
      <p :class="search && 'bold'">{{ st.name }}</p>
      <div class="doneCheck">
        <span>{{ st.done ? 'Сдал' : 'Не сдал' }}</span>
        <input type="checkbox" v-model="st.done"/>
      </div>
      <button @click="deleteStud(st.id)">Удалить</button>
    </div>
    <p class="bold" v-if="searchStud().length == 0">Результатов не найдено</p>
  </div>
</template>

<script>
import {students} from "./students";

export default {
  data() {
    return {
      search: '',
      students: students,
    }
  },

  methods: {
    deleteStud: function (id) {
      this.students = this.students.filter((student) => student.id !== id);
      this.search = '';
    },
    searchStud: function () {
      if (this.search) {
        return this.students.filter((student) =>
            student.name.toLowerCase().includes(this.search.toLowerCase()),
        );
      }

      return this.students;
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.bold {
  font-weight: 900;
}

.card {
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>