gettingValuesFromInputs = (inputs) => {
  const array = [];
  for (var i = 0; i < inputs.length; i++) {
    //Checking array is empty or not
    if (!$(inputs[i]).val() == "") {
      array.push($(inputs[i]).val());
    }
  }
  return array;
}

$(document).on("click","input[type='checkbox']", function () {
  $(this).prop('checked')?$(this).attr('checked', 'checked'):$(this).removeAttr("checked")
});

//Universal Remove function uwu
//Universal Remove function uwu
//Universal Remove function uwu
$(document).on("click", '.remove', function () {
  $("." + $(this).data('id')).remove();
});
//Universal Remove function uwu
//Universal Remove function uwu
//Universal Remove function uwu
