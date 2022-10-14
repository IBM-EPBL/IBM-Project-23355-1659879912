var newtab
function open_newtab() {
  newtab = window.open("",'_blank', 'width=300,height=350')
  name = document.form.name.value
  address = document.form.address.value
  age = document.form.age.value
  email = document.form.email.value
  message =
	"<html><h2 style='text-align:center'>Entered Data</h2><body><table width=100% cellpadding=10px class=op>"+
	"<tr>"+
		"<td><b>Name</b></td>"+
		"<td>" + name + "</td>" +
	"</tr>" +
	"<tr>"+
		"<td><b>Qualification</b></td>" +
		"<td>" + address + "</td>" +
	"</tr>" +
	"<tr>" +
		"<td><b>Email</b></td>" + 
		"<td>" + email + "</td>" +
	"</tr>" +
	"<tr>" +
		"<td><b>Age</b></td>" +
		"<td>" + age + "</td>" +
	"</tr>" +
	"</table></body></html>"
	newtab.document.write(message)
	console.log(message)
}