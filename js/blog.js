const main = document.getElementById('main')
const section = document.getElementById('blog-sec')
const blogClicked = () => {
    isLoading(true)
    main.classList.add('hidden')
    section.classList.remove('hidden')
    isLoading(false)
}
const newsClicked = () => {
    isLoading(true)
    section.classList.add('hidden')
    main.classList.remove('hidden')
    isLoading(false)
}
