
const viewSort = () => {
    const defaultBtn = document.getElementById('default-sort-text')
    defaultBtn.innerText = 'Most Viewed'
    const categoryId = document.getElementsByClassName('elements-id')
    const id = categoryId[0].innerText;
    loadNews2(id)
}
const loadNews2 = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    .then(res => res.json())
    .then(data => newsOfCategory(data.data))
    
}
const newsOfCategory = (news) => {
    news.sort((a, b) => {
        return b.total_view - a.total_view;
    })
    div(news)
}
