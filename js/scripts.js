$(document).ready(function() {
  $("#formID").submit(function(event) {
    event.preventDefault();
    var pandaV = $("#animals1 option:selected").val();
    var lionV = $("#animals1 option:selected").val();
    var wolfV = $("#animals1 option:selected").val();


    if (pandaV==='panda')
    {
      $(".Panda").show()
    }
    else if(lionV==='lion')
    {
      $(".Lion").show()
    }
    else if(wolfV==='wolf')
    {
      $(".Wolf").show()
    }
    else
    {
      $(".paragraph1").show();
    }
  });
});
