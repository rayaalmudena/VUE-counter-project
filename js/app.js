// Tu código aquí.
Vue.createApp({
    data() {
        return {
            counter:0,
            colorCounter:"grey"
        }
    },
    methods: {
        oneMore(e) {
            this.counter +=e; 
            //this.counter>0 ? this.colorCounter= "green": this.counter<0 ? this.colorCounter= "red" : this.colorCounter= "grey";
        }
    }
}).mount('#app')
