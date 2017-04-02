export const ANIMATE_DURATION = 1400
export const ANIMATE_DELAY = 400

const LINE_BASIC = {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: { width: '100%', height: '100%' }
}

const LINE_PERCENT = {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %')
  }
}

const LINE_COLOR_ANIMATION = {
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

const CIRCLE_BASIC = {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: ANIMATE_DURATION,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
}

// example options
export const OPTIONS = {
  LINE_BASIC,
  LINE_PERCENT,
  LINE_COLOR_ANIMATION,
  CIRCLE_BASIC
}
