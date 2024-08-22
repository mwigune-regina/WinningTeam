<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      hasAccount: false, // Controls whether to show login or sign up
    };
  },
  methods: {
    handleSubmit() {
      if (this.hasAccount) {
        // Login logic
        console.log("Logging in:", this.email);
      } else {
        // Sign up logic
        console.log("Signing up:", this.email);
      }
    },
    toggleAccount() {
      this.hasAccount = !this.hasAccount;
    },
    goToLogin() {
      this.$router.push('/login');
    }
  },
};
</script>

<template>
  <div class="signup-container">
  <div class="register">
    <h1 v-if="hasAccount">Login</h1>
    <h1 v-else><b>Sign Up</b></h1>

    <form @submit.prevent="handleSubmit">
      <div>
        <input
          type="text"
          v-model="name"
          id="name"
          required
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="email"
          v-model="email"
          id="email"
          required
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          v-model="password"
          id="password"
          required
          placeholder="Password"
        />
      </div>
      <button type="submit" class="button1">
        {{ hasAccount ? "Login" : "Sign Up" }}
      </button>
    </form>

    <div v-if="hasAccount">
      <button type="button" class="button2">
        <p class="m">
          Don't have an account?

          <a href="#" @click="toggleAccount">Sign up</a>
        </p>
      </button>
    </div>
    <div v-else>
      <p>
        Already have an account?
        <a href="#" @click="goToLogin">Login</a>
      </p>
    </div>
  </div>
  </div>
</template>

<style >
.register {
  position: relative;
  font-family: Arial, sans-serif;
  background-image:url("f.png"); 
  background-size: cover;
  /* background-position: center;
  background-repeat: no-repeat; */
  height: 100vh;
  background-color: hsla(0, 8%, 88%, 0.076); /* Light grey background for the container */
  padding: 20px;
  max-width: 400px;
  margin:0 auto;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  box-shadow: 0 4px 8px ;

}

h1 {
  text-align: center;
  color: #efe8e8; /* Dark grey for heading text */
  font-size: large;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  border-color: #21a357; /* Green border on focus */
}

.button1 {
  width: 100%;
  background-color: #0e9044; /* Green background for primary button */
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.button1:hover {
  background-color: #27ae60; /* Darker green on hover */
}

.button2 {
  background-color: transparent;
  color: #666; /* Grey text for secondary button */
  border: none;
  font-size: 14px;
  cursor: pointer;
}

a {
  color: #2ecc71; /* Green links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.signup-container{
  background-image: url('f13.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
