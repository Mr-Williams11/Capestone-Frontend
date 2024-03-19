<template>
  <div class="grid-container">
    <div v-for="product in $store.state.products" :key="index" class="card">
      <div class="imgBx">
        <img :src="product.productUrl" :alt="product.title">
      </div>

      <div class="contentBx">
        <h2>{{ product.productName }}</h2>

        <div class="size">
          <span>R {{ product.Price }}</span>
        </div>

        <div class="color">
          <span>{{ product.Category }}</span>
        </div>

        <a :href="product.buyNowLink">Buy Now</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods:{
    async fetchProducts() {
      this.$store.dispatch('fetchProducts')
        .then(products => {
          this.products = products;
        });
    },
  },
  mounted() {
    this.fetchProducts();
  },
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

.grid-container {
    position: relative;
    display: grid; /* Change to grid layout */
    grid-template-columns: repeat(4, auto); /* 4 columns */
    gap: 5px;  /* Gap between grid items */
    width: 75%;
    top: 20px;
    left: 150px;
}


.grid-container .card {
    position: relative;
    width: 250px;
    height: 300px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
}


.grid-container .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1BBFE9;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.grid-container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.grid-container .card:after {
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);

}

.grid-container .card .imgBx {
    position: relative;
    width: 100%;
    padding-top: 100%;
}

.grid-container .card:hover .imgBx {
    top: 0%;
    transform: translateY(-10%);
    filter: blur(2px);
}

.grid-container .card .imgBx img {
    position: relative;
    bottom: 200px;
    left: 20px;
    width: 100px;
    height: 100px;
    object-fit: cover;
}

.grid-container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
    font-size: 10px;
    color: black;
}

.grid-container .card:hover .contentBx {
    height: 210px;
}

.grid-container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.grid-container .card .contentBx .size,
.grid-container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
}

.grid-container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: .5s;
}

.grid-container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .7s;
} 

.grid-container .card .contentBx .size h3,
.grid-container .card .contentBx .color h3 {
    color: black;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.grid-container .card .contentBx .size span {
    width: 80px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: .5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
}

.grid-container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
}

.grid-container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .7s;
} 
</style>
