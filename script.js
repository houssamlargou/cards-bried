let id = [];

document.querySelectorAll(".card").forEach((el) => {
  el.addEventListener("click", function () {
    id.push(+this.dataset.id);
    let cacao = this.dataset.id;
    this.querySelector(".front").classList.add("font-rotate");
    this.querySelector(".back").classList.add("back-rotate");
    for (let i = 0; i < id.length; i++) {
      setTimeout(function () {
        if (id[i] == id[i + 1]) {
          id = [];
          return;
        } else {
          document
            .querySelectorAll(`.card-${id[i]} , .card-${id[i + 1]}`)
            .forEach((el) => {
              el.querySelector(".front").classList.remove("font-rotate");
              el.querySelector(".back").classList.remove("back-rotate");
            });

          id = [];
        }
      }, 3000);
    }
  });
});
