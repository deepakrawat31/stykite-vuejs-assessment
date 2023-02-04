<template>
  <div v-show="activeSlide === currentSlide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Slides',
    props: [
      'activeSlide',
      'currentSlide',
    ],
    data() {
      return {

      }
    },
  }
</script>