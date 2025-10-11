class Stack {
    #data = [];

    constructor(stackData = []){
        this.#data = stackData
    }

    push(newEl){
        this.#data.push(newEl)
    }

    remove(){
        this.#data.pop()
    }

    size(){
        return this.#data.length
    }

    peek(){
        return this.#data[this.#data.size() - 1]
    }

    clear(){
        this.#data = []
    }

    isEmpty(){
        return this.#data.size() == 0
    }

    print(){
        return this.#data.join(', ')
    }
}

let hello = new Stack('hello'.split())

for(let i = 0; i < hello.length;){
    hello.remove()
}

function reverse(s){
    let res = ''

    for(let i = s.length - 1; i >= 0; i--){
        res += s[i]
    }

    return res
}

console.log(reverse('hello'))

var isValid = function(s) {
    const patterns = new Stack([s[0]])

    for(let i = 1; i < s.length; i++){
        if(s[i] == ')' && patterns.peek() == '(' ||
            s[i] == ']' && patterns.peek() == '[' || 
            s[i] == '}' && patterns.peek() == '{'){
            patterns.pop()
        }
        else {
            patterns.push(s[i])
        }
    }

    return patterns.isEmpty() ? true : false
};

// big o(n)