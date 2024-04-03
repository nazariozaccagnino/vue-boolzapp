import { contacts } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: contacts,
            activeContactId: 2,
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        console.log(this.contacts);
    }
}).mount('#app')