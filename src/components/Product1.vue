<template>
  <div class="container">
    <div class="card" v-for="product in $store.state.products" :key="product.prodID">
      <div class="card-head">
        <img :src="product.prodUrl" alt="Product Image" class="product-img">
        <div id="product-img">
          <img src="https://iili.io/JGjmmva.png" alt="logo" class="card-logo">
        </div>
      </div>
      <div class="card-body">
        <div class="product-desc">
          <span class="product-title">
            {{ product.prodName }}
            <br><span class="badge">
              R {{ product.amount }}
            </span>
          </span>
          <span class="product-caption">
            {{ product.Category }}
          </span>
        </div>
        <div class="product-properties">
          <span class="product-price">
            Buy<b>Now</b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    allProducts() {
      this.$store.dispatch("fetchProducts");
    },
  },
  mounted() {
    this.allProducts();
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-left: 100px;
  margin-top: 50px;
  justify-content: center;
}

.card {
  border-radius: 25px;
  box-shadow: -11px 11px 1px grey;
  border: 2px solid black;
  width: 300px;
  height: 400px;
}
  
  .card-head {
    position: relative;
    height: 252px;
    background: #fa782e;
    background: -moz-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    background: -webkit-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    background: linear-gradient(135deg, #fa782e 8%, #c82930 83%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
    border-radius: 25px 25px 0 0;
  }
  
  .card-logo {
      display: flex;
      width: 150px;
      filter: blur(1px);
  }
  
  #product-img {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  
  .product-img {
    width: 400px;
    height: 200px;
  }
  
  .product-detail {
    padding: 0 20px;
    font-size: 11px;
    color: #fff;
  }
  
  .product-detail h2 {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    padding-bottom: 10px;
    text-transform: uppercase;
  }
  
  .back-text {
    display: inline-block;
    font-size: 125px;
    font-weight: 900;
    margin-left: -7px;
    margin-top: -12px;
    opacity: 0.1;
  }
  
  .card-body {
    height: 255px;
    border-radius: 0 0 25px 25px;
  }
  
  .product-title {
    padding: 20px 20px 5px 20px;
    display: block;
    font-size: 15px;
    width: 100%;
    margin: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .badge {
    position: relative;
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    background: #11e95b;
    padding: 2px 5px;
    border-radius: 4px;
    top: -2px;
    margin-left: 5px;
  }
  
  .product-caption {
    display: block;
    padding: 0 20px;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
  }
  
  .product-properties{
      display: block;
  }
    .product-price {
    position: relative;
    background: #11e95b;
    padding: 7px 20px;
    text-align: center;
    display: inline-block;
    font-size: 24px;
    font-weight: 200;
    color: #fff;
    border-radius: 7px;
    left: 150px;
    box-shadow: -10px 10px 15px darkgreen;
  }
  
  .product-price b {
    margin-left: 5px;
  }
  
  .yt
  {
    position: fixed;
    padding:7px 10px 3px 10px;
    top: 100px;
    right: 50px;
    background: rgba(0,0,0,0.1);
  }
  
  .yt:hover
  {
    background: rgba(0,0,0,0.2);
  }
  </style>
  