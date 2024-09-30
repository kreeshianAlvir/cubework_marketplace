<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'
</script>

<template>
  <HeaderVue />
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>
