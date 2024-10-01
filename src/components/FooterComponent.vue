<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconYoutube from './icons/IconYoutube.vue'

interface LinksDetails {
  name: string
  path: string
}

const linksFooter: LinksDetails[] = [
  {
    name: 'Contact Us',
    path: '/contact-us'
  },
  {
    name: 'Site Map',
    path: '/site-map'
  },
  {
    name: 'Seller Application',
    path: '/seller-application'
  },
  {
    name: 'Sellers Directory',
    path: '/sellers-directory'
  },
  {
    name: 'Terms & Conditions',
    path: '/terms-conditions'
  },
  {
    name: 'Returns & Exchanges',
    path: '/returns-exchanges'
  },
  {
    name: 'Privacy',
    path: '/privacy'
  },
  {
    name: 'Pickup Locations',
    path: '/pickup-locations'
  },
  {
    name: 'Channel Circles Program',
    path: '/channel-circles-program'
  }
]
</script>

<template>
  <div class="footer py-3 px-9">
    <div class="footer_links">
      <RouterLink v-for="link in linksFooter" :to="link.path" :key="link.name">
        {{ link.name }}
      </RouterLink>
    </div>
    <div class="footer_socials">
      <IconFacebook />
      <IconInstagram />
      <IconTwitter />
      <IconYoutube />
    </div>
  </div>
</template>
