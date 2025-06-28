let T1 = 'show'; // Class to add when in view

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(T1);
    } else {
      entry.target.classList.remove(T1);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const descriptions = [
    "Photobooth during our meet up on June 11 when you went and helped your best friend with her YES problem. I was so happy this time because I got to see you once again after a long time.",
    "This was a photo of our meet up on June 18 when you enrolled at your school. We had nothing planned specifically that day, but being with you made it fun and all the more worth the trouble of going to see you.",
    "A random photo during our monthsary of having you act all random and silly. I love every bit of your personality—even the things you think aren’t attractive, I find beautiful.",
    "I know the succeeding photos are just from our previous monthsary, and I know I’ve already run out of ideas to describe how special you are.",
    "But with the days that have passed, it’s shown me that distance isn’t a problem when both of us genuinely want to make things work.",
    "I love you so much, darling. Even words fail to describe how much you've made my days brighter just with your smile and presence.",
    "I can no longer spend a day without thinking about you, wondering what you're doing. I want to be beside you always and never be apart again.",
    "I still remember the first time I held your hand and how natural it felt—like I was meant to hold it forever.",
    "Every photo here is a memory, but it’s also a promise—that I’ll keep making new ones with you, over and over again.",
    "You are the home I never knew I was missing, and every second spent with you fills a part of me I didn’t know was empty.",
    "I know life won’t always be perfect, but I promise to always choose you, even when it’s hard.",
    "Thank you for being my peace, my warmth, my love. Here’s to many more months and memories together. Happy 2nd Monthsary, my darling."
  ];


  const imageFolder = 'assets/gallery'; // Make sure path is correct
  const cardRow = document.querySelector('.row-cols-md-3');

  if (!cardRow) {
    console.error("❌ Could not find .row-cols-md-3 — check class or timing.");
    return;
  }

  descriptions.forEach((desc, index) => {
    const delay = (index * 0.2).toFixed(1);

    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card shadow-sm hidden bottom" style="transition-delay: ${delay}s">
      <img
        src="${imageFolder}/${index}.jpg"
        class="bd-placeholder-img card-img-top"
        style="width: 100%; height: 225px; object-fit: cover;"
        alt="Card image"
      />

      <div class="card-body">
          <p class="card-text">${desc}</p>
          
        </div>
      </div>
    `;

    cardRow.appendChild(col);

    // ✅ Observe this new card
    const newCard = col.querySelector('.card');
    observer.observe(newCard);
  });

  // ✅ Also observe any static `.hidden` elements on page load
  const staticHidden = document.querySelectorAll('.hidden');
  staticHidden.forEach((el) => observer.observe(el));
});
