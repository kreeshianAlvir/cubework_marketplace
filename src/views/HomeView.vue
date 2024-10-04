<script setup lang="ts">
import { h } from 'vue'
import IconLive from '@/components/icons/IconLive.vue'
import IconEmoji from '@/components/icons/IconEmoji.vue'
import IconBuildings from '@/components/icons/IconBuildings.vue'
import IconIndustiral from '@/components/icons/IconIndustiral.vue'
import IconWarehouse from '@/components/icons/IconWarehouse.vue'
import IconRetail from '@/components/icons/IconRetail.vue'
import IconEntertainment from '@/components/icons/IconEntertainment.vue'
import IconLand from '@/components/icons/IconLand.vue'
import IconMall from '@/components/icons/IconMall.vue'
import IconExperience from '@/components/icons/IconExperience.vue'
import IconSort from '@/components/icons/IconSort.vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import ItemCardComponent from '@/components/ItemCardComponent.vue'

// mock data
import Items from '../../item.json'

interface CategoryDetails {
  name: string
  icon: object
}

const categories: CategoryDetails[] = [
  {
    name: 'Live',
    icon: IconLive
  },
  {
    name: 'Wow',
    icon: IconEmoji
  },
  {
    name: 'Office',
    icon: IconBuildings
  },
  {
    name: 'Industrial',
    icon: IconIndustiral
  },
  {
    name: 'Flex',
    icon: IconWarehouse
  },
  {
    name: 'Retail',
    icon: IconRetail
  },
  {
    name: 'Entertainment',
    icon: IconEntertainment
  },
  {
    name: 'Land',
    icon: IconLand
  },
  {
    name: 'Mall',
    icon: IconMall
  },
  {
    name: 'Experience',
    icon: IconExperience
  }
]
</script>

<template>
  <div class="flex flex-col flex-1 overflow-auto">
    <div class="flex justify-between py-5 px-16 border-b-[color: --border-color] border-b">
      <div
        class="flex flex-col items-center gap-2 w-10 cursor-pointer"
        v-for="category in categories"
        :key="category.name"
      >
        <component class="text-xl text-stone-500" :is="category.icon" />
        <h6>{{ category.name }}</h6>
      </div>
      <div class="flex gap-3">
        <button class="flex gap-2 items-center border w-20 justify-center rounded-md px-2">
          <IconSort />
          <h6 class="font-bold text-sm">Sort</h6>
        </button>
        <button class="flex gap-2 items-center border w-20 justify-center rounded-md px-2">
          <IconFilter />
          <h6 class="font-bold text-sm">Filters</h6>
        </button>
      </div>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 overflow-auto py-5 px-9 gap-5">
      <ItemCardComponent v-for="items in Items.items" :key="items.id" :details="items" />
    </div>
  </div>
</template>
