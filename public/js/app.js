// $.getJSON("/articles", function (data) {
//   $("#articles").empty();
//     // For each one
//     for (var i = 0; i < data.length; i++) {
//         // Display the apropos information on the page
//         $("#articles").append("<h3>" + data[i].title + "</h3>" +
//             "<p>" + data[i].summary + "<p>" +
//              "<img src = '" + data[i].img +"' />" +
//              "<p>" + data [i].link + "</p>" +
//              "<button data-id = '" + data[i]._id + "' class = 'save' type = 'button'> save Article </button>");
//             //  "<button data-id = '" + data[i]._id + "' class = 'notes' type = 'button'> notes </button");
//         // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
//     }
// });
// $(document).on("click", "scrape", function() {
// button.on("click",function(){
$("#scrape").on("click", function () {
    console.log("here");
    $.ajax({
        method: "GET",
        url: "/scrape"
    })
        //   // With that done, add the note information to the page
        .then(function () {
          alert("Scrape completed");
          window.location = "/"
            // document.location.reload();
            // console.log("complete")
        });

    // Empty the notes from the note section
    // $("#notes").empty();
    // // Save the id from the p tag
    // var thisId = $(this).attr("data-id");

    // // Now make an ajax call for the Article
    // $.ajax({
    //   method: "GET",
    //   url: "/articles/" + thisId
    // })
    //   // With that done, add the note information to the page
    //   .then(function(data) {
    //     console.log(data);
    // Grab the articles as a json
    // $.getJSON("/articles", function(data) {
    //     // For each one
    //     for (var i = 0; i < data.length; i++) {
    //       // Display the apropos information on the page
    //       $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    //     }
    //   });
});
$(".save").on("click", function(){
// $(document).on("click", ".save", function() {
//     // Empty the notes from the note section
//     // $("#notes").empty();
//     // Save the id from the p tag
    var thisId = $(this).attr("data-id");
  console.log(thisId);
//     // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "/articlesSaved/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
          alert("Article Saved");
        console.log(data);
//         // // The title of the article
//         // $("#notes").append("<h2>" + data.title + "</h2>");
//         // // An input to enter a new title
//         // $("#notes").append("<input id='titleinput' name='title' >");
//         // // A textarea to add a new note body
//         // $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//         // // A button to submit a new note, with the id of the article saved to it
//         // $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
//         // // If there's a note in the article
//         // if (data.note) {
//         //   // Place the title of the note in the title input
//         //   $("#titleinput").val(data.note.title);
//         //   // Place the body of the note in the body textarea
//         //   $("#bodyinput").val(data.note.body);
//         // }
      });
  });
  $(".deleteSaved").on("click", function(){
    var thisId = $(this).attr("data-id");
  console.log(thisId);
//     // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "/articleDelete/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
          alert("Article Deleted");
                 window.location = "/articlesSaved"
          console.log(data);
      });});
      $(".saveNote").on("click", function(){
        var thisId = $(this).attr("data-id");
        if(!$("#noteText" + thisId).val()) {
          alert("please enter a note to save")
        } else {
          $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data:{
              body: $("#noteText" + thisId).val()
            }
          }).then(function(data){
            console.log(data)
              $("#noteText" + thisId).val("");
              $(".modalNote").modal("hide");
              window.location = "/articlesSaved"
            
          });
        }
      });
      $(".deleteNote").on("click", function(){
        console.log("delete")
        
        var noteId = $(this).attr("data-note-id");
        console.log(noteId);
        // var articleId = $(this).attr("data-article-id");
        $.ajax({
          method: "DELETE",
          url: "/notesDelete/" + noteId
        }).done(function(data){
          console.log(data)
          $(".modalNote").modal("hide");
          window.location = "/articlesSaved"
        })
      });
// $(document).on("click", ".notes", function() {
    // Empty the notes from the note section
//     $(".notes").on("click",function(){
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).attr("data-id");
  
//     // Now make an ajax call for the Article
//     $.ajax({
//       method: "GET",
//       url: "/articles/" + thisId
//     })
//       // With that done, add the note information to the page
//       .then(function(data) {
//         console.log(data);
//         // console.log(data);
//         // The title of the article
//         $("#notes").append("<h2>" + data.title + "</h2>");
//         // An input to enter a new title
//         $("#notes").append("<input id='titleinput' name='title' >");
//         // A textarea to add a new note body
//         $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//         // A button to submit a new note, with the id of the article saved to it
//         $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
//         // If there's a note in the article
//         if (data.note) {
//           // Place the title of the note in the title input
//           $("#titleinput").val(data.note.title);
//           // Place the body of the note in the body textarea
//           $("#bodyinput").val(data.note.body);
//         }
//       });
//   });
  
// // When you click the savenote button
// $(document).on("click", "#savenote", function() {
//     // Grab the id associated with the article from the submit button
//     var thisId = $(this).attr("data-id");
  
//     // Run a POST request to change the note, using what's entered in the inputs
//     $.ajax({
//       method: "POST",
//       url: "/articles/" + thisId,
//       data: {
//         // Value taken from title input
//         title: $("#titleinput").val(),
//         // Value taken from note textarea
//         body: $("#bodyinput").val()
//       }
//     })
//       // With that done
//       .then(function(data) {
//         // Log the response
//         console.log(data);
//         // Empty the notes section
//         $("#notes").empty();
//       });
  
//     // Also, remove the values entered in the input and textarea for note entry
//     $("#titleinput").val("");
//     $("#bodyinput").val("");
  // });