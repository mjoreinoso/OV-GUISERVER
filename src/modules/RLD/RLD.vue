<template>
    <div class="flex flex-col w-full h-full justify-between space-y-5">
        
        <div class="flex flex-row h-full justify-between space-x-5">
            <IR_RLD class="flex-1" />
            <graph class="h-full"/>
        </div>

        <div class="flex flex-row space-x-5">
            <RF_RLD />
            <lightLevels />
        </div>
    </div>
</template>

<script setup lang="ts">
import IR_RLD from './components/IR_RLD/IR_RLD.vue';
import RF_RLD from './components/RF_RLD/RF_RLD.vue';
import lightLevels from './components/Light_Levels/lightLevels.vue';
import graph from './components/Light_Levels/components/graph.vue';

</script>