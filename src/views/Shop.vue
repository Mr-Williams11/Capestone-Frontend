<template>
  <body>

    <div class="container overflow-scroll">
	  <h3>Popular Products</h3>
	  <div id="carousel">
			<figure><img src="https://iili.io/Jhqn3tp.png" alt=""></figure>
			<figure><img src="https://iili.io/JhqBZ4n.png" alt=""></figure>
			<figure><img src="https://iili.io/JhqnMDQ.png" alt=""></figure>
			<figure><img src="https://iili.io/Jhqofmx.png" alt=""></figure>
			<figure><img src="https://iili.io/JhqxBvs.png" alt=""></figure>
			<figure><img src="https://iili.io/Jhqxayb.png" alt=""></figure>
			<figure><img src="https://iili.io/Jhqn3tp.png" alt=""></figure>
			<figure><img src="https://iili.io/JhqBZ4n.png" alt=""></figure>
      		<figure><img src="https://iili.io/JhqnMDQ.png" alt=""></figure>
		</div>
	</div>
  <div>
        <!-- Buttons for sorting -->
        <button class="sort-button" @click="toggleSort('price')">Sort by Price {{ sortBy === 'price' ? (sortOrder === 'asc' ? '▼' : '▲') : '' }}</button>
        <button class="sort-button" @click="toggleSort('name')">Sort by Name {{ sortBy === 'name' ? (sortOrder === 'asc' ? '▼' : '▲') : '' }}</button>
        <button class="sort-button" @click="toggleSort('category')">Sort by Category {{ sortBy === 'category' ? (sortOrder === 'asc' ? '▼' : '▲') : '' }}</button>
      </div>
      <!-- Search input -->
      <input type="text" v-model="searchQuery" placeholder="Search Products" class="search-input">
      <div v-if="products">

      
      <div class="grid-container">
        <div v-for="(product, index) in filteredProducts" :key="index" class="card">
          <div class="card-img">
        <div class="img">
          <img :src="product.productUrl" alt="">
        </div>
      </div>
      <div class="card-details">
        <div class="card-title">{{ product.productName }}</div>
        <div class="card-subtitle">{{ product.Category }}</div>
        <hr class="card-divider">
        <div class="card-footer">
          <div class="card-price">R {{ product.Price }}</div>
          <button class="card-btn" @click="addToCart(product)">Add to Cart</button>
          <button class="view-more-btn" @click="navigateToSingleView(product.productId)">View More</button>
        </div>
      </div>
      </div>
  </div>
</div>
<div v-else>
    <Spinner/>
  </div>
  </body>
</template>

<script>
import Spinner from '../components/Spinner.vue';

