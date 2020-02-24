$(() => {
  handleGetBook = (bookTitle) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if ((this.readystate == 4) && (this.status == 200)) {
        document.getElementById('book-title').InnerHTML = this.responseText;
      }
    };

    xhttp.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=' + bookTitle, true);
    xhttp.send();

    console.log('Created request');
  }
});
