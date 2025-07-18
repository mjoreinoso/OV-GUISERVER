import { defineStore } from "pinia";
import axios from "axios";

// Interfaz para tipar los objetos en irData
export interface IRDataItem {
  product_id: number;
  brightness: number;
  sensitivity: number;
  threshold: number;
  gain_a: number;
  gain_b: number;
  ir_pot_0: number;
  ir_pot_1: number;
  ir_pot_2: number;
  ir_pot_3: number;
  recject_type: number; // ← si era typo, cámbialo a reject_type
}

export const useIRStore = defineStore("irStore", {
  state: () => ({
    irData: [] as IRDataItem[],
    isLoading: false,
  }),

  actions: {
    async fetchIRData() {
      this.isLoading = true;
      try {
        const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/inspection/ir");
        this.irData = response.data;
        console.log("IR Data fetched successfully:", this.irData);
      } catch (error) {
        console.error("Error fetching IR data:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
