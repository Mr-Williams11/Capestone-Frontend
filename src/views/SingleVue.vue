<template>
    <div v-if="item" class="card">
      <div class="left">
        <img :src="item.productUrl" alt="">
        <i class="fa fa-long-arrow-left"></i>
        <i class="fa fa-long-arrow-right"></i>
      </div>
      <div class="right">
        <div class="product-info">
          <div class="product-name">
            <h1>{{ item.productName }}</h1>
            <i class="fa fa-search"></i>
            <i class="fa fa-user"></i>
            <i class="fa fa-shopping-cart"></i>
          </div>
          <div class="details">
            <h3>{{ item.Category }}</h3>
            <h2>{{ item.productDesc }}</h2>
            <h4><span class="fa fa-rand"></span>{{ item.Price }}</h4>
          </div>
          <span class="foot"><i class="fa fa-shopping-bag"></i> Buy Now</span>
          <span class="foot"><i class="fa fa-shopping-cart"></i> Add to Cart</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        item: null
      };
    },
    async created() {
      // Call the single view function to fetch data for the specific item
      await this.fetchItem();
    },
    methods: {
      async fetchItem() {
        try {
          const response = await axios.get(`/api/items/${this.id}`);
          this.item = response.data;
        } catch (error) {
          console.error('Error fetching item:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles */
  </style>
  