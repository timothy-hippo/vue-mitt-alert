import emitter from './emitter'
export default function (state, msg) {
  emitter.emit('pushMessage', {
    style: state ? 'success' : 'danger',
    msg: msg
  })
}
