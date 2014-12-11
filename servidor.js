// Servidor Joel
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

if (request.url == "/") {
  fs.readFile(__dirname + '/index.html', function(err, html){	
  	if (err) {

  		throw err;
  	}else {
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.write(html); 
    response.end();		
  }});
}else if(request.url == "/pagina1.html"){

	fs.readFile(__dirname + "/pagina1.html", function (err, html){

		if (err) {

			throw err;
		}else {

			response.writeHeader(200, {'Content-Type' : 'text/html'});
			response.write(html);
			response.end();
		}
	}
);
}else if(request.url == "/pagina2.html"){

	fs.readFile(__dirname + "/pagina2.html" , function (err, html){

		if (err){

			throw err;
		}else{

			response.writeHeader(200, {'Content-Type' : 'text/html'});
			response.write(html);
			response.end();
		}
	}
	
)}else{
	response.writeHeader(200, {'Content-Type' : 'text/html'});
	response.write("Pagina nao encontrada :(");
	response.end();
	
};

});

server.listen(1211, function(){
  console.log('Servidor Ativo');
});