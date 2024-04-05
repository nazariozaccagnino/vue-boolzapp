import { contacts } from "./data.js";
import Picker from './emoji-picker.js';

const dt = luxon.DateTime
const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: contacts,
            activeContactId: 1,
            messageText: '',
            searchText: '',
            messages : '',
            fontSize: false,
            showEmoji: false,
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
            if(this.messageText === ''){
                return
            }            
            this.activeContact.messages.push(newMessage)            
            this.messageText = '';
            this.showEmoji = false;
        
        setTimeout(() => { 
            const newMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                message: 'ok',
                status: 'received',
            }
            this.activeContact.messages.push(newMessage)                   
              }, 1000);
        }, 
        switchSize(){
            this.fontSize = !this.fontSize;
        },  
        onSelectEmoji(emoji) {
            console.log(emoji)
            this.messageText += emoji.i;
            /*
              // result
              { 
                  i: "😚", 
                  n: ["kissing face"], 
                  r: "1f61a", // with skin tone
                  t: "neutral", // skin tone
                  u: "1f61a" // without tone
              }
              */
        },
    },
    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id === this.activeContactId)
        },
        filteredContacts(){
            return this.contacts.filter((el)=> el.name.toLowerCase().includes(this.searchText.toLowerCase()))
        },
    },
    mounted(){
        console.log(this.lastMessage);
    }
}).component('Picker', Picker).mount('#app');