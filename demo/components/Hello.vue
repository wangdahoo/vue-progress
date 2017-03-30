<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-progress type="line" class="test"></v-progress>
    <v-progress type="heart" class="test"></v-progress>
    <v-progress type="circle" class="test"></v-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Progressbar.js as Vue Component'
    }
  }
}
</script>
<style>
  .test {
    display: inline-block;
    margin: 20px;
    width: 200px;
    height: 200px;
  }
</style>