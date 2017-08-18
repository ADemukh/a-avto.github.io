/*eslint strict:0  */
var Car, EngineCapacity, EngineType, Gearbox, carsInitialCollection;

EngineType = require('../models/engineType');
EngineCapacity = require('../models/engineCapacity');
Gearbox = require('../models/gearbox');
Car = require('../models/car');

carsInitialCollection = [{
		mark: 'Acura',
		model: 'CL'
	}, {
		mark: 'Acura',
		model: 'CSX'
	}, {
		mark: 'Acura',
		model: 'EL'
	}, {
		mark: 'Acura',
		model: 'ILX'
	}, {
		mark: 'Acura',
		model: 'Integra'
	}, {
		mark: 'Acura',
		model: 'Legend'
	}, {
		mark: 'Acura',
		model: 'MDX'
	}, {
		mark: 'Acura',
		model: 'NSX'
	}, {
		mark: 'Acura',
		model: 'RDX'
	}, {
		mark: 'Acura',
		model: 'RL'
	}, {
		mark: 'Acura',
		model: 'RLX'
	}, {
		mark: 'Acura',
		model: 'RSX'
	}, {
		mark: 'Acura',
		model: 'SLX'
	}, {
		mark: 'Acura',
		model: 'TL'
	}, {
		mark: 'Acura',
		model: 'TLX'
	}, {
		mark: 'Acura',
		model: 'TSX'
	}, {
		mark: 'Acura',
		model: 'ZDX'
	}, {
		mark: 'Alfa Romeo',
		model: '6'
	}, {
		mark: 'Alfa Romeo',
		model: '33'
	}, {
		mark: 'Alfa Romeo',
		model: '75'
	}, {
		mark: 'Alfa Romeo',
		model: '90'
	}, {
		mark: 'Alfa Romeo',
		model: '145'
	}, {
		mark: 'Alfa Romeo',
		model: '146'
	}, {
		mark: 'Alfa Romeo',
		model: '147'
	}, {
		mark: 'Alfa Romeo',
		model: '155'
	}, {
		mark: 'Alfa Romeo',
		model: '159'
	}, {
		mark: 'Alfa Romeo',
		model: '164'
	}, {
		mark: 'Alfa Romeo',
		model: '166'
	}, {
		mark: 'Alfa Romeo',
		model: '1900'
	}, {
		mark: 'Alfa Romeo',
		model: '2600'
	}, {
		mark: 'Alfa Romeo',
		model: '105/115'
	}, {
		mark: 'Alfa Romeo',
		model: '4C'
	}, {
		mark: 'Alfa Romeo',
		model: '6C'
	}, {
		mark: 'Alfa Romeo',
		model: '8C Competizione'
	}, {
		mark: 'Alfa Romeo',
		model: 'Alfasud'
	}, {
		mark: 'Alfa Romeo',
		model: 'Alfetta'
	}, {
		mark: 'Alfa Romeo',
		model: 'Arna'
	}, {
		mark: 'Alfa Romeo',
		model: 'Brera'
	}, {
		mark: 'Alfa Romeo',
		model: 'Disco Volante'
	}, {
		mark: 'Alfa Romeo',
		model: 'Giulia'
	}, {
		mark: 'Alfa Romeo',
		model: 'Giulietta'
	}, {
		mark: 'Alfa Romeo',
		model: 'GT'
	}, {
		mark: 'Alfa Romeo',
		model: 'GTA Coupe'
	}, {
		mark: 'Alfa Romeo',
		model: 'GTV'
	}, {
		mark: 'Alfa Romeo',
		model: 'MiTo'
	}, {
		mark: 'Alfa Romeo',
		model: 'Montreal'
	}, {
		mark: 'Alfa Romeo',
		model: 'RZ'
	}, {
		mark: 'Alfa Romeo',
		model: 'Spider'
	}, {
		mark: 'Alfa Romeo',
		model: 'Sprint'
	}, {
		mark: 'Alfa Romeo',
		model: 'SZ'
	}, {
		mark: 'Alpina',
		model: 'B10'
	}, {
		mark: 'Alpina',
		model: 'B11'
	}, {
		mark: 'Alpina',
		model: 'B12'
	}, {
		mark: 'Alpina',
		model: 'B3'
	}, {
		mark: 'Alpina',
		model: 'B4'
	}, {
		mark: 'Alpina',
		model: 'B5'
	}, {
		mark: 'Alpina',
		model: 'B6'
	}, {
		mark: 'Alpina',
		model: 'B7'
	}, {
		mark: 'Alpina',
		model: 'B8'
	}, {
		mark: 'Alpina',
		model: 'B9'
	}, {
		mark: 'Alpina',
		model: 'C1'
	}, {
		mark: 'Alpina',
		model: 'C2'
	}, {
		mark: 'Alpina',
		model: 'D10'
	}, {
		mark: 'Alpina',
		model: 'D3'
	}, {
		mark: 'Alpina',
		model: 'D5'
	}, {
		mark: 'Alpina',
		model: 'Roadster'
	}, {
		mark: 'Alpina',
		model: 'XD3'
	}, {
		mark: 'Aston Martin',
		model: 'Bulldog'
	}, {
		mark: 'Aston Martin',
		model: 'Cygnet'
	}, {
		mark: 'Aston Martin',
		model: 'DB11'
	}, {
		mark: 'Aston Martin',
		model: 'DB7'
	}, {
		mark: 'Aston Martin',
		model: 'DB9'
	}, {
		mark: 'Aston Martin',
		model: 'DBS'
	}, {
		mark: 'Aston Martin',
		model: 'Lagonda'
	}, {
		mark: 'Aston Martin',
		model: 'One-77'
	}, {
		mark: 'Aston Martin',
		model: 'Rapide'
	}, {
		mark: 'Aston Martin',
		model: 'Tickford Capri'
	}, {
		mark: 'Aston Martin',
		model: 'V12 Vanquish'
	}, {
		mark: 'Aston Martin',
		model: 'V12 Vantage'
	}, {
		mark: 'Aston Martin',
		model: 'V12 Zagato'
	}, {
		mark: 'Aston Martin',
		model: 'V8 Vantage'
	}, {
		mark: 'Aston Martin',
		model: 'V8 Zagato'
	}, {
		mark: 'Aston Martin',
		model: 'Virage'
	}, {
		mark: 'Audi',
		model: '50'
	}, {
		mark: 'Audi',
		model: '80'
	}, {
		mark: 'Audi',
		model: '90'
	}, {
		mark: 'Audi',
		model: '100'
	}, {
		mark: 'Audi',
		model: '200'
	}, {
		mark: 'Audi',
		model: '920'
	}, {
		mark: 'Audi',
		model: 'A1'
	}, {
		mark: 'Audi',
		model: 'A2'
	}, {
		mark: 'Audi',
		model: 'A3'
	}, {
		mark: 'Audi',
		model: 'A4'
	}, {
		mark: 'Audi',
		model: 'A4 allroad'
	}, {
		mark: 'Audi',
		model: 'A5'
	}, {
		mark: 'Audi',
		model: 'A6'
	}, {
		mark: 'Audi',
		model: 'A6 allroad'
	}, {
		mark: 'Audi',
		model: 'A7'
	}, {
		mark: 'Audi',
		model: 'A8'
	}, {
		mark: 'Audi',
		model: 'Cabriolet'
	}, {
		mark: 'Audi',
		model: 'Coupe'
	}, {
		mark: 'Audi',
		model: 'Q2'
	}, {
		mark: 'Audi',
		model: 'Q3'
	}, {
		mark: 'Audi',
		model: 'Q5'
	}, {
		mark: 'Audi',
		model: 'Q7'
	}, {
		mark: 'Audi',
		model: 'quattro'
	}, {
		mark: 'Audi',
		model: 'R8'
	}, {
		mark: 'Audi',
		model: 'RS Q3'
	}, {
		mark: 'Audi',
		model: 'RS2'
	}, {
		mark: 'Audi',
		model: 'RS3'
	}, {
		mark: 'Audi',
		model: 'RS4'
	}, {
		mark: 'Audi',
		model: 'RS5'
	}, {
		mark: 'Audi',
		model: 'RS6'
	}, {
		mark: 'Audi',
		model: 'RS7'
	}, {
		mark: 'Audi',
		model: 'S1'
	}, {
		mark: 'Audi',
		model: 'S2'
	}, {
		mark: 'Audi',
		model: 'S3'
	}, {
		mark: 'Audi',
		model: 'S4'
	}, {
		mark: 'Audi',
		model: 'S5'
	}, {
		mark: 'Audi',
		model: 'S6'
	}, {
		mark: 'Audi',
		model: 'S7'
	}, {
		mark: 'Audi',
		model: 'S8'
	}, {
		mark: 'Audi',
		model: 'SQ5'
	}, {
		mark: 'Audi',
		model: 'SQ7'
	}, {
		mark: 'Audi',
		model: 'TT'
	}, {
		mark: 'Audi',
		model: 'TT RS'
	}, {
		mark: 'Audi',
		model: 'TTS'
	}, {
		mark: 'Audi',
		model: 'V8'
	}, {
		mark: 'Bentley',
		model: 'Arnage'
	}, {
		mark: 'Bentley',
		model: 'Azure'
	}, {
		mark: 'Bentley',
		model: 'Bentayga'
	}, {
		mark: 'Bentley',
		model: 'Brooklands'
	}, {
		mark: 'Bentley',
		model: 'Continental'
	}, {
		mark: 'Bentley',
		model: 'Continental Flying Spur'
	}, {
		mark: 'Bentley',
		model: 'Continental GT'
	}, {
		mark: 'Bentley',
		model: 'Eight'
	}, {
		mark: 'Bentley',
		model: 'Flying Spur'
	}, {
		mark: 'Bentley',
		model: 'Mark 6'
	}, {
		mark: 'Bentley',
		model: 'Mulsanne'
	}, {
		mark: 'Bentley',
		model: 'R Type'
	}, {
		mark: 'Bentley',
		model: 'S'
	}, {
		mark: 'Bentley',
		model: 'T-Series'
	}, {
		mark: 'Bentley',
		model: 'Turbo R'
	}, {
		mark: 'BMW',
		model: '321'
	}, {
		mark: 'BMW',
		model: '327'
	}, {
		mark: 'BMW',
		model: '340'
	}, {
		mark: 'BMW',
		model: '02(E10)'
	}, {
		mark: 'BMW',
		model: '1er'
	}, {
		mark: 'BMW',
		model: '1M'
	}, {
		mark: 'BMW',
		model: '2er'
	}, {
		mark: 'BMW',
		model: '3er'
	}, {
		mark: 'BMW',
		model: '4er'
	}, {
		mark: 'BMW',
		model: '5er'
	}, {
		mark: 'BMW',
		model: '6er'
	}, {
		mark: 'BMW',
		model: '7er'
	}, {
		mark: 'BMW',
		model: '8er'
	}, {
		mark: 'BMW',
		model: 'i3'
	}, {
		mark: 'BMW',
		model: 'i8'
	}, {
		mark: 'BMW',
		model: 'M2'
	}, {
		mark: 'BMW',
		model: 'M3'
	}, {
		mark: 'BMW',
		model: 'M4'
	}, {
		mark: 'BMW',
		model: 'M5'
	}, {
		mark: 'BMW',
		model: 'M6'
	}, {
		mark: 'BMW',
		model: 'X1'
	}, {
		mark: 'BMW',
		model: 'X3'
	}, {
		mark: 'BMW',
		model: 'X4'
	}, {
		mark: 'BMW',
		model: 'X5'
	}, {
		mark: 'BMW',
		model: 'X5 M'
	}, {
		mark: 'BMW',
		model: 'X6'
	}, {
		mark: 'BMW',
		model: 'X6 M'
	}, {
		mark: 'BMW',
		model: 'Z1'
	}, {
		mark: 'BMW',
		model: 'Z3'
	}, {
		mark: 'BMW',
		model: 'Z3 M'
	}, {
		mark: 'BMW',
		model: 'Z4'
	}, {
		mark: 'BMW',
		model: 'Z4 M'
	}, {
		mark: 'BMW',
		model: 'Z8'
	}, {
		mark: 'Brilliance',
		model: 'FRV(BS2)'
	}, {
		mark: 'Brilliance',
		model: 'H530'
	}, {
		mark: 'Brilliance',
		model: 'M1 (BS6)'
	}, {
		mark: 'Brilliance',
		model: 'M2 (BS4)'
	}, {
		mark: 'Brilliance',
		model: 'M3 (BS3)'
	}, {
		mark: 'Brilliance',
		model: 'V5'
	}, {
		mark: 'Bugatti',
		model: 'Chiron'
	}, {
		mark: 'Bugatti',
		model: 'EB 110'
	}, {
		mark: 'Bugatti',
		model: 'EB 112'
	}, {
		mark: 'Bugatti',
		model: 'EB Veyron 16.4'
	}, {
		mark: 'BYD',
		model: 'F3'
	}, {
		mark: 'BYD',
		model: 'F5'
	}, {
		mark: 'BYD',
		model: 'F6'
	}, {
		mark: 'BYD',
		model: 'F8'
	}, {
		mark: 'BYD',
		model: 'Flyer'
	}, {
		mark: 'Cadillac',
		model: 'ATS'
	}, {
		mark: 'Cadillac',
		model: 'ATS-V'
	}, {
		mark: 'Cadillac',
		model: 'BLS'
	}, {
		mark: 'Cadillac',
		model: 'Brougham'
	}, {
		mark: 'Cadillac',
		model: 'Catera'
	}, {
		mark: 'Cadillac',
		model: 'CTS'
	}, {
		mark: 'Cadillac',
		model: 'CTS-V'
	}, {
		mark: 'Cadillac',
		model: 'De Ville'
	}, {
		mark: 'Cadillac',
		model: 'DTS'
	}, {
		mark: 'Cadillac',
		model: 'Eldorado'
	}, {
		mark: 'Cadillac',
		model: 'ELR'
	}, {
		mark: 'Cadillac',
		model: 'Escalade'
	}, {
		mark: 'Cadillac',
		model: 'Fleetwood'
	}, {
		mark: 'Cadillac',
		model: 'Seville'
	}, {
		mark: 'Cadillac',
		model: 'SRX'
	}, {
		mark: 'Cadillac',
		model: 'STS'
	}, {
		mark: 'Cadillac',
		model: 'XT5'
	}, {
		mark: 'Changam',
		model: 'Benni'
	}, {
		mark: 'Changam',
		model: 'CS35'
	}, {
		mark: 'Changam',
		model: 'Eado'
	}, {
		mark: 'Changam',
		model: 'Raeton'
	}, {
		mark: 'Changam',
		model: 'Z-Shine'
	}, {
		mark: 'Chery',
		model: 'Amulet'
	}, {
		mark: 'Chery',
		model: 'Arrizo 7'
	}, {
		mark: 'Chery',
		model: 'Bonus (A13)'
	}, {
		mark: 'Chery',
		model: 'Bonus 3'
	}, {
		mark: 'Chery',
		model: 'CrossEastar'
	}, {
		mark: 'Chery',
		model: 'Fora'
	}, {
		mark: 'Chery',
		model: 'IndiS'
	}, {
		mark: 'Chery',
		model: 'Kimo'
	}, {
		mark: 'Chery',
		model: 'M11'
	}, {
		mark: 'Chery',
		model: 'Oriental Son'
	}, {
		mark: 'Chery',
		model: 'QQ6'
	}, {
		mark: 'Chery',
		model: 'Sweet'
	}, {
		mark: 'Chery',
		model: 'Tiggo (T11)'
	}, {
		mark: 'Chery',
		model: 'Tiggo 5'
	}, {
		mark: 'Chery',
		model: 'Very (A13)'
	}, {
		mark: 'Chevrolet',
		model: 'Alero'
	}, {
		mark: 'Chevrolet',
		model: 'Astro'
	}, {
		mark: 'Chevrolet',
		model: 'Avalanche'
	}, {
		mark: 'Chevrolet',
		model: 'Aveo'
	}, {
		mark: 'Chevrolet',
		model: 'Bel Air'
	}, {
		mark: 'Chevrolet',
		model: 'Beretta'
	}, {
		mark: 'Chevrolet',
		model: 'Blazer'
	}, {
		mark: 'Chevrolet',
		model: 'Blazer K5'
	}, {
		mark: 'Chevrolet',
		model: 'C-10'
	}, {
		mark: 'Chevrolet',
		model: 'Camaro'
	}, {
		mark: 'Chevrolet',
		model: 'Caprice'
	}, {
		mark: 'Chevrolet',
		model: 'Captiva'
	}, {
		mark: 'Chevrolet',
		model: 'Cavalier'
	}, {
		mark: 'Chevrolet',
		model: 'Chevette'
	}, {
		mark: 'Chevrolet',
		model: 'Cobalt'
	}, {
		mark: 'Chevrolet',
		model: 'Colorado'
	}, {
		mark: 'Chevrolet',
		model: 'Corvette'
	}, {
		mark: 'Chevrolet',
		model: 'Cruze'
	}, {
		mark: 'Chevrolet',
		model: 'Cruze (HR)'
	}, {
		mark: 'Chevrolet',
		model: 'Epica'
	}, {
		mark: 'Chevrolet',
		model: 'Equinox'
	}, {
		mark: 'Chevrolet',
		model: 'Evanda'
	}, {
		mark: 'Chevrolet',
		model: 'Express'
	}, {
		mark: 'Chevrolet',
		model: 'HHR'
	}, {
		mark: 'Chevrolet',
		model: 'Impala'
	}, {
		mark: 'Chevrolet',
		model: 'Lacetti'
	}, {
		mark: 'Chevrolet',
		model: 'Lanos'
	}, {
		mark: 'Chevrolet',
		model: 'Lumina'
	}, {
		mark: 'Chevrolet',
		model: 'Lumina APV'
	}, {
		mark: 'Chevrolet',
		model: 'Malibu'
	}, {
		mark: 'Chevrolet',
		model: 'Metro'
	}, {
		mark: 'Chevrolet',
		model: 'MW'
	}, {
		mark: 'Chevrolet',
		model: 'Niva'
	}, {
		mark: 'Chevrolet',
		model: 'Orlando'
	}, {
		mark: 'Chevrolet',
		model: 'Prizm'
	}, {
		mark: 'Chevrolet',
		model: 'Rezzo'
	}, {
		mark: 'Chevrolet',
		model: 'S-10 Pickup'
	}, {
		mark: 'Chevrolet',
		model: 'Silverado'
	}, {
		mark: 'Chevrolet',
		model: 'Spark'
	}, {
		mark: 'Chevrolet',
		model: 'SS'
	}, {
		mark: 'Chevrolet',
		model: 'SSR'
	}, {
		mark: 'Chevrolet',
		model: 'Starcraft'
	}, {
		mark: 'Chevrolet',
		model: 'Suburban'
	}, {
		mark: 'Chevrolet',
		model: 'Tahoe'
	}, {
		mark: 'Chevrolet',
		model: 'Tavera'
	}, {
		mark: 'Chevrolet',
		model: 'Tracker'
	}, {
		mark: 'Chevrolet',
		model: 'TrailBlazer'
	}, {
		mark: 'Chevrolet',
		model: 'Trans Sport'
	}, {
		mark: 'Chevrolet',
		model: 'Van'
	}, {
		mark: 'Chevrolet',
		model: 'Viva'
	}, {
		mark: 'Chevrolet',
		model: 'Volt'
	}, {
		mark: 'Chrysler',
		model: '180'
	}, {
		mark: 'Chrysler',
		model: '200'
	}, {
		mark: 'Chrysler',
		model: '300C'
	}, {
		mark: 'Chrysler',
		model: '300C SRT8'
	}, {
		mark: 'Chrysler',
		model: '300M'
	}, {
		mark: 'Chrysler',
		model: 'Cirrus'
	}, {
		mark: 'Chrysler',
		model: 'Concorde'
	}, {
		mark: 'Chrysler',
		model: 'Crossfire'
	}, {
		mark: 'Chrysler',
		model: 'Fifth Avenue'
	}, {
		mark: 'Chrysler',
		model: 'Imperial'
	}, {
		mark: 'Chrysler',
		model: 'Intrepid'
	}, {
		mark: 'Chrysler',
		model: 'Le Baron'
	}, {
		mark: 'Chrysler',
		model: 'LHS'
	}, {
		mark: 'Chrysler',
		model: 'Neon'
	}, {
		mark: 'Chrysler',
		model: 'New Yorker'
	}, {
		mark: 'Chrysler',
		model: 'Pacifica'
	}, {
		mark: 'Chrysler',
		model: 'Prowler'
	}, {
		mark: 'Chrysler',
		model: 'PT Cruiser'
	}, {
		mark: 'Chrysler',
		model: 'Saratoga'
	}, {
		mark: 'Chrysler',
		model: 'Sebring'
	}, {
		mark: 'Chrysler',
		model: 'Stratus'
	}, {
		mark: 'Chrysler',
		model: 'Town & Country'
	}, {
		mark: 'Chrysler',
		model: 'Vision'
	}, {
		mark: 'Chrysler',
		model: 'Voyager'
	}, {
		mark: 'Citroen',
		model: '2 CV'
	}, {
		mark: 'Citroen',
		model: 'Berlingo'
	}, {
		mark: 'Citroen',
		model: 'BX'
	}, {
		mark: 'Citroen',
		model: 'C-Crosser'
	}, {
		mark: 'Citroen',
		model: 'C-Elysee'
	}, {
		mark: 'Citroen',
		model: 'С1'
	}, {
		mark: 'Citroen',
		model: 'С2'
	}, {
		mark: 'Citroen',
		model: 'С3'
	}, {
		mark: 'Citroen',
		model: 'C3 Picasso'
	}, {
		mark: 'Citroen',
		model: 'C4'
	}, {
		mark: 'Citroen',
		model: 'C4 Aircross'
	}, {
		mark: 'Citroen',
		model: 'C4 Picasso'
	}, {
		mark: 'Citroen',
		model: 'C5'
	}, {
		mark: 'Citroen',
		model: 'C6'
	}, {
		mark: 'Citroen',
		model: 'C8'
	}, {
		mark: 'Citroen',
		model: 'CX'
	}, {
		mark: 'Citroen',
		model: 'DS3'
	}, {
		mark: 'Citroen',
		model: 'DS4'
	}, {
		mark: 'Citroen',
		model: 'DS5'
	}, {
		mark: 'Citroen',
		model: 'Evasion'
	}, {
		mark: 'Citroen',
		model: 'GS'
	}, {
		mark: 'Citroen',
		model: 'Jumpy'
	}, {
		mark: 'Citroen',
		model: 'LN'
	}, {
		mark: 'Citroen',
		model: 'Saxo'
	}, {
		mark: 'Citroen',
		model: 'Xantia'
	}, {
		mark: 'Citroen',
		model: 'XM'
	}, {
		mark: 'Citroen',
		model: 'Xsara'
	}, {
		mark: 'Citroen',
		model: 'Xsara Picasso'
	}, {
		mark: 'Citroen',
		model: 'ZX'
	}, {
		mark: 'Daewoo',
		model: 'Arcadia'
	}, {
		mark: 'Daewoo',
		model: 'Chairman'
	}, {
		mark: 'Daewoo',
		model: 'Damas'
	}, {
		mark: 'Daewoo',
		model: 'Espero'
	}, {
		mark: 'Daewoo',
		model: 'Evanda'
	}, {
		mark: 'Daewoo',
		model: 'G2X'
	}, {
		mark: 'Daewoo',
		model: 'Gentra'
	}, {
		mark: 'Daewoo',
		model: 'Kalos'
	}, {
		mark: 'Daewoo',
		model: 'Korando'
	}, {
		mark: 'Daewoo',
		model: 'Lacetti'
	}, {
		mark: 'Daewoo',
		model: 'Lanos'
	}, {
		mark: 'Daewoo',
		model: 'Leganza'
	}, {
		mark: 'Daewoo',
		model: 'LeMans'
	}, {
		mark: 'Daewoo',
		model: 'Magnus'
	}, {
		mark: 'Daewoo',
		model: 'Matiz'
	}, {
		mark: 'Daewoo',
		model: 'Musso'
	}, {
		mark: 'Daewoo',
		model: 'Nexia'
	}, {
		mark: 'Daewoo',
		model: 'Nubira'
	}, {
		mark: 'Daewoo',
		model: 'Prince'
	}, {
		mark: 'Daewoo',
		model: 'Racer'
	}, {
		mark: 'Daewoo',
		model: 'Rezzo'
	}, {
		mark: 'Daewoo',
		model: 'Sens'
	}, {
		mark: 'Daewoo',
		model: 'Tacuma'
	}, {
		mark: 'Daewoo',
		model: 'Tico'
	}, {
		mark: 'Daewoo',
		model: 'Tosca'
	}, {
		mark: 'Daewoo',
		model: 'Winstorm'
	}, {
		mark: 'Daihatsu',
		model: 'Applause'
	}, {
		mark: 'Daihatsu',
		model: 'Atrai'
	}, {
		mark: 'Daihatsu',
		model: 'Be-go'
	}, {
		mark: 'Daihatsu',
		model: 'Boon'
	}, {
		mark: 'Daihatsu',
		model: 'Charade'
	}, {
		mark: 'Daihatsu',
		model: 'Coo'
	}, {
		mark: 'Daihatsu',
		model: 'Copen'
	}, {
		mark: 'Daihatsu',
		model: 'Cuore'
	}, {
		mark: 'Daihatsu',
		model: 'Esse'
	}, {
		mark: 'Daihatsu',
		model: 'Feroza'
	}, {
		mark: 'Daihatsu',
		model: 'Materia'
	}, {
		mark: 'Daihatsu',
		model: 'MAX'
	}, {
		mark: 'Daihatsu',
		model: 'Mira'
	}, {
		mark: 'Daihatsu',
		model: 'Mira Gino'
	}, {
		mark: 'Daihatsu',
		model: 'Move'
	}, {
		mark: 'Daihatsu',
		model: 'Pyzar'
	}, {
		mark: 'Daihatsu',
		model: 'Rocky'
	}, {
		mark: 'Daihatsu',
		model: 'Sirion'
	}, {
		mark: 'Daihatsu',
		model: 'Sonica'
	}, {
		mark: 'Daihatsu',
		model: 'Storia'
	}, {
		mark: 'Daihatsu',
		model: 'Tanto'
	}, {
		mark: 'Daihatsu',
		model: 'Terios'
	}, {
		mark: 'Daihatsu',
		model: 'Xenia'
	}, {
		mark: 'Daihatsu',
		model: 'YRV'
	}, {
		mark: 'Datsun',
		model: 'mi-DO'
	}, {
		mark: 'Datsun',
		model: 'on-DO'
	}, {
		mark: 'Datsun',
		model: 'Urvan'
	}, {
		mark: 'Dodge',
		model: 'Aries'
	}, {
		mark: 'Dodge',
		model: 'Avenger'
	}, {
		mark: 'Dodge',
		model: 'Caliber'
	}, {
		mark: 'Dodge',
		model: 'Caravan'
	}, {
		mark: 'Dodge',
		model: 'Challenger'
	}, {
		mark: 'Dodge',
		model: 'Charger'
	}, {
		mark: 'Dodge',
		model: 'Dakota'
	}, {
		mark: 'Dodge',
		model: 'Dart'
	}, {
		mark: 'Dodge',
		model: 'Daytona'
	}, {
		mark: 'Dodge',
		model: 'Durango'
	}, {
		mark: 'Dodge',
		model: 'Dynasty'
	}, {
		mark: 'Dodge',
		model: 'Intrepid'
	}, {
		mark: 'Dodge',
		model: 'Journey'
	}, {
		mark: 'Dodge',
		model: 'Magnum'
	}, {
		mark: 'Dodge',
		model: 'Neon'
	}, {
		mark: 'Dodge',
		model: 'Nitro'
	}, {
		mark: 'Dodge',
		model: 'RAM'
	}, {
		mark: 'Dodge',
		model: 'Spirit'
	}, {
		mark: 'Dodge',
		model: 'Stealth'
	}, {
		mark: 'Dodge',
		model: 'Stratus'
	}, {
		mark: 'Dodge',
		model: 'Viper'
	}, {
		mark: 'DS',
		model: '3'
	}, {
		mark: 'DS',
		model: '4'
	}, {
		mark: 'DS',
		model: '5'
	}, {
		mark: 'FAW',
		model: 'Besturn B50'
	}, {
		mark: 'FAW',
		model: 'Jinn'
	}, {
		mark: 'FAW',
		model: 'Oley'
	}, {
		mark: 'FAW',
		model: 'V2'
	}, {
		mark: 'FAW',
		model: 'V5'
	}, {
		mark: 'FAW',
		model: 'Vita'
	}, {
		mark: 'Ferrari',
		model: '360'
	}, {
		mark: 'Ferrari',
		model: '458'
	}, {
		mark: 'Ferrari',
		model: '488'
	}, {
		mark: 'Ferrari',
		model: '550'
	}, {
		mark: 'Ferrari',
		model: '599'
	}, {
		mark: 'Ferrari',
		model: '612'
	}, {
		mark: 'Ferrari',
		model: 'California'
	}, {
		mark: 'Ferrari',
		model: 'F12berlinetta'
	}, {
		mark: 'Ferrari',
		model: 'F430'
	}, {
		mark: 'Ferrari',
		model: 'FF'
	}, {
		mark: 'Ferrari',
		model: 'GTC4Lusso'
	}, {
		mark: 'Ferrari',
		model: 'Enzo'
	}, {
		mark: 'Ferrari',
		model: 'LaFerrari'
	}, {
		mark: 'Fiat',
		model: '126'
	}, {
		mark: 'Fiat',
		model: '500'
	}, {
		mark: 'Fiat',
		model: '600'
	}, {
		mark: 'Fiat',
		model: '124 Sport Spider'
	}, {
		mark: 'Fiat',
		model: '900T'
	}, {
		mark: 'Fiat',
		model: 'Albea'
	}, {
		mark: 'Fiat',
		model: 'Brava'
	}, {
		mark: 'Fiat',
		model: 'Bravo'
	}, {
		mark: 'Fiat',
		model: 'Coupe'
	}, {
		mark: 'Fiat',
		model: 'Croma'
	}, {
		mark: 'Fiat',
		model: 'Doblo'
	}, {
		mark: 'Fiat',
		model: 'Fiorino'
	}, {
		mark: 'Fiat',
		model: 'Freemont'
	}, {
		mark: 'Fiat',
		model: 'Fullback'
	}, {
		mark: 'Fiat',
		model: 'Linea'
	}, {
		mark: 'Fiat',
		model: 'Marea'
	}, {
		mark: 'Fiat',
		model: 'Multipla'
	}, {
		mark: 'Fiat',
		model: 'Palio'
	}, {
		mark: 'Fiat',
		model: 'Panda'
	}, {
		mark: 'Fiat',
		model: 'Punto'
	}, {
		mark: 'Fiat',
		model: 'Qubo'
	}, {
		mark: 'Fiat',
		model: 'Regata'
	}, {
		mark: 'Fiat',
		model: 'Ritmo'
	}, {
		mark: 'Fiat',
		model: 'Scudo'
	}, {
		mark: 'Fiat',
		model: 'Sedici'
	}, {
		mark: 'Fiat',
		model: 'Seicento'
	}, {
		mark: 'Fiat',
		model: 'Siena'
	}, {
		mark: 'Fiat',
		model: 'Stilo'
	}, {
		mark: 'Fiat',
		model: 'Tempra'
	}, {
		mark: 'Fiat',
		model: 'Tipo'
	}, {
		mark: 'Fiat',
		model: 'Ulusse'
	}, {
		mark: 'Fiat',
		model: 'Uno'
	}, {
		mark: 'Ford',
		model: 'Aerostar'
	}, {
		mark: 'Ford',
		model: 'Bronco'
	}, {
		mark: 'Ford',
		model: 'Bronco-2'
	}, {
		mark: 'Ford',
		model: 'C-MAX'
	}, {
		mark: 'Ford',
		model: 'Capri'
	}, {
		mark: 'Ford',
		model: 'Consul'
	}, {
		mark: 'Ford',
		model: 'Contour'
	}, {
		mark: 'Ford',
		model: 'Cougar'
	}, {
		mark: 'Ford',
		model: 'Crown Victoria'
	}, {
		mark: 'Ford',
		model: 'Custom'
	}, {
		mark: 'Ford',
		model: 'Econoline'
	}, {
		mark: 'Ford',
		model: 'EcoSport'
	}, {
		mark: 'Ford',
		model: 'Edge'
	}, {
		mark: 'Ford',
		model: 'Escape'
	}, {
		mark: 'Ford',
		model: 'Escort'
	}, {
		mark: 'Ford',
		model: 'Excursion'
	}, {
		mark: 'Ford',
		model: 'Expedition'
	}, {
		mark: 'Ford',
		model: 'Explorer'
	}, {
		mark: 'Ford',
		model: 'Explorer Sport Trac'
	}, {
		mark: 'Ford',
		model: 'F-150'
	}, {
		mark: 'Ford',
		model: 'Fiesta'
	}, {
		mark: 'Ford',
		model: 'Fiesta ST'
	}, {
		mark: 'Ford',
		model: 'Five Hundred'
	}, {
		mark: 'Ford',
		model: 'Focus'
	}, {
		mark: 'Ford',
		model: 'Focus RS'
	}, {
		mark: 'Ford',
		model: 'Focus ST'
	}, {
		mark: 'Ford',
		model: 'Freestyle'
	}, {
		mark: 'Ford',
		model: 'Fusion'
	}, {
		mark: 'Ford',
		model: 'Galaxie'
	}, {
		mark: 'Ford',
		model: 'Galaxy'
	}, {
		mark: 'Ford',
		model: 'Granada'
	}, {
		mark: 'Ford',
		model: 'KA'
	}, {
		mark: 'Ford',
		model: 'Kuga'
	}, {
		mark: 'Ford',
		model: 'Laser'
	}, {
		mark: 'Ford',
		model: 'LTD Crown Victoria'
	}, {
		mark: 'Ford',
		model: 'MAverick'
	}, {
		mark: 'Ford',
		model: 'Mondeo'
	}, {
		mark: 'Ford',
		model: 'Mondeo ST'
	}, {
		mark: 'Ford',
		model: 'Mustang'
	}, {
		mark: 'Ford',
		model: 'Orion'
	}, {
		mark: 'Ford',
		model: 'Probe'
	}, {
		mark: 'Ford',
		model: 'Puma'
	}, {
		mark: 'Ford',
		model: 'Ranchero'
	}, {
		mark: 'Ford',
		model: 'Ranger'
	}, {
		mark: 'Ford',
		model: 'S-MAX'
	}, {
		mark: 'Ford',
		model: 'Scorpio'
	}, {
		mark: 'Ford',
		model: 'Sierra'
	}, {
		mark: 'Ford',
		model: 'Spectron'
	}, {
		mark: 'Ford',
		model: 'Taunus'
	}, {
		mark: 'Ford',
		model: 'Taurus'
	}, {
		mark: 'Ford',
		model: 'Taurus X'
	}, {
		mark: 'Ford',
		model: 'Telstar'
	}, {
		mark: 'Ford',
		model: 'Tempo'
	}, {
		mark: 'Ford',
		model: 'Thunderbird'
	}, {
		mark: 'Ford',
		model: 'Tourneo Connect'
	}, {
		mark: 'Ford',
		model: 'Tourneo Custom'
	}, {
		mark: 'Ford',
		model: 'Windstar'
	}, {
		mark: 'Ford',
		model: 'Zephyr'
	}, {
		mark: 'GAZ',
		model: '67'
	}, {
		mark: 'GAZ',
		model: '69'
	}, {
		mark: 'GAZ',
		model: '12 ЗИМ'
	}, {
		mark: 'GAZ',
		model: '13 \'Чайка\''
	}, {
		mark: 'GAZ',
		model: '14 \'Чайка\''
	}, {
		mark: 'GAZ',
		model: '21 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '22 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '24 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '2330 \'Тигр\''
	}, {
		mark: 'GAZ',
		model: '3102 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '31029 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '3105 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '3110 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '31105 \'Волга\''
	}, {
		mark: 'GAZ',
		model: '3111 \'Волга\''
	}, {
		mark: 'GAZ',
		model: 'Volga Siber'
	}, {
		mark: 'GAZ',
		model: 'M-20 \'Победа\''
	}, {
		mark: 'GAZ',
		model: 'М-72'
	}, {
		mark: 'GAZ',
		model: 'М1'
	}, {
		mark: 'Geely',
		model: 'CK (Otaka)'
	}, {
		mark: 'Geely',
		model: 'Emgrand 7'
	}, {
		mark: 'Geely',
		model: 'Emgrand EC7'
	}, {
		mark: 'Geely',
		model: 'Emgrand X7'
	}, {
		mark: 'Geely',
		model: 'FC (Vision)'
	}, {
		mark: 'Geely',
		model: 'GC6'
	}, {
		mark: 'Geely',
		model: 'MK'
	}, {
		mark: 'Geely',
		model: 'MK Cross'
	}, {
		mark: 'Geely',
		model: 'SC7'
	}, {
		mark: 'GMC',
		model: 'Acadia'
	}, {
		mark: 'GMC',
		model: 'Canyon'
	}, {
		mark: 'GMC',
		model: 'Envoy'
	}, {
		mark: 'GMC',
		model: 'Jimmy'
	}, {
		mark: 'GMC',
		model: 'Safari'
	}, {
		mark: 'GMC',
		model: 'Savana'
	}, {
		mark: 'GMC',
		model: 'Sierra'
	}, {
		mark: 'GMC',
		model: 'Suburban'
	}, {
		mark: 'GMC',
		model: 'Terrain'
	}, {
		mark: 'GMC',
		model: 'Typhoon'
	}, {
		mark: 'GMC',
		model: 'Vandura'
	}, {
		mark: 'GMC',
		model: 'Yukon'
	}, {
		mark: 'Great Wall',
		model: 'Coolbear'
	}, {
		mark: 'Great Wall',
		model: 'Cowry'
	}, {
		mark: 'Great Wall',
		model: 'Deer'
	}, {
		mark: 'Great Wall',
		model: 'Florid'
	}, {
		mark: 'Great Wall',
		model: 'Hover'
	}, {
		mark: 'Great Wall',
		model: 'Hover H3'
	}, {
		mark: 'Great Wall',
		model: 'Hover H5'
	}, {
		mark: 'Great Wall',
		model: 'Hover H6'
	}, {
		mark: 'Great Wall',
		model: 'Hover M2'
	}, {
		mark: 'Great Wall',
		model: 'Hover M4'
	}, {
		mark: 'Great Wall',
		model: 'Peri'
	}, {
		mark: 'Great Wall',
		model: 'Safe'
	}, {
		mark: 'Great Wall',
		model: 'Sailor'
	}, {
		mark: 'Great Wall',
		model: 'Sing RUV'
	}, {
		mark: 'Great Wall',
		model: 'Voleex C30'
	}, {
		mark: 'Great Wall',
		model: 'Wingle'
	}, {
		mark: 'Hafei',
		model: 'Brio'
	}, {
		mark: 'Hafei',
		model: 'Princip'
	}, {
		mark: 'Hafei',
		model: 'Simbo'
	}, {
		mark: 'Haima',
		model: '3'
	}, {
		mark: 'Haima',
		model: '7'
	}, {
		mark: 'Haima',
		model: 'M3'
	}, {
		mark: 'Haval',
		model: 'H2'
	}, {
		mark: 'Haval',
		model: 'H6'
	}, {
		mark: 'Haval',
		model: 'H8'
	}, {
		mark: 'Haval',
		model: 'H9'
	}, {
		mark: 'Hawtai',
		model: 'Boliger'
	}, {
		mark: 'Honda',
		model: 'Accord'
	}, {
		mark: 'Honda',
		model: 'Acty'
	}, {
		mark: 'Honda',
		model: 'Airwave'
	}, {
		mark: 'Honda',
		model: 'Ascot'
	}, {
		mark: 'Honda',
		model: 'Ascot Innova'
	}, {
		mark: 'Honda',
		model: 'Avancier'
	}, {
		mark: 'Honda',
		model: 'Beat'
	}, {
		mark: 'Honda',
		model: 'Capa'
	}, {
		mark: 'Honda',
		model: 'City'
	}, {
		mark: 'Honda',
		model: 'Civic'
	}, {
		mark: 'Honda',
		model: 'Civic Ferio'
	}, {
		mark: 'Honda',
		model: 'Civic Type R'
	}, {
		mark: 'Honda',
		model: 'Domani'
	}, {
		mark: 'Honda',
		model: 'Edix'
	}, {
		mark: 'Honda',
		model: 'Element'
	}, {
		mark: 'Honda',
		model: 'Elysion'
	}, {
		mark: 'Honda',
		model: 'Fit'
	}, {
		mark: 'Honda',
		model: 'Fit Aria'
	}, {
		mark: 'Honda',
		model: 'FR-V'
	}, {
		mark: 'Honda',
		model: 'Freed'
	}, {
		mark: 'Honda',
		model: 'HR-V'
	}, {
		mark: 'Honda',
		model: 'Insight'
	}, {
		mark: 'Honda',
		model: 'Inspire'
	}, {
		mark: 'Honda',
		model: 'Integra'
	}, {
		mark: 'Honda',
		model: 'Jazz'
	}, {
		mark: 'Honda',
		model: 'Legend'
	}, {
		mark: 'Honda',
		model: 'Life'
	}, {
		mark: 'Honda',
		model: 'Logo'
	}, {
		mark: 'Honda',
		model: 'Mobilio'
	}, {
		mark: 'Honda',
		model: 'NSX'
	}, {
		mark: 'Honda',
		model: 'Odyssey'
	}, {
		mark: 'Honda',
		model: 'Orthia'
	}, {
		mark: 'Honda',
		model: 'Partner'
	}, {
		mark: 'Honda',
		model: 'Pilot'
	}, {
		mark: 'Honda',
		model: 'Prelude'
	}, {
		mark: 'Honda',
		model: 'Rafaga'
	}, {
		mark: 'Honda',
		model: 'Ridgeline'
	}, {
		mark: 'Honda',
		model: 'S-MX'
	}, {
		mark: 'Honda',
		model: 'S2000'
	}, {
		mark: 'Honda',
		model: 'Saber'
	}, {
		mark: 'Honda',
		model: 'Shuttle'
	}, {
		mark: 'Honda',
		model: 'Stepwgn'
	}, {
		mark: 'Honda',
		model: 'Stream'
	}, {
		mark: 'Honda',
		model: 'Torneo'
	}, {
		mark: 'Honda',
		model: 'Vamos'
	}, {
		mark: 'Honda',
		model: 'Vezel'
	}, {
		mark: 'Honda',
		model: 'Vigor'
	}, {
		mark: 'Honda',
		model: 'Zest'
	}, {
		mark: 'Hummer',
		model: 'H1'
	}, {
		mark: 'Hummer',
		model: 'H2'
	}, {
		mark: 'Hummer',
		model: 'H3'
	}, {
		mark: 'Hyunday',
		model: 'Accent'
	}, {
		mark: 'Hyunday',
		model: 'Atos'
	}, {
		mark: 'Hyunday',
		model: 'Avante'
	}, {
		mark: 'Hyunday',
		model: 'Centennial'
	}, {
		mark: 'Hyunday',
		model: 'Coupe'
	}, {
		mark: 'Hyunday',
		model: 'Creta'
	}, {
		mark: 'Hyunday',
		model: 'Elantra'
	}, {
		mark: 'Hyunday',
		model: 'Equus'
	}, {
		mark: 'Hyunday',
		model: 'Excel'
	}, {
		mark: 'Hyunday',
		model: 'Galloper'
	}, {
		mark: 'Hyunday',
		model: 'Genesis'
	}, {
		mark: 'Hyunday',
		model: 'Genesis Coupe'
	}, {
		mark: 'Hyunday',
		model: 'Getz'
	}, {
		mark: 'Hyunday',
		model: 'Grace'
	}, {
		mark: 'Hyunday',
		model: 'Grandeur'
	}, {
		mark: 'Hyunday',
		model: 'i10'
	}, {
		mark: 'Hyunday',
		model: 'i20'
	}, {
		mark: 'Hyunday',
		model: 'i30'
	}, {
		mark: 'Hyunday',
		model: 'i40'
	}, {
		mark: 'Hyunday',
		model: 'ix20'
	}, {
		mark: 'Hyunday',
		model: 'ix35'
	}, {
		mark: 'Hyunday',
		model: 'ix55'
	}, {
		mark: 'Hyunday',
		model: 'Lantra'
	}, {
		mark: 'Hyunday',
		model: 'Lavita'
	}, {
		mark: 'Hyunday',
		model: 'Matrix'
	}, {
		mark: 'Hyunday',
		model: 'Maxcruz'
	}, {
		mark: 'Hyunday',
		model: 'Pony'
	}, {
		mark: 'Hyunday',
		model: 'Santa Fe'
	}, {
		mark: 'Hyunday',
		model: 'Santamo'
	}, {
		mark: 'Hyunday',
		model: 'Solaris'
	}, {
		mark: 'Hyunday',
		model: 'Sonata'
	}, {
		mark: 'Hyunday',
		model: 'Starex (H-1)'
	}, {
		mark: 'Hyunday',
		model: 'Terracan'
	}, {
		mark: 'Hyunday',
		model: 'Tiburon'
	}, {
		mark: 'Hyunday',
		model: 'Trajet'
	}, {
		mark: 'Hyunday',
		model: 'Tucson'
	}, {
		mark: 'Hyunday',
		model: 'Tuscani'
	}, {
		mark: 'Hyunday',
		model: 'Veloster'
	}, {
		mark: 'Hyunday',
		model: 'Veracruz'
	}, {
		mark: 'Hyunday',
		model: 'Verna'
	}, {
		mark: 'Hyunday',
		model: 'XG'
	}, {
		mark: 'Infiniti',
		model: 'EX'
	}, {
		mark: 'Infiniti',
		model: 'FX'
	}, {
		mark: 'Infiniti',
		model: 'G'
	}, {
		mark: 'Infiniti',
		model: 'I'
	}, {
		mark: 'Infiniti',
		model: 'J'
	}, {
		mark: 'Infiniti',
		model: 'JX'
	}, {
		mark: 'Infiniti',
		model: 'M'
	}, {
		mark: 'Infiniti',
		model: 'Q'
	}, {
		mark: 'Infiniti',
		model: 'Q50'
	}, {
		mark: 'Infiniti',
		model: 'Q70'
	}, {
		mark: 'Infiniti',
		model: 'QX30'
	}, {
		mark: 'Infiniti',
		model: 'QX4'
	}, {
		mark: 'Infiniti',
		model: 'QX50'
	}, {
		mark: 'Infiniti',
		model: 'QX56'
	}, {
		mark: 'Infiniti',
		model: 'QX60'
	}, {
		mark: 'Infiniti',
		model: 'QX70'
	}, {
		mark: 'Infiniti',
		model: 'QX80'
	}, {
		mark: 'JAC',
		model: 'J2'
	}, {
		mark: 'JAC',
		model: 'J5'
	}, {
		mark: 'JAC',
		model: 'M1'
	}, {
		mark: 'JAC',
		model: 'S1'
	}, {
		mark: 'JAC',
		model: 'S3'
	}, {
		mark: 'JAC',
		model: 'S5'
	}, {
		mark: 'Jaguar',
		model: 'E-type'
	}, {
		mark: 'Jaguar',
		model: 'F-Pace'
	}, {
		mark: 'Jaguar',
		model: 'F-type'
	}, {
		mark: 'Jaguar',
		model: 'S-Type'
	}, {
		mark: 'Jaguar',
		model: 'X-Type'
	}, {
		mark: 'Jaguar',
		model: 'XE'
	}, {
		mark: 'Jaguar',
		model: 'XF'
	}, {
		mark: 'Jaguar',
		model: 'XFR'
	}, {
		mark: 'Jaguar',
		model: 'XJ'
	}, {
		mark: 'Jaguar',
		model: 'XJR'
	}, {
		mark: 'Jaguar',
		model: 'XJS'
	}, {
		mark: 'Jaguar',
		model: 'XK'
	}, {
		mark: 'Jaguar',
		model: 'XKR'
	}, {
		mark: 'Jeep',
		model: 'Cherokee'
	}, {
		mark: 'Jeep',
		model: 'CJ'
	}, {
		mark: 'Jeep',
		model: 'Commander'
	}, {
		mark: 'Jeep',
		model: 'Compass'
	}, {
		mark: 'Jeep',
		model: 'Grand Cherokee'
	}, {
		mark: 'Jeep',
		model: 'Grand Cherokee SRT8'
	}, {
		mark: 'Jeep',
		model: 'Liberty (North America)'
	}, {
		mark: 'Jeep',
		model: 'Liberty (Patriot)'
	}, {
		mark: 'Jeep',
		model: 'Renegade'
	}, {
		mark: 'Jeep',
		model: 'Wrangler'
	}, {
		mark: 'KIA',
		model: 'Avella'
	}, {
		mark: 'KIA',
		model: 'Cadenza'
	}, {
		mark: 'KIA',
		model: 'Capital'
	}, {
		mark: 'KIA',
		model: 'Carens'
	}, {
		mark: 'KIA',
		model: 'Carnival'
	}, {
		mark: 'KIA',
		model: 'Ceed'
	}, {
		mark: 'KIA',
		model: 'Ceed GT'
	}, {
		mark: 'KIA',
		model: 'Cerato'
	}, {
		mark: 'KIA',
		model: 'Clarus'
	}, {
		mark: 'KIA',
		model: 'Joice'
	}, {
		mark: 'KIA',
		model: 'Magentis'
	}, {
		mark: 'KIA',
		model: 'Mohave (Borrego)'
	}, {
		mark: 'KIA',
		model: 'Opirus'
	}, {
		mark: 'KIA',
		model: 'Optima'
	}, {
		mark: 'KIA',
		model: 'Picanto'
	}, {
		mark: 'KIA',
		model: 'Pride'
	}, {
		mark: 'KIA',
		model: 'Quoris'
	}, {
		mark: 'KIA',
		model: 'Retona'
	}, {
		mark: 'KIA',
		model: 'Rio'
	}, {
		mark: 'KIA',
		model: 'Sedona'
	}, {
		mark: 'KIA',
		model: 'Sephia'
	}, {
		mark: 'KIA',
		model: 'Shuma'
	}, {
		mark: 'KIA',
		model: 'Sorento'
	}, {
		mark: 'KIA',
		model: 'Soul'
	}, {
		mark: 'KIA',
		model: 'Spectra'
	}, {
		mark: 'KIA',
		model: 'Sportage'
	}, {
		mark: 'KIA',
		model: 'Venga'
	}, {
		mark: 'KIA',
		model: 'X-Trek'
	}, {
		mark: 'Lada',
		model: '2101'
	}, {
		mark: 'Lada',
		model: '2102'
	}, {
		mark: 'Lada',
		model: '2103'
	}, {
		mark: 'Lada',
		model: '2104'
	}, {
		mark: 'Lada',
		model: '2105'
	}, {
		mark: 'Lada',
		model: '2106'
	}, {
		mark: 'Lada',
		model: '2107'
	}, {
		mark: 'Lada',
		model: '2108'
	}, {
		mark: 'Lada',
		model: '2109'
	}, {
		mark: 'Lada',
		model: '2110'
	}, {
		mark: 'Lada',
		model: '2111'
	}, {
		mark: 'Lada',
		model: '2112'
	}, {
		mark: 'Lada',
		model: '2113'
	}, {
		mark: 'Lada',
		model: '2114'
	}, {
		mark: 'Lada',
		model: '2115'
	}, {
		mark: 'Lada',
		model: '2123'
	}, {
		mark: 'Lada',
		model: '2129'
	}, {
		mark: 'Lada',
		model: '2329'
	}, {
		mark: 'Lada',
		model: '21099'
	}, {
		mark: 'Lada',
		model: '1111 Ока'
	}, {
		mark: 'Lada',
		model: '2120 Надежда'
	}, {
		mark: 'Lada',
		model: '2121 (4х4)'
	}, {
		mark: 'Lada',
		model: '2131 (4х4)'
	}, {
		mark: 'Lada',
		model: 'El Lada'
	}, {
		mark: 'Lada',
		model: 'Granta'
	}, {
		mark: 'Lada',
		model: 'Kalina'
	}, {
		mark: 'Lada',
		model: 'Largus'
	}, {
		mark: 'Lada',
		model: 'Priora'
	}, {
		mark: 'Lada',
		model: 'Vesta'
	}, {
		mark: 'Lada',
		model: 'XRAY'
	}, {
		mark: 'Lamborghini',
		model: 'Aventador'
	}, {
		mark: 'Lamborghini',
		model: 'Centanario'
	}, {
		mark: 'Lamborghini',
		model: 'Countach'
	}, {
		mark: 'Lamborghini',
		model: 'Diablo'
	}, {
		mark: 'Lamborghini',
		model: 'Gallardo'
	}, {
		mark: 'Lamborghini',
		model: 'Huracan'
	}, {
		mark: 'Lamborghini',
		model: 'LM001'
	}, {
		mark: 'Lamborghini',
		model: 'LM002'
	}, {
		mark: 'Lamborghini',
		model: 'Miura'
	}, {
		mark: 'Lamborghini',
		model: 'Murcielago'
	}, {
		mark: 'Lamborghini',
		model: 'Reventon'
	}, {
		mark: 'Lamborghini',
		model: 'Sesto Elemento'
	}, {
		mark: 'Lamborghini',
		model: 'Veneno'
	}, {
		mark: 'Land Rover',
		model: 'Defender'
	}, {
		mark: 'Land Rover',
		model: 'Discovery'
	}, {
		mark: 'Land Rover',
		model: 'Discovery Sport'
	}, {
		mark: 'Land Rover',
		model: 'Freelander'
	}, {
		mark: 'Land Rover',
		model: 'Range Rover'
	}, {
		mark: 'Land Rover',
		model: 'Range Rover Evogue'
	}, {
		mark: 'Land Rover',
		model: 'Range Rover Sport'
	}, {
		mark: 'Lexus',
		model: 'CT'
	}, {
		mark: 'Lexus',
		model: 'ES'
	}, {
		mark: 'Lexus',
		model: 'GS'
	}, {
		mark: 'Lexus',
		model: 'GS F'
	}, {
		mark: 'Lexus',
		model: 'GX'
	}, {
		mark: 'Lexus',
		model: 'HS'
	}, {
		mark: 'Lexus',
		model: 'IS'
	}, {
		mark: 'Lexus',
		model: 'IS F'
	}, {
		mark: 'Lexus',
		model: 'LS'
	}, {
		mark: 'Lexus',
		model: 'LX'
	}, {
		mark: 'Lexus',
		model: 'NX'
	}, {
		mark: 'Lexus',
		model: 'RC'
	}, {
		mark: 'Lexus',
		model: 'RX'
	}, {
		mark: 'Lexus',
		model: 'SC'
	}, {
		mark: 'LIFAN',
		model: 'Breez'
	}, {
		mark: 'LIFAN',
		model: 'Cebrium'
	}, {
		mark: 'LIFAN',
		model: 'Celliya'
	}, {
		mark: 'LIFAN',
		model: 'Smily'
	}, {
		mark: 'LIFAN',
		model: 'Solano'
	}, {
		mark: 'LIFAN',
		model: 'X50'
	}, {
		mark: 'LIFAN',
		model: 'X60'
	}, {
		mark: 'Lincoln',
		model: 'Aviator'
	}, {
		mark: 'Lincoln',
		model: 'Capri'
	}, {
		mark: 'Lincoln',
		model: 'Continental'
	}, {
		mark: 'Lincoln',
		model: 'LS'
	}, {
		mark: 'Lincoln',
		model: 'Mark VII'
	}, {
		mark: 'Lincoln',
		model: 'Mark VIII'
	}, {
		mark: 'Lincoln',
		model: 'MKC'
	}, {
		mark: 'Lincoln',
		model: 'MKT'
	}, {
		mark: 'Lincoln',
		model: 'MKX'
	}, {
		mark: 'Lincoln',
		model: 'MKZ'
	}, {
		mark: 'Lincoln',
		model: 'Navigator'
	}, {
		mark: 'Lincoln',
		model: 'Town Car'
	}, {
		mark: 'Lotus',
		model: 'Eclat'
	}, {
		mark: 'Lotus',
		model: 'Elan'
	}, {
		mark: 'Lotus',
		model: 'Elise'
	}, {
		mark: 'Lotus',
		model: 'Elite'
	}, {
		mark: 'Lotus',
		model: 'Esprit'
	}, {
		mark: 'Lotus',
		model: 'Europa'
	}, {
		mark: 'Lotus',
		model: 'Europa S'
	}, {
		mark: 'Lotus',
		model: 'Exide'
	}, {
		mark: 'Luxgen',
		model: 'Luxgen5'
	}, {
		mark: 'Luxgen',
		model: 'Luxgen7 MPV'
	}, {
		mark: 'Luxgen',
		model: 'Luxgen7 SUV'
	}, {
		mark: 'Luxgen',
		model: 'U7 Turbo'
	}, {
		mark: 'Marussia',
		model: 'B1'
	}, {
		mark: 'Marussia',
		model: 'B2'
	}, {
		mark: 'Maserati',
		model: '3200 GT'
	}, {
		mark: 'Maserati',
		model: '4200 GT'
	}, {
		mark: 'Maserati',
		model: 'Biturbo'
	}, {
		mark: 'Maserati',
		model: 'Ghibli'
	}, {
		mark: 'Maserati',
		model: 'GranTurismo'
	}, {
		mark: 'Maserati',
		model: 'Quattroporte'
	}, {
		mark: 'Maybach',
		model: '57'
	}, {
		mark: 'Maybach',
		model: '62'
	}, {
		mark: 'Mazda',
		model: '2'
	}, {
		mark: 'Mazda',
		model: '3'
	}, {
		mark: 'Mazda',
		model: '5'
	}, {
		mark: 'Mazda',
		model: '6'
	}, {
		mark: 'Mazda',
		model: '121'
	}, {
		mark: 'Mazda',
		model: '323'
	}, {
		mark: 'Mazda',
		model: '616'
	}, {
		mark: 'Mazda',
		model: '626'
	}, {
		mark: 'Mazda',
		model: '929'
	}, {
		mark: 'Mazda',
		model: '3 MPS'
	}, {
		mark: 'Mazda',
		model: '6 MPS'
	}, {
		mark: 'Mazda',
		model: 'Atenza'
	}, {
		mark: 'Mazda',
		model: 'Axela'
	}, {
		mark: 'Mazda',
		model: 'AZ-Offroad'
	}, {
		mark: 'Mazda',
		model: 'AZ-Wagon'
	}, {
		mark: 'Mazda',
		model: 'B-series'
	}, {
		mark: 'Mazda',
		model: 'Biante'
	}, {
		mark: 'Mazda',
		model: 'Bongo'
	}, {
		mark: 'Mazda',
		model: 'Bongo Friendee'
	}, {
		mark: 'Mazda',
		model: 'BT-50'
	}, {
		mark: 'Mazda',
		model: 'Capella'
	}, {
		mark: 'Mazda',
		model: 'Carol'
	}, {
		mark: 'Mazda',
		model: 'CX-3'
	}, {
		mark: 'Mazda',
		model: 'CX-5'
	}, {
		mark: 'Mazda',
		model: 'CX-7'
	}, {
		mark: 'Mazda',
		model: 'CX-9'
	}, {
		mark: 'Mazda',
		model: 'Demino'
	}, {
		mark: 'Mazda',
		model: 'Efini MS-6'
	}, {
		mark: 'Mazda',
		model: 'Efini MS-8'
	}, {
		mark: 'Mazda',
		model: 'Eunos 500'
	}, {
		mark: 'Mazda',
		model: 'Eunos 800'
	}, {
		mark: 'Mazda',
		model: 'Eunos Cosmo'
	}, {
		mark: 'Mazda',
		model: 'Familia'
	}, {
		mark: 'Mazda',
		model: 'Lantis'
	}, {
		mark: 'Mazda',
		model: 'Laputa'
	}, {
		mark: 'Mazda',
		model: 'Millenia'
	}, {
		mark: 'Mazda',
		model: 'MPV'
	}, {
		mark: 'Mazda',
		model: 'MX-3'
	}, {
		mark: 'Mazda',
		model: 'MX-5'
	}, {
		mark: 'Mazda',
		model: 'MX-6'
	}, {
		mark: 'Mazda',
		model: 'Premacy'
	}, {
		mark: 'Mazda',
		model: 'Proceed Levante'
	}, {
		mark: 'Mazda',
		model: 'Proceed Marvie'
	}, {
		mark: 'Mazda',
		model: 'Protege'
	}, {
		mark: 'Mazda',
		model: 'RX-7'
	}, {
		mark: 'Mazda',
		model: 'RX-8'
	}, {
		mark: 'Mazda',
		model: 'Tribute'
	}, {
		mark: 'Mazda',
		model: 'Verisa'
	}, {
		mark: 'Mazda',
		model: 'Xedos 6'
	}, {
		mark: 'Mazda',
		model: 'Xedos 9'
	}, {
		mark: 'McLaren',
		model: '650S'
	}, {
		mark: 'McLaren',
		model: 'F1'
	}, {
		mark: 'McLaren',
		model: 'MP4-12C'
	}, {
		mark: 'McLaren',
		model: 'P1'
	}, {
		mark: 'Mercedes-Benz',
		model: '190 (W201)'
	}, {
		mark: 'Mercedes-Benz',
		model: '190 SL'
	}, {
		mark: 'Mercedes-Benz',
		model: 'A-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'A-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'AMG GT'
	}, {
		mark: 'Mercedes-Benz',
		model: 'B-class'
	}, {
		mark: 'Mercedes-Benz',
		model: 'C-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'C-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'Citan'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CL-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CL-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLA-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLA-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLC-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLK-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLK-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLS-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'CLS-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'E-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'E-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'G-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'G-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'G-klasse AMG 6x6'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GL-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GL-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLA-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLA-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLC'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLC AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLC Coupe'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLC Coupe AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLE'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLE AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLE Coupe'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLE Coupe AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLK-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLS-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'GLS-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'M-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'M-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'Maybach S-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'R-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'S-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'S-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SL-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SL-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLC-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLC-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLK-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLK-klasse AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLR McLaren'
	}, {
		mark: 'Mercedes-Benz',
		model: 'SLS AMG'
	}, {
		mark: 'Mercedes-Benz',
		model: 'V-klasse'
	}, {
		mark: 'Mercedes-Benz',
		model: 'Vaneo'
	}, {
		mark: 'Mercedes-Benz',
		model: 'Viano'
	}, {
		mark: 'Mercedes-Benz',
		model: 'Vito'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W110'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W111'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W114'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W115'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W123'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W124'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W128'
	}, {
		mark: 'Mercedes-Benz',
		model: 'W186'
	}, {
		mark: 'MINI',
		model: 'Cabrio'
	}, {
		mark: 'MINI',
		model: 'Clubman'
	}, {
		mark: 'MINI',
		model: 'Countryman'
	}, {
		mark: 'MINI',
		model: 'Coupe'
	}, {
		mark: 'MINI',
		model: 'Hatch'
	}, {
		mark: 'MINI',
		model: 'Paceman'
	}, {
		mark: 'MINI',
		model: 'Roadster'
	}, {
		mark: 'Mitsubishi',
		model: '3000 GT'
	}, {
		mark: 'Mitsubishi',
		model: 'Airtrek'
	}, {
		mark: 'Mitsubishi',
		model: 'Aspire'
	}, {
		mark: 'Mitsubishi',
		model: 'ASX'
	}, {
		mark: 'Mitsubishi',
		model: 'Carisma'
	}, {
		mark: 'Mitsubishi',
		model: 'Challenger'
	}, {
		mark: 'Mitsubishi',
		model: 'Chariot'
	}, {
		mark: 'Mitsubishi',
		model: 'Colt'
	}, {
		mark: 'Mitsubishi',
		model: 'Delica'
	}, {
		mark: 'Mitsubishi',
		model: 'Delica D:2'
	}, {
		mark: 'Mitsubishi',
		model: 'Diamante'
	}, {
		mark: 'Mitsubishi',
		model: 'Dingo'
	}, {
		mark: 'Mitsubishi',
		model: 'Dion'
	}, {
		mark: 'Mitsubishi',
		model: 'Eclipse'
	}, {
		mark: 'Mitsubishi',
		model: 'eK'
	}, {
		mark: 'Mitsubishi',
		model: 'Emeraude'
	}, {
		mark: 'Mitsubishi',
		model: 'Endeavor'
	}, {
		mark: 'Mitsubishi',
		model: 'Eterna'
	}, {
		mark: 'Mitsubishi',
		model: 'FTO'
	}, {
		mark: 'Mitsubishi',
		model: 'Galant'
	}, {
		mark: 'Mitsubishi',
		model: 'Grandis'
	}, {
		mark: 'Mitsubishi',
		model: 'GTO'
	}, {
		mark: 'Mitsubishi',
		model: 'i'
	}, {
		mark: 'Mitsubishi',
		model: 'i-MiEV'
	}, {
		mark: 'Mitsubishi',
		model: 'L200'
	}, {
		mark: 'Mitsubishi',
		model: 'Lancer'
	}, {
		mark: 'Mitsubishi',
		model: 'Lancer Cargo'
	}, {
		mark: 'Mitsubishi',
		model: 'Lancer Evolution'
	}, {
		mark: 'Mitsubishi',
		model: 'Lancer Ralliart'
	}, {
		mark: 'Mitsubishi',
		model: 'Legnum'
	}, {
		mark: 'Mitsubishi',
		model: 'Libero'
	}, {
		mark: 'Mitsubishi',
		model: 'Minica'
	}, {
		mark: 'Mitsubishi',
		model: 'Minicab'
	}, {
		mark: 'Mitsubishi',
		model: 'Mirage'
	}, {
		mark: 'Mitsubishi',
		model: 'Montero'
	}, {
		mark: 'Mitsubishi',
		model: 'Montеro Sport'
	}, {
		mark: 'Mitsubishi',
		model: 'Qutlander'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero iO'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero Junior'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero Mini'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero Pinin'
	}, {
		mark: 'Mitsubishi',
		model: 'Pajero Sport'
	}, {
		mark: 'Mitsubishi',
		model: 'Raider'
	}, {
		mark: 'Mitsubishi',
		model: 'RVR'
	}, {
		mark: 'Mitsubishi',
		model: 'Sapporo'
	}, {
		mark: 'Mitsubishi',
		model: 'Sigma'
	}, {
		mark: 'Mitsubishi',
		model: 'Space Gear'
	}, {
		mark: 'Mitsubishi',
		model: 'Space Star'
	}, {
		mark: 'Mitsubishi',
		model: 'Space Runner'
	}, {
		mark: 'Mitsubishi',
		model: 'Space Wagon'
	}, {
		mark: 'Mitsubishi',
		model: 'Toppo'
	}, {
		mark: 'Mitsubishi',
		model: 'Town Box'
	}, {
		mark: 'Nissan',
		model: '100NX'
	}, {
		mark: 'Nissan',
		model: '200SX'
	}, {
		mark: 'Nissan',
		model: '280ZX'
	}, {
		mark: 'Nissan',
		model: '300ZX'
	}, {
		mark: 'Nissan',
		model: '350Z'
	}, {
		mark: 'Nissan',
		model: '370Z'
	}, {
		mark: 'Nissan',
		model: 'AD'
	}, {
		mark: 'Nissan',
		model: 'Amera'
	}, {
		mark: 'Nissan',
		model: 'Almera Classic'
	}, {
		mark: 'Nissan',
		model: 'Almero Tino'
	}, {
		mark: 'Nissan',
		model: 'Altima'
	}, {
		mark: 'Nissan',
		model: 'Armada'
	}, {
		mark: 'Nissan',
		model: 'Avenir'
	}, {
		mark: 'Nissan',
		model: 'Bassara'
	}, {
		mark: 'Nissan',
		model: 'Bluebird'
	}, {
		mark: 'Nissan',
		model: 'BlueBird Sylphy'
	}, {
		mark: 'Nissan',
		model: 'Caravan'
	}, {
		mark: 'Nissan',
		model: 'Cedric'
	}, {
		mark: 'Nissan',
		model: 'Cefiro'
	}, {
		mark: 'Nissan',
		model: 'Cima'
	}, {
		mark: 'Nissan',
		model: 'Clipper'
	}, {
		mark: 'Nissan',
		model: 'Cube'
	}, {
		mark: 'Nissan',
		model: 'Datsun'
	}, {
		mark: 'Nissan',
		model: 'Dualis'
	}, {
		mark: 'Nissan',
		model: 'Elgrand'
	}, {
		mark: 'Nissan',
		model: 'Expert'
	}, {
		mark: 'Nissan',
		model: 'Fairlady Z'
	}, {
		mark: 'Nissan',
		model: 'Figaro'
	}, {
		mark: 'Nissan',
		model: 'Fuga'
	}, {
		mark: 'Nissan',
		model: 'Gloria'
	}, {
		mark: 'Nissan',
		model: 'GT-R'
	}, {
		mark: 'Nissan',
		model: 'Juke'
	}, {
		mark: 'Nissan',
		model: 'Juke Nismo'
	}, {
		mark: 'Nissan',
		model: 'Kix'
	}, {
		mark: 'Nissan',
		model: 'Lafesta'
	}, {
		mark: 'Nissan',
		model: 'Largo'
	}, {
		mark: 'Nissan',
		model: 'Laruel'
	}, {
		mark: 'Nissan',
		model: 'Leaf'
	}, {
		mark: 'Nissan',
		model: 'Leopard'
	}, {
		mark: 'Nissan',
		model: 'Liberty'
	}, {
		mark: 'Nissan',
		model: 'Lucino'
	}, {
		mark: 'Nissan',
		model: 'March'
	}, {
		mark: 'Nissan',
		model: 'Maxima'
	}, {
		mark: 'Nissan',
		model: 'Micra'
	}, {
		mark: 'Nissan',
		model: 'Mistral'
	}, {
		mark: 'Nissan',
		model: 'Moco'
	}, {
		mark: 'Nissan',
		model: 'Murano'
	}, {
		mark: 'Nissan',
		model: 'Navara (Frontier)'
	}, {
		mark: 'Nissan',
		model: 'Note'
	}, {
		mark: 'Nissan',
		model: 'NP 300'
	}, {
		mark: 'Nissan',
		model: 'NV200'
	}, {
		mark: 'Nissan',
		model: 'Otti (Dayz)'
	}, {
		mark: 'Nissan',
		model: 'Pathfinder'
	}, {
		mark: 'Nissan',
		model: 'Patrol'
	}, {
		mark: 'Nissan',
		model: 'Pino'
	}, {
		mark: 'Nissan',
		model: 'Pixo'
	}, {
		mark: 'Nissan',
		model: 'Prairie'
	}, {
		mark: 'Nissan',
		model: 'Presage'
	}, {
		mark: 'Nissan',
		model: 'Presea'
	}, {
		mark: 'Nissan',
		model: 'President'
	}, {
		mark: 'Nissan',
		model: 'Primaster'
	}, {
		mark: 'Nissan',
		model: 'Primera'
	}, {
		mark: 'Nissan',
		model: 'Pulsar'
	}, {
		mark: 'Nissan',
		model: 'Qashqai'
	}, {
		mark: 'Nissan',
		model: 'Qashqai+2'
	}, {
		mark: 'Nissan',
		model: 'Quest'
	}, {
		mark: 'Nissan',
		model: 'Rnessa'
	}, {
		mark: 'Nissan',
		model: 'Rasheen'
	}, {
		mark: 'Nissan',
		model: 'Rogue'
	}, {
		mark: 'Nissan',
		model: 'Roox'
	}, {
		mark: 'Nissan',
		model: 'Safari'
	}, {
		mark: 'Nissan',
		model: 'Sentra'
	}, {
		mark: 'Nissan',
		model: 'Serena'
	}, {
		mark: 'Nissan',
		model: 'Silvia'
	}, {
		mark: 'Nissan',
		model: 'Skyline'
	}, {
		mark: 'Nissan',
		model: 'Stagea'
	}, {
		mark: 'Nissan',
		model: 'Stanza'
	}, {
		mark: 'Nissan',
		model: 'Sunny'
	}, {
		mark: 'Nissan',
		model: 'Teana'
	}, {
		mark: 'Nissan',
		model: 'Terrano'
	}, {
		mark: 'Nissan',
		model: 'Terrano Regulus'
	}, {
		mark: 'Nissan',
		model: 'Tiida'
	}, {
		mark: 'Nissan',
		model: 'Tino'
	}, {
		mark: 'Nissan',
		model: 'Titan'
	}, {
		mark: 'Nissan',
		model: 'Urvan'
	}, {
		mark: 'Nissan',
		model: 'Vanette'
	}, {
		mark: 'Nissan',
		model: 'Wingroad'
	}, {
		mark: 'Nissan',
		model: 'X-Terra'
	}, {
		mark: 'Nissan',
		model: 'X-Trail'
	}, {
		mark: 'Opel',
		model: 'Agila'
	}, {
		mark: 'Opel',
		model: 'Ampera'
	}, {
		mark: 'Opel',
		model: 'Antara'
	}, {
		mark: 'Opel',
		model: 'Asona'
	}, {
		mark: 'Opel',
		model: 'Astra'
	}, {
		mark: 'Opel',
		model: 'Astra OPC'
	}, {
		mark: 'Opel',
		model: 'Calibra'
	}, {
		mark: 'Opel',
		model: 'Combo'
	}, {
		mark: 'Opel',
		model: 'Commodore'
	}, {
		mark: 'Opel',
		model: 'Corsa'
	}, {
		mark: 'Opel',
		model: 'Corsa OPC'
	}, {
		mark: 'Opel',
		model: 'Frontera'
	}, {
		mark: 'Opel',
		model: 'Insignia'
	}, {
		mark: 'Opel',
		model: 'Insignia OPC'
	}, {
		mark: 'Opel',
		model: 'Kadett'
	}, {
		mark: 'Opel',
		model: 'Kapitan'
	}, {
		mark: 'Opel',
		model: 'Manta'
	}, {
		mark: 'Opel',
		model: 'Meriva'
	}, {
		mark: 'Opel',
		model: 'Mokka'
	}, {
		mark: 'Opel',
		model: 'Monterey'
	}, {
		mark: 'Opel',
		model: 'Olimpia'
	}, {
		mark: 'Opel',
		model: 'Omega'
	}, {
		mark: 'Opel',
		model: 'Record'
	}, {
		mark: 'Opel',
		model: 'Senator'
	}, {
		mark: 'Opel',
		model: 'Signum'
	}, {
		mark: 'Opel',
		model: 'Sintra'
	}, {
		mark: 'Opel',
		model: 'Tigra'
	}, {
		mark: 'Opel',
		model: 'Vectra'
	}, {
		mark: 'Opel',
		model: 'Vectra OPC'
	}, {
		mark: 'Opel',
		model: 'Vita'
	}, {
		mark: 'Opel',
		model: 'Vivaro'
	}, {
		mark: 'Opel',
		model: 'Zafira'
	}, {
		mark: 'Peugeot',
		model: '106'
	}, {
		mark: 'Peugeot',
		model: '107'
	}, {
		mark: 'Peugeot',
		model: '206'
	}, {
		mark: 'Peugeot',
		model: '207'
	}, {
		mark: 'Peugeot',
		model: '208'
	}, {
		mark: 'Peugeot',
		model: '301'
	}, {
		mark: 'Peugeot',
		model: '305'
	}, {
		mark: 'Peugeot',
		model: '306'
	}, {
		mark: 'Peugeot',
		model: '307'
	}, {
		mark: 'Peugeot',
		model: '308'
	}, {
		mark: 'Peugeot',
		model: '309'
	}, {
		mark: 'Peugeot',
		model: '405'
	}, {
		mark: 'Peugeot',
		model: '406'
	}, {
		mark: 'Peugeot',
		model: '407'
	}, {
		mark: 'Peugeot',
		model: '408'
	}, {
		mark: 'Peugeot',
		model: '508'
	}, {
		mark: 'Peugeot',
		model: '605'
	}, {
		mark: 'Peugeot',
		model: '607'
	}, {
		mark: 'Peugeot',
		model: '806'
	}, {
		mark: 'Peugeot',
		model: '807'
	}, {
		mark: 'Peugeot',
		model: '1007'
	}, {
		mark: 'Peugeot',
		model: '2008'
	}, {
		mark: 'Peugeot',
		model: '3008'
	}, {
		mark: 'Peugeot',
		model: '4007'
	}, {
		mark: 'Peugeot',
		model: '4008'
	}, {
		mark: 'Peugeot',
		model: '5008'
	}, {
		mark: 'Peugeot',
		model: 'Bipper'
	}, {
		mark: 'Peugeot',
		model: 'Expert'
	}, {
		mark: 'Peugeot',
		model: 'Partner'
	}, {
		mark: 'Peugeot',
		model: 'RCZ'
	}, {
		mark: 'PGO',
		model: 'Speedster II'
	}, {
		mark: 'Porsche',
		model: '911'
	}, {
		mark: 'Porsche',
		model: '924'
	}, {
		mark: 'Porsche',
		model: '928'
	}, {
		mark: 'Porsche',
		model: '944'
	}, {
		mark: 'Porsche',
		model: '718 Boxter'
	}, {
		mark: 'Porsche',
		model: '718 Cayman'
	}, {
		mark: 'Porsche',
		model: '911 GT3'
	}, {
		mark: 'Porsche',
		model: '918 Spyder'
	}, {
		mark: 'Porsche',
		model: 'Boxter'
	}, {
		mark: 'Porsche',
		model: 'Carrera GT'
	}, {
		mark: 'Porsche',
		model: 'Cayenne'
	}, {
		mark: 'Porsche',
		model: 'Cayman'
	}, {
		mark: 'Porsche',
		model: 'Cayman GT4'
	}, {
		mark: 'Porsche',
		model: 'Macan'
	}, {
		mark: 'Porsche',
		model: 'Panamera'
	}, {
		mark: 'Ravon',
		model: 'Gentra'
	}, {
		mark: 'Ravon',
		model: 'Matiz'
	}, {
		mark: 'Ravon',
		model: 'NexiaR3'
	}, {
		mark: 'Ravon',
		model: 'R2'
	}, {
		mark: 'Renault',
		model: '9'
	}, {
		mark: 'Renault',
		model: '11'
	}, {
		mark: 'Renault',
		model: '19'
	}, {
		mark: 'Renault',
		model: '21'
	}, {
		mark: 'Renault',
		model: '25'
	}, {
		mark: 'Renault',
		model: 'Captur'
	}, {
		mark: 'Renault',
		model: 'Clio'
	}, {
		mark: 'Renault',
		model: 'Clio RS'
	}, {
		mark: 'Renault',
		model: 'Dokker'
	}, {
		mark: 'Renault',
		model: 'Duster'
	}, {
		mark: 'Renault',
		model: 'Espace'
	}, {
		mark: 'Renault',
		model: 'Fluence'
	}, {
		mark: 'Renault',
		model: 'Fuego'
	}, {
		mark: 'Renault',
		model: 'Kangoo'
	}, {
		mark: 'Renault',
		model: 'Kaptur'
	}, {
		mark: 'Renault',
		model: 'Koleos'
	}, {
		mark: 'Renault',
		model: 'Laguna'
	}, {
		mark: 'Renault',
		model: 'Latitude'
	}, {
		mark: 'Renault',
		model: 'Lodgy'
	}, {
		mark: 'Renault',
		model: 'Logan'
	}, {
		mark: 'Renault',
		model: 'Megane'
	}, {
		mark: 'Renault',
		model: 'Megane RS'
	}, {
		mark: 'Renault',
		model: 'Modus'
	}, {
		mark: 'Renault',
		model: 'Safrane'
	}, {
		mark: 'Renault',
		model: 'Sandero'
	}, {
		mark: 'Renault',
		model: 'Scenic'
	}, {
		mark: 'Renault',
		model: 'Symbol'
	}, {
		mark: 'Renault',
		model: 'Trafic'
	}, {
		mark: 'Renault',
		model: 'Twingo'
	}, {
		mark: 'Renault',
		model: 'Twizy'
	}, {
		mark: 'Renault',
		model: 'Vel Satis'
	}, {
		mark: 'Renault',
		model: 'ZOE'
	}, {
		mark: 'Rolls-Royce',
		model: '20/25'
	}, {
		mark: 'Rolls-Royce',
		model: 'Corniche'
	}, {
		mark: 'Rolls-Royce',
		model: 'Dawn'
	}, {
		mark: 'Rolls-Royce',
		model: 'Ghost'
	}, {
		mark: 'Rolls-Royce',
		model: 'Phantom'
	}, {
		mark: 'Rolls-Royce',
		model: 'Silver Cloud'
	}, {
		mark: 'Rolls-Royce',
		model: 'Silver Spur'
	}, {
		mark: 'Rolls-Royce',
		model: 'Wraith'
	}, {
		mark: 'Saab',
		model: '95'
	}, {
		mark: 'Saab',
		model: '96'
	}, {
		mark: 'Saab',
		model: '99'
	}, {
		mark: 'Saab',
		model: '900'
	}, {
		mark: 'Saab',
		model: '9000'
	}, {
		mark: 'Saab',
		model: '9-3'
	}, {
		mark: 'Saab',
		model: '9-5'
	}, {
		mark: 'Saab',
		model: '9-7X'
	}, {
		mark: 'Seat',
		model: 'Alhambra'
	}, {
		mark: 'Seat',
		model: 'Altea'
	}, {
		mark: 'Seat',
		model: 'Arosa'
	}, {
		mark: 'Seat',
		model: 'Cordoba'
	}, {
		mark: 'Seat',
		model: 'Ibiza'
	}, {
		mark: 'Seat',
		model: 'Ibiza Cupra'
	}, {
		mark: 'Seat',
		model: 'Leon'
	}, {
		mark: 'Seat',
		model: 'Leon Cupra'
	}, {
		mark: 'Seat',
		model: 'Malaga'
	}, {
		mark: 'Seat',
		model: 'Marbella'
	}, {
		mark: 'Seat',
		model: 'Toledo'
	}, {
		mark: 'Skoda',
		model: '100 Series'
	}, {
		mark: 'Skoda',
		model: 'Fabia'
	}, {
		mark: 'Skoda',
		model: 'Fabia RS'
	}, {
		mark: 'Skoda',
		model: 'Favourit'
	}, {
		mark: 'Skoda',
		model: 'Felicia'
	}, {
		mark: 'Skoda',
		model: 'Octavia'
	}, {
		mark: 'Skoda',
		model: 'Octavia RS'
	}, {
		mark: 'Skoda',
		model: 'Rapid'
	}, {
		mark: 'Skoda',
		model: 'Roomster'
	}, {
		mark: 'Skoda',
		model: 'Superb'
	}, {
		mark: 'Skoda',
		model: 'Yeti'
	}, {
		mark: 'Smart',
		model: 'Forfour'
	}, {
		mark: 'Smart',
		model: 'Fortwo'
	}, {
		mark: 'Smart',
		model: 'Roadster'
	}, {
		mark: 'SsangYong',
		model: 'Actyon'
	}, {
		mark: 'SsangYong',
		model: 'Actyon Sports'
	}, {
		mark: 'SsangYong',
		model: 'Korando'
	}, {
		mark: 'SsangYong',
		model: 'Korando Family'
	}, {
		mark: 'SsangYong',
		model: 'Kyron'
	}, {
		mark: 'SsangYong',
		model: 'Musso'
	}, {
		mark: 'SsangYong',
		model: 'Nomad'
	}, {
		mark: 'SsangYong',
		model: 'Rexton'
	}, {
		mark: 'SsangYong',
		model: 'Rodius'
	}, {
		mark: 'SsangYong',
		model: 'Stavic'
	}, {
		mark: 'SsangYong',
		model: 'Tivoli'
	}, {
		mark: 'Subaru',
		model: 'Baja'
	}, {
		mark: 'Subaru',
		model: 'BRZ'
	}, {
		mark: 'Subaru',
		model: 'Exiga'
	}, {
		mark: 'Subaru',
		model: 'Forester'
	}, {
		mark: 'Subaru',
		model: 'Impreza'
	}, {
		mark: 'Subaru',
		model: 'Impreza WRX'
	}, {
		mark: 'Subaru',
		model: 'Impreza WRX STi'
	}, {
		mark: 'Subaru',
		model: 'Justy'
	}, {
		mark: 'Subaru',
		model: 'Legacy'
	}, {
		mark: 'Subaru',
		model: 'Leone'
	}, {
		mark: 'Subaru',
		model: 'Outback'
	}, {
		mark: 'Subaru',
		model: 'Pleo'
	}, {
		mark: 'Subaru',
		model: 'R1'
	}, {
		mark: 'Subaru',
		model: 'R2'
	}, {
		mark: 'Subaru',
		model: 'Sambar'
	}, {
		mark: 'Subaru',
		model: 'Stella'
	}, {
		mark: 'Subaru',
		model: 'SVX'
	}, {
		mark: 'Subaru',
		model: 'Traviq'
	}, {
		mark: 'Subaru',
		model: 'Trezia'
	}, {
		mark: 'Subaru',
		model: 'Tribeca'
	}, {
		mark: 'Subaru',
		model: 'Vivio'
	}, {
		mark: 'Subaru',
		model: 'WRX'
	}, {
		mark: 'Subaru',
		model: 'WRX STi'
	}, {
		mark: 'Subaru',
		model: 'XV'
	}, {
		mark: 'Suzuki',
		model: 'Aerio'
	}, {
		mark: 'Suzuki',
		model: 'Alto'
	}, {
		mark: 'Suzuki',
		model: 'Baleno'
	}, {
		mark: 'Suzuki',
		model: 'Cervo'
	}, {
		mark: 'Suzuki',
		model: 'Escudo'
	}, {
		mark: 'Suzuki',
		model: 'Every'
	}, {
		mark: 'Suzuki',
		model: 'Forenza'
	}, {
		mark: 'Suzuki',
		model: 'Grand Vitara'
	}, {
		mark: 'Suzuki',
		model: 'Ignis'
	}, {
		mark: 'Suzuki',
		model: 'Kei'
	}, {
		mark: 'Suzuki',
		model: 'Kizashi'
	}, {
		mark: 'Suzuki',
		model: 'Landy'
	}, {
		mark: 'Suzuki',
		model: 'Liana'
	}, {
		mark: 'Suzuki',
		model: 'MR Wagon'
	}, {
		mark: 'Suzuki',
		model: 'Palette'
	}, {
		mark: 'Suzuki',
		model: 'Samurai'
	}, {
		mark: 'Suzuki',
		model: 'Solio'
	}, {
		mark: 'Suzuki',
		model: 'Splash'
	}, {
		mark: 'Suzuki',
		model: 'Swift'
	}, {
		mark: 'Suzuki',
		model: 'SX4'
	}, {
		mark: 'Suzuki',
		model: 'Vitara'
	}, {
		mark: 'Suzuki',
		model: 'Wagon R'
	}, {
		mark: 'Suzuki',
		model: 'Wagon R+'
	}, {
		mark: 'Suzuki',
		model: 'XL7'
	}, {
		mark: 'TagAZ',
		model: 'Aquila'
	}, {
		mark: 'TagAZ',
		model: 'C-30'
	}, {
		mark: 'TagAZ',
		model: 'C10'
	}, {
		mark: 'TagAZ',
		model: 'C190'
	}, {
		mark: 'TagAZ',
		model: 'Road Partner'
	}, {
		mark: 'TagAZ',
		model: 'Tager'
	}, {
		mark: 'TagAZ',
		model: 'Vega'
	}, {
		mark: 'Tata',
		model: 'Indigo'
	}, {
		mark: 'Tata',
		model: 'Safari'
	}, {
		mark: 'Tata',
		model: 'Sumo'
	}, {
		mark: 'Tesla Motors',
		model: 'Model S'
	}, {
		mark: 'Tesla Motors',
		model: 'Model X'
	}, {
		mark: 'Tesla Motors',
		model: 'Roadster'
	}, {
		mark: 'Toyota',
		model: '4Runner'
	}, {
		mark: 'Toyota',
		model: 'Allex'
	}, {
		mark: 'Toyota',
		model: 'Allion'
	}, {
		mark: 'Toyota',
		model: 'Alphard'
	}, {
		mark: 'Toyota',
		model: 'Altezza'
	}, {
		mark: 'Toyota',
		model: 'Aqua'
	}, {
		mark: 'Toyota',
		model: 'Aristo'
	}, {
		mark: 'Toyota',
		model: 'Auris'
	}, {
		mark: 'Toyota',
		model: 'Avalon'
	}, {
		mark: 'Toyota',
		model: 'Avensis'
	}, {
		mark: 'Toyota',
		model: 'Avensis Verso'
	}, {
		mark: 'Toyota',
		model: 'Aygo'
	}, {
		mark: 'Toyota',
		model: 'bB'
	}, {
		mark: 'Toyota',
		model: 'Belta'
	}, {
		mark: 'Toyota',
		model: 'Blade'
	}, {
		mark: 'Toyota',
		model: 'Blizzard'
	}, {
		mark: 'Toyota',
		model: 'Brevis'
	}, {
		mark: 'Toyota',
		model: 'Caldina'
	}, {
		mark: 'Toyota',
		model: 'Cami'
	}, {
		mark: 'Toyota',
		model: 'Camry'
	}, {
		mark: 'Toyota',
		model: 'Camry Solara'
	}, {
		mark: 'Toyota',
		model: 'Carina'
	}, {
		mark: 'Toyota',
		model: 'Carina ED'
	}, {
		mark: 'Toyota',
		model: 'Cavalier'
	}, {
		mark: 'Toyota',
		model: 'Celica'
	}, {
		mark: 'Toyota',
		model: 'Celsior'
	}, {
		mark: 'Toyota',
		model: 'Century'
	}, {
		mark: 'Toyota',
		model: 'Chaser'
	}, {
		mark: 'Toyota',
		model: 'Corolla'
	}, {
		mark: 'Toyota',
		model: 'Corolla Rumion'
	}, {
		mark: 'Toyota',
		model: 'Corolla Spacio'
	}, {
		mark: 'Toyota',
		model: 'Corolla Verso'
	}, {
		mark: 'Toyota',
		model: 'Corona'
	}, {
		mark: 'Toyota',
		model: 'Corsa'
	}, {
		mark: 'Toyota',
		model: 'Cresta'
	}, {
		mark: 'Toyota',
		model: 'Crown'
	}, {
		mark: 'Toyota',
		model: 'Crown Magesta'
	}, {
		mark: 'Toyota',
		model: 'Curren'
	}, {
		mark: 'Toyota',
		model: 'Cynos'
	}, {
		mark: 'Toyota',
		model: 'Duet'
	}, {
		mark: 'Toyota',
		model: 'Echo'
	}, {
		mark: 'Toyota',
		model: 'Estima'
	}, {
		mark: 'Toyota',
		model: 'FJ Cruiser'
	}, {
		mark: 'Toyota',
		model: 'Fortuner'
	}, {
		mark: 'Toyota',
		model: 'FunCargo'
	}, {
		mark: 'Toyota',
		model: 'Gaia'
	}, {
		mark: 'Toyota',
		model: 'Granvia'
	}, {
		mark: 'Toyota',
		model: 'GT86'
	}, {
		mark: 'Toyota',
		model: 'Harrier'
	}, {
		mark: 'Toyota',
		model: 'HiAce'
	}, {
		mark: 'Toyota',
		model: 'Highlander'
	}, {
		mark: 'Toyota',
		model: 'Hilux'
	}, {
		mark: 'Toyota',
		model: 'Hilux Surf'
	}, {
		mark: 'Toyota',
		model: 'Ipsum'
	}, {
		mark: 'Toyota',
		model: 'iQ'
	}, {
		mark: 'Toyota',
		model: 'ISis'
	}, {
		mark: 'Toyota',
		model: 'Ist'
	}, {
		mark: 'Toyota',
		model: 'Kluger'
	}, {
		mark: 'Toyota',
		model: 'Land Cruiser'
	}, {
		mark: 'Toyota',
		model: 'Land Cruiser Prado'
	}, {
		mark: 'Toyota',
		model: 'LiteAce'
	}, {
		mark: 'Toyota',
		model: 'Mark 2'
	}, {
		mark: 'Toyota',
		model: 'Mark X'
	}, {
		mark: 'Toyota',
		model: 'MasterAce Surf'
	}, {
		mark: 'Toyota',
		model: 'Matrix'
	}, {
		mark: 'Toyota',
		model: 'Mega Cruiser'
	}, {
		mark: 'Toyota',
		model: 'MR2'
	}, {
		mark: 'Toyota',
		model: 'Nadia'
	}, {
		mark: 'Toyota',
		model: 'Noach'
	}, {
		mark: 'Toyota',
		model: 'Opa'
	}, {
		mark: 'Toyota',
		model: 'Paseo'
	}, {
		mark: 'Toyota',
		model: 'Passo'
	}, {
		mark: 'Toyota',
		model: 'Passo Sette'
	}, {
		mark: 'Toyota',
		model: 'Picnic'
	}, {
		mark: 'Toyota',
		model: 'Platz'
	}, {
		mark: 'Toyota',
		model: 'Porte'
	}, {
		mark: 'Toyota',
		model: 'Premio'
	}, {
		mark: 'Toyota',
		model: 'Previa'
	}, {
		mark: 'Toyota',
		model: 'Prius'
	}, {
		mark: 'Toyota',
		model: 'Probox'
	}, {
		mark: 'Toyota',
		model: 'Progres'
	}, {
		mark: 'Toyota',
		model: 'Ractis'
	}, {
		mark: 'Toyota',
		model: 'Raum'
	}, {
		mark: 'Toyota',
		model: 'RAV 4'
	}, {
		mark: 'Toyota',
		model: 'Regius'
	}, {
		mark: 'Toyota',
		model: 'RegiusAce'
	}, {
		mark: 'Toyota',
		model: 'rush'
	}, {
		mark: 'Toyota',
		model: 'Scepter'
	}, {
		mark: 'Toyota',
		model: 'Sequonia'
	}, {
		mark: 'Toyota',
		model: 'Sera'
	}, {
		mark: 'Toyota',
		model: 'Sienna'
	}, {
		mark: 'Toyota',
		model: 'Sienta'
	}, {
		mark: 'Toyota',
		model: 'Soarer'
	}, {
		mark: 'Toyota',
		model: 'Soluna'
	}, {
		mark: 'Toyota',
		model: 'Sparky'
	}, {
		mark: 'Toyota',
		model: 'Sprinter'
	}, {
		mark: 'Toyota',
		model: 'Sprinter Carib'
	}, {
		mark: 'Toyota',
		model: 'Sprinter Marino'
	}, {
		mark: 'Toyota',
		model: 'Sprinter Trueno'
	}, {
		mark: 'Toyota',
		model: 'Starlet'
	}, {
		mark: 'Toyota',
		model: 'Succeed'
	}, {
		mark: 'Toyota',
		model: 'Supra'
	}, {
		mark: 'Toyota',
		model: 'Tacoma'
	}, {
		mark: 'Toyota',
		model: 'Tercel'
	}, {
		mark: 'Toyota',
		model: 'TownAce'
	}, {
		mark: 'Toyota',
		model: 'Tundra'
	}, {
		mark: 'Toyota',
		model: 'Urban Cruiser'
	}, {
		mark: 'Toyota',
		model: 'Vanquard'
	}, {
		mark: 'Toyota',
		model: 'Vellfire'
	}, {
		mark: 'Toyota',
		model: 'Venza'
	}, {
		mark: 'Toyota',
		model: 'Verossa'
	}, {
		mark: 'Toyota',
		model: 'Verso'
	}, {
		mark: 'Toyota',
		model: 'Vista'
	}, {
		mark: 'Toyota',
		model: 'Vitz'
	}, {
		mark: 'Toyota',
		model: 'Voltz'
	}, {
		mark: 'Toyota',
		model: 'Voxy'
	}, {
		mark: 'Toyota',
		model: 'WiLL'
	}, {
		mark: 'Toyota',
		model: 'WiLL Cypha'
	}, {
		mark: 'Toyota',
		model: 'Windom'
	}, {
		mark: 'Toyota',
		model: 'Wish'
	}, {
		mark: 'Toyota',
		model: 'Yaris'
	}, {
		mark: 'Toyota',
		model: 'Yaris Verso'
	}, {
		mark: 'UAZ',
		model: '469'
	}, {
		mark: 'UAZ',
		model: '3151'
	}, {
		mark: 'UAZ',
		model: '3153'
	}, {
		mark: 'UAZ',
		model: '3159'
	}, {
		mark: 'UAZ',
		model: '3160'
	}, {
		mark: 'UAZ',
		model: '3162 Simbir'
	}, {
		mark: 'UAZ',
		model: 'Hunter'
	}, {
		mark: 'UAZ',
		model: 'Patriot'
	}, {
		mark: 'UAZ',
		model: 'Pickup'
	}, {
		mark: 'Volkswagen',
		model: 'Amarok'
	}, {
		mark: 'Volkswagen',
		model: 'Beetle'
	}, {
		mark: 'Volkswagen',
		model: 'Bora'
	}, {
		mark: 'Volkswagen',
		model: 'Caddy'
	}, {
		mark: 'Volkswagen',
		model: 'California'
	}, {
		mark: 'Volkswagen',
		model: 'Caravelle'
	}, {
		mark: 'Volkswagen',
		model: 'Corrado'
	}, {
		mark: 'Volkswagen',
		model: 'Eos'
	}, {
		mark: 'Volkswagen',
		model: 'Fox'
	}, {
		mark: 'Volkswagen',
		model: 'Golf'
	}, {
		mark: 'Volkswagen',
		model: 'Golf Country'
	}, {
		mark: 'Volkswagen',
		model: 'Golf GTI'
	}, {
		mark: 'Volkswagen',
		model: 'Golf Plus'
	}, {
		mark: 'Volkswagen',
		model: 'Golf R'
	}, {
		mark: 'Volkswagen',
		model: 'Golf R32'
	}, {
		mark: 'Volkswagen',
		model: 'Iltis'
	}, {
		mark: 'Volkswagen',
		model: 'Jetta'
	}, {
		mark: 'Volkswagen',
		model: 'Lupo'
	}, {
		mark: 'Volkswagen',
		model: 'Multivan'
	}, {
		mark: 'Volkswagen',
		model: 'Passat'
	}, {
		mark: 'Volkswagen',
		model: 'Passat CC'
	}, {
		mark: 'Volkswagen',
		model: 'Phaeton'
	}, {
		mark: 'Volkswagen',
		model: 'Pointer'
	}, {
		mark: 'Volkswagen',
		model: 'Polo'
	}, {
		mark: 'Volkswagen',
		model: 'Polo GTI'
	}, {
		mark: 'Volkswagen',
		model: 'Routan'
	}, {
		mark: 'Volkswagen',
		model: 'Santana'
	}, {
		mark: 'Volkswagen',
		model: 'Scirocco'
	}, {
		mark: 'Volkswagen',
		model: 'Scirocco R'
	}, {
		mark: 'Volkswagen',
		model: 'Sharan'
	}, {
		mark: 'Volkswagen',
		model: 'Tiguan'
	}, {
		mark: 'Volkswagen',
		model: 'Touareg'
	}, {
		mark: 'Volkswagen',
		model: 'Touran'
	}, {
		mark: 'Volkswagen',
		model: 'Transporter'
	}, {
		mark: 'Volkswagen',
		model: 'Type 1'
	}, {
		mark: 'Volkswagen',
		model: 'Type 2'
	}, {
		mark: 'Volkswagen',
		model: 'up!'
	}, {
		mark: 'Volkswagen',
		model: 'Vento'
	}, {
		mark: 'Volvo',
		model: '440'
	}, {
		mark: 'Volvo',
		model: '460'
	}, {
		mark: 'Volvo',
		model: '480'
	}, {
		mark: 'Volvo',
		model: '740'
	}, {
		mark: 'Volvo',
		model: '760'
	}, {
		mark: 'Volvo',
		model: '850'
	}, {
		mark: 'Volvo',
		model: '940'
	}, {
		mark: 'Volvo',
		model: '960'
	}, {
		mark: 'Volvo',
		model: '120 Series'
	}, {
		mark: 'Volvo',
		model: '240 Series'
	}, {
		mark: 'Volvo',
		model: '300 Series'
	}, {
		mark: 'Volvo',
		model: 'C30'
	}, {
		mark: 'Volvo',
		model: 'C70'
	}, {
		mark: 'Volvo',
		model: 'Laplander'
	}, {
		mark: 'Volvo',
		model: 'S40'
	}, {
		mark: 'Volvo',
		model: 'S60'
	}, {
		mark: 'Volvo',
		model: 'S60 Cross Country'
	}, {
		mark: 'Volvo',
		model: 'S70'
	}, {
		mark: 'Volvo',
		model: 'S80'
	}, {
		mark: 'Volvo',
		model: 'S90'
	}, {
		mark: 'Volvo',
		model: 'V40'
	}, {
		mark: 'Volvo',
		model: 'V40 Cross Country'
	}, {
		mark: 'Volvo',
		model: 'V50'
	}, {
		mark: 'Volvo',
		model: 'V60'
	}, {
		mark: 'Volvo',
		model: 'V60 Cross Country'
	}, {
		mark: 'Volvo',
		model: 'V70'
	}, {
		mark: 'Volvo',
		model: 'V90'
	}, {
		mark: 'Volvo',
		model: 'XC60'
	}, {
		mark: 'Volvo',
		model: 'XC70'
	}, {
		mark: 'Volvo',
		model: 'XC90'
	}, {
		mark: 'ZAZ',
		model: '965'
	}, {
		mark: 'ZAZ',
		model: '966'
	}, {
		mark: 'ZAZ',
		model: '968'
	}, {
		mark: 'ZAZ',
		model: '1102 \'Таврия\''
	}, {
		mark: 'ZAZ',
		model: '1103 \'Славута\''
	}, {
		mark: 'ZAZ',
		model: '1105 \'Дана\''
	}, {
		mark: 'ZAZ',
		model: 'Chance'
	}, {
		mark: 'ZAZ',
		model: 'Forza'
	}, {
		mark: 'ZAZ',
		model: 'Sens'
	}, {
		mark: 'ZAZ',
		model: 'Vida'
	}, {
		mark: 'Zotye',
		model: 'T600'
	}, {
		mark: 'Zotye',
		model: 'Z100'
	}, {
		mark: 'Zotye',
		model: 'Z300'
	}, {
		mark: 'ZXAuto',
		model: 'Grand Tiger'
	}, {
		mark: 'ZXAuto',
		model: 'Landmark'
	}, {
		mark: 'Ё-авто',
		model: 'Ё-Кроссовер'
}];

