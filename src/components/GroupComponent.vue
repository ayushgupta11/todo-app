<template>
<div class="flex">
    <div class="card flex column group grow">
        <div class="flex card-title v-center">
            <span>{{item.title}}</span>
            <q-btn icon="navigate_next" flat round @click="showGroup(id)"/>
        </div>
        <div class="card-seperator"></div>
        <div class="card-content">
            <!-- <content-component v-if="item.content.length" :content="item.content"></content-component> -->
            <span  class="light-color">No Content Here</span>
        </div>
    </div>
</div>
</template>
<script>
import ContentComponent from './ContentComponent.vue'
export default {
    name: 'Group',
    components : { ContentComponent },
    props: ['item', 'id'],
    data(){
        return{

        }
    },
    methods: {
        showGroup(id){
            this.$emit('openGroup', id)
        }
    }
}
</script>
<style scoped>

</style>
