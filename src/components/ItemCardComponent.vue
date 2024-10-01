<script lang="ts" setup>
import IconStar from './icons/IconStar.vue'

const props = defineProps(['details'])
const { details } = props
</script>

<template>
  <div class="w-1/6 border h-auto rounded-lg">
    <div class="w-full h-52 bg-stone-400 rounded-lg">Image Carousel</div>
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
