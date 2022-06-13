// let showBody = () => {
//   let head = document.querySelector('.itemBody')
  
// }



// let showBody = (element1,element2,element3) => {
//   document.querySelector(`.${element1}`).classList.add('active')
//   document.querySelector(`.${element2}`).classList.remove('active')
//   document.querySelector(`.${element3}`).classList.remove('active')
// }

let items = document.querySelectorAll('.item')

let addClass = () => {
  items.forEach((item,index) => {
    item.addEventListener('click', (e) => {
      removeClass(index)
      item.classList.toggle('active')
    })
  })
}

let removeClass = (index1) => {
  items.forEach((item,index2) => {
    if(index1 !== index2){
      item.classList.remove('active')
    }
  })
  
}

addClass()
