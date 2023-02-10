<script>
  import { RouterLink } from 'vue-router';
  import Sidebar from './components/Sidebar.vue'
  
  export default {
    name: "App",
    components: {
      Sidebar,
      RouterLink,
    }
  }
</script>

<template>
  <notifications />
  <header class="max-w-5xl lg:mx-auto lg:border-b-2 px-5 lg:px-0 lg:border-b-slate-300 flex items-center gap-4 justify-between lg:py-8 lg:mb-20">
    <span class="lg:text-4xl text-2xl font-bold font-unbound flex items-center gap-6">
        <Sidebar />
        <RouterLink to="/">sneakers</RouterLink>
      </span>
      <nav class="lg:flex list-none gap-6 hidden">
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Collections</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Men</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Women</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500"><RouterLink to="/about">About</RouterLink></li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Contact</li>
      </nav>
      <span class="flex gap-2 lg:gap-4 items-center">
        <span class="p-3 rounded-full hover:bg-slate-300 transition-colors ease-in">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </span>
        <span class="p-3 rounded-full hover:bg-slate-300 transition-colors ease-in">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </span>
      </span>
  </header>
  <router-view/>
</template>

<style scoped>
    header nav li {
      @apply flex items-center cursor-pointer
    }
  </style>
