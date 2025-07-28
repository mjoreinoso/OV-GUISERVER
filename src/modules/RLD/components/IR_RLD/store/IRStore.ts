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

        // ← Aquí está la corrección
        compArray: [] as number[],
        irArray: [] as number[],
        irTotArray: [] as number[],
        avgArray: [] as number[],
    }),

    getters: {
        // Getter para obtener el threshold del primer elemento de irData
        currentThreshold: (state): number => {
            return state.irData[0]?.threshold || 0;
        }
    },

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

        // Nueva acción para guardar los datos del socket
        updateLiveIRResults(payload: {
            comp: number[];
            ir: number[];
            irTot: number[];
            average: number[];
        }) {
            this.compArray = payload.comp;
            this.irArray = payload.ir;
            this.irTotArray = payload.irTot;
            this.avgArray = payload.average;
        }

    },
});

