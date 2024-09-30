<script lang="ts" setup>
import IconArrowDropDownVue from './icons/IconArrowDropDown.vue'
import IconBellVue from './icons/IconBell.vue'
import IconGlobeVue from './icons/IconGlobe.vue'
import IconSearchVue from './icons/IconSearch.vue'
</script>

<template>
  <main class="header">
    <h1 class="header_logo">CUBEWORK</h1>
    <div class="header_filter">
      <span>Anywhere</span>
      <span>Anytime</span>
      <span>
        Search
        <div class="icon-search">
          <IconSearchVue />
        </div>
      </span>
    </div>
    <div class="header_user-func">
      <button>Publish a listing</button>
      <div>
        <IconGlobeVue />
        EN
      </div>
      <div><IconBellVue /></div>
      <div>User <IconArrowDropDownVue /></div>
    </div>
  </main>
</template>
