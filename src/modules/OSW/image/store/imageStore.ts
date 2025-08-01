// store/imageStore.ts
import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    outline_display: false,
    point_display: false,
    x_image: 0,
    y_image: 0,
    width_image: 0,
    height_image: 0,
    gain: 0,
    exposure: 0,
    debounce: 0,
    trigger_offset: 0,
    reject_delay: 0,
    bottle_images: 0,
    views: 0
  }),

  actions: {
    async fetchImageConfig() {
      try {
        const res = await fetch("http://127.0.0.1:5000/inspection/osw/image");
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          Object.assign(this, json[0]); // Actualiza el estado con la primera entrada
        }
      } catch (error) {
        console.error("Error fetching image config:", error);
      }
    },

    getImageDataPayload() {
      return [
        {
          outline_display: this.outline_display,
          point_display: this.point_display,
          x_image: this.x_image,
          y_image: this.y_image,
          width_image: this.width_image,
          height_image: this.height_image,
          gain: this.gain,
          exposure: this.exposure,
          debounce: this.debounce,
          trigger_offset: this.trigger_offset,
          reject_delay: this.reject_delay,
          bottle_images: this.bottle_images,
          views: this.views
        }
      ];
    }
  }
});