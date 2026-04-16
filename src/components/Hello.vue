<template>
    <div class="container">
        <h1 class="title">Hello Vue</h1>
        <button @click="handleClick">点击切换标题颜色</button>
    </div>
</template>

<script setup lang="ts">
let flag=false
const handleClick=()=>{
    const title=document.querySelector('.title') as HTMLElement
    flag=!flag
    if(!flag){
        title.style.color='black'
    }else{
        title.style.color='red'
    }
}
</script>

<style scoped>
.container{
    text-align: center;
}
</style>