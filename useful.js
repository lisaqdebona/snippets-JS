/* USEFUL JS SNIPPETS */

/* Phone formatter (xxx) xxx-xxxx */
$("input.phone").on("change,blur", function () {
	var
	$this = $(this),
	number = $this.val();

	number = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
	$this.val(number);
});


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
