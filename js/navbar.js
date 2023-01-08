const newsBtn = document.getElementById('news-btn-nav')
const blogBtn = document.getElementById('blog-btn-nav')
const defaultBtn = () => {
    newsBtn.classList.add('nav-btn-clicked')

}
defaultBtn()
document.getElementById('news-btn-nav').addEventListener('click', function() {
        newsBtn.classList.add('nav-btn-clicked')
        blogBtn.classList.remove('nav-btn-clicked')
})
document.getElementById('blog-btn-nav').addEventListener('click', function() {
        newsBtn.classList.remove('nav-btn-clicked')
        blogBtn.classList.add('nav-btn-clicked')
})