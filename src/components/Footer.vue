<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2024 FoamFusion.<br> All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  width: 100%;
  height: 70px;
  bottom: 0;
  position: fixed;
}

.footer-content {
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 15px;
  max-width: 100%;
  margin-top: 5px;
}

.footer-left {
  flex: 1;
  position: relative;
  right: 150px;
}

.footer-right {
  flex: 1;
  text-align: left;
}

.card {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
}

.socialContainer {
  width: 52px;
  height: 52px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
}

.containerOne:hover {
  background-color: #d62976;
  transition-duration: .3s;
}

.containerTwo:hover {
  background-color: #00acee;
  transition-duration: .3s;
}

.containerThree:hover {
  background-color: #0072b1;
  transition-duration: .3s;
}

.containerFour:hover {
  background-color: #128C7E;
  transition-duration: .3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: black;
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 720px) {
  .footer-content {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-left, .footer-right {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .card {
    width: 100%;
  }

  .socialContainer {
    width: 40px;
    height: 40px;
  }

  .footer-content {
    font-size: 12px;
  }
}

@media screen and (max-width: 300px) {
  .footer-content {
    font-size: 10px;
  }
}
</style>
