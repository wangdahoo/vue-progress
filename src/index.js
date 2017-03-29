import VLine from './VLine'
import VCircle from './VCircle'

let VProgress = {
  install: function (Vue, options) {
    Vue.component('v-line', VLine)
    Vue.component('v-circle', VCircle)
  }
}

export default VProgress

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VProgress)
}
