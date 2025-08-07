// stores/strobeStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { socket } from "../../../../client/socket";

export interface OSWStrobeData {
  product_id: number;
  global_brightness: number;
  [key: `pot_${number}`]: number;
  [key: `state_${number}`]: boolean;
}

export const useStrobeStore = defineStore("strobe", {
  state: () => ({
    strobeData: [
      {
        product_id: 0,
        global_brightness: 1,
        ...Object.fromEntries(
          Array.from({ length: 16 }, (_, i) => [`pot_${i}`, 0])
        ),
        ...Object.fromEntries(
          Array.from({ length: 16 }, (_, i) => [`state_${i}`, true])
        ),
      },
    ] as OSWStrobeData[],
  }),

  actions: {
    async fetchStrobeData() {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_DOMAIN + "/inspection/osw/strobe"
        );
        this.strobeData = response.data;
        console.log("✅ OSW Strobe data:", this.strobeData);
      } catch (error) {
        console.error("❌ Error fetching strobe data:", error);
      }
    },

    emitStrobeData() {
      if (socket.connected && this.strobeData.length > 0) {
        socket.emit("OSWStrobeData", this.strobeData);
        console.log("📤 OSWStrobeData emitted:", this.strobeData);
      }
    },
  },
});
