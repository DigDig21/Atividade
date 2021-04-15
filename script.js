//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');
var operacoes = require('./matematica');

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); 

    
    var q = url.parse(req.url, true).query; 
    
    var art =    parseInt(q.n1) + parseInt(q.n2)
    var art1 =   operacoes.multi(q.n1, q.n2);
    var art2 =   operacoes.div (q.n1, q.n2);
    var art3 =   operacoes.sub (q.n1, q.n2);
    
    
    
    
    valor =   "Soma " + art
    + "Multi " + art1
    + "Div " + art2
    + "Subt " + art3

    res.end(valor)
    

}).listen(4000); 