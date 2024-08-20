const observer = new IntersectionObserver((entries) => {
    entries.forEach((entries) => {
        if (entries.isIntersecting) {
            entries.target.classList.add("show")
        } else {
            entries.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".carousel-caption")
hiddenElements.forEach((el) =>
    observer.observe(el)
)




