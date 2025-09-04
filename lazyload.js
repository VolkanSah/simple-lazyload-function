<script defer>
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazyload");
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll("img.lazyload").forEach(img => observer.observe(img));
</script>
