const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Cписок заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ' '
            }
           
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        removeNote(idx){
            this.notes.splice(idx, 1)
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 500) {
                this.inputValue = ''
            }
        }
    }
    
}

Vue.createApp(App).mount('#app')











