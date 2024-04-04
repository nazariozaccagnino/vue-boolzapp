import { contacts } from "./data.js";

const dt = luxon.DateTime
const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: contacts,
            activeContactId: 1,
            messageText: '',
            searchText: '',
        }
    },
    methods:{
        setActiveChat(id){
            this.activeContactId = id
        },
        sendMessage(){
            const newMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                message: this.messageText,
                status: 'sent',
            }
            this.activeContact.messages.push(newMessage)
            this.messageText = '';
        },
    },
    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id === this.activeContactId)
        },
        filteredContacts(){
            return this.contacts.filter((el)=> el.name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    mounted(){
        // console.log(this.contacts);
    }
}).mount('#app');