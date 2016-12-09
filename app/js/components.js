(function () {
    function NoteListController($scope, $element, $attrs) {

        this.colors = ['#ff66ff', '#0033cc', '#669900', '#cc0066', '#99ccff', 'white'];
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        };
        this.isColorListShow = false;

        this.createNote = (newColor) => {
            this.toggleColorList();
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
    }


    angular
        .module('myApp')

        .component('noteCreator', {
            templateUrl: 'app/tmpl/noteCreator.html',
            bindings: { notes: '<',
                note: '<',
                color: '<',
                onSubmit: '&' },
            controller: NoteListController

        })
        .component('notesList', {
            templateUrl: 'app/tmpl/notesList.html',
            bindings: { notes: '<' },
            controller: NoteListController


        })
        .component('notesItem', {
            bindings: { note: '<' }

        });

})();


