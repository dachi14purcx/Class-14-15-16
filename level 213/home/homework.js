import { EventEmitter } from 'events';

const chatEmitter = new EventEmitter()

let arr = ['giorgi', 'dato']

chatEmitter.on('members', () => {
    if(arr.length == 1){
        console.log('Current call members are ' + arr[0] + '.')
    }
    else if(arr.length == 2) {
        console.log('Current call members are ' + arr[0] + ' and ' +arr[1] + '.')
    }
    else {
        console.log('Current call members are ' + arr.join(', ') + '.')
    }
})

chatEmitter.on('join', (member) => {
    arr.push(String(member));
    console.log(member + ' has joined the call!')
    chatEmitter.emit('members')
})

chatEmitter.on('leave', (member) => {
    if(!arr.includes(member)){
        return
    }

    member = String(member)
    arr = arr.filter(members => members != member)
    console.log(member + ' has left the call!')
    chatEmitter.emit('members')
})

chatEmitter.on('message', (member, message) =>{
    if(!arr.includes(member)){
        return
    }

    console.log(member + ': ' + message)
})

const doorEmitter = new EventEmitter()
const windowEmitter = new EventEmitter()
const lightEmitter = new EventEmitter()

let isDoorOpen = false
let isWindowOpen = false
let isLightOn = false

doorEmitter.on('open', () => {
    if(isDoorOpen == true){
        console.log('Door was already open')
    }
    else{
        isDoorOpen = true
        console.log('Door has recently been opened')
    }
})

doorEmitter.on('close', () => {
    if(isDoorOpen == false){
        console.log('Door was already closed')
    }
    else{
        isDoorOpen = false
        console.log('Door has recently been closed')
    }
})

windowEmitter.on('open', () => {
    if(isWindowOpen == true){
        console.log('Window was already open')
    }
    else{
        isWindowOpen = true
        console.log('Window has recently been opened')
    }
})

windowEmitter.on('close', () => {
    if(isWindowOpen == false){
        console.log('Window was already closed')
    }
    else{
        isWindowOpen = false;
        console.log('Window has recently been closed')
    }
})

lightEmitter.on('on', () => {
    if(isLightOn == true){
        console.log('Light was already on')
    }
    else{
        isLightOn = true
        console.log('Light has recently been turned on')
    }
})

lightEmitter.on('off', () => {
    if(isLightOn == false){
        console.log('Light was already off')
    }
    else{
        isLightOn = false
        console.log('Light has recently been turned off')
    }
})

export {chatEmitter, doorEmitter, windowEmitter, lightEmitter};