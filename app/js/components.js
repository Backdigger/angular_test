(function () {
    angular
        .module('myApp')
        .component('notesList', {
            template: `<div  ng-repeat="note in $ctrl.notes"><notes-item note="note"></notes-item>
                        </div>`,
            bindings: { notes: '=' }

        })
        .component('notesItem', {
            template: ` <div style="background-color: {{$parent.note.color}}" class="col-xs-4 note">
                    <div class="col-xs-12 title">{{$parent.note.title}}</div>
                    <div class="col-xs-12 value">{{$parent.note.value}}</div></div>`,
            bindings: { note: '=' }

        });

})();
