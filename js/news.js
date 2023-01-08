const defaultNews = () => {
  fetch(`https://openapi.programming-hero.com/api/news/category/08`)
    .then(res => res.json())
    .then(data => div(data.data));
    const sortDiv = document.getElementById('sort-btn-div')
    sortDiv.classList.add('hidden')
    const status = document.getElementById('item-found-status')
    status.classList.add('hidden')
  }

defaultNews()
const loadNews = (categoryId) => {
  isLoading(true)
  const container = document.getElementById('news-container')
      container.innerHTML = ``;
  const sortBtn = document.getElementById('default-sort-text')
  sortBtn.innerHTML = '';
  const sortDiv = document.getElementById('sort-btn-div')
  if (categoryId === '08') {
    sortDiv.classList.add('hidden')
    const status = document.getElementById('item-found-status')
    status.classList.add('hidden')
  }
  else{
    sortDiv.classList.remove('hidden')
    const status = document.getElementById('item-found-status')
    status.classList.remove('hidden')
  }
  fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
  .then(res => res.json())
  .then(data => div(data.data))
  const btns = document.getElementsByClassName('category-button')
  const number = parseInt(categoryId)
  for (const btn of btns) {
    btn.classList.remove('category-btn-clicked')
  }
  btns[number - 1].classList.add('category-btn-clicked')
}
const div = (news) => {
      const container = document.getElementById('news-container')
      container.innerHTML = ``;
      const newsNumberStatus = document.getElementById('item-found-status')
      newsNumberStatus.innerText = `${news.length} items found in this category`
      
      const section = document.getElementById('no-news-sec')
      if (news.length === 0) {
        section.classList.remove('hidden')
      }
      else{
        section.classList.add('hidden')

      }
    news.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('lg:w-4/5')
        div.classList.add('w-11/12')
        div.classList.add('sm:max-w-full')
        div.classList.add('sm:flex')
        div.classList.add('mx-auto')
        div.classList.add('drop-shadow-md')
        if (element.author.name === '' || element.author.name === null) {
          element.author.name = 'No name'
        }
        if (element.total_view === null) {
          element.total_view = '...'
        }
        div.innerHTML = `
        <div class="h-72 sm:h-auto w-auto sm:w-60  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${element.thumbnail_url}')" title="Mountain">
        </div>
        <div class="bg-white rounded-r-lg p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            
            <div class="text-gray-900 font-bold text-xl mb-2 poppins-500">${element.title}</div>
            <p class="poppins-300 text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste mollitia iure vitae minima architecto eum omnis blanditiis incidunt itaque? Aperiam enim beatae cumque eaque commodi debitis molestias atque? Eaque, expedita?</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="${element.author.img}" alt="Avatar of Writer">
            <div class="flex justify-between w-full">
            <div class="text-sm">
            <p class="gray-font leading-none font-semibold">${element.author.name}</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
          <div class="flex items-center gap-0.5 text-black">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <p class="text-sm font-medium">${element.total_view}</p>
</div>
              <div class="flex items-center gap-1 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
                  <p>${element.rating.number}</p>            
              </div>
              <p class="elements-id hidden">${element.category_id}</p>
              <label onclick="loadSingleNews('${element._id}')"  for="my-modal-3" type="button" class=" arrow-button hover:text-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
  <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</label>
            </div>

          </div>
        </div>
        `
        container.appendChild(div)
      });
      isLoading(false)
}
