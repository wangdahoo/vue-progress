<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-line></v-line>
    <v-circle></v-circle>
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