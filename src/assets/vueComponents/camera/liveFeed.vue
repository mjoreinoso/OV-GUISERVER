<!-- components/LiveFeed.vue -->
<template>
    <div class="flex flex-col w-full h-full space-y-2.5 rounded-xl">
        <div class="flex items-center justify-center w-full p-2.5 border-2 grow bg-accent rounded-xl">
            <img id="live-img" :src="imageSrc" alt="Live Feed" class="object-contain max-w-full max-h-full rounded-xl" />
        </div>
        <div class="w-full p-2.5 bg-accent rounded-xl flex items-center justify-center space-x-3 border-2">
            <liveFeedControl 
                :enabledItems="props.enabledItems" 
                :bottleType="props.bottleType" 
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import liveFeedControl from "./liveFeedControl.vue";
import { onMounted, onUnmounted, ref } from "vue";


const props = defineProps<{
    enabledItems: {
        bottle: boolean;
        resolution: boolean;
        groupBottle: boolean;
        freeze: boolean;
        seconds: boolean;
        save: boolean;
    };
    bottleType?: 'IR' | 'RF' | 'OSW'; // 👈 nueva prop
}>();

const imageSrc = ref("");
let ws: WebSocket | null = null;
let reconnectTimeout: number | null = null;

function connectWebSocket() {
    ws = new WebSocket("ws://localhost:5030");
    ws.binaryType = "blob";

    ws.onopen = () => {
        console.log("✅ WebSocket conectado");
    };

    ws.onmessage = (event) => {
        if (typeof event.data === "string") {
            imageSrc.value = `data:image/jpeg;base64,${event.data}`;
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                imageSrc.value = reader.result as string;
            };
            reader.readAsDataURL(event.data);
        }
    };

    ws.onerror = (err) => {
        console.error("❌ Error WebSocket:", err);
    };

    ws.onclose = () => {
        console.warn("⚠️ WebSocket cerrado. Intentando reconectar...");
        reconnectTimeout = window.setTimeout(connectWebSocket, 2000);
    };
}

onMounted(() => {
    connectWebSocket();
});

onUnmounted(() => {
    if (reconnectTimeout) clearTimeout(reconnectTimeout);
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
    }
    ws = null;
});
</script>
