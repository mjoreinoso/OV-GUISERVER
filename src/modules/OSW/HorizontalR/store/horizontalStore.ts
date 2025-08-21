
import { defineStore } from "pinia";
import { useSocketStore } from "../../../../client/socketStore";
import axios from "axios";

export const useHorizontalStore = defineStore("horizontal", {
  state: () => ({
    registration_h_display: false,
    vertical_position_h: 0,
    window_height_h: 0,
    neck_width: 0,
    dynamic_tracking: false,
    fit_threshold_h: 0,
    supress_reject_h: false,
    phase_1: 0,
    phase_2: 0,
    phase_3: 0,
    bottle_images: 0,
    isSyncing: false
  }),
  actions: {
    async fetchHorizontalRegistration() {
      try {
        this.isSyncing = true;
        const res = await axios.get("http://127.0.0.1:5000/inspection/osw/image?screen_id=1");
        const data = res.data;
        // Actualiza el estado con los datos recibidos
        this.registration_h_display = data.registration_h_display;
        this.vertical_position_h = data.vertical_position_h;
        this.window_height_h = data.window_height_h;
        this.neck_width = data.neck_width;
        this.dynamic_tracking = data.dynamic_tracking;
        this.fit_threshold_h = data.fit_threshold_h;
        this.supress_reject_h = data.supress_reject_h;
        this.phase_1 = data.phase_1;
        this.phase_2 = data.phase_2;
        this.phase_3 = data.phase_3;
        this.bottle_images = data.bottle_images;
      } catch (error) {
        console.error("Error fetching horizontal registration:", error);
      } finally {
        setTimeout(() => {
          this.isSyncing = false;
        }, 0);
      }
    },
    getHorizontalDataPayload() {
      return {
        registration_h_display: this.registration_h_display,
        vertical_position_h: this.vertical_position_h,
        window_height_h: this.window_height_h,
        neck_width: this.neck_width,
        dynamic_tracking: this.dynamic_tracking,
        fit_threshold_h: this.fit_threshold_h,
        supress_reject_h: this.supress_reject_h,
        phase_1: this.phase_1,
        phase_2: this.phase_2,
        phase_3: this.phase_3,
        bottle_images: this.bottle_images
      };
    },
    emitHorizontalConfig() {
      if (this.isSyncing) {
        return;
      }
      const socketStore = useSocketStore();
      const payload = [this.getHorizontalDataPayload()];
      socketStore.horizontalDataEmit(payload);
    },
  }
});
