<template>
    <div class="flex flex-col items-center space-y-4 justify-start bg-primary h-full rounded-lg p-1 transition-all duration-300 ease-in-out"
        :class="{
            'w-[18%]': sidebarStore.isOpen,
            'w-[8%]': !sidebarStore.isOpen
        }">
        <div class="rounded-full" @click="sidebarStore.toggleSidebar">
            <img class="h-[80px] object-contain transition-all duration-300 ease-in-out"
                :src="sidebarStore.isOpen ? FILTEC : CircleFILTEC" alt="FILTEC" />
        </div>

        <div>
            <div class="flex items-center space-x-2 mt-4">
                <img class="w-10" :src="inspectionSetup" alt="Inspection Setup Icon" />
                <label v-show="sidebarStore.isOpen" class="text-white transition-all duration-300 ease-in-out">
                    Inspection Setup
                </label>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import FILTEC from '@/assets/manufacturer/FILTEC.png';
import CircleFILTEC from '@/assets/manufacturer/circleFILTEC.png';
import { useSidebarStore } from './store/sidebarStore';
import inspectionSetup from '@/assets/sidebarIcons/inspectionSetup.svg';

const sidebarStore = useSidebarStore();
</script>
