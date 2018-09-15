<template>
<div class="splash-container">
        <img src="../statics/todo.png" />
        <span class="title">Todo App</span>
</div>
</template>
<script>
export default {
    name: 'Splash',
    mounted(){
        this.$q.loadingBar.start()
        setTimeout(() => {
            this.$router.push({ path: 'Home' })
            this.$q.loadingBar.stop()
        }, 2000)
    }
}
</script>
<style scoped>
.splash-container{
    width: 100%;
    height: 100vh;
    background: #70e1f5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ffd194, #70e1f5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.splash-container img{
    width: 100px;
    height: 100px;
}
.splash-container span{
    text-transform: uppercase;
    margin-top: 10px;
    font-weight: bold;
}
</style>
