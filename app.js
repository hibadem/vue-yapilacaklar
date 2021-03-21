const app = new Vue({
    el: '#app',
    name: 'Vue JS',
    data: {
        eklenecekVeri:{
            title:'',status:true
        },
        dataList:[
            {id:1,title:'ders çalış',status:true,list:'İş'},
            {id:2,title:'oyun oyna ',status:false,list:'Genel'},
            {id:3,title:'kahve al',status:true,list:'Genel'},
        ],
        listItems:[
            {id:1,title:'Genel'},
            {id:2,title:'İş'},
            {id:3,title:'Özel'},

        ],
        activeListItem : {},
        filteredDataList:[],
        newListItem:{},
            
        

    },
    created(){
        const defaultListItem = this.listItems[0];
        if(defaultListItem != null){
            this.changeListItem(defaultListItem.id);
        }
    },
    methods:{
        todoListStatus(index){
            this.todoList[index].status = !this.todoList[index].status;
        },
        todoListFinishedStatus(index){
             this.todoListFinished[index].status = !this.todoListFinished[index].status;
        },
        kaydet(){
            if(this.eklenecekVeri.title !== 0){
                this.eklenecekVeri.id = this.dataList.length +1 ;
                this.eklenecekVeri.list = this.activeListItem.title;
                this.dataList.push(this.eklenecekVeri);
                this.clearForm();
                this.changeListItem(this.activeListItem.id);
            }
            

        },
        clearForm(){
            this.eklenecekVeri = { title:'',status:true};
        },
        deleteItem(id){
            this.dataList = this.dataList.filter(x=>x.id !== id);
        },
        changeListItem(id){
            const listItem = this.listItems.find(x => x.id === id);
            if(listItem != null){
                this.activeListItem = listItem;
                this.filteredDataList = this.dataList.filter(x=> x.list === listItem.title);
            }
        },
        listItemSave(){
            if(this.newListItem.title != null ){
                this.newListItem.id = this.listItems.length + 1 ;
                this.listItems.push(this.newListItem);
                this.newListItem = {}
            }
        },
        listItemCount(title){
            return this.dataList.filter(x=>x.list === title).length ;

        }

    },
    computed:{
        todoList(){
            return this.filteredDataList.filter(todo => todo.status === false);
        },
        todoListFinished(){
            return this.filteredDataList.filter(todo => todo.status === true);
        }
    }
})
