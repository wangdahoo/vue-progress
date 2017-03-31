<template>
  <div>
    <div id="container">
      <svg v-if="type === 'heart'" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
          <path fill-opacity="0" stroke-width="1" stroke="#bbb" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
          <path id="heart-path" fill-opacity="0" stroke-width="3" stroke="#ED6A5A" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
      </svg>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js'

export default {
  props: {
    type: {
      type: String,
      default: ''
    },

    options: {
      type: Object
    }
  },
  mounted () {
    let progress = Object
    if (this.type === 'line') {
      progress = new ProgressBar.Line('#container', this.options)
    } else if (this.type === 'circle') {
      progress = new ProgressBar.Circle('#heart-path', this.options)
    } else if (this.type === 'heart') {
      progress = new ProgressBar.Path('#container', this.options)
    }
    progress.animate(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
