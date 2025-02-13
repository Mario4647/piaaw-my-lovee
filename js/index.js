const title = document.querySelector('.title')
const text = 'Maaff yaa sayangg kuu gabisaa ngasih banyakk,marr cumaa bisaa ngasih hal simpel inii keee piaaa'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});
