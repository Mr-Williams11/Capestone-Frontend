<template>
  <div class="about"> 
    <div class="img">
      <img src="https://iili.io/JXVsyjR.png" alt="">
    </div>
    <h2>About Us</h2>
    <p>"At The Footwear Gallery, we believe that every step should be a statement. Our curated collection showcases a fusion of style, comfort, and quality craftsmanship, designed to inspire confidence in every stride. With a passion for footwear and an eye for the latest trends, we offer a diverse range of shoes for every occasion, from casual outings to special events. Whether you're seeking timeless classics or bold fashion statements, The Footwear Gallery is your destination for footwear that speaks volumes about your personality and individuality. Step into our gallery and let your feet do the talking."</p>
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
  top: 350px;
  left: 300px;
  max-width: 300px;
  max-height: 350px;
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
  left: 100px;
  position: relative;
  bottom: 70px;
}

.about h2{
  position: relative;
  font-size: 5rem;
  width: 75%;
  text-align: center;
  bottom: 50px;
  color: transparent;
  background-image: linear-gradient(white, white);
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
  width: 75%;
  text-align: center;
  left: 10px;
  bottom: 50px;
  background-image: linear-gradient( white 35%, orange);
  -webkit-background-clip: text; 
  background-clip: text;
  color: transparent;
}

@media screen and (max-width: 720px) {
  .about { 
    display: flex;
    flex-direction: column;
    width: 50%;
    left: 150px;
    bottom:250px;
    position: relative;
  }
  .about h2{
    position: relative;
    font-size: 18px;
    width: 80%;
    text-align: center;
    left: 0; 
    bottom: 0;
  }

  .about p {
    position: relative;
    font-size: 18px;
    width: 80%; /* Adjust width for smaller screens */
    text-align: center;
    left: 0; /* Reset left position */
    bottom: 0; /* Reset bottom position */
  }
  .img img{
    position: relative;
    max-width: 300px;
    max-height: 300px;
  }
}

/* Media query for screens with a maximum width of 320px */
@media screen and (max-width: 320px) {
  .about h2 {
    font-size: 2rem;
    width: 90%;
  }
  .about p {
    font-size: 16px;
    width: 90%;
  }
}
</style>
