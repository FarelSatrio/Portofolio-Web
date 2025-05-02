<template>
    <div class="auth-container">
      <div class="auth-form">
        <h2>Create an Account</h2>
        <form @submit.prevent="handleSignUp">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
  
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
          </div>
  
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <router-link to="/signin">Sign In</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSignUp() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        // Simulate form submission
        alert(`Welcome, ${this.name}!`);
      }
    }
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  
  .auth-form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p {
    text-align: center;
  }
  
  router-link {
    color: #4caf50;
    text-decoration: none;
  }
  </style>
  