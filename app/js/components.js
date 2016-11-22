function Test() {
    this.$onInit = () => {
        console.log('HERE');
        console.log(this.note);
    };
}

app.component('notesList', {
    template: `<div class="row">
                    <div  ng-repeat="note in $ctrl.data" >
                    <notes-item note = 'note'></notes-item></div>
                    </div>`,    
    bindings: { note: '<'
    },
    controller: Test

})
    .component('notesItem', {
        template: ` <div style="background-color: {{note.color}}" class="col-xs-4 note-card">
                    <div class="col-xs-12 title">{{note.title}}</div>
                    <div class="col-xs-12 value">{{note.value}}</div></div>`,
        bindings: { note: '<' },
        controller: Test
    });
