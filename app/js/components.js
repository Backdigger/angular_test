(function () {
    angular
        .module('myApp')
        .component('notesList', {
            template: `<div  ng-repeat="note in $ctrl.notes">{{note}}
                        <notes-item note="note"></notes-item></div>`,
            bindings: { notes: '<' }

        })
        .component('notesItem', {
            template: ` <div style="background-color: {{note.color}}" class="col-xs-4 note">
                    <div class="col-xs-12 title">{{note.title}}</div>
                    <div class="col-xs-12 value">{{note.value}}</div></div>`,
            bindings: { note: '<' }

        });

})();
