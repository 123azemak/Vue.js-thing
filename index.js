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
            {title: 'whos is this guy', author: 'Mister gaddy', img: 'MISTERGADDY.png', isSpooky: true},
            {title: 'oh my god is that', author: 'its tater todd', img: 'TATERTODD.png', isSpooky: true},
            {title: 'bald?', author: 'mr vona', img: 'VONAQUEST.png', isSpooky: true}
        ]
    }
},
methods: {
    toggleShowBooks(){
        this.showBooks = !this.showBooks;
    },
    toggleSpooky(book) {
book.isSpooky = !book.isSpooky;
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isSpooky)
        }
    }
    // i did the video but its not working for some reason oops
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