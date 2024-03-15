import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

export default createStore({
  state: {
    products: [],
    users: [],
    logged: false,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setLogged(state, value) {
      state.logged = value
    },
    addUser(state, user) {
      state.users.push(user);
    },
    addProduct(state, product) {
      state.products.push(product);
    }

  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get('https://capstone-backend-owr8.onrender.com/items');
        const products = res.data;
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const res = await axios.get('https://capstone-backend-owr8.onrender.com/users');
        const users = res.data;
        commit('setUsers', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async addUser({ commit }, userData) {
      try {
        const res = await axios.post('https://capstone-backend-owr8.onrender.com/users', userData);
        const newUser = res.data;
        commit('addUser', newUser);
        alert('You have successfully created an account')
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async addProduct({ commit }, productData) {
      try {
        const res = await axios.post('https://capstone-backend-owr8.onrender.com/items', productData);
        const newProduct = res.data;
        commit('addProduct', newProduct);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    async editUser({ dispatch }, userId, userData) {
      try {
        const userName = prompt("Enter User Full Name:");
        const userAge = prompt("Enter User Age:");
        const userEmail = prompt("Enter User Email:");
        const userRole = prompt("Enter User Role:");
        const userPassword = prompt("Enter User Password:");
        const userUsername = prompt("Enter Username:");
    
        const updatedUserData = {
          name: userName,
          age: userAge,
          email: userEmail,
          role: userRole,
          password: userPassword,
          username: userUsername
        };
    
        await axios.patch(`https://capstone-backend-owr8.onrender.com/users/${userId}`, updatedUserData);
      } catch (error) {
        console.error('Error editing user:', error);
      }
      await dispatch('fetchUsers');
    },
    
    
    async editProduct({ commit, dispatch }, { productId, updatedProduct }) {
      try {
        await axios.patch(`https://capstone-backend-owr8.onrender.com/items/${productId}`, updatedProduct);
        commit('editProduct', { productId, updatedProduct });
      } catch (error) {
        console.error('Error editing product:', error);
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        await axios.delete(`https://capstone-backend-owr8.onrender.com/users/${userId}`);
        commit('deleteUser', userId);
        alert("User deleted successfully!");
      } catch (error) {
        console.error('Error deleting user:', error);
        alert("Failed to delete user.");
      }
    },
    
    async deleteProduct({ commit }, productId) {
      try {
        await axios.delete(`https://capstone-backend-owr8.onrender.com/items/${productId}`);
        commit('deleteProduct', productId);
        alert("Item has been removed from the store");
      } catch (error) {
        console.error('Error deleting product:', error);
        alert("Failed to delete product.");
      }
    },
    async logIn({ commit }, loginUser) {
      console.log(loginUser);
      try {
        const { data } = await axios.post(`https://capstone-backend-owr8.onrender.com/login`, loginUser);

        const token = data.token;
        $cookies.set('jwt', token);
        alert(data.msg);

        const [{userRole}] = data.user;  //accessing array within an object
        await $cookies.set( 'userRole', userRole );   //saving role in cookie for easy access

        const [user] = data.user;
        await $cookies.set('user', user); //save user info in cookies
      
        setTimeout(async () => {
          await router.push('/');
          commit('setLogged', true);
          window.location.reload
        }, 3000);
      } catch (error) {
        alert('Error during login: ' + error.message);
    }
  },
  async logout({ commit }) {
    try {
      $cookies.remove('jwt');
      commit('setLogged', false);
      alert('You have been logged out successfully.');
      router.push('/Signin');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
  
}
});