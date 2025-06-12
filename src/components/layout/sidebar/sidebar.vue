<template>
    <div 
        class="bg-green-500 h-full rounded-lg p-3 transition-all duration-100 ease-in-out"
        :class="{
            'w-[15%]': isOpen,
            'w-[5%]': !isOpen
        }">
        <div class="bg-blue-700 h-[8%] rounded-lg" @click="toggleSidebar">FILTEC</div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const isOpen = ref(true);
const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};

</script>