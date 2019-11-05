new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".rdr");
      const description = document.querySelector(".description");
      const logo = document.querySelector(".image");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-70%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(logo, 0.7, { x: "-100%" }, { x: "5%" });
    }
  }
});
