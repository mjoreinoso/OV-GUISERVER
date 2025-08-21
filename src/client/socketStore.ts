// src/stores/socketStore.ts
import { defineStore } from "pinia";
import { socket } from "./socket"; // importa el socket ya configurado
import type { AppSocket } from "./socket";
import { useIRStore } from "../modules/RLD/components/IR_RLD/store/IRStore";
import { useRFStore } from "../modules/RLD/components/RF_RLD/store/RFStore";

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
          console.log("Received IR results:", data);
          // Aquí puedes manejar los datos recibidos

          const irStore = useIRStore();
          irStore.updateLiveIRResults(data);
        });

        this.socket.on("RFResults", (data) => {
          console.log("Received RF results:", data);
          // Aquí puedes manejar los datos recibidos

          const rfStore = useRFStore();
          rfStore.updateLiveRFResults(data);
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

    verticalDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWVerticalRegistration", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    horizontalDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWHorizontalRegistration", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    },

    windowDataEmit(data: any) {
      if (this.isConnected) {
        this.socket.emit("OSWWindowSetupData", data);
      } else {
        console.error("❌ Cannot emit, socket not connected");
      }
    }
  },
});
