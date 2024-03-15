<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li><strong>Address:</strong> 123 Main Street, Cape Town, South Africa</li>
        <li><strong>Phone:</strong> 021 564 8946</li>
        <li><strong>Email:</strong> info@foamfusion.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send data to backend or display a success message
      console.log('Form submitted:', this.formData);
      // You can add further logic here to handle form submission
      // For demonstration purposes, let's just clear the form data after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  right: 150px;
  position: relative;
  top: 70px;
}

.contact-form {
  max-width: 400px;
  margin: 10px auto;
  color: black;
  position: relative;
  top: 50px;
}

.contact-form h2{
  font-size: 50px;
  margin: 10px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid darkblue;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: white;
  color: black;
  border: 2px solid darkblue;
}
.contact-info {
  position: relative;
  top: 70px;
  flex: 1;
  max-width: 400px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info ul li {
  margin-bottom: 10px;
}

.social-media ul {
  list-style: none;
  padding: 0;
}

.social-media ul li {
  margin-bottom: 10px;
}

.social-media ul li a {
  color: black;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.social-media ul li a:hover {
  color: darkblue;
}

.social-media ul li a i {
  margin-right: 5px;
}
</style>
