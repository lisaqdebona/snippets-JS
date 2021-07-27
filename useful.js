/* USEFUL JS SNIPPETS */

function clean_table_row(row) {
	var str = row.text();
	str = str.replace(/[^a-z0-9\s]/gi,'').replace(/[_\s]/g, '');
	str = str.replace(/\s+/g,'');
	var isEmpty = (str) ? false : true;
	if(isEmpty) {
	  row.remove();
	}
}

/* Remove table row if data is empty */
function remove_table_row() {
	$("tbody tr").each(function(){
		var str = $(this).text().replace(/\s+/g,'').trim();
		if(str=='') {
			$(this).remove();
		}
	});
}


/* Replace name fields that starts `gen_` */
$("[name*='gen_']").each(function(){
	$(this).attr("name","gen_"+i);
	i++;
});


var isNumericInput=function isNumericInput(event){var key=event.keyCode;return key>=48&&key<=57||key>=96&&key<=105};var isModifierKey=function isModifierKey(event){var key=event.keyCode;return event.shiftKey===!0||key===35||key===36||key===8||key===9||key===13||key===46||key>36&&key<41||(event.ctrlKey===!0||event.metaKey===!0)&&(key===65||key===67||key===86||key===88||key===90)};var enforceFormat=function enforceFormat(event){if(!isNumericInput(event)&&!isModifierKey(event)){event.preventDefault()}};var formatToPhone=function formatToPhone(event){if(isModifierKey(event)){return}
var target=event.target;var input=event.target.value.replace(/\D/g,'').substring(0,10);var zip=input.substring(0,3);var middle=input.substring(3,6);var last=input.substring(6,10);if(input.length>6){target.value="(".concat(zip,") ").concat(middle,"-").concat(last)}else if(input.length>3){target.value="(".concat(zip,") ").concat(middle)}else if(input.length>0){target.value="(".concat(zip)}}

/* Format Phone Number to (XXX) XXX-XXXX */
/* Phone Format Option 1 */
$("input.phone").on("change,blur", function () {
	var
	$this = $(this),
	number = $this.val();
	number = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
	$this.val(number);
});

/* Phone Format Option 2 */
$("input.phone").on("keyup keydown focusout blur",formatToPhone);

/* Format SSN to 000-00-0000 */
$(document).on("keyup blur focusout","input.ssn",function () {
  var val = this.value.replace(/\D/g, '');
  val = val.replace(/^(\d{3})/, '$1-');
  val = val.replace(/-(\d{2})/, '-$1-');
  val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
  this.value = val;
});

/* Format DATE to mm/dd/yyyy */
$("input.date").on("keyup", function () {
  var val = this.value.replace(/\D/g, '');
  val = val.replace(/^(\d{2})/, '$1\/');
  val = val.replace(/\/(\d{2})/, '\/$1\/');
  val = val.replace(/(\d)\/(\d{4}).*/, '$1/\$2');
  this.value = val;
});
