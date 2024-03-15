<template>
  <div class="login-container" id="login-container">
    <form class="login-form" v-if="showLoginForm" @submit.prevent>
      <p class="heading">Login</p>
      <p class="paragraph">Login to your account</p>
      <div class="input-group">
        <input
          required=""
          placeholder="Username"
          v-model="loginData.userUsername"
          id="username"
          name="username"
          type="text"
        />
      </div>
      <div class="input-group">
        <input
          required=""
          placeholder="Password"
          v-model="loginData.userPassword"
          name="password"
          id="password"
          type="password"
        />
      </div>
      <button type="submit" @click="submitLoginForm()">Login</button>
      <div class="bottom-text">
        <p>Don't have an account? <a href="#" @click="toggleSignUp">Sign Up</a></p>
      </div>
    </form>
    
    <form class="login-form sign-up-form" v-else @submit.prevent="submitSignUpForm">
      <p class="heading">Sign Up</p>
      <p class="paragraph">Create a new account</p>
      <div class="input-group">
        <input
          v-model="newUser.userName"
          required=""
          placeholder="Name"
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div class="input-group">
        <input
          v-model="newUser.userUsername"
          required=""
          placeholder="Username"
          id="username"
          name="username"
          type="text"
        />
      </div>
      <div class="input-group">
        <input
          v-model="newUser.userAge"
          required=""
          placeholder="Age"
          id="age"
          name="age"
          type="number"
        />
      </div>
      <div class="input-group">
        <input
          v-model="newUser.userEmail"
          required=""
          placeholder="Email"
          name="email"
          id="email"
          type="email"
        />
      </div>
      <div class="input-group">
        <input
          v-model="newUser.userRole"
          required=""
          placeholder="Role"
          name="role"
          id="role"
          type="text"
        />
      </div>
      <div class="input-group">
        <input
          v-model="newUser.userPassword"
          required=""
          placeholder="Password"
          name="password"
          id="password"
          type="password"
        />
      </div>
      <button type="submit">Sign Up</button>
      <div class="bottom-text">
        <p>Already have an account? <a href="#" @click="toggleSignUp">Login</a></p>
      </div>
    </form>
  </div>
  <p v-if="loginSuccessMessage" class="success-message">{{ loginSuccessMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      showLoginForm: true,
      loginData: {
        userUsername: '',
        userPassword: ''
      },
      newUser: {
          userName: '',
          userAge: '',
          userEmail: '',
          userRole: '',
          userUsername: '',
          userPassword:''
        }
    };
  },
  methods: {
    async submitLoginForm() {
        await this.$store.dispatch('logIn', this.loginData);
    },
    toggleSignUp() {
      this.showLoginForm = !this.showLoginForm;
    },
    async submitSignUpForm() {
        await this.$store.dispatch('addUser', this.newUser)
    },
  }
}
</script>

<style scoped>
.login-container {
  background-color: #2f2f2f;
  border-radius: 8px;
  box-shadow: rgb(31 31 31 / 17%) 0px -23px 25px 0px inset,
    rgb(108 108 108 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  position:relative;
  top: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  
  position:relative;
  bottom:30px;
}

.sign-up-form {
  transform: rotateY(360deg);
  transition: all 200s ease;
  max-height: 73vh;
}

.heading {
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 5px;
}

.paragraph {
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 15px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group input {
  background: none;
  border: 1px solid #353535;
  padding: 9px 15px;
  font-size: 16px;
  border-radius: 8px;
  color: #979797;
  width: 80%;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.input-group input:focus {
  border-color: #0173ed;
  outline: none;
}

button {
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #0173ed;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0173ed;
}

.bottom-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
}

.bottom-text a {
  color: #0173ed;
  text-decoration: none;
  transition: color 0.3s ease;
}

.bottom-text a:hover {
  color: #3f95f2;
}
</style>

