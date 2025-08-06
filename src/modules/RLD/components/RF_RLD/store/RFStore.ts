import { defineStore } from "pinia";
import axios from "axios";

// Interfaz para tipar los objetos en rfData
export interface RFDataItem {
    product_id: number;
    threshold: number;
    gain_a: number;
    reject_type: number;
}

export const useRFStore = defineStore("rfStore", {
    state: () => ({
        rfData: [] as RFDataItem[],
        isLoading: false,

        // Arrays para datos en tiempo real del socket RF
        RF: [] as number[],
        LastRjtdRFArray: [] as number[],
        Average: [] as number[],
        result: [] as number[],
    }),

    getters: {
        // Getter para obtener el threshold del primer elemento de rfData
        currentThreshold: (state): number => {
            return state.rfData[0]?.threshold || 0;
        }
    },

    actions: {
        async fetchRFData() {
            this.isLoading = true;
            try {
                const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/inspection/rf");
                // Si la respuesta es un objeto único, lo convertimos en array
                if (response.data && !Array.isArray(response.data)) {
                    this.rfData = [response.data];
                } else {
                    this.rfData = response.data;
                }
                console.log("RF Data fetched successfully:", this.rfData);
            } catch (error) {
                console.error("Error fetching RF data:", error);
            } finally {
                this.isLoading = false;
            }
        },

        // Nueva acción para guardar los datos del socket RF
        updateLiveRFResults(payload: {
            RF: number[];
            lastRjtd: number[];
            Average: number[];
            result: number[];
        }) {
            this.RF = payload.RF;
            this.LastRjtdRFArray = payload.lastRjtd;
            this.Average = payload.Average;
            this.result = payload.result;
        }

    },
});

