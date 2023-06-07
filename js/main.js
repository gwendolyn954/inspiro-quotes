//dark theme setup
const darkThemeBtn = document.getElementById('darkThemeBtn');
darkThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

//modal setup
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
    const url = `https://api.goprogram.ai/inspiration`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.quote
        document.querySelector('h4').innerText = data.author
        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


