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

    async editUser({ dispatch }, userId, updatedUserData) {
      try {
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
      await dispatch('fetchProducts');
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
        const { data } = await axios.post(`https://capstone-backend-owr8.onrender.com/login`, loginUser);

        const token = data.token;
        $cookies.set('jwt', token);
        alert(data.msg);

        const [{userRole}] = data.user;  //accessing array within an object
        await $cookies.set('userRole', userRole );   //saving role in cookie for easy access
 
        const [user] = data.user;
        await $cookies.set('user', user); //save user info in cookies
      
        setTimeout(async () => {
          window.location.assign('/home');
          commit('setLogged', true);
        }, 1000);
    },
      async logout({ commit }) {
        try {
          $cookies.remove('jwt');
          $cookies.remove('user');
          $cookies.remove('userRole');
          commit('setLogged', false);
          alert('You have been logged out successfully.');
          window.location.assign('/');
        } catch (error) {
          console.error('Error during logout:', error);
        }
        window.location.reload
    }
  },
});