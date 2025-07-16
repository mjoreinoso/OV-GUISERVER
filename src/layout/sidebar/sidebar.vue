<template>
    <div class="flex flex-col items-center space-y-4 justify-start bg-primary h-full rounded-lg p-3 transition-all duration-300 ease-in-out"
        :class="{
            'w-[20%]': sidebarStore.isOpen,
            'w-[6.8%]': !sidebarStore.isOpen
        }">
        <!-- Logo -->
        <div class="rounded-full self-center" @click="sidebarStore.toggleSidebar">
            <img class="h-[80px] object-contain transition-all duration-100 ease-in-out"
                :src="sidebarStore.isOpen ? FILTEC : CircleFILTEC" alt="FILTEC" />
        </div>

        <!-- Botón de menú -->
        <div class="flex space-x-2 items-center justify-center overflow-hidden">
            <img class="w-10" :src="inspectionSetup" alt="Inspection Setup Icon" />
            <span class="font-semibold text-[1.35vw] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap"
                :class="sidebarStore.isOpen ? 'opacity-100 w-fit' : 'ml-0 opacity-0 w-0'">
                Inspection Setup
            </span>
        </div>
    </div>
</template>


<script setup lang="ts">
import FILTEC from '@/assets/manufacturer/FILTEC.png';
import CircleFILTEC from '@/assets/manufacturer/circleFILTEC.svg';
import { useSidebarStore } from './store/sidebarStore';
import inspectionSetup from '@/assets/sidebarIcons/inspectionSetup.svg';

const sidebarStore = useSidebarStore();
</script>
