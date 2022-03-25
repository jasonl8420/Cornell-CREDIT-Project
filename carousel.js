const SLIDES = $(".carousel-slides > .slides");
const DOTS = $(".carousel-buttons > .dots");

function nextSlide() {
  let nextNum = SLIDES.index($(".slides:not(.hidden")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slides:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */
  SLIDES.addClass('hidden');
  currentSlide.removeClass('hidden');

  DOTS.addClass('active');
  currentDot.removeClass('active');
}

$("#carousel-right-button").click(function() {
  nextSlide();
});

$("#carousel-left-button").click(function() {
  prevSlide();
});

$("#dot1").click(function() {
  showSlide(1);
});

$("#dot2").click(function() {
  showSlide(2);
});

$("#dot3").click(function() {
  showSlide(3);
});
