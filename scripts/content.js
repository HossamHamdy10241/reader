let full = document.createElement('div')
Object.assign(full.style,{color:'black',position:'fixed', background:'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,212,255,0.9) 100%)',padding:'150px',top:'15px',left:'15px'});
// full.textContent='jflkdgndfg'
document.body.appendChild(full)
let tesc = document.createElement('div')

Object.assign(tesc.style,{color:'black',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)',fontWeight:'bold',fontSize:'15px'})

full.appendChild(tesc)
document.body.onclick=(e)=>{
    full.hidden = true;
    console.log(e.target)
}
console.log('complete')
let content = document.body.querySelector('main').textContent
let words = content.split(' ')
words= words.filter(word => word.length > 0 && word.length <20)
let i = 0
let rnn= setInterval(() => {
        tesc.textContent = words[i]
        i++
    }, 260);

setTimeout(() => {
    full.hidden = true;
    clearInterval(rnn)
}, 900000)