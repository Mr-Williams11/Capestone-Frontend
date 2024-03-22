<template>
  <body>
    <div class="home">
      <h1>Welcome to <br>The Footwear Gallery</h1>
    </div>
    <ul class="bubble">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  
    <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>	
  </ul>
  </body>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>

.home{
  position: fixed;
  top: 15%;
  width: 100%;
  font-size: 3rem;
  color: transparent;
  background-image: linear-gradient(to right, white 86%, red);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -1910px 0;
  animation: animateText 10s linear infinite;
}

@keyframes animateText{
    0%, 95%, 100%{
        background-position: -1410px 0;
    }
    65%,85%{
        background-position: 0 0;
    }
}

ul{
  margin:0;
}

@media screen and (max-width: 768px) {
  .home {
    font-size: 2rem;
    width: 450px;
    position: relative;
    left: 200px;
  }
}
@media screen and (max-width: 320px) {
  .home {
    font-size: 1.2rem;
    width: 290px;
    position: relative;
    left: 30px;
  }
}
</style>
