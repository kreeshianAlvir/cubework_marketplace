<script lang="ts" setup>
import IconStar from './icons/IconStar.vue'
import { onMounted, ref } from 'vue'

import { ListSlickMethods, VueSlickCarousel } from 'vue-slick-ts'
import type { SlickInstance } from 'vue-slick-ts'
import 'vue-slick-ts/dist/css/slick.css'

import IconArrowDropDown from './icons/IconArrowDropDown.vue'

const carousel = ref<SlickInstance | null>(null)

const handleInit = (e: JQuery.Event, instance: SlickInstance) => {
  console.log(e, instance)
}

onMounted(() => {
  console.info(carousel)
  carousel.value!(ListSlickMethods.SLICK_METHODS_PLAY)
})

const props = defineProps(['details'])
const { details } = props

const someList = ref([
  {
    html: 'slide1',
    style: {
      background: '#1bbc9b'
    }
  },
  {
    html: 'slide2',
    style: {
      background: '#4bbfc3'
    }
  },
  {
    html: 'slide3',
    style: {
      background: '#7baabe'
    }
  }
])

const options = ref({
  currentPage: 0
})

const ArrowSlider = () => {
  return IconArrowDropDown
}
</script>

<template>
  <div
    class="w-full lg:min-w-full xl:min-w-full hover:shadow-lg rounded-lg box-border cursor-pointer"
  >
    <div class="w-full h-52 bg-stone-400 rounded-lg">
      <!-- <slider ref="slider" :options="options">
        <slideritem v-for="(item, index) in someList" :key="index" :style="item.style">{{
          item.html
        }}</slideritem>
      </slider> -->
      <VueSlickCarousel
        ref="carousel"
        @init="handleInit"
        :autoplay-speed="4000"
        :dots="true"
        :prevArrow="'<div class=prev></div>'"
        :nextArrow="'<div class=next></div>'"
        class="item-carousel h-full"
      >
        <div class="bg-red-100 h-52 rounded-md">Test 1</div>
        <div class="bg-green-100 h-52 rounded-md">Test 2</div>
      </VueSlickCarousel>
    </div>
    <div class="w-full h-auto p-2">
      <div class="flex justify-between">
        <h3 class="font-bold">{{ details.item_price }}</h3>
        <div class="flex items-center gap-1 text-xs">
          <IconStar />
          {{ details.rating }}
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h3 class="text-xs text-slate-300 line-through">{{ details.prev_item_price }}</h3>
        <div class="bg-green-200 rounded-xl text-xs px-2 py-1 font-bold text-emerald-700">
          {{ details.price_comment }}
        </div>
      </div>
      <h6 class="font-bold my-2 text-ellipsis">{{ details.name }}</h6>
      <h6 class="font-bold my-2">{{ details.address }}</h6>
      <div v-if="details.distance && details.starts" class="flex flex-col gap-1">
        <h6 class="text-slate-400 text-xs font-bold">{{ details.distance }}</h6>
        <h6 class="text-slate-400 text-xs font-bold">{{ details.starts }}</h6>
      </div>
      <div v-else>
        <h6 class="text-slate-400 text-xs font-bold">{{ details.condition }}</h6>
      </div>
      <div class="flex gap-1 flex-wrap">
        <div
          class="bg-slate-200 rounded-xl px-2 text-xs my-2 font-bold text-slate-400"
          v-for="cat in details.category"
          :key="cat"
        >
          {{ cat }}
        </div>
      </div>
    </div>
  </div>
</template>
