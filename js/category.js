const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}


const displayCategory = (categorioes) => {
    const container = document.getElementById('category-container')
    categorioes.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
            <button onclick="loadNews('${category.category_id}')" class="btn gray-font btn-ghost cetagory-btn hover:text-primary btn-sm category-button">${category.category_name}</button>
        `
        container.appendChild(div)
    });
}
loadCategory()