<template>
  <div class="flex flex-row h-full w-full">
    <div class="flex flex-col justify-between h-full w-[35%]">
      <topDiagonalMask />
      <bottomDiagonalMask />
      <spotMasking />
    </div>
    <div class="w-[65%] h-full flex items-center justify-center">
      <img id="live-img" :src="imageSrc" alt="Live Feed" class="object-contain max-h-full max-w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import topDiagonalMask from "./components/topDiagonalMask.vue";
import bottomDiagonalMask from "./components/bottomDiagonalMask.vue";
import spotMasking from "./components/spotMasking.vue";
import { useMaskStore } from "./store/maskStore";
import { useSocketStore } from "../../../client/socketStore";

const maskStore = useMaskStore();
const socketStore = useSocketStore();

const imageSrc = ref("");
let ws: WebSocket | null = null;

// Detectar cambios en el store
maskStore.$subscribe((mutation) => {
  console.log("Cambio detectado en maskStore:", {
    type: mutation.type,
    storeId: mutation.storeId,
    events: mutation.events,
  });

  const payload = maskStore.getMaskDataPayload();
  socketStore.maskDataEmit(payload);
  console.log("Datos de máscara enviados por socket:", payload);
});

onMounted(() => {
  maskStore.fetchMaskConfig();

  ws = new WebSocket("ws://localhost:5030"); // ← nuevo puerto
  ws.binaryType = "blob";

  ws.onopen = () => {
    console.log("WebSocket conectado");
  };

  ws.onmessage = (event) => {
    const blob = event.data;

    console.groupCollapsed("📨 Imagen recibida del WebSocket");

    console.log("🔹 Tipo de dato:", typeof blob);
    console.log("🔹 Instancia de Blob:", blob instanceof Blob);
    console.log("🔹 Tamaño del blob:", blob.size, "bytes");
    console.log("🔹 Tipo MIME:", blob.type || "(vacío)");

    // Inspeccionar primeros bytes del blob (opcional)
    const readerRaw = new FileReader();
    readerRaw.onload = () => {
      const arr = new Uint8Array(readerRaw.result as ArrayBuffer);
      const headerBytes = Array.from(arr.slice(0, 8))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(" ");
      console.log("🔍 Cabecera HEX:", headerBytes);
    };
    readerRaw.readAsArrayBuffer(blob);

    // Convertir a base64 y mostrar
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result as string;
      console.log("✅ Imagen renderizada correctamente");
    };
    reader.readAsDataURL(blob);

    console.groupEnd();
  };


  ws.onerror = (err) => {
    console.error("Error WebSocket:", err);
  };

  ws.onclose = () => {
    console.warn("WebSocket cerrado. Intentando reconectar en 2 segundos...");
    setTimeout(() => {
      location.reload(); // puedes reemplazarlo por reconexión real si prefieres
    }, 2000);
  };
});

onUnmounted(() => {
  if (ws) {
    ws.close();
    ws = null;
  }
});
</script>
