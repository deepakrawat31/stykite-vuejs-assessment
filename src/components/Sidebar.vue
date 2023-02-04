<script>
import {ref} from 'vue'

export default {
  name: 'Sidebar',
  components: {},
  setup() {
    const slideSidebar = ref(false);
    return {
      slideSidebar
    }
  },
}
</script>

<template>
  <span class="lg:hidden" @click="slideSidebar = true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  </span>
  <span class="lg:hidden font-titillium fixed w-screen h-screen top-0 left-0 bg-slate-50 z-10 -translate-x-full transform transition-transform duration-300 ease-in" :class="{ '-translate-x-0': slideSidebar}">
    <nav class="list-none flex flex-col">
      <li class="w-full py-12 px-6 text-orange-600" @click="slideSidebar = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </li> 
      <li class="text-base font-semibold text-slate-500 w-full py-8 px-6">Collections</li>
      <li class="text-base font-semibold text-slate-500 w-full py-8 px-6">Men</li>
      <li class="text-base font-semibold text-slate-500 w-full py-8 px-6">Women</li>
      <li class="text-base font-semibold text-slate-500 w-full py-8 px-6">About</li>
      <li class="text-base font-semibold text-slate-500 w-full py-8 px-6">Contact</li>
    </nav>
  </span>
</template>