<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>
