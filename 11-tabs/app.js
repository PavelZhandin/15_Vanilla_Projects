const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    // hide other articles
    e.target.classList.add("active");
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    document.querySelector(`#${id}`).classList.add("active");
  }
});
