<template>
    <div class="img">
    <img src="https://iili.io/JVRiZ3G.png" alt="">
  </div>
    <div class="about"> 
    <h2>About Us</h2>
      <p>"At FoamFusion, we're dedicated to revolutionizing the way your vehicle gets pampered. Our passion for pristine rides drives us to blend cutting-edge technology with eco-friendly practices, ensuring each wash leaves your car sparkling clean and the environment smiling. With a fusion of foam, finesse, and a commitment to excellence, we strive to exceed your expectations every time you visit. Experience the ultimate in car care with FoamFusion - where innovation meets immaculate shine."</p>
    </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.img img{
  position: relative;
  top: 200px;
  left: 500px;
  max-width: 400px;
  max-height: 400px;
  animation: rotate 25s infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg) }
  25% { transform: rotate(90deg) }
  50% { transform: rotate(-90deg) }
  75% { transform: rotate(90deg) }
  100%{transform: rotate(0deg);}
}

.about{
  width: 75%;
  background-color: transparent;
  box-shadow: none;
}

.about h2{
  position: relative;
  font-size: 5rem;
  width: 60%;
  bottom: 50px;
  color: transparent;
  background-image: linear-gradient(black, black);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -910px 0;
  animation: animateText 9s linear infinite;
}

@keyframes animateText{
    0%, 95%, 100%{
        background-position: -910px 0;
    }
    65%,85%{
        background-position: 0 0;
    }
}
.about p{
  position: relative;
  font-size: 25px;
  width: 60%;
  text-align: left;
  left: 100px;
  bottom: 50px;
  padding: 30px;
  background-image: linear-gradient( black 35%, blue);
  -webkit-background-clip: text; 
  background-clip: text;
  color: transparent;
}

@media screen and (max-width: 720px) {
  .about {
    font-size: 3rem; 
    display: flex; /* Decrease font size for smaller screens */
    width: 80%; /* Adjust width for smaller screens */
    left: 20px; /* Reset right position */
    top: 5px; /* Reset bottom position */
  }
  .about p {
    font-size: 18px; /* Decrease font size for smaller screens */
    width: 80%; /* Adjust width for smaller screens */
    text-align: center; /* Center align text for smaller screens */
    left: 0; /* Reset left position */
    bottom: 0; /* Reset bottom position */
  }
  .img img{
  position: relative;
  max-width: 300px;
  max-height: 300px;
  right: 200px ;
}
}

/* Media query for screens with a maximum width of 320px */
@media screen and (max-width: 320px) {
  .about h2 {
    font-size: 2rem; /* Further decrease font size for even smaller screens */
    width: 90%; /* Further adjust width for even smaller screens */
  }
  .about p {
    font-size: 16px; /* Further decrease font size for even smaller screens */
    width: 90%; /* Further adjust width for even smaller screens */
  }
}
</style>