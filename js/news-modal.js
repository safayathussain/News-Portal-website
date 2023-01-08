const loadSingleNews = (newsId) => {
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    .then(res => res.json())
    .then(data => showModal(data.data[0]))
    const modalLoad = document.getElementById('modal-picture')
    modalLoad.src = "";
    
}
const showModal = (news) => {
    const modalLoad = document.getElementById('modal-load')
    const heading = document.getElementById('news-modal-heading')
    heading.innerText = news.title;
    const detailText = document.getElementById('news-detail')
    detailText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi modi, cupiditate eum sunt dolore laboriosam accusantium sit excepturi doloribus fuga! Modi, laboriosam excepturi accusantium fugiat, ullam unde voluptatem hic voluptates eum officiis illo a eos tempora, sequi corporis? Dolorem modi suscipit assumenda vero voluptatem voluptas nisi temporibus minus quasi.';
    const picture = document.getElementById('modal-picture')
    picture.src = news.image_url;
    const authorPic = document.getElementById('author-pic-modal')
    authorPic.src = news.author.img;
    const authorName = document.getElementById('author-name-modal')
    authorName.innerText = news.author.name;
    modalLoad.classList.remove('hidden')
    const publishDate = document.getElementById('publish-date-modal')
    publishDate.innerText = `Published Date : ${news.author.published_date}`;
    const rating = document.getElementById('rating-modal')
    rating.innerText = `Rating : ${news.rating.number}`;
}