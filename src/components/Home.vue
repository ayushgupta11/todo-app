<template>
    <div class="flex h-center v-center column fullpage">
        <div class="add-todo flex column h-center v-center">
             <h3 style="color:white;" class="up">Todo App</h3>
             <div class="flex h-center v-center">
                <input type="text" class="input" placeholder="Add New List" v-model="listTitle"/>
                <q-btn round icon="add" style="background:white;color:black;" inverted  @click="addNewList"/>
            </div>
        </div>
        <div class="flex row todo-groups">
            <template v-for="(item, index) in groupsList" >
                <group-component :id="index" :item="item" :key="index" class="group-item" @openGroup="showModal"></group-component>
            </template>
        </div>
        <q-modal v-show="selectedTodoList != null" ref="todoModal" maximized>
            <todo-component :todoList="selectedTodoList" :id="selectedTodoListId"></todo-component>
        </q-modal>
    </div>
</template>
<script>
import GroupComponent from './GroupComponent.vue'
import TodoComponent from './TodoComponent.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: { GroupComponent , TodoComponent},
    data(){
        return{
            listTitle: '',
            selectedTodoList: null,
            selectedTodoListId: null
        }
    },
    computed: {
        ...mapGetters({
            groupsList : 'getGroupsList'
        })
    },
    methods:{
        showModal(params){
            this.selectedTodoListId = params
            this.selectedTodoList = this.groupsList[params]
            this.$refs.todoModal.show()
        },
        openCard(){
            console.log('Card opened')
        },
        addNewList(){
            if(this.listTitle.length){
                let newList = {
                    title: this.listTitle,
                    content: ''
                }
                this.$store.commit('addNewList', newList)
                this.$q.notify({
                    message: 'List Added Successfully!',
                    type: 'positive',
                    timeout: 1000
                })
                this.listTitle = ''
            }
            else{
                this.$q.notify({
                    message: 'List Name cannot be empty!',
                    type: 'warning',
                    timeout: 1000
                })
            }
        }
    }   
}
</script>
<style scoped>
</style>