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
        <div class="flex w-full p-3">
            <div class="flex space-x-2 items-center overflow-hidden">
                <img class="w-10" :src="inspectionSetup" alt="Inspection Setup Icon" />
                <span
                    class="font-semibold text-[1.2vw] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap"
                    :class="sidebarStore.isOpen ? 'opacity-100 w-fit' : 'ml-0 opacity-0 w-0'">
                    Inspection Setup
                </span>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import FILTEC from '@/assets/manufacturer/FILTEC.png';
import logoFILTEC from '@/assets/manufacturer/logoFILTEC.png';
import { useSidebarStore } from './store/sidebarStore';
import inspectionSetup from '@/assets/sidebarIcons/inspectionSetup.svg';

const sidebarStore = useSidebarStore();
</script>
