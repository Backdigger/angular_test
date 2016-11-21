app.component('notesList', {
    template: `<div ng-controller="customersCtrl as ctrl" class="row">
                    <div  ng-repeat="note in ctrl" ><notes-item></notes-item></div></div>`,

    bindings: { note: '=' }
})
    .component('notesItem', {
        template: ` <div style="background-color: {{note.color}}" class="col-xs-4 note-card">
                    <div class="col-xs-12 title">{{note.title}}</div>
                    <div class="col-xs-12 value">{{note.value}}</div></div>`,

        bindings: { note: '=' }
    });
