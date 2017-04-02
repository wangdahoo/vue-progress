<template>
  <div class="hello">
    <h1 class="text-center">{{ title }}</h1>
    <h3 class="text-center">{{ subtitle }}</h3>

    <div class="container">
      <h2 class="text-left">line</h2>

      <!-- Basic Line -->
      <card>
        <div slot="content">
          <progress-bar class="line" ref="basicLine" type="line" :options="lineBasicOptions"></progress-bar>
        </div>
        <div slot="footer">
          basic line
        </div>
      </card>

      <!-- Percent -->
      <card>
        <div slot="content">
          <progress-bar class="line" ref="percentLine" type="line" :options="linePercentOptions"></progress-bar>
        </div>
        <div slot="footer">
          percent
        </div>
      </card>

      <!-- Color Animation -->
      <card>
        <div slot="content">
          <progress-bar class="line" ref="colorAnimationLine" type="line" :options="lineColorAnimationOptions"></progress-bar>
        </div>
        <div slot="footer">
          color animation
        </div>
      </card>

      <h2 class="text-left">circle</h2>

      <!-- Basic Circle -->
      <card>
        <div slot="content">
          <progress-bar class="circle" ref="basicCircle" type="circle" :options="circleBasicOptions"></progress-bar>
        </div>
        <div slot="footer">
          basic circle
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

import { ANIMATE_DURATION, ANIMATE_DELAY, OPTIONS } from '../constants'

function loopAnimate (target) {
  target.animate(1.0, () => {
    setTimeout(target.animate(0, () => {
      setTimeout(loopAnimate(target), ANIMATE_DELAY)
    }), ANIMATE_DELAY)
  })
}

export default {
  components: {
    Card
  },

  data () {
    return {
      title: 'progress bar.js',
      subtitle: 'As a Vue Component',

      lineBasicOptions: OPTIONS.LINE_BASIC,
      linePercentOptions: OPTIONS.LINE_PERCENT,
      lineColorAnimationOptions: OPTIONS.LINE_COLOR_ANIMATION,
      circleBasicOptions: OPTIONS.CIRCLE_BASIC
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      let basicLine = this.$refs.basicLine
      loopAnimate(basicLine)
      let percentLine = this.$refs.percentLine
      loopAnimate(percentLine)
      let colorAnimationLine = this.$refs.colorAnimationLine
      loopAnimate(colorAnimationLine)
      let basicCircle = this.$refs.basicCircle
      loopAnimate(basicCircle)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-family: 'Raleway', Helvetica, sans-serif;
}

h3 {
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: #c0c0c0;
}

h1, h2 {
  color: #2c3e50;
  text-transform: uppercase;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.container {
  padding: 0 50px 50px 50px;
}

.line {
  position: absolute;
  width: 200px;
  height: 8px;
  top: 96px;
  left: 50%;
  margin-left: -100px;
}

.circle {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 30px;
  left: 50%;
  margin-left: -70px;
}
</style>
