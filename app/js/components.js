app.component('notesList', {

    bindings: {
        notes: '='
    }
})
    .component('notesItem', {
        template: ` <notes-item ng-controller="customersCtrl" class="row"><notes-item  ng-repeat="note in data"
'style="background-color: {{note.color}}"
'class="col-xs-4 note-card"><div class="col-xs-12 title">{{note.title}}</div><div class="col-xs-12 value">{{note.value}}</div></notes-item>
        </div>`,
        bindings: { note: '=&' },
        require: {
            parent: 'notesList'
        }

    });
