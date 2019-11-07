function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  var url = 'https://script.google.com/macros/s/AKfycbyYj4_IzKHLNkN8VUe313UXVnnexCPUi4WblyGQPZovjYZ3ge0/exec'; // get this url

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}

$('document').ready(function() {

  $('#modal-button').click(function() {
    var zip= $('#zipcode').val();
    $('#inputZip').val(zip);
  });
  $('#modal-button').click(function() {
    $('#modal-button').toggle();
  });
  $('#submit').click(function() {
    formSubmit("form");
  });
  $('#bookNow').click(function() {
    $('modal2').toggle();
  });


});
