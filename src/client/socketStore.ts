// src/stores/socketStore.ts
import { defineStore } from "pinia";
import { socket } from "./socket"; // importa el socket ya configurado
import type { AppSocket } from "./socket";
import { useIRStore } from "../modules/RLD/components/IR_RLD/store/IRStore";
import { useRFStore } from "../modules/RLD/components/RF_RLD/store/RFStore";
import { useAlgorithmStore } from "../modules/OSW/VerticalR/store/verticalStore";

export const useSocketStore = defineStore("socketStore", {
  state: () => ({
    socket: socket as AppSocket,
    isConnected: false,
  }),

  actions: {
    connect() {
      if (!this.isConnected) {
        this.socket.connect();

        this.socket.on("connect", () => {
          console.log("✅ Socket connected");
          this.isConnected = true;
        });

        this.socket.on("IRResults", (data) => {
          console.log("📩 Received IR results:", data);
          const irStore = useIRStore();
          irStore.updateLiveIRResults(data);
        });

        this.socket.on("RFResults", (data) => {
          console.log("📩 Received RF results:", data);
          const rfStore = useRFStore();
          rfStore.updateLiveRFResults(data);
        });

        this.socket.on("OSWImageData", (data) => {
          console.log("📩 Received OSW Image data:", data);
        });

        this.socket.on("OSWHorizontalRegistration", (data) => {
          console.log("📩 Received OSW Horizontal Registration data:", data);
        });

        this.socket.on("OSWVerticalRegistration", (data) => {
          console.log("📩 Received OSW Vertical Registration data:", data);
        });

        this.socket.on("disconnect", () => {
          console.warn("⚠️ Socket disconnected");
          this.isConnected = false;
        });
      }
    },

    disconnect() {
      if (this.isConnected) {
        this.socket.disconnect();
      }
    },

    irDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("irData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    maskDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWMaskData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    imageDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWImageData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    rfDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("RFData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    algorithmDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWAlgorithmData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    verticalREmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWVerticalRData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    horizontalREmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWHorizontalRData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },
  },
});
