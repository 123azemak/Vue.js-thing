var app = Vue.createApp({
data() {
    return {
        showBooks: true,
        title: "weh",
        author: "brandon lulu",
        age: 2
    }
},
methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks;
    }
}
// methods: {
//     changeTitle(title){
//         // this.title = 'The Final Shape';
//         this.title = title
//     }
// }
});

app.mount('#app');