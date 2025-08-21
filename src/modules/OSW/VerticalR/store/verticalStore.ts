import { defineStore } from "pinia";
import { useSocketStore } from "../../../../client/socketStore";
import axios from "axios";

export const useVerticalStore = defineStore("vertical", {
  state: () => ({
    registration_v_display: false,
    vertical_position_v: 0,
    window_height_v: 0,
    window_width: 0,
    fit_threshold_v: 0,
    supress_reject_v: false,
    isSyncing: false
  }),
  actions: {
    async fetchVerticalRegistration() {
      try {
        this.isSyncing = true;
        const res = await axios.get("http://127.0.0.1:5000/inspection/osw/image?screen_id=2");
        const data = res.data;
        // Actualiza el estado con los datos recibidos
        this.registration_v_display = data.registration_v_display;
        this.vertical_position_v = data.vertical_position_v;
        this.window_height_v = data.window_height_v;
        this.window_width = data.window_width;
        this.fit_threshold_v = data.fit_threshold_v;
        this.supress_reject_v = data.supress_reject_v;
      } catch (error) {
        console.error("Error fetching vertical registration:", error);
      } finally {
        setTimeout(() => {
          this.isSyncing = false;
        }, 0);
      }
    },
    getVerticalDataPayload() {
      return {
        registration_v_display: this.registration_v_display,
        vertical_position_v: this.vertical_position_v,
        window_height_v: this.window_height_v,
        window_width: this.window_width,
        fit_threshold_v: this.fit_threshold_v,
        supress_reject_v: this.supress_reject_v
      };
    },
    emitVerticalConfig() {
      if (this.isSyncing) {
        return;
      }
      const socketStore = useSocketStore();
      const payload = [this.getVerticalDataPayload()];
      socketStore.verticalDataEmit(payload);
    },
  }
});
