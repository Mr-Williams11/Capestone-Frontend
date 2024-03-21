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

.bubble{
  padding: 0;
  position:absolute;
  top:0;
  left:0;
  width:90%;
  height:100vh;
  z-index:0;
  transform:translateZ(0);
  overflow-y: hidden;
}

.bubble li{
  position:absolute;
  list-style:none;
  display:block;
  background:rgba(255,255,255,0.2);
  bottom:-100px; 
  animation:bubble-ani 6s linear infinite;
  border-radius:100%;
}

.bubble li:before {
    position: absolute;
    left: 20%;
    top: 21%;
    width: 25%;
    content: '';
    background: rgba(255,255,255,0.2);
    display: block;
    height: 25%;
    border-radius: 100%;
}

.bubble li:nth-child(1){
  width:20px;
  height:20px;
  left:15%;
}

.bubble li:nth-child(2){
  width:40px;
  height:40px;
  left:40%;
  animation-duration:8s;
  animation-delay:2s;
}

.bubble li:nth-child(3){
  width:25px;
  height:25px;
  left:30%;
  animation-duration:10s;
  animation-delay:3.5s;
}

.bubble li:nth-child(4){
  width:60px;
  height:60px;
  left:55%;
  animation-duration:12s;
  animation-delay:1.5s;
}

.bubble li:nth-child(5){
  width:20px;
  height:20px;
  left:35%;
  animation-duration:16s;
  animation-delay:2s;
}
.bubble li:nth-child(6){
  width:20px;
  height:20px;
  left:55%;
  animation-duration:8s;
  animation-delay:2s;
}
.bubble li:nth-child(7){
  width:60px;
  height:60px;
  left:70%;
  animation-duration:16s;
  animation-delay:2s;
}
.bubble li:nth-child(8){
  width:40px;
  height:40px;
  left:85%;
  animation-duration:10s;
  animation-delay:3.5s;
}

@keyframes bubble-ani {
  0%{
    -webkit-transform:translateY(0);
    transform:translateY(0);
  }
  100%{
    -webkit-transform:translateY(-1080px);
    transform:translateY(-1080px);
  }
}

@media screen and (max-width: 768px) {
  .home {
    font-size: 2rem;
    width: 450px;
    position: relative;
    left: 200px;
  }
  .bubble li {
    bottom: -50px;
  }
}

@keyframes bubble-ani {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1080px);
  }
}

@media screen and (max-width: 320px) {
  .home {
    font-size: 1.2rem;
    width: 290px;
    position: relative;
    left: 30px;
  }
  .bubble li {
    bottom: -25px;
  }
}

/* Keyframes for animation */
@keyframes bubble-ani {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1080px);
  }
}
</style>
