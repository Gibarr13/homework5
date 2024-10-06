<template>
<div>

<button @click="prevPAge" :disable="activePage ===1">PREV</button>

<button v-for="page in pages" :key="page" class=""> {{ page }}</button>

<button @click="nextPAge" :disable="activePage === pages">NEXT</button>

</div>

</template>

<script setup>
import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(2)

const pervPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }

    console.log(activePage) 
}

const nextPAge = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }

    console.log(activePage) 
}

 

</script>