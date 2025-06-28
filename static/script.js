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
    "Photobooth during our meet up on June 11 when you went and helped you bestfriend with her yes problem. I was so happy this time because I got to see you once again after a long time",
    "This was a photo of our meet up on Jun 18 when you erolled at your school. We had nothing plan specifically that day but being with you made it fun and all the more worth the trouble of going to see you.",
    "A random photo during our monthsary of having you act all random and random. I love every bit of your sides even that you deem not attractive I find so beautiful",
    "I know that the succeeding photos are just photos of our previous Monthsary and I know that I've already ran out of ideas to share to you.",
    "But with the days that has passed, it showcased to me that distance isn't a problem with the both of us genuinely want to make things work with each other.",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
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
