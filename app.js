$(() => {

  $("#book-info").click(function(e){
    // Referenced URL: https://stackoverflow.com/questions/27759380/how-to-stop-refreshing-page-after-ajax-call/40650166
    // TLDR; only neccessary if something above is listening to the (default-)event too
    e.preventDefault();

    let xhttp = new XMLHttpRequest();
    // Referenced URL: https://www.w3schools.com/js/js_json_http.asp
    xhttp.onreadystatechange = function() {
      if ((this.readystate == 4) && (this.status == 200)) {
        let response = JSON.parse(this.responseText);
        console.log('Success');
        console.log(response.items[0]);
      }
    };

    let searchString = $('#book-title').val();
    console.log(searchString);

    xhttp.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=' + searchString, true);
    xhttp.send();

    console.log('Created request');
  })
});
