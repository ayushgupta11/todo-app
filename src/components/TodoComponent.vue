<template>
    <div class="flex column todo-list h-center v-center" v-if="todoList != null">
        <div class="nav flex" style="justify-content: flex-end;border-bottom: 2px solid #ccc;">
            <q-btn icon="close" flat round @click="closeModal" />
        </div>
        <q-alert style="margin-top: 20px;" color="grey" icon="info">CLick on the Todo Item to delete</q-alert>
        <h4 class="up">{{todoList.title}}</h4>
        <div class="add-todo flex">
            <input type="text" class="input" placeholder="Add New Todo" v-model="newTodo" />
            <q-btn round icon="add" @click="addTodo"/>
        </div>
        <div class="flex column list" v-if="todoList.hasOwnProperty('content') && todoList.content.length">
                <div class="flex" v-if="todoList.content.length" v-for="(todo , index) in todoList.content" :key="index">
                    <div v-if="!todo.completed">
                        <q-checkbox v-model="todo.completed" @input="updateTodo(index)"/>
                        <span class="todo" @click="deleteTodo(index)">{{todo.item}}</span>
                    </div>
                </div>
                    <q-collapsible group="completed" icon="check" :label="completedItems">
                        <div v-for="(todo , index) in todoList.content" v-if="todoList.content.length && todo.completed"  :key="index">
                            <q-checkbox v-model="todo.completed" @input="updateTodo(index)"/>
                            <span class="todo-completed"  @click="deleteTodo(index)">{{todo.item}}</span>
                        </div>
                    </q-collapsible>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TodoList',
    props: ['todoList', 'id'],
    data(){
        return{
            newTodo: ''
        }
    },
    computed: {
        completedItems(){
            let filtered = []
                if(this.todoList.hasOwnProperty('content') && this.todoList.content.length){
                this.todoList.content.forEach(todo => {
                if(todo.completed){
                    filtered.push(todo)
                } 
                })
                return 'Completed (' + filtered.length + ')' 
            }
            else{
                return ''
            }
        }
    },
    methods: {
        updateTodo(index){
            console.log(this.todoList)
            let updateData = {
                id: index,
                todo : this.todoList
            }
            this.$store.commit('updateTodo', updateData)
        },
        closeModal(){
            this.$emit('closeModal' , true)
        },
        deleteTodo(index){
            this.$store.commit('deleteTodo', {
                id: this.id,
                ind: index
            })
        },
        addTodo(){
            let newTodo = {
                item: this.newTodo,
                completed: false
            }
            let payload = {
                id: this.id,
                todo: newTodo
            }
            this.$store.commit('addTodo', payload)
            this.newTodo = ''
        }
    }
}
</script>
