// Javascript Entry Point
import $ from 'jquery';

var url = "https://api.github.com/users/jisaacks/orgs?access_token=52a5e333b0303aeac8adfe94bb8dd728e19246d6";

$.ajax(url).then(function(data) {

	var $app = $('.app');

    data.forEach(function({login, avatar_url}) {
    $app.append(`
    			<div class="block">
    			<img src="${avatar_url}" height="75px" width="75px">
    			<li>${login}</li>
    			</div>`);
	});
});