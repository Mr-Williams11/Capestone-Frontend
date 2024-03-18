<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <h2 class="profile-title">{{ user.userUsername }}</h2>
        <div class="profile-avatar">
          <!-- You can add an avatar image here if available -->
        </div>
      </div>
      <div class="profile-info">
        <div><strong>Name:</strong>{{ user.userName }} </div>
        <div><strong>Age:</strong> {{ user.userAge }}</div>
        <div><strong>Email:</strong> {{ user.userEmail }}</div>
        <div><strong>Role:</strong> {{ user.userRole }}</div>
      </div>
      <div class="edit-button">
        <button @click="editMode = true">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: '',
        userAge: '',
        userEmail: '',
        userRole: '',
        userUsername: ''
      },
      editMode: false
    };
  },
  created() {
    const fetchUser = $cookies.get("user");
    if (fetchUser) {
      this.user = $cookies.get('user')
    }
  },
  methods: {
    thisUser() {
      return this.$store.state.user;
    },
    deleteMyUser(userID){
        this.$store.dispatch('deleteMyUser',userID)
    },
  }
}
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
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.profile-title {
  margin: 0;
  font-size: 24px;
  color: #333333;
}

.profile-info {
  margin-bottom: 20px;
}

.edit-button button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button button:hover {
  background-color: #45a049;
}

.profile-info div {
  margin-bottom: 10px;
}

</style>
