import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.querySelectorAll("nav button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(".main-content", {
      duration: 1,
      scrollTo: { y: "#section" + (index + 1), offsetY: 20 },
      ease: "power4.out",
    });
  });
});

gsap.from("#section1 h2 .char", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: "#section1",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.03,
  ease: "power4.out",
});

gsap.from(".dev-skill-list li", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: ".dev-skill-list",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.1,
  ease: "power4.out",
});

gsap.from(".design-skill-list li", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: ".design-skill-list",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.1,
  ease: "power4.out",
  delay: 0.5,
});

gsap.from(".office-skill-list li", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: ".office-skill-list",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.1,
  ease: "power4.out",
  delay: 1,
});

gsap.from("#section2 h2 .char", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: "#section2",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.03,
  ease: "power4.out",
});

gsap.from("#section3 h2 .char", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: "#section3",
    start: "top center",
    // end: "center center",
    // scrub: true,
    markers: true,
  },
  opacity: 0,
  y: -5,
  stagger: 0.03,
  ease: "power4.out",
});

gsap.from("#section3 li", {
  scrollTrigger: {
    scroller: ".main-content",
    trigger: "#section3",
    start: "top center",
    end: "center center",
    scrub: true,
    markers: true,
  },
  y: -260,
  stagger: 0.3,
  ease: "power4.out",
});

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: {
    scroller: ".main-content",
    scrub: 0.3,
  },
});
