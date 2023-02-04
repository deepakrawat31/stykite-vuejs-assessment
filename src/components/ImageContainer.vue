<script>
  import Slides from './Slides.vue';

  export default {
    name: 'ImageContainer',
    components: {
      Slides,
    },
    props: {
      images: Array,
    },
    data() {
      return {
        activeSlide: 0,
      }
    },
    methods: {
      prevSlide() {
        if (this.activeSlide > 0) {
          this.activeSlide --;
        }
      },
      nextSlide() {
        if (this.activeSlide < this.images.length - 1) {
          this.activeSlide ++;
        }
      },
      slideChange(index) {
        this.activeSlide = index;
      },
    }
  }
</script>
<template>
  <div class="">
    <span>
      <div class="relative select-none">
        <span class="lg:hidden p-1 bg-slate-800 top-1/2 -translate-y-1/2 left-1 text-orange-500 rounded-full absolute" @click="prevSlide()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </span>
        <span class="lg:hidden p-1 bg-slate-800 top-1/2 -translate-y-1/2 right-1 text-orange-500 rounded-full absolute" @click="nextSlide()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
        <Slides v-for="(slide, active) in images" :key="slide" :activeSlide="active" :currentSlide="activeSlide">
          <img :src="slide" alt="image" class="lg:max-h-96 lg:mx-auto border-2 border-orange-500 rounded-xl">
        </Slides>
      </div>
    </span>
    <span class="hidden lg:flex gap-2 lg:gap-4 items-center p-2 lg:p-4">
      <div class="border-2 border-orange-200 hover:border-orange-500 rounded-xl cursor-pointer" v-for="(img,index) in images" :key="index" :class="{ active: index === activeSlide }" @click="slideChange(index)">
        <img :src="img" alt="images" class="rounded-xl">
      </div>
    </span>
  </div>
</template>

<style scoped>
  .active {
    @apply border-orange-500
  }
</style>