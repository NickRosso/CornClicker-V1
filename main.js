function save(corn, hoes, plows, tractors, farmHands, harvesters,combines, alienSpaceCraft, moonCornBases, marsCornBases, centauriBases, increasedHydrophonics, automatizedFarms, quantumCornManipulators){
	var savedValues = {
		corn: corn,
		hoes: hoes,
		plows: plows,
		tractors: tractors,
		harvesters: harvesters,
		combines: combines,
		alienSpaceCraft: alienSpaceCraft,
		moonCornBases: moonCornBases,
		marsCornBases: marsCornBases,
		centauriBases: centauriBases,
		increasedHydrophonics: increasedHydrophonics,
		automatizedFarms: automatizedFarms,
		quantumCornManipulators: quantumCornManipulators,
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
	harvesters = 0;
	combines = 0;
	alienSpaceCraft = 0;
	moonCornBases = 0;
	marsCornBases = 0;
	centauriBases = 0;
	increasedHydrophonics = 0;
	automatizedFarms = 0;
	quantumCornManipulators = 0;
	farmHands = 0;

};

function load(){
	var savegame = JSON.parse(localStorage.getItem("savedValues"));

	if(typeof savegame.corn !== "undefined") corn = savegame.corn; 
	if(typeof savegame.hoes !== "undefined") hoes = savegame.hoes;
	if(typeof savegame.plows !== "undefined") plows = savegame.plows;
	if(typeof savegame.tractors !== "undefined") tractors = savegame.tractors;
	if(typeof savegame.harvesters !== "undefined") harvesters = savegame.harvesters;
	if(typeof savegame.combines !== "undefined") combines = savegame.combines;
	if(typeof savegame.alienSpaceCraft !== "undefined") alienSpaceCraft = savegame.alienSpaceCraft;
	if(typeof savegame.moonCornBases !== "undefined") moonCornBases = savegame.moonCornBases;
	if(typeof savegame.marsCornBases !== "undefined") marsCornBases = savegame.marsCornBases;
	if(typeof savegame.centauriBases !== "undefined") centauriBases = savegame.centauriBases;
	if(typeof savegame.increasedHydrophonics !== "undefined") increasedHydrophonics = savegame.increasedHydrophonics;
	if(typeof savegame.automatizedFarms !== "undefined") automatizedFarms = savegame.automatizedFarms;
	if(typeof savegame.quantumCornManipulators !== "undefined") quantumCornManipulators = savegame.quantumCornManipulators;
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
		var itemCost = Math.floor(10 * Math.pow(1.15, hoes))
		if(corn >= itemCost){
			hoes++;
			corn-=itemCost;
			document.getElementById('hoes').innerHTML = hoes;
		};
		var nextItemCost = Math.floor(10 * Math.pow(1.15, hoes));
		document.getElementById('hoesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('hoes').innerHTML = hoes;	

	case 'plows':
		var itemCost = Math.floor(10000 * Math.pow(1.5, plows))
		if(corn >= itemCost){
			plows++;
			corn-=itemCost;
			document.getElementById('plows').innerHTML = plows;
		};
		var nextItemCost = Math.floor(10000 * Math.pow(1.5, plows));
		document.getElementById('plowsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('plows').innerHTML = plows;

	case 'tractors':
		var itemCost = Math.floor(100000 * Math.pow(1.5, tractors))
		if(corn >= itemCost){
			tractors++;
			corn-=itemCost;
			document.getElementById('tractors').innerHTML = tractors;
		};
		var nextItemCost = Math.floor(100000 * Math.pow(1.5, tractors));
		document.getElementById('tractorsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('tractors').innerHTML = tractors;

	case 'harvesters':
		var itemCost = Math.floor(200000 * Math.pow(1.5, harvesters))
		if(corn >= itemCost){
			harvesters++;
			corn-=itemCost;
			document.getElementById('harvesters').innerHTML = harvesters;
		};
		var nextItemCost = Math.floor(200000 * Math.pow(1.5, harvesters));
		document.getElementById('harvestersCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('harvesters').innerHTML = harvesters;

	case 'combines':
		var itemCost = Math.floor(400000 * Math.pow(1.5, combines))
		if(corn >= itemCost){
			combines++;
			corn-=itemCost;
			document.getElementById('combines').innerHTML = combines;
		};
		var nextItemCost = Math.floor(400000 * Math.pow(1.5, combines));
		document.getElementById('combinesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('combines').innerHTML = combines;

	case 'alienSpaceCraft':
		var itemCost = Math.floor(5000000 * Math.pow(1.5, alienSpaceCraft))
		if(corn >= itemCost){
			alienSpaceCraft++;
			corn-=itemCost;
			document.getElementById('alienSpaceCraft').innerHTML = alienSpaceCraft;
		};
		var nextItemCost = Math.floor(5000000 * Math.pow(1.5, alienSpaceCraft));
		document.getElementById('alienSpaceCraftCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('alienSpaceCraft').innerHTML = alienSpaceCraft;

	case 'moonCornBase':
		var itemCost = Math.floor(25000000 * Math.pow(1.5, moonCornBases))
		if(corn >= itemCost){
			moonCornBases++;
			corn-=itemCost;
			document.getElementById('moonCornBases').innerHTML = moonCornBases;
		};
		var nextItemCost = Math.floor(25000000 * Math.pow(1.5, moonCornBases));
		document.getElementById('moonCornBasesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('moonCornBases').innterHTML = moonCornBases;

	case 'marsCornBase':
		var itemCost = Math.floor(50000000 * Math.pow(1.5, marsCornBases))
		if(corn >= itemCost){
			marsCornBases++;
			corn-=itemCost;
			document.getElementById('marsCornBases').innerHTML = marsCornBases;
		};
		var nextItemCost = Math.floor(50000000 * Math.pow(1.5, marsCornBases));
		document.getElementById('marsCornBasesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('marsCornBases').innterHTML = marsCornBases;

	case 'centauriBase':
		var itemCost = Math.floor(100000000 * Math.pow(1.5, centauriBases))
		if(corn >= itemCost){
			centauriBases++;
			corn-=itemCost;
			document.getElementById('centauriBases').innerHTML = centauriBases;
		};
		var nextItemCost = Math.floor(100000000 * Math.pow(1.5, centauriBases));
		document.getElementById('centauriBasesCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('centauriBases').innterHTML = centauriBases;

	case 'increasedHydrophonics':
		var itemCost = Math.floor(2000000000 * Math.pow(1.5, increasedHydrophonics))
		if(corn >= itemCost){
			increasedHydrophonics++;
			corn-=itemCost;
			document.getElementById('increasedHydrophonics').innerHTML = increasedHydrophonics;
		};
		var nextItemCost = Math.floor(2000000000 * Math.pow(1.5, increasedHydrophonics));
		document.getElementById('increasedHydrophonicsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('increasedHydrophonics').innterHTML = increasedHydrophonics;

	case 'automatizedFarming':
		var itemCost = Math.floor(5000000000 * Math.pow(1.5, automatizedFarms))
		if(corn >= itemCost){
			automatizedFarms++;
			corn-=itemCost;
			document.getElementById('automatizedFarming').innerHTML = automatizedFarms;
		};
		var nextItemCost = Math.floor(5000000000 * Math.pow(1.5, automatizedFarms));
		document.getElementById('automatizedFarmsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('automatizedFarms').innterHTML = automatizedFarms;

	case 'quantumCornManipulator':
		var itemCost = Math.floor(10000000000 * Math.pow(1.5, quantumCornManipulators))
		if(corn >= itemCost){
			quantumCornManipulators++;
			corn-=itemCost;
			document.getElementById('quantumCornManipulators').innerHTML = quantumCornManipulators;
		};
		var nextItemCost = Math.floor(10000000000 * Math.pow(1.5, quantumCornManipulators));
		document.getElementById('quantumCornManipulatorsCost').innerHTML = formatNumber(nextItemCost);
		document.getElementById('quantumCornManipulators').innterHTML = quantumCornManipulators;

	case 'farmHands':
		var farmHandCost = Math.floor(50000 * Math.pow(5.00, farmHands));

		if(corn >= farmHandCost){
			farmHands++;
			corn -= farmHandCost;
			document.getElementById('farmHands').innerHTML = farmHands;
			document.getElementById('totalCorn').innerHTML = formatNumber(corn);
		};

		var nextFarmHandCost = Math.floor(50000 * Math.pow(5.00, farmHands));
		document.getElementById('farmHandCost').innerHTML = formatNumber(nextFarmHandCost);
		document.getElementById('farmHands').innerHTML = farmHands;

	default:
		document.getElementById('totalCorn').innerHTML = formatNumber(corn);
	}
};

function getCornPerSec(corn, hoes, plows, tractors, farmHands, harvesters,combines, alienSpaceCraft, moonCornBases, marsCornBases, centauriBases, increasedHydrophonics, automatizedFarms, quantumCornManipulators){
	if(farmHands == 0){
		cornPerSec = hoes + plows*2 + tractors*10 + harvesters*15 + combines*20 + alienSpaceCraft*500 + moonCornBases*1000 + marsCornBases*2000 + centauriBases*4000 + increasedHydrophonics*8000 + automatizedFarms*12000 + quantumCornManipulators*100000;
	}
	else{
		cornPerSec = (hoes + plows*2 + tractors*10 + harvesters*15 + combines*20 + alienSpaceCraft*500 + moonCornBases*1000 + marsCornBases*2000 + centauriBases*4000 + increasedHydrophonics*8000 + automatizedFarms*12000 + quantumCornManipulators*100000);
		cornPerSec *= 2 * farmHands;
	}
	return cornPerSec;
};

function updateGameElements(){
	document.getElementById('cornPerSec').innerHTML = formatNumber(cornPerSec);
};



window.setInterval(function(){
	cornPerSec = getCornPerSec(corn, hoes, plows, tractors, farmHands, harvesters,combines, alienSpaceCraft, moonCornBases, marsCornBases, centauriBases, increasedHydrophonics, automatizedFarms, quantumCornManipulators);
	updateGameElements();
	cornClick(cornPerSec);
	save(corn, hoes, plows, tractors, farmHands, harvesters,combines, alienSpaceCraft, moonCornBases, marsCornBases, centauriBases, increasedHydrophonics, automatizedFarms, quantumCornManipulators);
}, 1000);


	
