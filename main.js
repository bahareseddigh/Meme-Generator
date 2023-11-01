const mgBtn = document.querySelector('.mg-btn')
const memeImg = document.querySelector('.meme-generator img')
const memeTitle = document.querySelector('.meme-title')
const memeAuthor = document.querySelector('.meme-author')

const updateDetails = (url, title, author) => {
    memeImg.setAttribute('src', url)
    memeTitle.innerHTML = title
    memeAuthor.innerHTML = `Meme by : ${author}`
}

mgBtn.addEventListener('click' , () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response => response.json().then(data => {
        updateDetails(data.url, data.title, data.author)
    }))
})