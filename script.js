// Copy email to clipboard instead of opening a mail app
document.querySelectorAll('.email').forEach(button => {
    const hint = button.querySelector('.email-hint');
    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.email);
            hint.textContent = 'Copied!';
        } catch {
            // Clipboard blocked: select the text so it can be copied manually
            window.getSelection().selectAllChildren(button.querySelector('.email-text'));
            hint.textContent = 'Press ⌘C';
        }
        button.classList.add('copied');
        setTimeout(() => {
            hint.textContent = 'Copy';
            button.classList.remove('copied');
        }, 1800);
    });
});

// Fade cards in as they scroll into view
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.card, .also, .guitar').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}
