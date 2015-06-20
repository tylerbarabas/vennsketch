var blue = document.getElementById('blue'),
red = document.getElementById('red'),
addBtn = document.getElementById('add-btn'),
thingStage = document.getElementById('thing-stage'),
darkOverlay = document.getElementById('dark-overlay'),
things = [],
editMode = false;

function init() {

    addBtn.addEventListener('click',addBtnClicked);

}

function addBtnClicked() {

    console.log('editMode',editMode);

	if (editMode) {
		return;
	} else {
		editMode = true;
		addBtn.disabled = 'true';
        addBtn.removeEventListener('click',addBtnClicked);
	}

    console.log('got here');

    darkOverlay.style.visibility = 'visible';

	var newThing = document.createElement('div'),
	newThingText = document.createElement('input'),
	frag = document.createDocumentFragment();

	newThing.className = 'things';
	newThing.id = 'new-thing';
	newThing.style.bottom = '50px';
	newThing.style.left = '500px';

    newThingText.id = 'new-thing-text';
	newThingText.value = '';
    newThingText.placeholder = "Type then press enter...";
	
	newThing.appendChild(newThingText);
	frag.appendChild(newThing);
	thingStage.appendChild(frag);

	newThingText.select();

    window.addEventListener('keypress',saveNewThing);
}

function saveNewThing(e) {

    if (e.keyCode != 13) return;

    window.removeEventListener('keypress',saveNewThing);

    var newThingText = document.getElementById('new-thing-text'),
        newThing = document.getElementById('new-thing');

    if (newThingText.value.length > 0) {
        newThing.innerHTML = newThingText.value;
        newThing.id = 'thing'+things.length;

        things.push(newThing);
    } else {
        newThing.parentNode.removeChild(newThing);
    }

    darkOverlay.style.visibility = 'hidden';
    addBtn.disabled = '';
    editMode = false;

    addBtn.addEventListener('click',addBtnClicked);

}

init();