<script lang="ts" setup>
import router from '@/router'
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

const handleNavigatePage = (e: Event, path: string) => {
  e.preventDefault()
  router.push(path)
}
</script>

<template>
  <div class="footer">
    <div class="footer_links">
      <a
        v-for="link in linksFooter"
        :href="link.path"
        :key="link.name"
        @click="(e) => handleNavigatePage(e, link.path)"
      >
        {{ link.name }}</a
      >
    </div>
    <div class="footer_socials">
      <IconFacebook />
      <IconInstagram />
      <IconTwitter />
      <IconYoutube />
    </div>
  </div>
</template>
