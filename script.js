var blue = document.getElementById('blue'),
red = document.getElementById('red'),
addBtn = document.getElementById('add-btn'),
thingStage = document.getElementById('thing-stage'),
darkOverlay = document.getElementById('dark-overlay'),
things = [],
editMode = false;

function addBtnClicked() {

	if (editMode) {
		return;
	} else {
		editMode = true;
		addBtn.disabled = 'true';
	}

    darkOverlay.style.visibility = 'visible';

	var newIndex = things.length,
	newThing = document.createElement('div'),
	newThingText = document.createElement('input'),
	frag = document.createDocumentFragment();

	newThing.className = 'things';
	newThing.id = 'thing'+newIndex;
	newThing.style.bottom = '50px';
	newThing.style.left = '500px';

    newThingText.id = 'new-thing-text';
	newThingText.value = '';
    newThingText.placeholder = "Type then press enter...";
	
	newThing.appendChild(newThingText);
	frag.appendChild(newThing);
	thingStage.appendChild(frag);
	things.push(newThing);

	newThingText.select();
}

addBtn.addEventListener('click',addBtnClicked);