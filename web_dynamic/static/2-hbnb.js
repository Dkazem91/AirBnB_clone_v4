$(document).ready(function () {
  $('input[type=checkbox]').on("click", function () {
    let amenList = [];
    $('input:checked').each(function() {
      amenList.push($(this).attr('data-name'));
    });
    $('.amenities h4').text(amenList.join(', '));
    if (amenList.length == 0) {
      $('.amenities h4').html('&nbsp;');
    }
  });
  setInterval(function(){
    $.getJSON('http://0.0.0.0:4568/api/v1/status/', function(data) {
      if (data.status == 'OK') {
	$('#api_status').addClass('available');
      } else {
	$('#api_status').removeClass('available');
      }
    }).fail(function() { $('#api_status').removeClass('available'); });
  }, 15000);
});
