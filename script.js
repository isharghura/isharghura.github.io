document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // func to filter items
    function filterItems(filter) {
        timelineItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // set up button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterItems(filter);
        });
    });

    // Set default filter to all
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
        filterItems('all');
    }
});