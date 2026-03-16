// Projects Page JavaScript with Image Support

document.addEventListener("DOMContentLoaded", function () {
  // Project data
  const projectData = {
    // Erasmus+ Projects
    compath: {
      title: "Compath Sport",
      subtitle: "AI-Powered Sports Innovation & Youth Development",
      category: ["Erasmus+", "Sport", "AI"],
      image: "compath",
      description:
        "Advancing education, professional growth, and personal development of young athletes-students (aged 16-25) through AI and sports innovation.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "sportsinnovationshub.com",
        Budget: "400.000 €",
        Status: "Complete",
        Type: "KA220",
        Duration: "36 Months",
      },
      objectives: [
        "Create reusable, transferable, and scalable educational resources, tools, and a dedicated platform",
        "Form a community of young athletes-students within the sports innovation domain at the European level",
        "Develop educational resources exposing young student-athletes to sports-oriented technology",
        'Launch the "Digital Competence Hub on Sport Innovation" to enhance employability',
      ],
      achievements: [
        "Benefited young athletes-students and their educators through effective education and guidance",
        "Enhanced collaboration, quality, creativity, and innovation within sports organizations",
        "Aligned seamlessly with the specific objectives of the Erasmus+ program",
      ],
      technologies: [
        "AI in Sport",
        "21st Century Skills",
        "Digital Competence",
        "Entrepreneurship",
      ],
      link: "#",
    },

    sf4sport: {
      title: "SF4SPORT",
      subtitle: "AI Skills for Sports Professionals",
      category: ["Erasmus+", "Sport", "AI", "Education"],
      image: "sf4sport",
      description:
        "Supporting the integration of AI-related competencies into sports education and training for the digital transformation of the sports sector.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "Coming soon",
        Budget: "1,500.000 €",
        Status: "Ongoing",
        Type: "KA220",
        Duration: "36 Months",
      },
      objectives: [
        "Support the integration of AI-related competencies into sports education and training",
        "Bring together universities, vocational education providers, sports organisations, and technology partners",
        "Develop innovative learning opportunities combining academic knowledge with practical, industry-relevant skills",
        "Identify future skills needs and translate them into modern training programmes",
      ],
      achievements: [
        "Bridging the gap between emerging technologies and sports education",
        "Equipping sports professionals with AI knowledge and tools",
        "Addressing the growing need for AI skills in the sports sector",
      ],
      technologies: [
        "Artificial Intelligence",
        "Sports Analytics",
        "Digital Transformation",
        "Vocational Training",
      ],
      link: "#",
    },

    gasca: {
      title: "GASCA",
      subtitle: "GDPR Awareness & Compliance in Accommodation Sector",
      category: ["Erasmus+", "VET", "Data Protection", "Completed"],
      image: "gasca",
      description:
        "GDPR Awareness & Compliance in Accommodation Sector: Training program for data protection in hospitality for SMEs in Germany and Turkey.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "gdpr4hospitality.net",
        Budget: "60.000 €",
        Venue: "Germany & Turkey",
        Status: "Completed",
        Type: "KA210",
        Duration: "18 Months",
      },
      objectives: [
        "Evaluate compliance levels, data practices, and challenges faced by SMEs in German and Turkish accommodation sectors",
        "Develop tailored training courses for data users in hospitality",
        "Provide valuable insights for SMEs, researchers, and policymakers",
        "Raise awareness about GDPR compliance in the hospitality industry",
      ],
      achievements: [
        "Conducted comprehensive data protection impact assessments",
        "Created openly shared online video courses through social media channels",
        "Published research report consolidating insights",
        "Elevated awareness and compliance levels among SMEs",
      ],
      technologies: [
        "GDPR",
        "Data Protection",
        "Privacy Compliance",
        "Vocational Training",
      ],
      link: "#",
    },

    detam: {
      title: "DETAM",
      subtitle: "Digital Entrepreneurship Training with AI Mentorship",
      category: ["Erasmus+", "VET", "Entrepreneurship"],
      image: "detam",
      description:
        "Digital Entrepreneurship Training with AI Mentorship: Supporting young entrepreneurs in developing digital businesses with AI integration.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "Coming soon",
        Budget: "280.000 €",
        Venue: "Multiple European countries",
        Status: "2022 - 2024",
        Type: "KA220 - VET",
        Duration: "24 Months",
      },
      objectives: [
        "AI-Powered Business Development using AI tools for market analysis and business planning",
        "Digital Transformation integrating AI solutions into traditional business models",
        "Connect young entrepreneurs with AI experts and successful business leaders",
        "Hands-on training in developing and deploying AI solutions",
      ],
      achievements: [
        "Development of 50+ AI-integrated business plans",
        "Launch of 20+ sustainable startups",
        "Training of 100+ young entrepreneurs",
        "Creation of AI entrepreneurship toolkit",
      ],
      technologies: [
        "AI Business Development",
        "Digital Transformation",
        "Mentorship",
        "Entrepreneurship",
      ],
      link: "#",
    },

    youthgen: {
      title: "YOUTHGEN",
      subtitle: "Genetic Rights Protection in the Digital Age",
      category: ["Erasmus+", "Youth", "Health", "Ethics"],
      image: "youthgen",
      description:
        "Empowering young people to protect their genetic rights in the age of gene editing, genetic forensics, and digital health.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "Coming soon",
        Budget: "400.000 €",
        Venue: "TBA",
        Status: "Ongoing",
        Type: "KA220",
        Duration: "24 Months",
      },
      objectives: [
        "Provide young individuals with a comprehensive understanding of their genetic rights",
        "Address implications of technologies such as gene editing, genetic forensics, and bio-banking",
        "Empower citizens by ensuring secure health data and providing digital tools",
        "Foster a generation well-versed in the protection of their genetic rights",
      ],
      achievements: [
        'Introduced concept of "Genetic Rights" to young audiences',
        "Educating youth about privacy, possession, and property aspects of genetic information",
        "Navigating the complexities of genetics, digital rights, and law in the digital era",
      ],
      technologies: [
        "Genetic Rights",
        "Data Privacy",
        "Bioethics",
        "Digital Health",
      ],
      link: "#",
    },

    greentennis: {
      title: "GreenTennis",
      subtitle: "Tennis for a Greener Future",
      category: ["Erasmus+", "Sport", "Environment"],
      image: "greentennis",
      description:
        "Environmental sustainability in the sports sector through sustainable practices in tennis, involving partners from six countries.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "Coming soon",
        Budget: "400.000 €",
        Venue: "6 Countries",
        Status: "Ongoing",
        Type: "KA220",
        Duration: "24 Months",
      },
      objectives: [
        "Reduce the tennis industry's carbon footprint through sustainable practices",
        "Provide support and training to National Tennis Centers on sustainable transportation and waste management",
        "Raise awareness among young players, coaches, and the tennis community about climate change impacts",
        "Develop guidelines, educational materials, and a carbon footprint tracking app",
      ],
      achievements: [
        "Created international cooperation project dedicated to advancing environmental sustainability",
        "Fostering a sustainable tennis ecosystem",
        "Leading the way in increasing environmental awareness in tennis community",
      ],
      technologies: [
        "Carbon Footprint Tracking",
        "Sustainability",
        "Environmental Education",
        "Sports Management",
      ],
      link: "#",
    },

    scorewomen: {
      title: "Score Women",
      subtitle: "Empowering Female Football Referees",
      category: ["Erasmus+", "Sport", "Gender Equality"],
      image: "scorewomen",
      description:
        "Enhancing stress management and decision-making skills for female referees in amateur football leagues through advanced technologies.",
      details: {
        "Project Reference": "Erasmus-Link",
        Website: "Coming soon",
        Budget: "60.000 €",
        Venue: "Spain, Portugal, Germany",
        Status: "Ongoing",
        Type: "KA220",
        Duration: "18 Months",
      },
      objectives: [
        "Combat sexist stereotypes in sports officiating",
        "Improve the practice of football among women and girls",
        "Promote social inclusion and equal opportunities",
        "Develop emotional, social, technical, and tactical skills for female referees",
        "Support training for female managers and leaders",
      ],
      achievements: [
        "Coordinated by AIforlives with partners from Spain, Portugal, and Germany",
        "Developing training programs simulating real match conditions",
        "Empowering female referees to perform more safely and effectively on the field",
      ],
      technologies: [
        "Stress Management",
        "Decision-Making",
        "Match Simulation",
        "Leadership Development",
      ],
      link: "#",
    },

    mimaria: {
      title: "Mimaria Architecture",
      subtitle: "Multi-Page Website for Architecture Firm",
      category: ["Web Development", "React", "Design"],
      image: "mimaria",
      description:
        "Multi-page website for architectural and interior design firm with multilingual interface, built with React JS.",
      details: {
        Date: "September 2024",
        Website: "mimaria-mimarlik.com",
        Services: "UX/UI Design, Frontend Development (React JS), Hosting",
        Status: "Completed",
      },
      objectives: [
        "Create fast, interactive, and responsive website using React JS",
        "Showcase impressive portfolio and services with clean navigation",
        "Provide multilingual interface for wider audience accessibility",
        "Implement SEO strategies for improved visibility",
      ],
      achievements: [
        "Fully optimized for mobile and desktop devices",
        "Clean, intuitive navigation structure",
        "Reflects firm's commitment to quality and innovation",
      ],
      technologies: ["React JS", "UX/UI Design", "Multilingual", "SEO"],
      link: "#",
    },

    starhome: {
      title: "Star Home London",
      subtitle: "Luxury Renovations Company Website",
      category: ["Web Development", "Commercial"],
      image: "starhome",
      description:
        "Multi-page website for high-end residential and commercial renovations company with dynamic project gallery.",
      details: {
        Date: "August 2024",
        Website: "starhomelondon.com",
        Services:
          "Web Design, UX/UI Design, Frontend Development, Commercial Website",
        Status: "Completed",
      },
      objectives: [
        "Create responsive design optimized for all devices",
        "Build dynamic project gallery showcasing luxury renovations",
        "Include detailed service pages for residential, commercial, and maintenance",
        "Implement SEO optimization for improved search visibility",
      ],
      achievements: [
        "Fast, intuitive navigation providing seamless user experience",
        "Effectively represents company's premium services and craftsmanship",
        "SEO-optimized for better search engine rankings",
      ],
      technologies: ["Web Design", "UX/UI", "SEO", "Responsive Design"],
      link: "#",
    },

    catsitter: {
      title: "Cat Sitter Berlin",
      subtitle: "Pet-Sitting Service Website",
      category: ["Web Development", "React", "Single-Page"],
      image: "catsitter",
      description:
        "Single-page website for dedicated pet-sitting service in Berlin, built with React, Mantine UI, and TypeScript.",
      details: {
        Date: "October 2024",
        Website: "catsitterberlin.com",
        Services: "UX/UI Design, Frontend Development (React JS), Hosting",
        Status: "Completed",
      },
      objectives: [
        "Create seamless user experience through intuitive layout",
        "Build easy-to-navigate booking options and cat care information",
        "Ensure responsive design for desktop and mobile views",
        "Host on Ubuntu server with Vite for fast loading",
      ],
      achievements: [
        "Built with Mantine UI and TypeScript",
        "Fast loading times with Vite",
        "Combines functional design with aesthetic appeal",
        "Emphasizes reliability and convenience for Berlin pet owners",
      ],
      technologies: [
        "React JS",
        "Mantine UI",
        "TypeScript",
        "Vite",
        "Ubuntu Server",
      ],
      link: "#",
    },

    ecorelief: {
      title: "EcoRelief Platform",
      subtitle: "AI-powered Environmental Crisis Response",
      category: ["Environment", "AI", "Featured"],
      image: "ecorelief",
      description:
        "AI-powered disaster response and environmental monitoring system that helps communities prepare for and respond to environmental crises.",
      details: {
        Timeline: "2023 - Present",
        Location: "Germany, Greece, Italy, Spain",
        Partners: "5 Partner Organizations",
        Budget: "€450,000",
        Participants: "150+ trained responders",
      },
      objectives: [
        "Develop early warning systems for environmental disasters",
        "Create AI models for damage assessment from satellite imagery",
        "Build a collaborative platform for crisis response coordination",
        "Train local communities in using AI tools for environmental monitoring",
      ],
      achievements: [
        "Reduced response time by 40% in pilot regions",
        "Trained 150+ emergency responders in AI tools",
        "Developed predictive models with 85% accuracy",
        "Featured in EU Innovation Radar",
      ],
      technologies: [
        "Machine Learning",
        "Satellite Imagery Analysis",
        "IoT Sensors",
        "Natural Language Processing",
      ],
      link: "#",
    },

    digitalsurvey: {
      title: "Digital Survey Platform",
      subtitle: "Intelligent Social Research Tool",
      category: ["Media", "AI", "Featured"],
      image: "digitalsurvey",
      description:
        "Intelligent survey and analysis tool for social research using natural language processing to analyze responses and identify trends.",
      details: {
        Timeline: "2022 - 2024",
        Location: "Across Europe (8 countries)",
        Partners: "Youth Organizations Network",
        Budget: "€320,000",
        Participants: "80+ youth researchers trained",
      },
      objectives: [
        "Automate analysis of qualitative survey data",
        "Identify emerging social trends in youth communities",
        "Provide actionable insights for social programs",
        "Build capacity in digital research methods",
      ],
      achievements: [
        "Processed over 50,000 survey responses",
        "Reduced analysis time by 70%",
        "Trained 80+ youth in digital research methods",
        "Used by 15+ organizations across Europe",
      ],
      technologies: [
        "Natural Language Processing",
        "Sentiment Analysis",
        "Data Visualization",
        "Cloud Computing",
      ],
      link: "#",
    },
  };

  // Project modal functionality
  const viewDetailButtons = document.querySelectorAll(".btn-view-details");
  const projectModal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const modalBody = document.getElementById("modalBody");

  // View details button click handler
  viewDetailButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const projectCard = this.closest(".project-card");
      const projectId = projectCard.getAttribute("data-project");
      const project = projectData[projectId];

      if (project) {
        // Build modal HTML with image
        let modalHTML = `
                    <div class="modal-project-header">
                        <div class="modal-project-image">
                            <img src="images/${project.image}.png" alt="${project.title}" 
                                 onerror="this.style.display='none'; this.parentElement.classList.add('no-image');">
                        </div>
                        <div class="modal-project-title">
                            <span class="modal-project-tag">${project.category[0]}</span>
                            <h2>${project.title}</h2>
                            <p>${project.subtitle}</p>
                        </div>
                    </div>

                    <div class="modal-project-details">
                `;

        // Add details
        Object.entries(project.details).forEach(([key, value]) => {
          const isWebsite =
            key.toLowerCase().includes("website") && value !== "Coming soon";
          modalHTML += `
                        <div class="detail-item">
                            <span class="detail-label">${key}</span>
                            <span class="detail-value ${
                              isWebsite ? "website" : ""
                            }">${
            isWebsite
              ? `<a href="https://${value}" target="_blank">${value}</a>`
              : value
          }</span>
                        </div>
                    `;
        });

        modalHTML += `
                    </div>

                    <div class="modal-project-description">
                        <h3>About the Project</h3>
                        <p>${project.description}</p>
                        
                        <h4>Key Objectives</h4>
                        <ul>
                `;

        // Add objectives
        project.objectives.forEach((obj) => {
          modalHTML += `<li>${obj}</li>`;
        });

        modalHTML += `
                        </ul>
                        
                        <h4>Achievements</h4>
                        <ul>
                `;

        // Add achievements
        project.achievements.forEach((ach) => {
          modalHTML += `<li>${ach}</li>`;
        });

        modalHTML += `
                        </ul>
                        
                        <h4>Technologies & Methods</h4>
                        <div class="tech-tags">
                `;

        // Add technologies
        project.technologies.forEach((tech) => {
          modalHTML += `<span class="tech-tag">${tech}</span>`;
        });

        modalHTML += `
                        </div>
                    </div>
                `;

        // Set modal content and show
        modalBody.innerHTML = modalHTML;
        projectModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      projectModal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside
  projectModal.addEventListener("click", function (e) {
    if (
      e.target === projectModal ||
      e.target.classList.contains("modal-overlay")
    ) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Animate project cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});
