let newdiv = document.createElement('div')
Object.assign(newdiv.style, {position :'fixed',
    padding :'150px',border: '1px solid', backgroundColor:'#ddeeff',top:'15px',left:'15px','z-index':5000
} )
newdiv.id='newdiv'
document.body.appendChild(newdiv)
let cancel=document.createElement('button')
Object.assign(cancel.style, {position :'absolute',backgroundColor:'rgba(0,0,0,0)',top:0, right:0,border:0,padding:'7px',color:'black'})
cancel.id='canext'
cancel.textContent='x';
document.querySelector('#newdiv').appendChild(cancel)
document.querySelector('#canext').addEventListener('click',()=>{
    document.querySelector('#newdiv').style.display='none'

})
// newdiv.textContent='fngdfjgngng'
console.log('changed')
