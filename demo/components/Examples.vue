<template>
  <div class="wrap">
    <a href="https://github.com/wangdahoo/vue-progress" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#ec4949; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>

    <h1 class="text-center" v-html="title"></h1>
    <h3 class="text-center" v-text="subtitle"></h3>

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

      <!-- Bounce Easing -->
      <card>
        <div slot="content">
          <progress-bar class="circle" ref="bounceEasingCircle" type="circle" :options="circleBounceEasingOptions"></progress-bar>
        </div>
        <div slot="footer">
          bounce easing
        </div>
      </card>

      <!-- Multiple properties -->
      <card>
        <div slot="content">
          <progress-bar class="circle" ref="multiplePropertiesCircle" type="circle" :options="circleMultiplePropertiesOptions"></progress-bar>
        </div>
        <div slot="footer">
          multiple properties
        </div>
      </card>

      <h2 class="text-left">custom</h2>
      <!-- Heart -->
      <card>
        <div slot="content">
          <progress-bar class="heart" ref="customHeart" type="path" path-id="heart-path" :options="customHeartOptions">
            <svg slot="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
              <path fill-opacity="0" stroke-width="1" stroke="#bbb" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
              <path id="heart-path" fill-opacity="0" stroke-width="3" stroke="#ED6A5A" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
            </svg>
          </progress-bar>
        </div>
        <div slot="footer">
          heart
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
      title: 'PrograssBar.js',
      subtitle: 'As a Vue Component',

      lineBasicOptions: OPTIONS.LINE_BASIC,
      linePercentOptions: OPTIONS.LINE_PERCENT,
      lineColorAnimationOptions: OPTIONS.LINE_COLOR_ANIMATION,
      circleBasicOptions: OPTIONS.CIRCLE_BASIC,
      circleBounceEasingOptions: OPTIONS.CIRCLE_BOUNCE_EASING,
      circleMultiplePropertiesOptions: OPTIONS.CIRCLE_MULTIPLE_PROPERTIES,
      customHeartOptions: OPTIONS.CUSTOM_HEART
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
      let bounceEasingCircle = this.$refs.bounceEasingCircle
      loopAnimate(bounceEasingCircle)
      let multiplePropertiesCircle = this.$refs.multiplePropertiesCircle
      loopAnimate(multiplePropertiesCircle)
      let customHeart = this.$refs.customHeart
      loopAnimate(customHeart)
    }
  }
}
</script>

<style scoped>
.wrap {
  padding-top: 80px;
}

h1, h2 {
  font-family: 'Raleway', Helvetica, sans-serif;
  color: #444;
  text-transform: uppercase;
}

h3 {
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: #c0c0c0;
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

.heart {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 30px;
  left: 50%;
  margin-left: -70px;
}
</style>
