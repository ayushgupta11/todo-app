export default{
    addNewList(state, payload){ state.groupsList.unshift(payload)},
    deleteGroup(state,payload){
        state.groupsList.splice(payload, 1)
    },
    updateTodo(state,payload){
        state.groupsList[payload.id] = payload.todo
    },
    addTodo(state, payload){
        state.groupsList[payload.id].content.push(payload.todo)
    },
    deleteTodo(state, payload){
        state.groupsList[payload.id].content.splice(payload.ind, 1)
    }
}