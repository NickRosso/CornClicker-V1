function save(corn,hoes,plows,tractors,farmHands){
	var savedValues = {
		corn: corn,
		hoes: hoes,
		plows: plows,
		tractors: tractors,
		farmHands: farmHands,
		
	};
	localStorage.setItem("savedValues", JSON.stringify(savedValues));
};

function deleteSave(){
	localStorage.removeItem("savedValues")
	corn = 0;
	hoes = 0;
	plows = 0;
	tractors = 0;
	farmHands = 0;
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("savedValues"));
	if(typeof savegame.corn !== "undefined") corn = savegame.corn;
	if(typeof savegame.hoes !== "undefined") hoes = savegame.hoes;
	if(typeof savegame.plows !== "undefined") plows = savegame.plows;
	if(typeof savegame.tractors !== "undefined") tractors = savegame.tractors;
	if(typeof savegame.farmHands !== "undefined") farmHands = savegame.farmHands;
	
};

function cornClick(number){
	corn = corn + number;
	document.getElementById("totalCorn").innerHTML = formatNumber(corn);

};

function formatNumber(number){
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function buyNewItem(name){
	switch(name){

	case 'hoes':
		var itemCost = Math.floor(10 * Math.pow(1.5, hoes))
		if(corn >= itemCost){
			hoes++;
			corn-=itemCost;
			document.getElementById('hoes').innerHTML = hoes;
		};
		var nextItemCost = Math.floor(10 * Math.pow(1.5, hoes));
		document.getElementById('hoesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('hoes').innterHTML = hoes;	

	case 'plows':
		var itemCost = Math.floor(500 * Math.pow(1.5, plows))
		if(corn >= itemCost){
			plows++;
			corn-=itemCost;
			document.getElementById('plows').innerHTML = plows;
		};
		var nextItemCost = Math.floor(500 * Math.pow(1.5, plows));
		document.getElementById('plowsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('plows').innterHTML = plows;
	case 'tractors':
		var itemCost = Math.floor(15000 * Math.pow(1.5, tractors))
		if(corn >= itemCost){
			tractors++;
			corn-=itemCost;
			document.getElementById('tractors').innerHTML = tractors;
		};
		var nextItemCost = Math.floor(15000 * Math.pow(1.5, tractors));
		document.getElementById('tractorsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('tractors').innterHTML = tractors;

	default:
		document.getElementById('totalCorn').innerHTML = formatNumber(corn);
	};
	document.getElementById('totalCorn').innerHTML = formatNumber(corn);
};

function buyFarmHand(){
	var farmHandCost = Math.floor(500 * Math.pow(5.00, farmHands));

	if(corn >= farmHandCost){
		farmHands++;
		corn -= farmHandCost;
		document.getElementById('farmHands').innerHTML = farmHands;
		document.getElementById('totalCorn').innerHTML = formatNumber(corn);
	};

	var nextFarmHandCost = Math.floor(500 * Math.pow(5.00, farmHands));
	document.getElementById('farmHandCost').innerHTML = formatNumber(nextFarmHandCost);
	document.getElementById('farmHands').innerHTML = farmHands;
};

function getCornPerSec(hoes,tractors, plows, farmHands){
	if(farmHands == 0){
		cornPerSec = hoes + plows*10 + tractors*25;
	}
	else{
		cornPerSec = (hoes + plows*10 + tractors*25);
		cornPerSec *= 2 * farmHands;
	}
	return cornPerSec;
};

function updateGameElements(){
	document.getElementById('cornPerSec').innerHTML = formatNumber(cornPerSec);
};



window.setInterval(function(){
	cornPerSec = getCornPerSec(hoes,tractors, plows, farmHands);
	updateGameElements();
	cornClick(cornPerSec);
	save(corn,hoes,tractors, plows,farmHands);
}, 1000);


	
