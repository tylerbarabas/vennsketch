

function VennDiagram() {

    this.blue = document.getElementById('blue');
    this.red = document.getElementById('red');
    this.addBtn = document.getElementById('add-btn');
    this.thingStage = document.getElementById('thing-stage');
    this.darkOverlay = document.getElementById('dark-overlay');
    this.things = [];
    this.editMode = false;

    console.log(this.addBtn);

}

VennDiagram.prototype = {

    init: function () {
        this.addBtn.addEventListener('click',this.addBtnClicked.bind(this));
    },

    addBtnClicked: function() {

        console.log('addBtnClicked',this.addBtn);

        if (this.editMode) {
            return;
        } else {
            this.editMode = true;
            this.addBtn.disabled = 'true';
            this.addBtn.removeEventListener('click',this.addBtnClicked.bind(this));
        }

        this.darkOverlay.style.visibility = 'visible';

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
        this.thingStage.appendChild(frag);

        newThingText.select();

        window.addEventListener('keypress',this.saveNewThing.bind(this));

    },

    saveNewThing: function(e) {

        console.log('saveNewThing',e);

        if (e.keyCode != 13) return;

        window.removeEventListener('keypress',this.saveNewThing.bind(this));

        var newThingText = document.getElementById('new-thing-text'),
            newThing = document.getElementById('new-thing');

        console.log(newThingText.value);
        if (newThingText.value != '') {
            newThing.innerHTML = newThingText.value;
            newThing.id = 'thing'+this.things.length;

            this.things.push(newThing);
        } else {
            newThing.parentNode.removeChild(newThing);
        }

        this.darkOverlay.style.visibility = 'hidden';
        this.addBtn.disabled = '';
        this.editMode = false;

        this.addBtn.addEventListener('click',this.addBtnClicked.bind(this));

    }

};

var venn = new VennDiagram();
venn.init();