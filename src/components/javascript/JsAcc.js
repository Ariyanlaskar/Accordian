const acc = document.querySelectorAll(".box");

acc.forEach((accordian) => {
  const answer = accordian.querySelector(".content");
  const icon = accordian.querySelector(".icon");

  accordian.addEventListener("click", function () {
    answer.classList.toggle("active");
    icon.classList.toggle("iconActive");
  });
});
