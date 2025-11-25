document.addEventListener('DOMContentLoaded', () => {
    console.log('EduKanban Unified Loaded');

    // Simple intersection observer for reveal animations
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate cards
    const cards = document.querySelectorAll('.polaroid-card, .sticky-note');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Animate text blocks
    const texts = document.querySelectorAll('.text-block, .hero-content');
    texts.forEach(text => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        text.style.transition = 'all 0.8s ease';
        observer.observe(text);
    });
});
