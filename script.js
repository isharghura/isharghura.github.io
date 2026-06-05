document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.id === tabId + '-tab') {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Load and render experiences from JSON
    async function loadExperiences() {
        try {
            const response = await fetch('experience.json');
            const experiences = await response.json();
            
            const timelineContainer = document.getElementById('timeline-container');
            
            experiences.forEach(exp => {
                const timelineWrapper = document.createElement('div');
                timelineWrapper.className = 'timeline';
                
                const isClickable = exp.url !== null;
                const tag = isClickable ? 'a' : 'div';
                
                const linkElement = document.createElement(tag);
                if (isClickable) {
                    linkElement.href = exp.url;
                    linkElement.target = '_blank';
                    linkElement.style.textDecoration = 'none';
                    linkElement.style.color = 'inherit';
                }
                
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${exp.type}`;
                
                const timelineContent = document.createElement('div');
                timelineContent.className = 'timeline-content';
                
                const logo = document.createElement('img');
                logo.src = exp.logo;
                logo.alt = exp.company;
                logo.className = 'company-logo';
                
                const timelineText = document.createElement('div');
                timelineText.className = 'timeline-text';
                
                const dateDiv = document.createElement('div');
                dateDiv.className = 'timeline-date';
                dateDiv.textContent = exp.dateRange;
                
                const positionDiv = document.createElement('div');
                positionDiv.className = 'timeline-position';
                positionDiv.textContent = exp.position;
                
                const titleDiv = document.createElement('div');
                titleDiv.className = 'timeline-title';
                titleDiv.textContent = exp.company;
                
                const descriptionP = document.createElement('p');
                descriptionP.textContent = exp.description;
                
                timelineText.appendChild(dateDiv);
                timelineText.appendChild(positionDiv);
                timelineText.appendChild(titleDiv);
                timelineText.appendChild(descriptionP);
                
                timelineContent.appendChild(logo);
                timelineContent.appendChild(timelineText);
                
                const experienceType = document.createElement('span');
                experienceType.className = 'experience-type';
                experienceType.textContent = exp.type.charAt(0).toUpperCase() + exp.type.slice(1);
                
                timelineContent.appendChild(experienceType);
                
                timelineItem.appendChild(timelineContent);
                linkElement.appendChild(timelineItem);
                timelineWrapper.appendChild(linkElement);
                timelineContainer.appendChild(timelineWrapper);
            });
            
            // Set up filter buttons after experiences are loaded
            setupExperienceFilters();
        } catch (error) {
            console.error('Error loading experiences:', error);
        }
    }

    function setupExperienceFilters() {
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
    }

    // Load experiences on page load
    loadExperiences();

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});