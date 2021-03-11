function addComment (event){
    let newComment = document.querySelector('textarea').value
    let p = document.createElement('p')
    p.innerText = newComment
    document.querySelector('.news__brief1').prepend(p)
    let key = newComment
    localStorage.setItem(key, newComment ) 
    }

function loadComments(){
    for(let i=0; i<localStorage.length; i++) {
        let p = document.createElement('p')
        p.innerText = localStorage.key(i)
        document.querySelector('.news__brief1').prepend(p)
      }
}
window.onload = loadComments;
document.querySelector('button').addEventListener('click', addComment);
    