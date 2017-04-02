<template>
  <div class="hello">
    <h1 class="center">{{ title }}</h1>
    <h3 class="center">{{ subtitle }}</h3>
    <!-- Basic Line -->
    <div class="container">
      <card>
        <div slot="content">
          <progress-bar class="line" ref="basicLine" type="line" :options="lineOptions"></progress-bar>
        </div>
        <div slot="footer">
          basic line
        </div>
      </card>
    </div>

    <!-- Color Animation -->
    <div class="container">
      <card>
        <div slot="content">
          <progress-bar class="line" ref="colorAnimationLine" type="line" :options="lineColorAnimationOptions"></progress-bar>
        </div>
        <div slot="footer">
          color animation
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

const ANIMATE_DURATION = 1400
const ANIMATE_DELAY = 400

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

      lineOptions: {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: ANIMATE_DURATION,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
      },

      lineColorAnimationOptions: {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: ANIMATE_DURATION,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color)
        }
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      let basicLine = this.$refs.basicLine
      loopAnimate(basicLine)
      let colorAnimationLine = this.$refs.colorAnimationLine
      loopAnimate(colorAnimationLine)
    }
  }
}
</script>

<style scoped>
h1, h3 {
  font-family: Raleway, Helvetica, sans-serif;
  text-align: center;
}

h1 {
  color: #4A4949;
  text-transform: uppercase;
}

h3 {
  color: #4fc08d;
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
</style>
