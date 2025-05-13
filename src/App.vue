<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const isOpen = ref(false);

const handleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen.value);
};
</script>

<template>
  <header>
    <div class="title_name">
      <a href="#">&lt;CHANG-TINGWEI&gt;</a>
    </div>
    <button class="hamburger" @click="handleMenu">☰</button>
    <nav class="wrap">
      <RouterLink to="/">Home</RouterLink>
      <router-link to="/implementation">Implementation</router-link>
      <RouterLink to="/resumes">Resumes</RouterLink>
    </nav>
    <transition name="side">
      <nav class="wrap side_menu" v-if="isOpen">
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/implementation">Implementation</router-link>
        <RouterLink to="/resumes">Resumes</RouterLink>
        <i class="fa-regular fa-circle-right close_btn" @click="handleMenu"></i>
      </nav>
    </transition>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="footer">&copy; copyright 2025 by Kitou</div>
  </footer>
</template>

<style lang="scss" scoped>
header {
  max-width: 1224px;
  margin: auto;
  padding: 16px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: #fefff5;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 768px;
    border-bottom: 1px solid #000;
    margin-top: 40px;
  }

  .title_name {
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  .wrap {
    @media (max-width: 768px) {
      display: none;
    }
    a {
      font-size: 25px;
      margin: 0 24px;
      font-weight: 600;
      color: rgb(24, 83, 122);
      &:hover {
        color: #e3c451;
      }
      @media (max-width: 1024px) {
        // display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      // position: relative;
      font-size: 50px;
      display: block;
      position: absolute;
      top: 0%;
      right: 0px;
    }
  }

  .side_menu {
    height: 200vh;
    width: 250px;
    position: fixed;
    background-color: rgb(255, 255, 255);
    top: 0;
    right: 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 120px 0px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 999;
  }
  .close_btn {
    cursor: pointer;
    display: block;
    position: absolute;
    font-size: 45px;
    top: 4%;
    right: 16px;
  }
}

.side-enter-active,
.side-leave-active {
  transition: 0.5s ease;
}

.side-enter-from {
  transform: translateX(100%);
}
.side-enter-to {
  transform: translateX(0%);
}

.side-leave-from {
  transform: translateX(0%);
}
.side-leave-to {
  transform: translateX(100%);
}

.footer {
  color: rgb(0, 0, 0, 0.7);
  font-size: 17px;
  background-color: #fefff5;
  text-align: center;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 17px;
    // position: fixed;
    // display: block;
    bottom: 0.5%;
    left: 40%;
  }
}
</style>
