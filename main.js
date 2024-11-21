document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },
        {
            threshold: [0.75], // Trigger when 75% of the element is visible
        }
    );

    items.forEach((item) => observer.observe(item));
});
