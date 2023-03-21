 O = document.getElementById('fronto')
 X = document.getElementById('frontx')

 let  turn = ''
function selection(opt1,opt2) {
    opt1.addEventListener('click', () => {
        window.location.href='index.html'
         return localStorage.setItem('color','red')
    })
    opt2.addEventListener('click', () => {
        window.location.href='index.html'
        return localStorage.setItem('color','green')
    })
    
}
 
selection(X,O)





