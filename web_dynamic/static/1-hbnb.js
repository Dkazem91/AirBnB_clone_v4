$(document).ready(function () {
  $('input[type=checkbox]').on("click", function () {
    let amenList = [];
    $('input:checked').each(function() {
      amenList.push($(this).attr('data-name'));
      console.log($(this).attr('data-name'));
    });
    $('.amenities h4').text(amenList.join(', '));
  });
});
