let files,img,targets;
let file = document.querySelector('#file')
let drag = document.querySelector('.drag')
drag.addEventListener('click', () => {
    file.click();
})
file.addEventListener('change', (e) => {
    files = e.target.files;
    targets = drag;
    addPic(files)
})
function changh_drop(event){
    event.preventDefault()
    targets = event.target;
    files = event.dataTransfer.files;
    addPic(files)
    
}
function addPic(files) {
    for(let i = 0; i < files.length; i++) {
        img = document.createElement('img')
        img.src = URL.createObjectURL(files[i])
        targets.appendChild(img)
        
    }
}