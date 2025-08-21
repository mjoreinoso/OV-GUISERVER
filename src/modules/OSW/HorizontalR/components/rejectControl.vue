<template>
    <div class="p-4 border-2 rounded-xl">
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4">
            <div></div>
            <div class="font-bold text-center">Phase 1</div>
            <div class="font-bold text-center">Phase 2</div>
            <div class="font-bold text-center">Phase 3</div>
        </div>        
        
        <!-- Línea separadora -->
        <div class="w-full h-[1px] bg-white my-4"></div>

         <!-- View 1 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div class="font-bold text-start">Scan Start</div>
            </div>
            <div class="flex flex-row space-y-2">
                <NumberInput v-model="dummyNumber" />
            </div>
            <div class="flex flex-row space-y-2">
                <NumberInput v-model="dummyNumber" />
            </div>
            <div class="flex flex-row space-y-2">
                <NumberInput v-model="dummyNumber" />
            </div>
        </div>

        <!-- View 1 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div class="font-bold text-start">View 1 Center</div>
                <div class="pl-5">True Threshold</div>
                <div class="pl-5">Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
        </div>

        <!-- View 2 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div class="font-bold text-start">View 2 Center</div>
                <div class="pl-5">True Threshold</div>
                <div class="pl-5">Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
        </div>

        <!-- View 3 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div class="font-bold text-start">View 3 Center</div>
                <div class="pl-5">True Threshold</div>
                <div class="pl-5">Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
        </div>

        <!-- View 4 -->
        <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col space-y-6">
                <div class="font-bold text-start">View 4 Center</div>
                <div class="pl-5">True Threshold</div>
                <div class="pl-5">Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NumberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import valueViewer from '../../../../assets/vueComponents/inputs/valueViewer.vue';
import { ref } from "vue";
const dummyNumber = ref(0);
</script>
