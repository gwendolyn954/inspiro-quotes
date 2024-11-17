//dark theme
const darkThemeBtn = document.getElementById('themeSwitch');
darkThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

//modal
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

//API
document.getElementById('open').addEventListener('click', getFetch)

function getFetch(){
    const url = `https://quoteslate.vercel.app/api/quotes/random`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.quote)
        console.log(data.author)

        document.querySelector('h3').innerText = data.quote
        document.querySelector('h4').innerText = data.author

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}




