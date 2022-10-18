let li = document.querySelectorAll("#portfolio-filters li");
let imgContainer = document.querySelectorAll(
  ".portfolio-container .portfolio-item "
);

// remove and add class active to click li
li.forEach((e) =>
  e.addEventListener("click", (ele) => {
    //remove all class active from li
    li.forEach((el) => el.classList.remove("active"));

    // then add class active to clicked li
    ele.currentTarget.classList.add("active");

    // appear image that accociated with clicked li
    let dataValue = document.querySelectorAll(ele.currentTarget.dataset.filter);
    imgContainer.forEach((e) => {
      e.style.display = "none";
    });

    dataValue.forEach((e) => {
      e.style.display = "block";
    });
  })
);

// Back to top button
const btn = document.querySelector(".back-to-top");
btn.onclick = () => {
  window.scrollTo({ top: 0 });
};
