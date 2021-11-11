<template>
  <div>
    <div class="newStudent card">
      <p class="card__item"><b>Добавить нового студента</b></p>
      <input v-model="studName" class="card__item" placeholder="Student name..." type="text">

      <div class="card__item">
        <span>Сдал(a) / Не сдал(a)</span>
        <input v-model="isDone" type="checkbox">
      </div>

      <div class="card__item">
        <span class="group">Группа</span>
        <input v-model="studGroup" placeholder="Student group..." type="text">
      </div>

      <button @click="addStud">Добавить</button>
    </div>

    <input v-model="search" class="search" placeholder="Student name..." type="text"/>
    <div v-for="st in searchStud()" :key="st.id" class="card">
      <p :class="search && 'bold'">{{ st.name }}</p>
      <p>{{ st.group }}</p>
      <div class="doneCheck">
        <input v-model="st.isDone" type="checkbox"/>
        <span>{{ st.isDone ? 'Сдал(а)' : 'Не сдал(а)' }}</span>
      </div>
      <button @click="deleteStud(st.id)">Удалить</button>
    </div>
    <p v-if="searchStud().length == 0" class="bold">Результатов не найдено</p>

  </div>


</template>

<script>
import {students} from "./students";

export default {
  data() {
    return {
      search: '',
      students: students,
      studName: '',
      studGroup: '',
      isDone: false,
    }
  },

  methods: {
    deleteStud(id) {
      this.students = this.students.filter((student) => student.id !== id);
      this.search = '';
    },
    searchStud() {
      if (this.search) {
        return this.students.filter((student) =>
            student.name.toLowerCase().includes(this.search.toLowerCase()),
        );
      }
      return this.students;
    },
    addStud() {
      if (this.studName.length > 0 && this.studGroup.length > 0) {
        const newStudent = {
          id: Date.now(),
          name: this.studName,
          group: this.studGroup,
          isDone: this.isDone,
        }
        students.push(newStudent)
        this.studName = '';
        this.studGroup = '';
        this.isDone = false;
      }
    },
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

.newStudent {
  border: 2px solid red;
  margin: 0 auto;
  width: 500px;
}

.card__item {
  margin-bottom: 10px;
}

.card__item .group {
  margin-right: 10px;
}
</style>