$(document).ready(function(){

  $("#get_color").click(function(){
    $.post('/color', function(data){
      colorizer(data);
    });
  });
});

function colorizer(data) {
  var color = $.parseJSON(data).color;
  var cell = $.parseJSON(data).cell;
  find_cell(cell).css('background-color', color);
}

function find_cell(cell_index) {
  return $($('#color_me').find('li')[cell_index-1]);
}
