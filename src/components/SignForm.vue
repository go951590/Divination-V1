<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
</script>


<template>
  <div class="sign_container">
    <div v-if="currentFlow == 'signIn'" class="sign_containerTitle">登入 Login</div>
    <div v-else-if="currentFlow == 'signUp'" class="sign_containerTitle">註冊 Register</div>
    <template v-if="currentFlow == 'signIn'">
      <input class="sign_input" type="email" placeholder="信箱" required />
      <input class="sign_input" type="text" placeholder="密碼" required />
    </template>
    <template v-else-if="currentFlow == 'signUp'">
      <input v-model="signData.name" class="sign_input" type="text" placeholder="姓名" required />
      <input v-model="signData.email" class="sign_input" type="email" placeholder="信箱" required />
      <input
        v-model="signData.password"
        class="sign_input"
        type="password"
        placeholder="密碼"
        required
      />
    </template>

    <template v-if="currentFlow == 'signIn'">
      <button class="sign_button" @click="signIn">登入</button>
      <RouterLink to="/sign_up" class="sign_link"> 註冊帳號 </RouterLink>
    </template>
    <template v-else-if="currentFlow == 'signUp'">
      <button class="sign_button" @click="signUp">註冊</button>
      <RouterLink to="/sign_in" class="sign_link"> 登入帳號 </RouterLink>
    </template>
  </div>
  <div v-show="errorMessage.isShow" class="sign_error">
    {{ errorMessage.content }}
    <button class="sign_error_closeButton" @click="closeError">X</button>
  </div>
</template>

<script>
import { watch } from 'vue'
import axios from 'axios'
export default {
  mounted() {
    const route = useRoute()
    if (route.path == '/sign_up') {
      this.currentFlow = 'signUp'
    }
    if (route.path == '/sign_in') {
      this.currentFlow = 'signIn'
    }
    watch(route, (newVal) => {
      if (newVal.path == '/sign_up') {
        this.currentFlow = 'signUp'
      }
      if (newVal.path == '/sign_in') {
        this.currentFlow = 'signIn'
      }
    })
  },
  data() {
    return {
      currentFlow: null,
      signData: {
        email: '',
        name: '',
        password: ''
      },
      errorMessage: {
        isShow: false,
        content: ''
      }
    }
  },
  methods: {
    signIn() {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + '/user/login', this.signData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          this.errorMessage.isShow = true
          this.errorMessage.content = error.response.data.errors[0].defaultMessage
        })
    },
    signUp() {
      axios
        .post(import.meta.env.VITE_BACKEND_URL + '/user/register', this.signData)
        .then(() => {
          this.$router.push('/sign_in')
        })
        .catch((error) => {
          this.errorMessage.isShow = true
          this.errorMessage.content = error.response.data.errors[0].defaultMessage
        })
    },
    closeError() {
      this.errorMessage.isShow = false
      this.errorMessage.content = ''
    }
  }
}
</script>

<style  scoped>
.sign_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  border-radius: 10px;
  border-top: 10px solid #df5334;
  width: 300px;
}

.sign_containerTitle {
  width: 200px;
  margin: 25px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #df5334;
}

.sign_input {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: none;
  margin: 10px;
  color: #df5334;
  padding: 20px 5px;
  font-size: 1rem;
}

.sign_button {
  color: white;
  background-color: #df5334;
  width: 200px;
  height: 30px;
  margin: 25px 0;
  padding: 5px;
  border-radius: 50px;
  border: 0px;
  cursor: pointer;
}

.sign_button:hover {
  background-color: #db6937;
}

.sign_link {
  text-decoration: none;
  color: #db6937;
  cursor: pointer;
}

.sign_error {
  background-color: red;
  padding: 10px;
  border-radius: 10px;
  color: white;
  margin-top: 30px;
}

.sign_error_closeButton {
  text-align: center;
  padding: 3px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
  background: white;
}
</style>