
import { defineStore } from "pinia";
import { useSocketStore } from "../../../../client/socketStore";
import axios from "axios";

export const useWindowStore = defineStore("window", {
  state: () => ({
  window_id: 0,
  inspected_enable: false,
  displayed_enable: false,
  horizontal_offset: 0,
  vertical_position: 0,
  window_height: 0,
  type: 0,
  top_width: 0,
  bottom_width: 0,
  algorithm: 0,
  isSyncing: false
  }),
  actions: {
    async fetchWindowSetup(window_id = 0) {
      try {
        this.isSyncing = true;
        const res = await axios.get(`http://127.0.0.1:5000/inspection/osw/windowsetup?window_id=${window_id}`);
        const data = res.data;
        // Actualiza el estado con los datos recibidos
        this.window_id = data.window_id;
        this.inspected_enable = data.inspected_enable;
        this.displayed_enable = data.displayed_enable;
        this.horizontal_offset = data.horizontal_offset;
        this.vertical_position = data.vertical_position;
        this.window_height = data.window_height;
        this.type = data.type;
        this.top_width = data.top_width;
        this.bottom_width = data.bottom_width;
        this.algorithm = data.algorithm;
      } catch (error) {
        console.error("Error fetching window setup:", error);
      } finally {
        setTimeout(() => {
          this.isSyncing = false;
        }, 0);
      }
    },
    getWindowDataPayload() {
      return {
        window_id: this.window_id,
        inspected_enable: this.inspected_enable,
        displayed_enable: this.displayed_enable,
        horizontal_offset: this.horizontal_offset,
        vertical_position: this.vertical_position,
        window_height: this.window_height,
        type: this.type,
        top_width: this.top_width,
        bottom_width: this.bottom_width,
        algorithm: this.algorithm
      };
    }
    ,
    async putWindowAlgorithm() {
      try {
        this.isSyncing = true;
        const payload = this.getWindowDataPayload();
        await axios.put("http://127.0.0.1:5000/inspection/osw/windowsetup/algorithm", payload);
      } catch (error) {
        console.error("Error updating window algorithm:", error);
      } finally {
        setTimeout(() => {
          this.isSyncing = false;
        }, 0);
      }
    },

        emitWindowConfig() {
          if (this.isSyncing) {
            return;
          }
          const socketStore = useSocketStore();
          const payload = [this.getWindowDataPayload()];
          socketStore.windowDataEmit(payload);
        },
  }
});