<template>
  <div class="area">

    <nav class="main-menu">
      <ul>
        <li>
          <router-link to="/home">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">Home</span>
          </router-link>
        </li>
        <li class="has-subnav">
          <router-link to="/about">
            <i class="fa fa-info-circle fa-2x"></i>
            <span class="nav-text">About</span>
          </router-link>
        </li>
        <li class="has-subnav">
          <router-link to="/shop">
            <i class="fa fa-shopping-cart fa-2x"></i>
            <span class="nav-text">Shop</span>
          </router-link>
        </li>
        <li class="has-subnav">
          <router-link to="/Admin" v-if="$cookies.get('userRole') === 'Admin'">
            <i class="fa fa-cog fa-2x"></i> 
            <span class="nav-text">Admin</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Contact">
            <i class="fa fa-envelope fa-2x"></i>
            <span class="nav-text">Contact</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" v-if="!$cookies.get('jwt')">
            <i class="fa fa-sign-in fa-2x"></i>
            <span class="nav-text">Sign In</span>
          </router-link>
        </li>
        <li>
          <router-link to="/Profile">
            <i class="fa fa-user fa-2x"></i>
            <span class="nav-text">Profile</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cart" v-if="$cookies.get('jwt')">
            <i class="fa fa-shopping-cart fa-2x"></i>
            <span class="nav-text">Cart</span>
          </router-link>
        </li>
      </ul>
      <ul class="logout">
        <li>
          <a href="#" @click="logout">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </a>
        </li>  
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);
.fa-2x {
font-size: 2em;
}
.fa {
position: relative;
display: table-cell;
width: 60px;
height: 36px;
text-align: center;
vertical-align: middle;
font-size:20px;
left: 20px;
}


.main-menu:hover,nav.main-menu.expanded {
width:250px;
overflow:visible;
}

.main-menu {
background:#212121;
border-right:1px solid #e5e5e5;
position: fixed;
top:0;
bottom:0;
height:auto;
left:0;
width:100px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
}

.main-menu>ul {
margin:7px 0;
}

.main-menu li {
position:relative;
display:block;
width:250px;
}

.main-menu li>a {
position:relative;
display:table;
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
  
}

.main-menu .nav-icon {
position:relative;
display:table-cell;
width:60px;
height:36px;
text-align:center;
vertical-align:middle;
font-size:18px;
}

.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:190px;
  font-family: 'Titillium Web', sans-serif;
}

.main-menu>ul.logout {
position:absolute;
left:0;
bottom:0;
}

.no-touch .scrollable.hover {
overflow-y:hidden;
}

.no-touch .scrollable.hover:hover {
overflow-y:auto;
overflow:visible;
}

a:hover,a:focus {
text-decoration:none;
}

nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}

nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#000000;
}
.area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}

@media screen and (max-width: 720px) {
  .main-menu {
    width: 120px; /* Adjust the width of the menu */
  }
  .main-menu li>a {
    width: 120px; /* Adjust the width of the menu items */
  }
}

/* Media query for screens with a maximum width of 320px */
@media screen and (max-width: 320px) {


  .main-menu {
    width: 50px; /* Adjust the width of the menu */
  }
  .main-menu li>a {
    width: 5px; /* Adjust the width of the menu items */
  }
  .main-menu .nav-text {
    display: none; /* Hide the text in the menu items */
  }
}
</style>
