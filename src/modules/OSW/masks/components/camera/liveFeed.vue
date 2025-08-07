<!-- components/LiveFeed.vue -->
<template>
    <div class="w-full grow p-3 bg-accent rounded-xl flex items-center justify-center">
        <img id="live-img" :src="imageSrc" alt="Live Feed" class="object-contain max-h-full max-w-full rounded-xl" />
    </div>
    <div class="w-full h-[10%]  bg-accent rounded-xl flex items-center justify-center space-x-3">
        <liveFeedControl />
    </div>
</template>

<script setup lang="ts">
import liveFeedControl from "./liveFeedControl.vue";
import { onMounted, onUnmounted, ref } from "vue";

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
