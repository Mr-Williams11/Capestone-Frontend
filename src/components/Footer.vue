<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2024 The Footwear Gallery. All rights reserved.</p>
      </div>
      <div class="footer-right">
        <div class="social-icons">
          <a href="#" class="social-icon">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
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
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
}

.footer-left {
  flex: 1;
}

.footer-right {
  flex: 1;
  text-align: right;
}

.social-icons {
  display: flex;
  justify-items: end;
}

.social-icon {
  color: white;
  margin-right: 10px;
  font-size: 20px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #55acee; /* Change color on hover */
}

@media screen and (max-width: 720px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-left, .footer-right {
    width: 100%;
    margin-bottom: 10px;
  }

  .social-icons {
    margin-top: 10px;
  }
}

@media screen and (max-width: 300px) {
  .footer-content {
    font-size: 12px;
  }

  .social-icon {
    font-size: 16px;
  }
}
</style>
