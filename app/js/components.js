(function () {
    function NoteListController($scope, $element, $attrs) {
        let ctrl = this;

        ctrl.colors = ['#ff66ff', '#0033cc', '#669900', '#cc0066', '#99ccff', 'white'];

        ctrl.createNote = function (note) {
            const { title, value, color } = note;

            if (title && value) {
                ctrl.notes.push({ title, value, color });
            }
            ctrl.resetNote();
        };


        ctrl.resetNote = function (note) {
            note = {
                title: '',
                value: '',
                color: 'white'
            };
        };

        ctrl.deleteNote = function (note) {
            let idx = ctrl.notes.indexOf(note);

            if (idx >= 0) {
                ctrl.notes.splice(idx, 1);
            }
        };
        ctrl.expand = function (color) {
            color.show = !color.show;
        };
    }
    function NoteDetailController() {
        var ctrl = this;

        ctrl.delete = function () {
            ctrl.onDelete({ note: ctrl.note });
        };

        ctrl.update = function (prop, value) {
            ctrl.onUpdate({ note: ctrl.note, prop: prop, value: value });
        };

    }

    angular
        .module('myApp')

        .component('noteCreator', {
            template: `<div ng-style ="{'background-color': note.color}" >
                       <form ng-submit="$ctrl.createNote(note)">
                       <input placeholder="Title" name="newNoteTitle" class="col-xs-10 title" type="text" ng-model="note.title">
                       <input placeholder="Take a note..." name="newNoteValue" class="col-xs-10" type="text" ng-model="note.value">
                       <div class="actions col-xs-12 row">
                       <div class="col-xs-3">
                       <div class="color-selector" colors="#ff66ff, #0033cc, #669900, #cc0066, #99ccff, white" ng-model="note.color">
                       <i class="material-icons icon"  ng-click="$ctrl.expand(color)">color_lens</i>
                       <ul class="selector" ng-show="color.show">
                       <li ng-repeat="color in $ctrl.colors" >
                       <div  class="color" style="background-color: {{color}}">
                       </div>
                       </li>                       
                       </ul>
                       </div>
                       </div>
                       </div>
                       <button ng-click="$ctrl.addNote()" type="submit" class="btn-light">Done</button>
                       </form>
                       </div>`,
            bindings: { notes: '<',
                colors: '@',
                onSubmit: '&' },
            controller: NoteListController

        })
        .component('notesList', {
            template: `<div  ng-repeat="note in $ctrl.notes"><notes-item note="note" on-click="$ctrl.deleteNote(note)"  on-reset="$ctrl.updateNote()"><div ng-style ="{'background-color': note.color}" class="col-xs-4 note">
                       <div class="col-xs-12 title">{{note.title}}</div>
                       <div class="col-xs-12 value">{{note.value}}</div></div></notes-item>
                       </div>`,
            bindings: { notes: '<' },
            controller: NoteListController


        })
        .component('notesItem', {
            bindings: { note: '<',
                onDelete: '&',
                onUpdate: '&',
                onSubmit: '&'
            },
            controller: NoteDetailController


        });

})();




