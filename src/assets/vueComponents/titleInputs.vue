<template>
    <div class="flex flex-row grow justify-between items-center p-2">
        <div class="text-xl w-[50%]">{{ props.title }}</div>
        <numberInput
            v-model="inputValue"
            :placeholder="props.placeholder"
            @update:modelValue="emit('update:value', $event)"
            :name="props.title"
            :disabled="false"
        />
    </div>
</template>

<script setup lang="ts">
import numberInput from './inputs/numberInput.vue';

const props = defineProps<{
    title: string;
    placeholder: string;
    value: string;
}>();

defineEmits<{
    (e: 'update:value', value: string): void;
}>();


</script>