export default {
components: {
    Spinner
},
data() {
    return {
      searchQuery: '',
      sortBy: '',
      sortOrder: 'asc',
    };
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    toggleSort(criteria) {
      // Toggle sorting order if same criteria is clicked
      if (this.sortBy === criteria) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortBy = criteria;
        this.sortOrder = 'asc'; // Reset sorting order when different criteria is clicked
      }
      this.sortProducts();
    },
    sortProducts() {
      // Sort products based on selected criteria and sorting order
      if (this.sortBy === 'price') {
        this.products.sort((a, b) => (this.sortOrder === 'asc' ? a.Price - b.Price : b.Price - a.Price));
      } else if (this.sortBy === 'name') {
        this.products.sort((a, b) => (this.sortOrder === 'asc' ? a.productName.localeCompare(b.productName) : b.productName.localeCompare(a.productName)));
      } else if (this.sortBy === 'category') {
        this.products.sort((a, b) => (this.sortOrder === 'asc' ? a.Category.localeCompare(b.Category) : b.Category.localeCompare(a.Category)));
      }
    },
    addToCart(product) {
    this.$store.dispatch('addToCart', product)
      .then(() => {
        alert('Item added to cart');
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  },
    navigateToSingleView(productId) {
      this.$router.push({ name: 'singleview', params: { productId: productId } });
    }
  },

  computed: {
    filteredProducts() {
      // Filter products based on search query
      return this.products.filter(product =>
        product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    products(){
      return this.$store.state.products;
    }
  }
}
</script>


<style scoped>
body{
  height: 250vh;
  width: 100%;
}



.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-left: 150px;
  margin-top: 130px;
}


.card {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 370px;
  width: 300px;
  position: relative;
  bottom: 50px;
}

.card-img img {
  width: auto;
  height: 200px;
  filter: grayscale(0);
}

.card-details {
  padding: 20px;
  flex-grow: 1; /* Allow card details to grow to fill remaining space */
}

.card-footer {
  display: flex;
  justify-content: flex-end; /* Align button to the right */
  align-items: center;
  padding: 0 20px 20px; /* Add padding to the bottom */
}

.card-title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  max-height: 12px;
}

.card-subtitle {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  display: inline-flex;
  max-height: 12px;
  padding: 10px 10px;

}

.card-divider {
  border: 1px solid #ddd;
  margin: 10px 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 1px;
}

.card-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.card-btn {
  background-color: lightblue;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
}

.card-btn:hover {
  background-color: black;
  color: white;
  transition: color 0.6s ease;
}

.container{
	margin: 4% auto;
	width: 210px;
	height: 300px;
	position: relative;
	perspective: 1000px;
  top: 50px;
}

.container h3{
    font-size: 35px;
    position: relative;
    text-wrap: nowrap;
    text-align: center;
	right: 80px;
	bottom: 50px;
	color: white;
	text-shadow: 5px 5px 2px black;
}

#carousel{
	width: 100%;
	height: 40%;
  margin-top: 70px;
	position: relative;
	transform-style: preserve-3d;
	animation: rotation 100s infinite linear;
}
#carousel:hover{
	animation-play-state: paused;
}
#carousel figure{
	display: block;
	position: absolute;
	width: 200px;
	height: 130px;
	right: 30px;
	bottom: 20px;
	background-color: white;
	border: solid 3px black;
}
#carousel figure:nth-child(1) {transform: rotateY(0deg) translateZ(288px);}
#carousel figure:nth-child(2) { transform: rotateY(40deg) translateZ(288px);}
#carousel figure:nth-child(3) { transform: rotateY(80deg) translateZ(288px);}
#carousel figure:nth-child(4) { transform: rotateY(120deg) translateZ(288px);}
#carousel figure:nth-child(5) { transform: rotateY(160deg) translateZ(288px);}
#carousel figure:nth-child(6) { transform: rotateY(200deg) translateZ(288px);}
#carousel figure:nth-child(7) { transform: rotateY(240deg) translateZ(288px);}
#carousel figure:nth-child(8) { transform: rotateY(280deg) translateZ(288px);}
#carousel figure:nth-child(9) { transform: rotateY(320deg) translateZ(288px);}


img{
	width: 100px;
	height: 80px;
	-webkit-filter: grayscale(1);
	cursor: pointer;
	transition: all .5s ease;
	position: relative;
	top: 20px;
}
img:hover{
	-webkit-filter: grayscale(0);
  	transform: scale(1.1);
}

@keyframes rotation{
	from{
		transform: rotateY(0deg);
	}
	to{
		transform: rotateY(360deg);
	}
}

.sort-button {
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  border: 2px solid black;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px; /* Add margin between buttons */
}

.sort-button:hover {
  background-color: black;
  color: white;
  transition: color 0.9s ease;
}

.search-input {
  width: 20%;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.view-more-btn {
  background-color: lightgreen;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px; /* Adjust spacing as needed */
}

.view-more-btn:hover {
  background-color: green;
  color: white;
}

@media only screen and (max-width: 720px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 50px; /* Adjust margin for smaller screens */
  }

  .container h3 {
    font-size: 25px; /* Adjust heading font size for smaller screens */
    right: 0; /* Adjust position of heading for smaller screens */
    bottom: 30px; /* Adjust position of heading for smaller screens */
  }

  #carousel{
	  width: 50%;
	  height: 40%;
}

  #carousel figure {
    width: 150px; /* Adjust figure size for smaller screens */
    height: 100px; /* Adjust figure size for smaller screens */
  }

  img {
    width: 80px; /* Adjust image size for smaller screens */
    height: 60px; /* Adjust image size for smaller screens */
    top: 10px; /* Adjust image position for smaller screens */
  }
}

@media only screen and (max-width: 300px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* Change to 1 column for even smaller screens */
    margin-left: 10px; /* Adjust margin for very small screens */
  }

  .container h3 {
    font-size: 20px; /* Further adjust heading font size for very small screens */
    right: 0; /* Adjust position of heading for very small screens */
    bottom: 10px; /* Adjust position of heading for very small screens */
  }

  #carousel figure {
    width: 100px; /* Further adjust figure size for very small screens */
    height: 70px; /* Further adjust figure size for very small screens */
  }

  img {
    width: 60px; /* Further adjust image size for very small screens */
    height: 40px; /* Further adjust image size for very small screens */
    top: 5px; /* Further adjust image position for very small screens */
  }
}

</style>