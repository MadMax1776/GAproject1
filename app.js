$(() => {

  $("#book-info").click(function(e) {
    // Referenced URL: https://stackoverflow.com/questions/27759380/how-to-stop-refreshing-page-after-ajax-call/40650166
    // TLDR; only neccessary if something above is listening to the (default-)event too
    e.preventDefault();

    let xhttp = new XMLHttpRequest();
    // Referenced URL: https://www.w3schools.com/js/js_json_http.asp
    xhttp.onreadystatechange = function() {
      console.log('ReadyState change...');

      if ((this.readystate === 4) && (this.status === 200)) {
        let response = this.responseJSON;
        console.log('Test');
        }
    };

    let searchString = $('#book-title').val();
    console.log('The searched string is:', searchString);

    xhttp.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=' + searchString, true);
    console.log('Created request');
    xhttp.send();
    console.log('Headers received');
    xhttp.onload = (e) => {
      // Using JSON
      const response = JSON.parse(e.target.response);
      console.log(response);
      // Use JSON and loop through counted items
      for (let i =0; i < response.items.length; i++) {
        $('#results').append('<dt>Title:</dt>' + '<dd id="Title">' + response.items[i].volumeInfo.title + '</dd>');
        $('#results').append('<dt>Author:</dt>' + '<dd id="Author">' + response.items[i].volumeInfo.authors[0] + '</dd>');
        $('#results').append('<dt>Publisher:</dt>' + '<dd id="Publisher">' + response.items[i].volumeInfo.publisher + '</dd>');
        $('#results').append('<dt>Published Date:</dt>' + '<dd id="Published Date">' + response.items[i].volumeInfo.publishedDate + '</dd>');
        $('#results').append('<dt>Description:</dt>' + '<dd id="Description">' + response.items[i].volumeInfo.description + '</dd>');
        $('#results').append('<dt>Avg. Rating:</dt>' + '<dd id="Avg. Rating">' + response.items[i].volumeInfo.averageRating + '</dd>');
      }
    }
  })
});
