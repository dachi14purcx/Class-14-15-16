import { EventEmitter } from 'events'

console.log('--- 1) process.argv ---')
console.log(process.argv)
console.log('მესამე არგუმენტი არის', process.argv[2])

console.log('--- 2) pid და cwd ---')
console.log('Process PID', process.pid)
console.log('Current working directory', process.cwd())

console.log('--- 3) process.env ---')
console.log('Username', process.env.USERNAME)
console.log('Path', process.env.PATH)

console.log('--- 4) message ივენთი ---')
const emitter1 = new EventEmitter()
emitter1.on('message', text => {
  console.log('[NEW MESSAGE]', text)
})
emitter1.emit('message', 'Hello world')

console.log('--- 5) start და message ივენთები ---')
const emitter2 = new EventEmitter()
emitter2.on('start', () => {
  console.log('Program started ✅')
})
emitter2.on('message', text => {
  console.log('Message', text)
})
emitter2.emit('start')
emitter2.emit('message', 'Node.js is awesome')

console.log('--- 6) სამი ივენთი ---')
const system = new EventEmitter()
system.on('start', () => {
  console.log('System started')
})
system.on('data', num => {
  if (num % 2 === 0) console.log(num, 'არის ლუწი')
  else console.log(num, 'არის კენტი')
})
system.on('end', () => {
  console.log('System shutting down...')
})
system.emit('start')
system.emit('data', 5)
system.emit('data', 8)
system.emit('end')

console.log('--- 9) ping ივენთი ---')
const emitter3 = new EventEmitter()
emitter3.on('ping', () => console.log('PING (on) triggered'))
emitter3.once('ping', () => console.log('PING (once) triggered'))
emitter3.emit('ping')
emitter3.emit('ping')
emitter3.emit('ping')