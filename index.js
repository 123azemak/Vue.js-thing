var app = Vue.createApp({
data() {
    return {
        url: 'http://www.thenetninja.co.uk',
        showBooks: true,
        // title: "weh",
        // author: "brandon lulu",
        // age: 2,
        // x: 0,
        // y: 0
        books : [
            {title: 'eeby deeby', author: 'brandon lu' img: ''},
            {title: 'eeby deeby', author: 'brandon lu' img: ''},
            {title: 'eeby deeby', author: 'brandon lu' img: ''}
        ]
    }
},
methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks;
    },
//     handleEvent(e, data){
//         console.log(e, e.type);
//         if (data) {
//             console.log(data);
//         }
//     },
//     handleMousemove(e){
// this.x = e.offsetX;
// this.y = e.offsetY;
//     }
}
// methods: {
//     changeTitle(title){
//         // this.title = 'The Final Shape';
//         this.title = title
//     }
// }
});

app.mount('#app');