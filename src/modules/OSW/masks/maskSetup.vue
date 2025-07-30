<template>
  <div class="flex flex-row h-full w-full">
    <div class="flex flex-col justify-between h-full w-[35vw]">
      <topDiagonalMask />
      <bottomDiagonalMask />
      <spotMasking />
    </div>
    <div class="w-[65vw] h-full flex items-center justify-center">
      <img
        id="live-img"
        :src="imageSrc"
        alt="Live Feed"
        class="object-contain max-h-full max-w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import topDiagonalMask from './components/topDiagonalMask.vue';
import bottomDiagonalMask from './components/bottomDiagonalMask.vue';
import spotMasking from './components/spotMasking.vue';
import { useMaskStore } from './store/maskStore';
import { useSocketStore } from '../../../client/socketStore';

const maskStore = useMaskStore();
const socketStore = useSocketStore();

const imageSrc = ref('');
let ws: WebSocket | null = null;

// Suscripción a cambios del store
maskStore.$subscribe((mutation) => {
  console.log('Cambio detectado en maskStore:', {
    type: mutation.type,
    storeId: mutation.storeId,
    events: mutation.events,
  });

  const payload = maskStore.getMaskDataPayload();
  socketStore.maskDataEmit(payload);
  console.log('Datos de máscara enviados por socket:', payload);
});

onMounted(() => {
  maskStore.fetchMaskConfig();

  // Conectar al WebSocket del HMI o fuente de imagen
  ws = new WebSocket('ws://localhost:9090'); // <- reemplaza con tu URL real

  ws.onopen = () => {
    console.log('Conectado al WebSocket para imagen en tiempo real');
  };

  ws.onmessage = (event) => {
    // Suponemos que recibimos directamente un string con base64
    if (typeof event.data === 'string' && event.data.startsWith('data:image')) {
      imageSrc.value = event.data;
    } else {
      console.warn('Dato inesperado del socket:', event.data);
    }
  };

  ws.onerror = (err) => {
    console.error('Error en WebSocket:', err);
  };

  ws.onclose = () => {
    console.log('WebSocket cerrado');
  };
});

onUnmounted(() => {
  if (ws) {
    ws.close();
    ws = null;
  }
});
</script>
