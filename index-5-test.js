const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      console.log(this);
    },

    addBooks(newBook) {
        this.books.push(newBook);
    },

    removeBooks(oldBook) {
        this.books.splice(oldBook, 1);
    },

    refreshBooks(oldBook, newBook) {
        this.books.splice(oldBook, 1, newBook);

    }
  };
  
  // Перед крапкою знаходиться об'єкт bookShelf,
  // тому, викликаючи метод, this буде зберігати посилання на нього.
  bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f};
  bookShelf.addBooks("Harry Potter");
  bookShelf.getBooks(); 
  bookShelf.removeBooks('The Last Kingdom'); 
  bookShelf.getBooks(); 
  bookShelf.addBooks('The Last Kingdom');
  bookShelf.getBooks(); 
  bookShelf.refreshBooks('Harry Potter', 'Pinocio'); 
  bookShelf.getBooks(); 


