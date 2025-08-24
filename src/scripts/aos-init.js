import AOS from "aos";

export function initAOS() {
  AOS.init({
    duration: 2000,
    once: true,
  });
}
