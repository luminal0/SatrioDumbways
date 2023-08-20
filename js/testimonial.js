const testimonialData = [
  {
    author: "Satrio Coman Azizi",
    quote: "Buranyuuuuuu",
    image:
      "https://media.tenor.com/hFF7PF8xvN4AAAAi/neco-arc-taunt.gif",
    rating: 5,
  },
  {
    author: "Neco Arc 1",
    quote: "NYAGHHHH",
    image:
      "https://media.tenor.com/hGlXXpLIlq0AAAAi/neco-arc-taunt.gif",
    rating: 4,
  },
  {
    author: "Neco Arc 2",
    quote: "Dori Dori Dori",
    image:
      "https://media.tenor.com/ayAkes0hk-0AAAAi/neco-arc.gif",
    rating: 4,
  },
  {
    author: "Neco Arc 3",
    quote: "Buranyuuuuuuuuu",
    image:
      "https://i.redd.it/9osv7lqamjo91.gif",
    rating: 1,
  },
  {
    author: "Neco Arc 4",
    quote: "JELEGHHH",
    image:
      "https://preview.redd.it/neko-arc-gifs-v0-4ur8wlpamjo91.gif?width=512&auto=webp&s=99ced62cb0574efeda870c31f264e05c17ed831e",
    rating: 2,
  },
  {
    author: "Neco Arc 4",
    quote: "AAAAAAAAAAAAAAAA",
    image:
      "https://i.redd.it/z71y9hqamjo91.gif",
    rating: 3,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
      <div class="testimonial">
        <img src="${item.image}" class="profile-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}