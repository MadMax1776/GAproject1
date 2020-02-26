
$((() => {

  let currentImgIndex = 0;
  let hightestIndex = 2;

  $('.next').on('click', () => {
   const $img = $('.book-images')
     .children()
     .eq(currentImgIndex)

   $img.css('display', 'none')
   currentImgIndex++;

   if (currentImgIndex > hightestIndex) {
     currentImgIndex=0;
   }

   const $img2 = $('.book-images')
   .children()
   .eq(currentImgIndex)

    $img2.css('display', 'block')
    });

    $('.previous').on('click', () => {
      const $img = $('.book-images')
      .children()
      .eq(currentImgIndex);

      $img.css('display', 'none')

      currentImgIndex--;

      if (currentImgIndex < 0) {
        currentImgIndex = hightestIndex;
      }

      const $img2 = $('.book-images')
      .children()
      .eq(currentImgIndex)
     $img2.css('display', 'block')
       });


}));

//////=============Start of API code AJAX XMLHttp=====================================
$(() => {

  // Referenced API URL: https://developers.google.com/books/docs/v1/using#PerformingSearch

  $("#book-info").click(function(e) {
    // Referenced URL: https://stackoverflow.com/questions/27759380/how-to-stop-refreshing-page-after-ajax-call/40650166
    // TLDR; only neccessary if something above is listening to the (default-)event too
    e.preventDefault();

    let xhttp = new XMLHttpRequest();
    // Referenced URL: https://www.w3schools.com/js/js_json_http.asp

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
        $('#results').append('<br/>')
        $('#results').append('<br/>')
        $('#results').append('<br/>')
        $('#results').append('<br/>')
      }
    }
  })
});










////============================================================================
///spare safety code in case I break something and can't fix
//////=========================================================================
// $(() => {
//
//   // Referenced API URL: https://developers.google.com/books/docs/v1/using#PerformingSearch
//
//   $("#book-info").click(function(e) {
//     // Referenced URL: https://stackoverflow.com/questions/27759380/how-to-stop-refreshing-page-after-ajax-call/40650166
//     // TLDR; only neccessary if something above is listening to the (default-)event too
//     e.preventDefault();
//
//     let xhttp = new XMLHttpRequest();
//     // Referenced URL: https://www.w3schools.com/js/js_json_http.asp
//
//     let searchString = $('#book-title').val();
//     console.log('The searched string is:', searchString);
//
//     xhttp.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=' + searchString, true);
//     console.log('Created request');
//     xhttp.send();
//     console.log('Headers received');
//     xhttp.onload = (e) => {
//       // Using JSON
//       const response = JSON.parse(e.target.response);
//       console.log(response);
//       // Use JSON and loop through counted items
//       for (let i =0; i < response.items.length; i++) {
//         $('#results').append('<dt>Title:</dt>' + '<dd id="Title">' + response.items[i].volumeInfo.title + '</dd>');
//         $('#results').append('<dt>Author:</dt>' + '<dd id="Author">' + response.items[i].volumeInfo.authors[0] + '</dd>');
//         $('#results').append('<dt>Publisher:</dt>' + '<dd id="Publisher">' + response.items[i].volumeInfo.publisher + '</dd>');
//         $('#results').append('<dt>Published Date:</dt>' + '<dd id="Published Date">' + response.items[i].volumeInfo.publishedDate + '</dd>');
//         $('#results').append('<dt>Description:</dt>' + '<dd id="Description">' + response.items[i].volumeInfo.description + '</dd>');
//         $('#results').append('<dt>Avg. Rating:</dt>' + '<dd id="Avg. Rating">' + response.items[i].volumeInfo.averageRating + '</dd>');
//         $('#results').append('<br/>')
//         $('#results').append('<br/>')
//         $('#results').append('<br/>')
//         $('#results').append('<br/>')
//       }
//     }
//   })
// });
////==========================================================================
