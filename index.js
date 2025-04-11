const images = document.querySelectorAll('.allImages img'),
    mainImg = document.querySelector('.mainImg'),
    sizes = document.querySelectorAll('.allSizes h3')

images.forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.src
    }) 
})

sizes.forEach(size => {
    size.addEventListener('click', (e) => {
        sizes.forEach(size => size.classList.remove('active'))
        e.target.classList.add('active')
    })
})

