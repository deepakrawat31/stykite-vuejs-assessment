<script>
  import axios from 'axios';
  import Sidebar from './components/Sidebar.vue'
  import ImageContainer from './components/ImageContainer.vue';

  export default {
    name: "App",
    components: {
      Sidebar,
      ImageContainer,
    },
    data() {
      return {
        info: {},
        title: '',
        description: '',
        price: '',
        discount: '',
        realPrice: '',
        images: [],
        items: 0,
      }
    },
    methods: {
      async getProductInfo() {
        let config = {
          headers: {
            'Accept': 'application/json'
          }
        }
        const res = await axios.get('https://run.mocky.io/v3/d87bebbc-3e39-4259-ae47-6c39568fb65c', config);
        this.info = res.data;
        this.title = this.info.title;
        this.description = this.info.description;
        this.price = this.info.price;
        this.discount = this.info.discount_percent;
        this.images = this.info.images;
        this.realPrice = this.price - this.price/(100/this.discount);
      },
      increment() {
        this.items ++;
      },
      decrement() {
        if (this.items > 0) {
          this.items --;
        }
      },
      turnzero() {
        this.items = 0;
      }
    },
    mounted() {
      this.getProductInfo();
    },

  }
</script>

<template>
    <header class="max-w-5xl lg:mx-auto lg:border-b-2 px-5 lg:px-0 lg:border-b-slate-300 flex items-center gap-4 justify-between lg:py-8 lg:mb-20">
      <span class="lg:text-4xl text-2xl font-bold font-unbound flex items-center gap-6">
        <Sidebar />
        <span>sneakers</span>
      </span>
      <nav class="lg:flex list-none gap-6 hidden">
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Collections</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Men</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">Women</li>
        <li class="hover:text-slate-800 transition-colors ease-in text-base font-semibold text-slate-500">About</li>
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
  <main class="lg:max-w-4xl lg:mx-auto grid lg:grid-cols-2 lg:gap-12 grid-rows-2 lg:grid-rows-none">
    <section class="">
      <ImageContainer :images="images" />
    </section>
    <section class="max-w-xs lg:max-w-none mx-auto">
      <h3 class="text-orange-500 text-sm tracking-widest uppercase font-bold mb-4">sneaker company</h3>
      <h1 class="text-4xl tracking-wide font-bold max-w-xs mb-8">{{ title }}</h1>
      <p class="text-sm font-semibold text-slate-500 leading-6 max-w-sm mb-8">{{ description }}</p>
      <span class="before:content-['$'] before:pr-1 font-unbound font-semibold text-2xl flex items-center mb-2">
        {{ realPrice }}.00
        <span class="py-0.5 px-1 bg-orange-200 font-unbound text-orange-500 font-black ml-6 text-sm after:content-['%'] after:pl-0.5">{{ discount }}</span>
      </span>
      <span class="font-unbound text-sm text-slate-400 line-through decoration-slate-400 decoration-2 before:content-['$'] before:pr-0.5">{{ price }}</span>
      <div class="flex flex-col lg:flex-row lg: gap-3 mt-10 select-none">
        <div class="grid grid-cols-3 gap-6 place-items-center bg-slate-200 p-4 rounded-xl">
          <span class="text-orange-500 cursor-pointer hover:text-slate-800 transition-colors ease-in" @click="decrement()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </span>
          <span class="text-xl text-center font-bold font-unbound">{{ items }}</span>
          <span class="text-orange-500 cursor-pointer hover:text-slate-800 transition-colors ease-in" @click="increment()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </span>
        </div>
        <div class="w-full mb-20 lg:mb-0">
          <button class="flex items-center justify-center py-4 px-12 font-bold text-lg bg-orange-500 shadow-orange-200 shadow-xl hover:shadow-none text-slate-100 rounded-xl hover:bg-orange-100 hover:text-orange-500 transition-colors ease-in w-full" @click="turnzero()">
            <span class="pr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </span>
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
    header nav li {
      @apply flex items-center cursor-pointer
    }
</style>