function saveEngineType(engineType) {
    var engineTypeModel;

    engineTypeModel = new EngineType({
        name: engineType.name
    });

    return engineTypeModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(engineType.name + ' is loaded.');
        }
    });
}

function saveEngineCapacity(engineCapacity) {
    var engineCapacityModel;

    engineCapacityModel = new EngineCapacity({
        name: engineCapacity.name
    });

    return engineCapacityModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(engineCapacity.name + ' is loaded.');
        }
    });
}

function saveGearbox(gearbox) {
    var gearboxModel;

    gearboxModel = new Gearbox({
        name: gearbox.name
    });

    return gearboxModel.save(function save(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(gearbox.name + ' is loaded.');
        }
    });
}

function saveCar(car) {
	var carModel;

	carModel = new Car({
		mark: car.mark,
		model: car.model,
		from: car.from || 2000,
		end: car.end
	});

	return carModel.save(function save(err) {
		if (err) {
			console.log(err);
		} else {
			console.log(car.mark + ' ' + car.model + ' is loaded.');
		}
	});
}

module.exports = {
	init: function init() {
		carsInitialCollection.forEach(function each(carItem) {
			saveCar(carItem);
		});
	},
	addMark: function addNewCar(carItem) {
		return saveCar(carItem);
	},
	updateModel: function updateModel(car) {
		return Car.findById({
				_id: car.id
			}).exec()
			.then(function foundCar(carModel) {
				carModel.model = car.model;
				carModel.from = car.from;
				carModel.end = car.end;

				return carModel.save()
					.then(function success(savedModel) {
						console.log(savedModel.mark + ' ' + savedModel.model + ' is loaded.');
					}, function failure(err) {
						console.log(err);
					});
			});
	},
	updateMark: function updateMark(car) {
		return Car.find({
				mark: car.oldMark
			}).exec()
			.then(function foundCar(carModels) {
				var i, promises;

				promises = [];
				for (i = 0; i < carModels.length; i += 1) {
					carModels[i].mark = car.newMark;
					promises.push(carModels[i].save());
				}
				return Promise.all(promises);
			});
	},
	deleteCars: function deleteAllMarks(car) {
		return Car.find({
				mark: car
			}).exec()
			.then(function deleteMark(cars) {
				var i, promises;

				promises = [];
				for (i = 0; i < cars.length; i += 1) {
					promises.push(cars[i].remove());
				}
				return Promise.all(promises);
			});
	},
	deleteModel: function deleteModel(mark, model) {
		return Car.findOne({
				mark: mark,
				model: model
			}).exec()
			.then(function foundCar(car) {
				return car.remove(function success(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('DELETE removing ID: ' + car.id);
					}
				});
			});
	},
	deleteCar: function deleteMark(Id) {
		return Car.findById({
				_id: Id
			}).exec()
			.then(function delCar(dcar) {
				return dcar.remove(function success(err) {
					if (err) {
						console.log(err);
					} else {
						console.log('DELETE removing ID: ' + dcar.id);
					}
				});
			});
	},
	getCars: function getCars(filter) {
		return Car.find(filter).exec();
	},
	getAllMarks: function getAllMarks() {
		return Car.find({}).distinct('mark').exec();
	},
	getMark: function getMark(mark) {
		return Car.find({
				mark: mark
			}).distinct('model').exec()
			.then(function gotModels(models) {
				return {
					mark: mark,
					models: models
				};
			});
	},
	getModel: function getModel(mark, model) {
		return Car.findOne({
			mark: mark,
			model: model
		}).exec();
	},
	addEngineType: function addNewEngineType(engineType) {
        return saveEngineType(engineType);
    },
    getEngineTypes: function getEngineType(filter) {
        return EngineType.find(filter).distinct('name').exec();
    },
    deleteEngineType: function deleteEngineType(id) {
        return EngineType.findOne({
            _id: id
        }).exec()
            .then(function foundEngineType(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getEngineType: function getEngine(name) {
        return EngineType.findOne({
            name: name
        }).exec();
    },

	addEngineCapacity: function addNewEngineCapacity(engineCapacity) {
        return saveEngineCapacity(engineCapacity);
    },
    getEngineCapacities: function getEngineCapacity(filter) {
        return EngineCapacity.find(filter).distinct('name').exec();
    },
    deleteEngineCapacity: function deleteEngineCapacity(id) {
        return EngineCapacity.findOne({
            _id: id
        }).exec()
            .then(function foundEngineCapacity(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getEngineCapacity: function getEngineCapacity(name) {
        return EngineCapacity.findOne({
            name: name
        }).exec();
    },

	addGearbox: function addNewGearbox(gearbox) {
        return saveGearbox(gearbox);
    },
    getGearboxes: function getGearbox(filter) {
        return Gearbox.find(filter).distinct('name').exec();
    },
    deleteGearbox: function deleteGearbox(id) {
        return Gearbox.findOne({
            _id: id
        }).exec()
            .then(function foundGearbox(e) {
                return e.remove(function success(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('DELETE removing ID: ' + e.id);
                    }
                });
            });
    },
    getGearbox: function getGearbox(name) {
        return Gearbox.findOne({
            name: name
        }).exec();
    }
};