<template>
    <div>
        <div @click="toggle" role="switch" :aria-checked="isActive"
            class="relative flex items-center h-10 w-20 rounded-xl cursor-pointer select-none transition-colors duration-300 ease-in-out shadow-md"
            :class="isActive ? 'bg-green-600' : 'bg-red-600'">
            <!-- Toggle slider -->
            <div class="absolute z-10 h-10 w-10 bg-white rounded-xl flex items-center justify-center shadow transition-transform duration-300 ease-in-out will-change-transform border-4"
                :class="isActive
                    ? 'translate-x-full border-green-600'
                    : 'translate-x-0 border-red-600'">
                <img :src="isActive ? check : cancel" class="w-8 h-8" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import cancel from '../../screenIcons/toggleIcons/cancel.svg'
import check from '../../screenIcons/toggleIcons/check.svg'

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const isActive = ref(props.modelValue)

// Sync with external changes
watch(() => props.modelValue, v => {
    isActive.value = v
})

// Toggle logic
function toggle() {
    isActive.value = !isActive.value
    emit('update:modelValue', isActive.value)
}
</script>
