<template>
  <div>
    <slot name='path'></slot>
  </div>
</template>

<script>
import { LINE, CIRCLE, PATH } from './constants'
import { Circle, Line, Path } from 'progressbar.js'

export default {
  props: {
    type: {
      type: String,
      default: LINE,
      validator: function (val) {
        return val === LINE || val === CIRCLE || val === PATH
      }
    },

    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },

  data () {
    return {
      progress: undefined
    }
  },

  mounted () {
    this.init()
  },

  destroyed () {
    if (this.progress) this.progress.destroy()
  },

  methods: {
    init () {
      switch (this.type) {
        case CIRCLE:
          this.progress = new Circle(this.$el, this.options)
          break
        case PATH:
          this.progress = new Path(this.$el.querySelector('svg'), this.options)
          break
        default:
          this.progress = new Line(this.$el, this.options)
      }
    },

    // Reference to SVG element where progress bar is drawn.
    svg () {
      return this.progress.svg
    },

    // Reference to SVG path which presents the actual progress bar.
    path () {
      return this.progress.path
    },

    // Reference to SVG path which presents the trail of the progress bar. Returns null if trail is not defined.
    trail () {
      return this.progress.trail
    },

    // Reference to p element which presents the text label for progress bar. Returns null if text is not defined.
    text () {
      return this.progress.text
    },

    animate (progress, options, cb) {
      this.progress.animate(progress, options, cb)
    },

    // Sets progress instantly without animation. Clears all animations for path.
    set (progress) {
      this.progress.set(progress)
    },

    // Stops animation to its current position.
    stop () {
      this.progress.stop()
    },

    // Returns current shown progress from 0 to 1. This value changes when animation is running.
    value () {
      return this.progress.value()
    },

    // Sets text to given a string. If you need to dynamically modify the text element, see .text attribute.
    setText (text) {
      this.progress.setText(text)
    }
  }
}
</script>
