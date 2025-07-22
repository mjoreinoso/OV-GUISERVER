<template>
    <div class="w-[120px] p-3"></div>
    <div class="absolute z-30 flex flex-col items-center space-y-4 justify-start bg-primary h-full p-3 transition-all duration-300 ease-in-out"
        :class="{
            'w-[20%] rounded-r-lg': sidebarStore.isOpen,
            'w-[120px]': !sidebarStore.isOpen
        }">
        <!-- Logo -->
        <div class="self-center transition-all duration-300 ease-in-out rounded-full"
            :class="sidebarStore.isOpen ? 'h-[80px] w-[300px]' : 'h-[80px] w-[80px]'"
            @click="sidebarStore.toggleSidebar">
            <img class="w-full h-full object-contain transition-all duration-300 ease-in-out"
                :src="sidebarStore.isOpen ? FILTEC : logoFILTEC" alt="FILTEC" />
        </div>


        <!-- Botón de menú -->
        <Tree :nodes="menuTree" :is-open-sidebar="sidebarStore.isOpen" @nodeClick="handleTabClick" />
    </div>
</template>


<script setup lang="ts">
import FILTEC from '@/assets/manufacturer/FILTEC.png';
import logoFILTEC from '@/assets/manufacturer/logoFILTEC.png';
import { useSidebarStore } from './store/sidebarStore';
import Tree from './components/tree.vue';
import { menuTree } from './store/menuTree';
const sidebarStore = useSidebarStore();

function handleTabClick(name: string) {
    console.log('Clicked tab:', name)
    // Aquí puedes agregar navegación o lógica adicional
}


</script>
