// Dark theme
const darkThemeBtn = document.getElementById('themeSwitch');
darkThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Modal 
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

let isFetching = false; // Flag to prevent multiple fetches

open.addEventListener('click', () => {
    if (!isFetching) { // Only fetch if not already fetching
        modal_container.classList.add('show');
        getFetch(); // Trigger API call when modal opens
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

// Fetch and display quote with loading state
function getFetch() {
    const quoteElem = document.querySelector('h3');
    const authorElem = document.querySelector('h4');

    // Show loading placeholder
    if (quoteElem && authorElem) {
        quoteElem.innerText = 'Loading quote...';
        authorElem.innerText = 'Please wait...';
    }

    isFetching = true; // Set fetching flag

    const url = `https://quoteslate.vercel.app/api/quotes/random`;

    fetch(url)
      .then(res => res.json()) // Parse response as JSON
      .then(data => {
        console.log(data.quote);
        console.log(data.author);

        // Update DOM with new data
        if (quoteElem && authorElem) {
            quoteElem.innerText = data.quote;
            authorElem.innerText = data.author;
        }
        isFetching = false; // Reset fetching flag
      })
      .catch(err => {
          console.error(`Error fetching quote: ${err}`);
          
          // Display error message in the elements if fetching fails
          if (quoteElem && authorElem) {
              quoteElem.innerText = 'Failed to load quote.';
              authorElem.innerText = 'Please try again.';
          }
          isFetching = false; // Reset fetching flag in case of error
      });
}
