// store/maskStore.ts
import { defineStore } from "pinia";
import axios from "axios";

export const useMaskStore = defineStore("mask", {
  state: () => ({
    id: 0,
    product_id: 0,
    mask_display: false,
    mask_top_enable: false,
    mask_bottom_enable: false,
    spot_mask_enable: false,
    left_top_position: 0,
    right_top_position: 0,
    top_width: 0,
    left_bottom_position: 0,
    right_bottom_position: 0,
    bottom_width: 0,
    spot_threshold: 0
  }),

  actions: {
    async fetchMaskConfig() {
      try {
        const res = await axios.get("http://127.0.0.1:5000/inspection/osw/mask");
        const data = res.data;
        if (Array.isArray(data) && data.length > 0) {
          Object.assign(this, data[0]); // Actualiza el estado con la primera entrada
        }
      } catch (error) {
        console.error("Error fetching mask config:", error);
      }
    },

    getMaskDataPayload() {
      return [
        {
          id: this.id,
          product_id: this.product_id,
          mask_display: this.mask_display,
          mask_top_enable: this.mask_top_enable,
          mask_bottom_enable: this.mask_bottom_enable,
          spot_mask_enable: this.spot_mask_enable,
          left_top_position: this.left_top_position,
          right_top_position: this.right_top_position,
          top_width: this.top_width,
          left_bottom_position: this.left_bottom_position,
          right_bottom_position: this.right_bottom_position,
          bottom_width: this.bottom_width,
          spot_threshold: this.spot_threshold
        }
      ];
    }
  }
});
