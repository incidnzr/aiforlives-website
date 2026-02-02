// Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const featuredProjects = document.querySelectorAll('.featured-project');
    const erasmusCards = document.querySelectorAll('.erasmus-card');
    const projectCards = document.querySelectorAll('.project-card');
    const allProjects = [...featuredProjects, ...erasmusCards, ...projectCards];
    
    if (filterButtons.length > 0 && allProjects.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                allProjects.forEach(project => {
                    const categories = project.getAttribute('data-category');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        project.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Scroll to projects section
                if (filterValue !== 'all') {
                    const projectsSection = document.querySelector('.featured-projects');
                    if (projectsSection) {
                        setTimeout(() => {
                            projectsSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 100);
                    }
                }
            });
        });
    }
    
    // Project modal functionality
    const viewDetailButtons = document.querySelectorAll('.view-details');
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    
    // Project data
    const projectDetails = {
        'ecorelief': {
            title: 'EcoRelief Platform',
            subtitle: 'AI-powered Environmental Crisis Response',
            category: ['Environment', 'Erasmus+', 'Featured'],
            image: 'ecorelief',
            description: 'EcoRelief is an advanced platform that leverages artificial intelligence to monitor, predict, and respond to environmental crises. The system combines satellite imagery analysis, social media monitoring, and IoT sensor data to provide real-time insights for disaster response teams.',
            details: {
                timeline: '2023 - Present',
                location: 'Germany, Greece, Italy, Spain',
                partners: '5 Partner Organizations',
                budget: '€450,000 Erasmus+ Funding',
                participants: '150+ trained responders'
            },
            objectives: [
                'Develop early warning systems for environmental disasters',
                'Create AI models for damage assessment from satellite imagery',
                'Build a collaborative platform for crisis response coordination',
                'Train local communities in using AI tools for environmental monitoring'
            ],
            achievements: [
                'Reduced response time by 40% in pilot regions',
                'Trained 150+ emergency responders in AI tools',
                'Developed predictive models with 85% accuracy',
                'Featured in EU Innovation Radar'
            ],
            technologies: ['Machine Learning', 'Satellite Imagery Analysis', 'IoT Sensors', 'Natural Language Processing'],
            link: '#'
        },
        'digitalsurvey': {
            title: 'Digital Survey & Analysis Platform',
            subtitle: 'Intelligent Social Research Tool',
            category: ['Media', 'Erasmus+', 'Featured'],
            image: 'digitalsurvey',
            description: 'This platform revolutionizes social research by using natural language processing to analyze survey responses. It helps NGOs and research organizations identify trends, sentiment, and insights from large volumes of qualitative data.',
            details: {
                timeline: '2022 - 2024',
                location: 'Across Europe (8 countries)',
                partners: 'Youth Organizations Network',
                budget: '€320,000 Erasmus+ Funding',
                participants: '80+ youth researchers trained'
            },
            objectives: [
                'Automate analysis of qualitative survey data',
                'Identify emerging social trends in youth communities',
                'Provide actionable insights for social programs',
                'Build capacity in digital research methods'
            ],
            achievements: [
                'Processed over 50,000 survey responses',
                'Reduced analysis time by 70%',
                'Trained 80+ youth in digital research methods',
                'Used by 15+ organizations across Europe'
            ],
            technologies: ['Natural Language Processing', 'Sentiment Analysis', 'Data Visualization', 'Cloud Computing'],
            link: '#'
        },
        'compath': {
            title: 'Compath Sport Project',
            subtitle: 'Mental Health through Sports & AI',
            category: ['Health', 'Erasmus+ Sport'],
            image: 'compath',
            description: 'Promoting mental health and wellbeing through AI-powered sports applications. The project combines physical activity tracking with mental health monitoring to provide personalized wellbeing programs.',
            details: {
                timeline: '2022 - 2023',
                location: 'Germany, Portugal, Netherlands',
                partners: '3 Sports Organizations',
                budget: '€180,000 Erasmus+ Funding',
                participants: '300+ youth participants'
            },
            objectives: [
                'Develop AI models for personalized sports programs',
                'Create mental health assessment tools integrated with activity tracking',
                'Build a community platform for sports and wellbeing',
                'Promote mental health awareness through sports'
            ],
            achievements: [
                'Developed 3 AI-powered sports applications',
                'Engaged 300+ youth in mental health programs',
                'Published research on sports and mental health',
                'Created training materials for sports coaches'
            ],
            technologies: ['Mobile Development', 'Wearable Integration', 'Mental Health Assessment', 'Community Platform'],
            link: '#'
        },
        'gasca': {
            title: 'GASCA Project',
            subtitle: 'Green AI Skills for Circular Economy',
            category: ['Environment', 'Erasmus+ VET'],
            image: 'gasca',
            description: 'Vocational training program focused on sustainable AI applications in circular economy models. The project equips professionals with skills to implement AI solutions for waste reduction and resource optimization.',
            details: {
                timeline: '2021 - 2023',
                location: 'Germany, Italy, Sweden',
                partners: '4 Vocational Training Centers',
                budget: '€250,000 Erasmus+ Funding',
                participants: '120+ professionals trained'
            },
            objectives: [
                'Develop curriculum for green AI skills',
                'Create training materials for circular economy applications',
                'Establish partnerships with green businesses',
                'Promote sustainable AI practices'
            ],
            achievements: [
                'Trained 120+ professionals',
                'Developed 5 training modules',
                'Established industry partnerships',
                'Created job placement program'
            ],
            technologies: ['Circular Economy Models', 'Resource Optimization', 'Sustainable AI', 'Vocational Training'],
            link: '#'
        }
    };
    
    // View details button click handler
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                // Build modal content
                let modalHTML = `
                    <div class="project-modal-content">
                        <div class="modal-header">
                            <div class="modal-categories">
                `;
                
                // Add categories
                project.category.forEach(cat => {
                    let className = cat.toLowerCase().replace('+', '');
                    if (className === 'featured') className = 'coral';
                    modalHTML += `<span class="category-tag ${className}">${cat}</span>`;
                });
                
                modalHTML += `
                            </div>
                            <h2>${project.title}</h2>
                            <p class="modal-subtitle">${project.subtitle}</p>
                        </div>
                        
                        <div class="modal-image">
                            <div class="image-placeholder">
                                <i class="fas fa-project-diagram"></i>
                                <p>${project.title}</p>
                            </div>
                        </div>
                        
                        <div class="modal-description">
                            <h3>Project Description</h3>
                            <p>${project.description}</p>
                        </div>
                        
                        <div class="modal-details-grid">
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <div>
                                    <h4>Timeline</h4>
                                    <p>${project.details.timeline}</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Location</h4>
                                    <p>${project.details.location}</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-users"></i>
                                <div>
                                    <h4>Partners</h4>
                                    <p>${project.details.partners}</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-euro-sign"></i>
                                <div>
                                    <h4>Budget</h4>
                                    <p>${project.details.budget}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-sections">
                            <div class="modal-section">
                                <h3>Objectives</h3>
                                <ul>
                `;
                
                // Add objectives
                project.objectives.forEach(obj => {
                    modalHTML += `<li>${obj}</li>`;
                });
                
                modalHTML += `
                                </ul>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Achievements</h3>
                                <ul>
                `;
                
                // Add achievements
                project.achievements.forEach(ach => {
                    modalHTML += `<li>${ach}</li>`;
                });
                
                modalHTML += `
                                </ul>
                            </div>
                        </div>
                        
                        <div class="modal-technologies">
                            <h3>Technologies & Methods</h3>
                            <div class="tech-tags">
                `;
                
                // Add technologies
                project.technologies.forEach(tech => {
                    modalHTML += `<span class="tech-tag">${tech}</span>`;
                });
                
                modalHTML += `
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <a href="${project.link}" class="btn btn-primary">Full Project Documentation</a>
                            <a href="contact.html" class="btn btn-secondary">Get Involved</a>
                        </div>
                    </div>
                `;
                
                // Set modal content and show
                modalBody.innerHTML = modalHTML;
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animate project cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    allProjects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        project.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(project);
    });
    
    // Animate stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = entry.target;
                    const targetValue = parseInt(stat.textContent.replace('+', ''));
                    let current = 0;
                    const increment = targetValue / 30; // 30 steps
                    const duration = 1000; // 1 second
                    const stepTime = duration / 30;
                    
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= targetValue) {
                            stat.textContent = targetValue + (stat.textContent.includes('+') ? '+' : '');
                            clearInterval(counter);
                        } else {
                            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                        }
                    }, stepTime);
                    
                    statObserver.unobserve(stat);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => {
            statObserver.observe(stat);
        });
    }
});