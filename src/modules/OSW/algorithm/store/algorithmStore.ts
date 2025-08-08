// store/algorithmStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useSocketStore } from "../../../../client/socketStore";

export const useAlgorithmStore = defineStore("algorithm", {
  state: () => ({
    window_id: 0,
    inspection_enable: false,
    algorithm_id: 0,
    inspection: 0,
    rejection_enable: false,
    rejection_when: 0,
    threshold: 0,
    grd_source: 0,
    grd_type: 0,
    grd_filter: 0,
    grd_width: 0,
    grd_height: 0,
    grd_light_comp: 0,
    bck_source: 0,
    bck_sensitivity: 0,
    bck_kernel_width: 0,
    bck_kernel_height: 0,
    bck_kernel_offset: 0,
    filter_enable: false,
    filter_kernel: 0,
    filter_threshold: 0,
    rejection_type: 0,
    id: null,
    isSyncing: false,
  }),

  actions: {
    async fetchAlgorithmConfig(window_id: number, algorithm_id: number) {
      try {
        this.isSyncing = true;
        const url = `http://127.0.0.1:5000/inspection/osw/algorithm?window_id=${window_id}&algorithm_id=${algorithm_id}`;
        const res = await axios.get(url);
        Object.assign(this, res.data);
        console.log("Algorithm config fetched:", res.data);
      } catch (error) {
        console.error("Error fetching algorithm config:", error);
      } finally {
        setTimeout(() => {
          this.isSyncing = false;
          console.log("🟡 Syncing finished");
        }, 0);
      }
    },

    async putInspectionEnable() {
      try {
        const payload = {
          window_id: this.window_id, // display is 1-based
          inspection_enable: this.inspection_enable,
        };
        await axios.put(
          "http://127.0.0.1:5000/inspection/osw/algorithm/display",
          payload
        );
        console.log("PUT /inspection/osw/algorithm/display", payload);
      } catch (e) {
        console.error("Failed to PUT inspection_enable:", e);
      }
    },

    getAlgorithmPayload() {
      return {
        window_id: this.window_id,
        algorithm_id: this.algorithm_id,
        inspection: this.inspection,
        rejection_enable: this.rejection_enable,
        rejection_when: this.rejection_when,
        threshold: this.threshold,
        grd_source: this.grd_source,
        grd_type: this.grd_type,
        grd_filter: this.grd_filter,
        grd_width: this.grd_width,
        grd_height: this.grd_height,
        grd_light_comp: this.grd_light_comp,
        bck_source: this.bck_source,
        bck_sensitivity: this.bck_sensitivity,
        bck_kernel_width: this.bck_kernel_width,
        bck_kernel_height: this.bck_kernel_height,
        bck_kernel_offset: this.bck_kernel_offset,
        filter_enable: this.filter_enable,
        filter_kernel: this.filter_kernel,
        filter_threshold: this.filter_threshold,
        rejection_type: this.rejection_type,
        id: this.id,
      };
    },

    emitAlgorithmConfig() {
      if (this.isSyncing) {
        return;
      }
      const socketStore = useSocketStore();
      const payload = [this.getAlgorithmPayload()];
      socketStore.algorithmDataEmit(payload);
    },
  },
});
