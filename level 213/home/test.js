import {chatEmitter, doorEmitter, windowEmitter, lightEmitter} from './homework.js'


chatEmitter.emit('members')

chatEmitter.emit('join', 'dachi')

chatEmitter.emit('leave', 'giorgi')

chatEmitter.emit('message', 'dachi', 'hello')

doorEmitter.emit('open')

doorEmitter.emit('close')

windowEmitter.emit('open')

windowEmitter.emit('close')

lightEmitter.emit('on')

lightEmitter.emit('off')