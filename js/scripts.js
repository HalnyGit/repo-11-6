//Zadanie 11.6

$(document).ready(function() {

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();

	if(!countryName.length) countryName = 'Poland';
	
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
	});
};

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
   		//$('<li>').text('country: ' + item.name).appendTo(countriesList);
   		//$('<li>').text('capital: ' + item.capital).appendTo(countriesList);
   		//$('<li>').text('alpha 3 code: ' + item.alpha3Code).appendTo(countriesList);
   		$('<tr>').appendTo(countriesList);
   		$('<th>').text('country:').appendTo('#countries tr:nth-child(1)');
   		$('<th>').text(item.name).appendTo('#countries tr:nth-child(1)');
   		$('<tr>').appendTo(countriesList);
   		$('<td>').text('capital:').appendTo('#countries tr:nth-child(2)');
   		$('<td>').text(item.capital).appendTo('#countries tr:nth-child(2)');
   		$('<tr>').appendTo(countriesList);
   		$('<td>').text('alpha 3 code:').appendTo('#countries tr:nth-child(3)');
   		$('<td>').text(item.alpha3Code).appendTo('#countries tr:nth-child(3)');
   		var alpha3Code = item.alpha3Code;
   		var alpha3CodeLow = alpha3Code.toLowerCase();
   		console.log(alpha3CodeLow);
   		var flagLink = "https://restcountries.eu/data/" + alpha3CodeLow + ".svg";
   		var img = $('<img>').attr('src', flagLink).attr('widht', 90).attr('height', 60);
   		$('<tr>').appendTo(countriesList);
   		$('<td>').text('flag:').appendTo('#countries tr:nth-child(4)');
   		$('<td>').appendTo('#countries tr:nth-child(4)').append(img);
   		

});
};

})

