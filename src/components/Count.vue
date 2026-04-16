<template>
    <div class="container">
        <h1 class="title">当前计数：{{count}}</h1>
        <h1 class="title">当前双倍计数：{{doubleCount}}</h1>
        <button @click="handleClick">点击增加</button>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counterStore=useCounterStore()
const {count,doubleCount}=storeToRefs(counterStore)
const handleClick=()=>{
    counterStore.increment()
}
</script>
<style scoped>
.container{
    text-align: center;
}
</style>