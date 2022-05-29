
// let a = 5
// try{
//   a.toUppercase();
// }catch (err) {

// }

// let books = []
// let newBooks = (newBook) => {
//   books.push(newBook)
//   localStorage.setItem('books', JSON.stringify(books, undefined, 2))
//   books = JSON.parse(localStorage.getItem('books'))
// }
// newBooks({ id: 1, name: 'Alximik', author: 'Paolo Koelo', pages: 153 })
// newBooks({ id: 2, name: 'Shaytonat', author: 'Toxir Malik', pages: 864 })
// newBooks({ id: 3, name: 'Sariq devni minib', author: 'Xudoyberdi To\'xtaboyev', pages: 356 })
// // newBooks({ id: 4, name: 'Ufq romani', author: 'O\'tkir Xoshimov', pages: 482 })
// // newBooks({ id: 5, name: 'harry potter', author: 'J.K.Rouling', page: 207 })
// // newBooks({ id: 6, name: 'twilight', author: 'Julia', page: 150 })
// // newBooks({ id: 7, name: 'rings', author: 'Rouling', page: 2580, })
// console.log(books)



let books = [
    { id: 1, name: 'Alximik', author: 'Paolo Koelyo', pages: 153 },
    { id: 2, name: 'Shaytonat', author: 'Toxir Malik', pages: 864 },
    { id: 3, name: 'Sariq devni minib', author: 'Xudoyberdi To\'xtaboyev', pages: 356 },
    { id: 4, name: 'Ufq romani', author: 'O\'tkir Xoshimov', pages: 482 }
]

// 1
let getId = (a) => {
    a = +prompt('id ni kiriting ')
    let book = books.find((book) => book.id == a)
    if (book) {
        console.log(book)
    } else {
        console.log("Bizda bunday id ga ega kitob mavjud emas")
    }
}
getId()

// 2
let newBook=function(id,newObj){
    let book = books.find(book => book.id == id)
    if(book){
        book.name = newObj.name ? newObj.name : book.name
        book.author = newObj.author ? newObj.author : book.author
        book.pages = newObj.pages ? newObj.pages : book.pages
        console.table(books)
      }else{
          console.log("Bizda bunday id ga ega kitob mavjud emas")
      }
}
newBook(8,{name: 'Harry Potter', author:'J.K.Rouling',})


// 3
let deleteBook = (a) => {
    a = +prompt("id ni kiriting")
    let book = books.find(book => book.id == a)
    if (book) {
        books.splice(books.indexOf(book), 1)
        console.log(books)
    } else {
        console.log("Bizda bunday id ga ega kitob mavjud emas")
    }
}
deleteBook()

// 2
let a=4
let book = books.find((book) => book.id == a)
if(book) {
    console.log(book)
}else{
    console.log(false)
}



