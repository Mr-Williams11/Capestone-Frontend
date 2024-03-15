<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-info">
        <div><strong>Name:</strong> {{ user.name }}</div>
        <div><strong>Age:</strong> {{ user.age }}</div>
        <div><strong>Email:</strong> {{ user.email }}</div>
        <div><strong>Role:</strong> {{ user.role }}</div>
        <div><strong>Username:</strong> {{ user.username }}</div>
      </div>
      <div class="edit-button">
        <button @click="editMode = true">Edit</button>
      </div>
      <div v-if="editMode" class="profile-edit">
        <label>Name: </label>
        <input type="text" v-model="editedUser.name">
        <label>Age: </label>
        <input type="number" v-model="editedUser.age">
        <label>Email: </label>
        <input type="email" v-model="editedUser.email">
        <label>Role: </label>
        <input type="text" v-model="editedUser.role">
        <label>Username: </label>
        <input type="text" v-model="editedUser.username">
        <label>Password: </label>
        <input type="password" v-model="editedUser.password">
        <button @click="saveChanges">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com',
        role: 'user',
        username: 'johndoe',
        password: '********'
      },
      editedUser: {},
      editMode: false
    };
  },
  methods: {
    saveChanges() {
      // Update user data
      this.user = Object.assign({}, this.editedUser);
      this.editMode = false;
    },
    cancelEdit() {
      this.editMode = false;
      // Reset editedUser to current user data
      this.editedUser = Object.assign({}, this.user);
    }
  },
  mounted() {
    // Initialize editedUser with current user data
    this.editedUser = Object.assign({}, this.user);
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile-card {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.profile-info {
  margin-bottom: 10px;
}

.edit-button {
  margin-bottom: 10px;
}

.profile-edit input {
  margin-bottom: 10px;
  width: 100%;
}

.profile-edit button {
  margin-top: 10px;
}
</style>
