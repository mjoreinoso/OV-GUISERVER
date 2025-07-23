import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isOpen: false,
    currentScreen: "" as string, // ID de pantalla activa, como "ir", "rf", etc.
  }),
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    setScreen(screenName: string) {
      this.currentScreen = screenName;
    },
  },
});
