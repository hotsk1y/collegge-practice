<template>
  <div class="day1">
    <div class="if-else">

      <!--      1-->
      <div class="task1 task">
        <input type="text" placeholder="Номер квартиры" v-model="numberOfFlat">
        <div v-if="numberOfFlat > 0 && numberOfFlat < 91">
          <span v-if="numberOfFlat > 0 && numberOfFlat < 21">Эта квартира находится в 1-м подъезде</span>
          <span v-else-if="numberOfFlat > 20 && numberOfFlat < 49">Эта квартира находится во 2-м подъезде</span>
          <span v-else-if="numberOfFlat > 48 && numberOfFlat < 91">Эта квартира находится в 3-м подъезде</span>
        </div>
        <div v-else-if="!numberOfFlat">
          Введите номер квартиры ( 1: 1-20, 2: 21-48, 3: 49-90)
        </div>
        <div v-else>
          Этой квартиры нет в доме
        </div>
      </div>

<!--      1 -->
      <div class="task2 task">
        <input type="text" v-model="loginEasy" placeholder="login">
        <input type="text" v-model="passwordEasy" placeholder="password">
        <div v-if="loginEasy && passwordEasy">
          <p v-if="(loginEasy === 'toma') && (passwordEasy === '123')">Добро пожаловать</p>
          <p v-else-if="(loginEasy === 'petya') && (passwordEasy === '777')">Добро пожаловать</p>
          <p v-else-if="(loginEasy === 'olya') && (passwordEasy === '456')">Добро пожаловать</p>
          <p v-else>Неверный логин или пароль</p>
        </div>
      </div>

      <!--      1-->
      <div class="task3 task">
        <input type="text" placeholder="Год рождения" v-model="userYear">
        <div v-if="userYear >= 1921 && userYear <= 2021">
          <span>Вам {{ 2021 - userYear }} лет</span>
          <p v-if="2021 - userYear >= 16">Welcome!</p>
          <p v-else>Вхід заборонено!</p>
        </div>
        <div v-else>
          Введите год рождения (от 1921 до 2021)
        </div>
      </div>

    </div>


    <div class="strings">
      <!--      1-->
      <div class="task1 task">
        <input type="text" placeholder="Введите строку" v-model="inputLength">
        <div>
          Длинна строки: {{ inputLength.length }}
        </div>
      </div>

      <!--      1-->
      <div class="task2 task cars">
        <div v-for="car in cars" :key="car">
          <img :src="`./assets/${car}.jpg`" alt="car">
        </div>
      </div>

      <!--      1 -->
      <div class="task3 task">
        <input type="text" v-model="url"/>
        <button @click="getDomain">Получить домен</button>
        <p>Домен: {{ newUrl }}</p>
      </div>

<!--      4 -->
      <div class="validation task task4">
        <form @submit.prevent>
          <input type="text" placeholder="username" v-model="username" required/>
          <input type="email" placeholder="email" v-model="email" required/>
          <input type="password" placeholder="password" v-model="password" required/>

          <button type="submit" @click="login">OK</button>
        </form>
      </div>

    </div>

    <!--    1 -->
    <div class="task task5 func">
      <input type="text" placeholder="Введите число" v-model="number">
      <input type="text" placeholder="Введите степень числа" v-model="power">
      <button v-if="number && power" @click="exponentiation(number, power)">Result</button>
    </div>

    <!--    3 -->
    <div class="game task">
      <p>Попытки: {{ attempts }}</p>
      <input type="text" v-model="user"/>
      <button @click="checkGame">Угадать</button>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      loginEasy: '',
      passwordEasy: '',
      numberOfFlat: null,
      userYear: null,
      inputLength: '',
      number: null,
      power: null,
      user: null,
      computer: null,
      attempts: 3,
      url: '',
      newUrl: '',
      username: '',
      email: '',
      password: '',
      cars: [
        'porsche',
        'bmw',
        'mercedes',
      ]
    }
  },
  methods: {
    exponentiation(num, pow) {
      alert(`${num} в ${pow} степени = ${Math.pow(+num, +pow)}`)
    },
    getDomain() {
      this.newUrl = this.url.replace('http://', '').replace('https://', '');
      this.newUrl = this.newUrl.substr(0, this.newUrl.indexOf("/"));
      this.url = '';
    },
    formCheck() {
      const username = this.username.trim();
      const email = this.email.trim();
      const password = this.password.trim();

      if (password.length >= 5 && String(email).search('@') > 0 && username) {
        alert('FINE!')
        return true
      } else {
        alert('Invalid data')
        return false
      }
    },
    login: function () {
      console.log(this.formCheck());
    },
    checkGame() {
      if (+(this.user) != this.computer) {
        this.attempts = this.attempts - 1
      } else {
        alert('You Win!');
      }

      if (this.attempts <= 0) {
        this.attempts = 0
        alert('Try again :(')
      }
    },
  },
  created() {
    this.computer = Math.floor(Math.random() * 11);
    console.log(this.computer)
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  margin: 0;
}

.day1 {
  padding: 50px;
}

.task {
  margin-bottom: 15px;
}

.cars {
  display: flex;
}

.task2 img {
  width: 50px;
  height: 50px;
}
</style>