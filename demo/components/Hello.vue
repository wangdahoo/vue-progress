<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-progress type="line" class="test" :options="options"></v-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Progressbar.js as Vue Component',
      options: {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      }
    }
  }
}
</script>
<style>
</style>