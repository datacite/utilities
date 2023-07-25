$(document).ready(function() {
  var identifier = "https://doi.org/10.5284/1015681"; //for example 10.5284/1015681
  if (identifier === undefined) {
    return;
  }
  var doi = new URL(identifier);
  var url = "https://data.crosscite.org";
  url += '/application/vnd.schemaorg.ld+json/' + doi.pathname;

  $.ajax({
    url: url,
    dataType: 'text', // don't convert JSON to Javascript object
    success: function(data) {
      $('<script>')
         .attr('type', 'application/ld+json')
         .text(data)
         .appendTo('head');
    },
    error: function (error) {
      console.log(error.responseJSON);
    }
  });
});
