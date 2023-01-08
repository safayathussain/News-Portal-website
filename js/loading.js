const isLoading = (isLoading) => {
    const container = document.getElementById('spinner-sec')
    if (isLoading) {
        container.classList.remove('hidden')
    }
    else{
        container.classList.add('hidden')
    }
}