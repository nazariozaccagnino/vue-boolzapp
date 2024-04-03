import { contacts } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: contacts,
            activeContactId: 0,
        }
    },
    methods:{
        setActiveChat(id){
            this.activeContactId = id + 1
        }

    },
    computed:{

    },
    mounted(){
        // console.log(this.contacts);
    }
}).mount('#app')