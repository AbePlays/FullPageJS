new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    const met = document.querySelector(".met");
    const gow = document.querySelector(".gow");
    if (destination.index === 0) {
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    } else if (destination.index === 1) {
      tl.fromTo(
        title,
        0.5,
        { y: "50", opacity: 0 },
        { y: "0", opacity: 1 }
      ).fromTo(met, 0.5, { x: "-110%" }, { x: "10%" });
    } else if (destination.index === 2) {
      tl.fromTo(
        title,
        0.5,
        { y: "50", opacity: 0 },
        { y: "0", opacity: 1 }
      ).fromTo(gow, 0.5, { x: "120%" }, { x: "-1%" });
    }
  }
});
