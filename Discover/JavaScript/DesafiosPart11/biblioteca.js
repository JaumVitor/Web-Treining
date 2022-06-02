const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T, Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S, Clason'
      },
      {
        title: 'Pai rico, Pai pobre',
        author: 'Robert T, Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligencia Artificial',
    books: [
      {
        title: 'Você é Insubstituivel',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 habitos das pessoas altamente eficazes',
        author: 'Stephen R, covey'
      }
    ]
  }
]

function countCategory() {
  let sumCategory = 0

  // Pecorrendo por categorias categorias (Poderia usar apenas booksByCategory.lenght)
  for (let element of booksByCategory) {
    if (element.category !== '') {
      sumCategory++
    }

    // Function para pecorrer livros de cada categoria (Poderia apenas usar o length do array - element.books.lenght)
    let countBooksByCategory = () => {
      let sumBooks = 0
      for (let elementInBooks of element.books) {
        sumBooks++
      }
      console.log(`Categoria "${element.category}" tem ${sumBooks} livros`)
    }
    countBooksByCategory()
  }
  return sumCategory
}

function countAuthors() {
  authorsBooks = []

  for (let element of booksByCategory) {
    let iterateInBooks = () => {
      for (let elementInBooks of element.books) {
        if (!authorsBooks.includes(elementInBooks.author)) {
          authorsBooks.push(elementInBooks.author)
        }
      }
    }
    iterateInBooks()
  }
  return authorsBooks.length
}

function searchAuthor(nameAuthor) {
  let booksOfAuthor = []

  for (element of booksByCategory) {
    for (elementInBooks of element.books) {
      if (elementInBooks.author.toUpperCase() === nameAuthor.toUpperCase()) {
        booksOfAuthor.push(elementInBooks)
        booksOfAuthor.indexOf(elementInBooks.author)
      }
    }
  }
  return booksOfAuthor
}

console.log(`Temos ${countCategory()} categorias no total`)
console.log(`Temos ${countAuthors()} Autores no total`)
console.log(searchAuthor('Augusto Cury'))
