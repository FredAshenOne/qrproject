$(document).on('ready',function () {
var form = $('#forms');
// var text = "";
//   for (var i = 0; i < form.length ; i++) {
//     text += form.elements[i].value + "<br>";
//   }

$('#forms').on('submit',function () {
  var brand = $("input[name='brand']").val();
  var model = $("input[name='model']").val();
  var mac = $("input[name='mac']").val();
  var serial = $("input[name='serial']").val();
  var id =$("input[name='id']").val();

 $('#qrcode').empty();
   $('#download-icon').addClass('hide');
   $('#download-icon').removeClass('download-icon');


var qrcode = new QRCode(document.getElementById('qrcode'),{
  //  text:"Marca: "+brand+"   Modelo: "+model+"  MacAddress: "+mac+"  Serial: "+serial,
  text:"{  'MARCA':'"+brand+
  "', 'MODELO':'"+model+
  "',  'SERIAL':'"+serial+
  "',  'ID':"+id+"  }",
  width:128,
  height:128,
});
  $('#download-icon').removeClass('hide');
  $('#download-icon').addClass('download-icon');

brand2 = brand;
model2 = model;
event.preventDefault();
document.getElementById('forms').reset();
});

$('#download-icon').on('click',function () {
  var img = $('#qrcode').find('img');
  img.addClass('downloadable');
  $('img.downloadable').each(function () {
    console.log($(this).attr('src'));
      $(this).wrap('<a href="'+$(this).attr('src')+'" download="'+brand2+model2+'.png">"');
      $(this).click();
    });

});
$('input[name="clear"]').on('click',function(){

   $('#qrcode').empty();
     $('#download-icon').addClass('hide');
     $('#download-icon').removeClass('download-icon');
     document.getElementById('forms').reset();


});

});
