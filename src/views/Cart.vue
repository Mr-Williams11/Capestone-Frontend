<template>
    <div>
      <h2>Your Cart</h2>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else>
        <div v-if="cart.length === 0" class="empty-cart">Your cart is empty.</div>
        <div v-else>
          <div v-for="item in cart" :key="item.cartId" class="cart-item">
            <p>{{ item.productName }} - {{ item.price }}</p>
            <button @click="removeItemFromCart(item.cartId)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true
      };
    },
    created() {
      this.fetchCartData();
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      }
    },
    methods: {
      async fetchCartData() {
        try {
          await this.$store.dispatch('fetchCart', userId);
          this.loading = false;
        } catch (error) {
          console.error('Error fetching cart:', error);
          this.loading = false;
        }
      },
      async removeItemFromCart(cartId) {
        try {
          await this.$store.dispatch('removeFromCart', { userId: userId, cartId: cartId });
          alert('Item removed from cart');
        } catch (error) {
          console.error('Error removing item from cart:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
h2{
    color: white;
    font-size: 3rem;
}

  .loading {
    margin-top: 20px;
    font-size: 16px;
    color: white;
  }
  
  .empty-cart {
    margin-top: 20px;
    font-size: 16px;
    color: white;
  }
  
  .cart-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .cart-item p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  </style>
  