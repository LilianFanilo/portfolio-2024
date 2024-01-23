import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: ".box", // start animation when ".box" enters the viewport
  x: 500,
});
