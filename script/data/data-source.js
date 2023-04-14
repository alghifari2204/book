class DataSource {
  static searchBook(keyword) {
    return new Promise((resolve, reject) => {
      const filteredBooks = books.filter(book => book.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredBooks.length) {
        resolve(filteredBooks);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;