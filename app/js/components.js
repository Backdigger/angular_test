(function () {
    function NoteListController($scope, $element, $attrs) {

        this.colors = ['#ff66ff', '#0033cc', '#669900', '#cc0066', '#99ccff', 'white'];
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
        this.isColorListShow = false;

        this.createNote = (note, newColor) => {
            this.toggleColorList();
            this.newNote = note;
            this.newNote.color = newColor;


            if (this.newNote.title && this.newNote.value) {
                this.notes.push(this.newNote);
            }

            this.resetNote();

        };


        this.resetNote = () => {
            this.newNote = {
                title: '',
                value: '',
                color: 'white'
            };
        };

        this.deleteNote = (newNote) => {
            let idx = this.notes.indexOf(newNote.note);

            if (idx >= 0) {
                this.notes.splice(idx, 1);
            }
        };

        this.toggleColorList =  ()  => {
            this.isColorListShow = !this.isColorListShow;
        };

        this.selectColor = (color) => {
            this.toggleColorList();
            this.newNote.color =  color;
        };

        this.updateNotes = (notes) => {
            this.notes = notes;
        };
    }


    angular
        .module('myApp')

        .component('noteCreator', {
            template: `<div ng-style ="{'background-color': $ctrl.selectColor.color}" >
                       <form ng-submit="$ctrl.updateNotes($ctrl.notes)">
                       <input placeholder="Title" name="newNoteTitle" class="col-xs-10 title" type="text" ng-model="newNote.title">
                       <input placeholder="Take a note..." name="newNoteValue" class="col-xs-10" type="text" ng-model="newNote.value">
                       <div class="actions col-xs-12 row">
                       <div class="col-xs-3">
                       <div class="color-selector" note="note">
                       <i class="material-icons icon"  ng-click="$ctrl.toggleColorList()">color_lens</i>
                       <ul class="selector" ng-show="$ctrl.isColorListShow">
                       <li ng-repeat="color in $ctrl.colors" >
                       <div  note="note" ng-click="$ctrl.createNote(newNote, color)" class="color" style="background-color: {{color}}">
                       </div>
                       </li>                       
                       </ul>
                       </div>
                       </div>
                       </div>
                       <button type="submit" class="btn-submit">Done</button>
                       </form>
                       </div>`,
            bindings: { notes: '<',
                note: '<',
                color: '<',
                onSubmit: '&' },
            controller: NoteListController

        })
        .component('notesList', {
            template: `<div  ng-repeat="note in $ctrl.notes"><notes-item note="note"><div ng-style ="{'background-color': note.color}" class="col-xs-4 note">
                       <div class="col-xs-12 title">{{note.title}}</div>
                       <div class="col-xs-12 value">{{note.value}}</div><button class="btn-delete" ng-click="$ctrl.deleteNote({note: note})">Delete note</button></div></notes-item>
                       </div>`,
            bindings: { notes: '<' },
            controller: NoteListController


        })
        .component('notesItem', {
            bindings: { note: '<'}

        });

})();


