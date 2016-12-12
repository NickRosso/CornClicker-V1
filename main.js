
function save(corn,tools,farmHands){
	var savedValues = {
		corn: corn,
		tools: tools,
		farmHands: farmHands,
		
	};
	localStorage.setItem("savedValues", JSON.stringify(savedValues));
};

function deleteSave(){
	localStorage.removeItem("savedValues")
	corn = 0;
	tools = 0;
	farmHands = 0;
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("savedValues"));
	if(typeof savegame.corn !== "undefined") corn = savegame.corn;
	if(typeof savegame.tools !== "undefined") tools = savegame.tools;
	if(typeof savegame.farmHands !== "undefined") farmHands = savegame.farmHands;
	
};

function cornClick(number){
	corn = corn + number;
	document.getElementById("totalCorn").innerHTML = corn;

};


function buyItem(){
	var toolCost = Math.floor(10 * Math.pow(1.5, tools));

	if(corn >= toolCost){
		tools++;
		corn -= toolCost;
		document.getElementById('tools').innerHTML = tools;
		document.getElementById('totalCorn').innerHTML = corn;
	};

	var nextToolCost = Math.floor(10 * Math.pow(1.5, tools));
	document.getElementById('toolCost').innerHTML = nextToolCost;
	document.getElementById('tools').innterHTML = tools;
};


function buyFarmHand(){
	var farmHandCost = Math.floor(100 * Math.pow(2.25, farmHands));

	if(corn >= farmHandCost){
		farmHands++;
		corn -= farmHandCost;
		document.getElementById('farmHands').innerHTML = farmHands;
		document.getElementById('totalCorn').innerHTML = corn;
	};

	var nextFarmHandCost = Math.floor(100 * Math.pow(2.25, farmHands));
	document.getElementById('farmHandCost').innerHTML = nextFarmHandCost;
	document.getElementById('farmHands').innerHTML = farmHands;
};

function getCornPerSec(tools, farmHands){
	if(farmHands == 0){
		cornPerSec = tools;
	}
	else
		cornPerSec = tools * (2 * farmHands);
	return cornPerSec;
};

function updateCornPerSec(){
	document.getElementById('cornPerSec').innerHTML = cornPerSec;
};


window.setInterval(function(){
	cornPerSec = getCornPerSec(tools, farmHands);
	cornClick(cornPerSec);
	updateCornPerSec();
	save(corn,tools,farmHands);
}, 1000);


	
