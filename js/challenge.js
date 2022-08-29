document.addEventListener('DOMContentLoaded', mainFunc)

const form = document.getElementById('comment-form')
let counter = document.getElementById('counter')
let incre = document.getElementById('plus')
let decre = document.getElementById('minus')
let like = document.getElementById('heart')
let pause = document.getElementById('pause')

counter.innerHTML = 0;

const counting = setInterval(() => {
    counter.innerHTML = ++counter.innerHTML;
}, 1000)

function mainFunc(){
    counting
    decre.addEventListener('click', () => --counter.innerHTML)
    incre.addEventListener('click', () => ++counter.innerHTML)
    addLike()
    addComment()
    pauseCounter()
}

function pauseCounter(){
    pause.addEventListener('click', () => {
        clearInterval(counting)
        pause.innerHTML = 'resume'
        incre.disabled = true
        decre.disabled = true
        like.disabled = true
        counter.disabled = true
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
            elements[i].disabled = true;
        }
    })

}

function addLike(){ 
    like.addEventListener('click', () => {
        const likes = document.querySelector('.likes')
        const li = document.createElement('li')
        li.innerHTML = `${counter.innerHTML} has been liked 1 time`
        likes.appendChild(li)
    })
}

function addComment(){
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let comment = document.getElementById('comment-input').value
        const list = document.getElementById('list')
        const p = document.createElement('p')
        p.innerHTML = comment
        list.appendChild(p)
    })
}

function continueCounting() {
    
  }


