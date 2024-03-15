<template>
  <body>
    <div>
      <h1>Admin Page</h1>

      <div v-if="showAddUserForm" class="form">
      <h2>Add User</h2>
      <!-- User Form -->
      <form @submit.prevent="addUser" class="user-form">
        <div class="form-group">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" v-model="newUser.fullName" placeholder="Enter full name">
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" v-model="newUser.age" placeholder="Enter age">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="newUser.email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="role">Role:</label>
          <input type="text" id="role" v-model="newUser.role" placeholder="Enter role">
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="newUser.username" placeholder="Enter username">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="newUser.password" placeholder="Enter password">
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>

  
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Age</th>
            <th>Email</th>
            <th>Role</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in $store.state.users" :key="user.id">
            <td>{{ user.userName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.userEmail }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userUsername}}</td>
            <td>
              <button @click="editUser(user)">Edit</button>
              <button @click="del(user.userId)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showAddUserForm = true">Add User</button> 



      <!-- Products Section -->
      <div v-if="showAddProductForm" class="form">
      <h2>Add Product</h2>
      <!-- Product Form -->
      <form @submit.prevent="addProduct" class="product-form">
        <div class="form-group">
          <label for="productName">Name:</label>
          <input type="text" id="productName" v-model="newProduct.name" placeholder="Enter product name">
        </div>
        <div class="form-group">
          <label for="productDescription">Description:</label>
          <input type="text" id="productDescription" v-model="newProduct.description" placeholder="Enter product description">
        </div>
        <div class="form-group">
          <label for="productCategory">Category:</label>
          <input type="text" id="productCategory" v-model="newProduct.category" placeholder="Enter product category">
        </div>
        <div class="form-group">
          <label for="productPrice">Price:</label>
          <input type="number" id="productPrice" v-model="newProduct.price" placeholder="Enter product price">
        </div>
        <div class="form-group">
          <label for="productImage">Image URL:</label>
          <input type="text" id="productImage" v-model="newProduct.image" placeholder="Enter product image URL">
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>

      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Img</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in $store.state.products" :key="product.productId">
            <td>{{ product.productName }}</td>
            <td>{{ product.productDesc }}</td>
            <td>{{ product.Category }}</td>
            <td> R {{ product.Price }}</td>
            <td><img :src="product.productUrl" alt="" srcset=""></td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="delItem(product.productId)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showAddProductForm = true">Add Product</button>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      showAddUserForm: false,
      showAddProductForm: false,
      newUser: {
      fullName: '',
      age: '',
      email: '',
      role: '',
      username: '',
      password: ''
      },
      newProduct: {
        name: '',
        description: '',
        category: '',
        price: '',
        image: ''
      }
    };
  },
  mounted() {
    this.fetchUsers();
    this.fetchProducts();
  },
  methods: {
    async fetchUsers() {
      this.$store.dispatch('fetchUsers')
        .then(users => {
          this.users = users;
        });
    },

    async fetchProducts() {
      this.$store.dispatch('fetchProducts')
        .then(products => {
          this.products = products;
        });
    },
    async addUser() {
      try {
        const { fullName, age, email, role, username, password } = this.newUser;
        await axios.post('https://capstone-backend-owr8.onrender.com/users', { userName: fullName, userAge: age, userEmail: email, userRole: role, userUsername: username, userPassword: password });
        this.showAddUserForm = false;
        this.newUser = {
          fullName: '',
          age: '',
          email: '',
          role: '',
          username: '',
          password:''
        };
        this.fetchUsers();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async addProduct() {
      try {
        const { name, description, category, price, image } = this.newProduct;
        await axios.post('https://capstone-backend-owr8.onrender.com/items', { productName: name, productDesc: description, Category: category, Price: price, productUrl: image });
        this.showAddProductForm = false;
        this.newProduct = {
          name: '',
          description: '',
          category: '',
          price: '',
          image: ''
        };
        this.fetchProducts();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    editUser(user) {
      try {

      } catch (error) {
        console.error('Error editing user:', error);
      }
    },
    del(userId){
      try{
        this.$store.dispatch('deleteUser',userId);
      } catch (error) {
        console.error('Error deleting friend:', error);
      }
      window.location.reload()
    },
    delItem(productId){
      try{
        this.$store.dispatch('deleteProduct',productId);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
      window.location.reload()
    },
  }
};
</script>


<style scoped>
body{
  height: 250vh;
}

h1{
  position: relative;
  top: 20px;
}

/* Table Styles */
table {
  width: 88%;
  border-collapse: collapse;
  margin-bottom: 20px;
  position: relative;
  left: 150px;
}

th, td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

img{
  width: 70px;
  height: 70px;
}

/* Button Styles */
button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
}

button:hover {
  background-color: #0056b3;
}
.form {
    margin-bottom: 20px;
  }

  .user-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="number"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  button {
    padding: 8px 16px;
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 3px;
  }

  button:hover {
    background-color: #0056b3;
  }
  .product-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
</style>

