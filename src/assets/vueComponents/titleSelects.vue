<template>
    <div class="flex flex-row grow justify-between items-center p-2 space-x-3">
        <div class="text-[1.2vw]">{{ props.title }}</div>
        <select class="bg-white h-[5vh] grow rounded-lg" :value="props.value">
            <option value="''">Please Select One</option>
        </select>
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