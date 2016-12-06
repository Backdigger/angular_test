(function () {
    function NoteListController($scope, $element, $attrs) {

        this.colors = ['#ff66ff', '#0033cc', '#669900', '#cc0066', '#99ccff', 'white'];
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
        this.isColorListShow = false;

        this.createNote = (note) => {
            this.newNote = note;
            const { title, value, color } = this.newNote;

            if (title && value) {
                this.notes.push({ title, value, color });
            }
            this.resetNote();
        };


        this.resetNote = (newNote) => {
            newNote = {
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
    }
    function NoteDetailController() {

        this.delete = () => {
            this.onDelete({ note: this.note });
        };

        this.update = (prop, value) => {
            this.onUpdate({ note: this.note, prop: prop, value: value });
        };

    }

    angular
        .module('myApp')

        .component('noteCreator', {
            template: `<div ng-style ="{'background-color': this.newNote.color}" >
                       <form ng-submit="$ctrl.createNote(newNote)">
                       <input placeholder="Title" name="newNoteTitle" class="col-xs-10 title" type="text" ng-model="newNote.title">
                       <input placeholder="Take a note..." name="newNoteValue" class="col-xs-10" type="text" ng-model="newNote.value">
                       <div class="actions col-xs-12 row">
                       <div class="col-xs-3">
                       <div class="color-selector" note="note">
                       <i class="material-icons icon"  ng-click="$ctrl.toggleColorList()">color_lens</i>
                       <ul class="selector" ng-show="$ctrl.isColorListShow">
                       <li ng-repeat="color in $ctrl.colors" >
                       <div  note="note" ng-click="$ctrl.selectColor(color)" ng-model="newNote.color" class="color" style="background-color: {{color}}">
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

                color: '<',
                onSubmit: '&' },
            controller: NoteListController

        })
        .component('notesList', {
            template: `<div  ng-repeat="note in $ctrl.notes"><notes-item note="note"   on-update="$ctrl.updateNote()"><div ng-style ="{'background-color': note.color}" class="col-xs-4 note">
                       <div class="col-xs-12 title">{{note.title}}</div>
                       <div class="col-xs-12 value">{{note.value}}</div><button class="btn-delete" ng-click="$ctrl.deleteNote({note: note})">Delete note</button></div></notes-item>
                       </div>`,
            bindings: { notes: '<' },
            controller: NoteListController


        })
        .component('notesItem', {
            bindings: { note: '<',
                onDelete: '&',
                onUpdate: '&'
            },
            controller: NoteDetailController


        });

})();


