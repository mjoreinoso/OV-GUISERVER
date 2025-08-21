<template>
    <div class="flex flex-col h-full p-4 border-2 rounded-xl text-[0.95vw] space-y-2 justify-between">
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 pb-2 border-b-2">
            <div></div>
            <div class="font-bold text-center">Phase 1</div>
            <div class="font-bold text-center">Phase 2</div>
            <div class="font-bold text-center">Phase 3</div>
        </div>

        <div class="flex flex-col">
            <!-- Encabezados -->
            <div class="grid grid-cols-4 gap-4">
                <div class="font-bold text-start">View 1</div>
            </div>

            <view1 />
        </div>

        <div class="flex flex-col">
            <!-- Encabezados -->
            <div class="grid grid-cols-4 gap-4">
                <div class="font-bold text-start">View 2</div>
            </div>

            <view2 />
        </div>

        <div class="flex flex-col">
            <!-- Encabezados -->
            <div class="grid grid-cols-4 gap-4">
                <div class="font-bold text-start">View 3</div>
            </div>
            <!-- View 3 -->
            <view3 />
        </div>

        <div class="flex flex-col">
            <!-- Encabezados -->
            <div class="grid grid-cols-4 gap-4">
                <div class="font-bold text-start">View 4</div>
            </div>
            <!-- View 4 -->
            <view4 />
        </div>
    </div>
</template>

<script setup lang="ts">
import view1 from './views/view1.vue';
import view2 from './views/view2.vue';
import view3 from './views/view3.vue';
import view4 from './views/view4.vue';
</script>
