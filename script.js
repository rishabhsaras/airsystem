function bookService() {
  const phone = "917836840700"; // Your WhatsApp number
  const message =
    "Hello! I'd like to book a service. Kindly guide me through the process.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
function openWhatsApp() {
  const phone = "917836840700"; // your WhatsApp number (without +)
  const message = "Hi, I'd like to book a service. Please assist me.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
function makeCall() {
  const phone = "917836840700"; // your phone number
  window.location.href = `tel:${phone}`;
}

let animation = () => {
  var tl1 = gsap.timeline();
  tl1.from(".navbar", {
    y: -150,
    duration: 0.65,
  });
  tl1.from(".logo .img-logo", {
    opacity: 0,
    duration: 0.3,
  });
  tl1.from(".anchor-tags a", {
    y: -100,
    duration: 0.3,
    stagger: 0.07,
  });
  tl1.from(".left-side-hero h1", {
    x: -100,
    duration: 0.3,
    opacity: 0,
  });
  tl1.from(".para-hero", {
    x: -90,
    duration: 0.3,
    opacity: 0,
  });
  tl1.from(".whatsapp-logo", {
    x: 100,
    duration: 0.3,
    opacity: 0,
  });
};
animation();

let right = () => {
  var tl = gsap.timeline();

  tl.from(".right-side-hero #img-1", {
    x: 150,
    duration: 0.3,
    delay: 0.8,
    opacity: 0,
  });
  tl.from(".right-side-hero #img-2", {
    y: -100,
    duration: 0.3,
    opacity: 0,
  });
  tl.from(".right-side-hero #img-3", {
    x: 150,
    duration: 0.3,
    opacity: 0,
  });
  tl.from(".call-logo", {
    x: -100,
    opacity: 0,
    duration: 0.3,
  });
};
right();

let scrolltrigger = () => {
  var tl2 = gsap.timeline();

  tl2.from(".top-service-section h1", {
    opacity: 0,
    y: -30,
    scrollTrigger: {
      trigger: ".top-service-section h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 1,
    },
  });
  tl2.from("#srvc-sctn-1", {
    opacity: 0,
    x: -100,
    scrollTrigger: {
      trigger: "#srvc-sctn-1",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from("#srvc-sctn-2", {
    y: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#srvc-sctn-2",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from("#srvc-sctn-3", {
    opacity: 0,
    x: 100,
    scrollTrigger: {
      trigger: "#srvc-sctn-3",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from("#sctn-btm-srvc-sctn-1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#sctn-btm-srvc-sctn-1",
      scroller: "body",
      start: "top 80%",
      scrub: 1,
      end: "top 60%",
    },
  });
  tl2.from("#sctn-btm-srvc-sctn-2", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#sctn-btm-srvc-sctn-2",
      scroller: "body",
      start: "top 80%",
      scrub: 1,
      end: "top 60%",
    },
  });
  tl2.from(".hdng-about-top", {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".hdng-about-top",
      scroller: "body",
      start: "top 75%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".para-about-top", {
    x: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".para-about-top",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".elemnts-about-top #elmts-about-top-1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#elmts-about-top-1",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".elemnts-about-top #elmts-about-top-2", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#elmts-about-top-2",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".about-ase", {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-ase",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".about-us-img", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about-us-img",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".para-about-ase", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".para-about-ase",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".prt-2-about-hdng", {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".prt-2-about-hdng",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%,",
    },
  });
  tl2.from(".prt-2-about-para", {
    x: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".prt-2-about-para",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%,",
    },
  });
  tl2.from("#cntn-slider-abt-prt-2-1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cntn-slider-abt-prt-2-1",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from("#cntn-slider-abt-prt-2-2", {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cntn-slider-abt-prt-2-2",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from("#cntn-slider-abt-prt-2-3", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cntn-slider-abt-prt-2-3",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".upr-prt-cntc-us h1", {
    y: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".upr-prt-cntc-us h1",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".right-side-cntc", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".right-side-cntc",
      scroller: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 60%",
    },
  });
  tl2.from(".cntc-lctn", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".cntc-lctn",
      scroll: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 75%",
    },
  });
  tl2.from(".cntc-gml", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".cntc-gml",
      scroll: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 75%",
    },
  });
  tl2.from(".cntc-mobile", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".cntc-mobile",
      scroll: "body",
      scrub: 1,
      start: "top 80%",
      end: "top 75%",
    },
  });
  tl2.from("#insta", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#insta",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  tl2.from("#face", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#face",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  tl2.from("#whatsapp", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#whatsapp",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  tl2.from("#gml", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#gml",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  tl2.from("#lctn", {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: "#lctn",
      scroller: "body",
      start: "top 80%",
      end: "top 75%",
      scrub: 1,
    },
  });
  tl2.from(".lft-prt-ftr", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".lft-prt-ftr",
      scroller: "body",
      start: "top 70%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".rght-prt-ftr", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".rght-prt-ftr",
      scroller: "body",
      start: "top 70%",
      end: "top 60%",
      scrub: 1,
    },
  });
  tl2.from(".cpyrt-cntnr",{
    x:-100,
    opacity:0,
    scrollTrigger:{
      trigger:".cpyrt-cntnr",
      scroller:"body",
      scrub:1,
      start:"top 97%",
      end:"top 95%",
    }
  });
  tl2.from(".mdby-cntnr",{
    x:100,
    opacity:0,
    scrollTrigger:{
      trigger:".mdby-cntnr",
      scroller:"body",
      scrub:1,
      start:"top 99%",
      end:"top 97%",
    }
  });
};
scrolltrigger();

let menubarAnimation = () => {


};
menubarAnimation();
