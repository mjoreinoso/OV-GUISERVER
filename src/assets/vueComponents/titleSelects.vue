<template>
    <div class="flex flex-row grow justify-between items-center p-2">
        <div class="text-lg">{{ props.title }}</div>
        <select :value="props.value"></select>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string;
    value: string;
}>();

defineEmits<{
    (e: 'update:value', value: string): void;
}>();


</script>