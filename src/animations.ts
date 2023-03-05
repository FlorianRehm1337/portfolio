import {
  animate,
  animation,
  query,
  sequence,
  stagger,
  style
} from "@angular/animations";

export const SidebarOpenAnimation = animation([
  style({ transform: "translateX(0)" }),
]);

export const SidebarCloseAnimation = animation([
  style({ transform: "translateX(-{{menuWidth}})" }),
]);
