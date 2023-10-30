let currentCount = localStorage.getItem('count') ? localStorage.getItem('count') : 0

const wrapper = document.getElementById('count')
const incrementBtn = document.createElement('button')
const decrementBtn = document.createElement('button')
const count = document.createElement('p')


incrementBtn.innerText = 'Increment'
decrementBtn.innerText = 'Decrement'
count.innerText = currentCount 

wrapper.appendChild(count)
wrapper.appendChild(incrementBtn)
wrapper.appendChild(decrementBtn)


const changeCount = (changeType) => {
     let result = changeType === 'increment' ? currentCount++ : currentCount--
     count.innerText = result
     localStorage.setItem('count', result)
     
}

incrementBtn.addEventListener('click', ()  => {
     changeCount('increment')
})

decrementBtn.addEventListener('click', changeCount)





