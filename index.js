var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/.build'));

app.get('/getCars', function (req, res) {
	res.send(['Volvo','Alfa Romeo','Audi','Aston Martin','BMW','Chevrolet','Ford']);
})

app.get('/getCarModels', function (req, res) {
	res.send(['145','146','147','Arma','GT','164','Spider','Spirit',
		'Buldog','Cygnet','Lagonda','DB7','DB9',
		'A1','A2','A3','A4','A5','A6','A7','A8',
		'X1','X3','X4','X5','X6',
		'Alero','Astra','Camaro','Caprice','Cruze',
		'Capri','Flex','Focus','Fiesta','Galaxy','GT',
		'440','460','480','66'
	]);
})

app.get('/getCarModelYears', function (req, res) {
	res.send(['1988','1989','1990','1991','1992','1993','1994','1995','1996','1997',
              '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008',
              '2009','2010','2011','2012','2013','2014','2015','2016'
    ]);
})

app.get('/getStatistic', function (req, res) {
	res.send(['shopTotals','clientTotal','everageOrteusTotal']);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});