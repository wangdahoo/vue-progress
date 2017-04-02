import Progress from './Progress'

let VProgress = {
  install: function (Vue, options) {
    Vue.component('progress-bar', Progress)
  }
}

export default VProgress

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VProgress)
}
