<template>
  <Navi />
  <router-view />
  <Footer />
</template>

<script>
import Navi from '@/components/Navi.vue'; // Adjust the import path based on your project structure
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navi,
    Footer
  },
};
</script>

<style>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url(https://iili.io/JhqJlTX.jpg);
  background-repeat: repeat;
  background-position: top;
  background-size: cover;
  background-position-y: -150px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.footer-logo {
  position: absolute;
  top: 10px;
  left: 15px;
}

.footer-logo img {
  width: 100px;
}

footer {
  position: fixed;
  bottom: 5%;
  width: 100%;
  color: black;
  font-size: 20px;
}

@media screen and (max-width: 720px) {
  body {
    width: 95%;
    background-size: cover;
    height: 100vh;
  }
  .footer-logo {
    left: 10px; /* Adjust the left position of the logo */
  }
  footer {
    font-size: 16px; /* Decrease font size for smaller screens */
  }
}

/* Media query for screens with a maximum width of 320px */
@media screen and (max-width: 320px) {
  body {
    width: 90%; /* Further adjust body width for even smaller screens */
  }
  .footer-logo {
    left: 5px; /* Further adjust the left position of the logo */
  }
  footer {
    font-size: 14px; /* Further decrease font size for even smaller screens */
  }
}

</style>