<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Login logic
      console.log("Logging in:", this.email);
    },
  },
};
</script>

<template>
  <div class="login-container">
    <div class="login">
      <h1><b style="font-weight: 770;color: white;">Login</b></h1>
      <form @submit.prevent="handleSubmit">
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
        <button type="submit" class="button1"><b>Login</b></button>
      </form>
    </div>
  </div>
</template>

<style>
.login-container {
  background-image: url('f17.webp');
  background-repeat: no-repeat;
  background-size: cover;
}

.login {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-image: url("f1.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.login {
  background-color: hsla(0, 8%, 88%, 0.076);
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  box-shadow: 0 4px 8px;
}

h1 {
  text-align: center;
  color: #0f0909;
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
  border-color: #21a357;
}

.button1 {
  width: 100%;
  background-color: #0e9044;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.button1:hover {
  background-color: #27ae60;
}
</style>
