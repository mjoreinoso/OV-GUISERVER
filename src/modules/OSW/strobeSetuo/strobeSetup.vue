<template>
    <div class="flex flex-row h-full space-x-3">
        <ledStrobes class="w-[35%]" />
        <camera class="w-[65%]" />
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../assets/vueComponents/inputs/numberInput.vue';
import camera from '../../../assets/vueComponents/camera/camera.vue';
import ledStrobes from './components/ledStrobes.vue';

</script>