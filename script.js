// let id = [];
// document.querySelectorAll(".card").forEach((el) => {
//   el.addEventListener("click", function () {
//     this.querySelector(".front").classList.add("font-rotate");
//     this.querySelector(".back").classList.add("back-rotate");
//     const Num = this;
//     for (let i = 0; i < id.length; i++) {
//       if (+this.dataset.id == id[i]) {
//         document.querySelectorAll(`card-${id[i]}`).forEach((el) => {
//           this.querySelector(".front").classList.add("font-rotate");
//           this.querySelector(".back").classList.add("back-rotate");
//           id = [];
//         });
//       } else {
//         setTimeout(function () {
//           document.querySelectorAll(`card-${id[i]}`).forEach((el) => {
//           Num.querySelector(".front").classList.remove("font-rotate");
//           Num.querySelector(".back").classList.remove("back-rotate");
//           id = [];
//         }, 2000);
//       }
//     }
//     id.push(+this.dataset.id);
//   });
// });

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
        }
        //  else if (id.length < 2) {
        //   cacao.querySelector(".front").classList.remove("font-rotate");
        //   cacao.querySelector(".back").classList.remove("back-rotate");
        //   id = [];
        // }
        else {
          //   cacao.querySelector(".front").classList.remove("font-rotate");
          //   cacao.querySelector(".back").classList.remove("back-rotate");
          //   querySelectorAll(`.card-${id[i]}`).forEach((el) => {
          //     el.querySelector(".front").classList.remove("font-rotate");
          //     el.querySelector(".back").classList.remove("font-rotate");
          //   })
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
