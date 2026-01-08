const projects = [
  {
    name: 'Pipeline X',
    slug: 'pipeline-x',
    description:
      'Secure CI/CD engine for automated pipeline execution with standardized reports and artifacts.',
    technologies: [
      'Bash',
      'Docker',
      'FastAPI',
      'Angular',
      'Semgrep',
      'Trivy',
      'Gitleaks',
      'OWASP ZAP',
      'tfsec',
      'Docker Compose'
    ],
    github: 'https://github.com/SecureDevOps-pfa',
    demo: '#',
    screenshots: [],
    details: [
      'Designed a secure CI/CD engine allowing users to submit projects (ZIP, GitHub, DockerHub) and automatically execute pipelines with standardized reports and artifacts',
      'Designed the pipeline execution model with ephemeral workspaces, isolation, permissions, and artifact management',
      'Defined and documented the execution contract (structure, artifacts, stage order) used by the backend orchestration layer',
    ],
    timeframe: '11/2025 - Present',
  },
  {
    name: 'OurBusWay',
    slug: 'ourbusway',
    description:
      'Microservices-based urban transport management platform with end-to-end bus management and monitoring.',
    technologies: [
      'Spring Boot',
      'PostgreSQL',
      'RabbitMQ',
      'React.js',
      'Docker',
      'Docker Compose',
      'AWS'
    ],
    github: 'https://github.com/OurBusWay',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/ourbusway/pagedaccueil1.png',
      'src/assets/screenshots/ourbusway/signuppage1.png',
      'src/assets/screenshots/ourbusway/signinpage.png',
      'src/assets/screenshots/ourbusway/routes.png',
      'src/assets/screenshots/ourbusway/ticketpage.png',
      'src/assets/screenshots/ourbusway/subscriptionpay.png',
      'src/assets/screenshots/ourbusway/subscriptionpayment.png',
      'src/assets/screenshots/ourbusway/drivervalidateticket.png',
      'src/assets/screenshots/ourbusway/controllerticketvalidation.png',
      'src/assets/screenshots/ourbusway/adminusers.png',
    ],
    details: [
      'Implemented backend microservices (Spring Boot/Cloud) with multiple PostgreSQL databases and asynchronous communication via RabbitMQ',
      'Automated local multi-repo setup using Bash scripts and Docker Compose',
      'Deployed all services to a single VM using Docker Compose for orchestration and container management',
    ],
    timeframe: '10/2025 - 12/2025',
  },
  {
    name: 'AWS Migration to 3-Tier Architecture & DevSecOps Automation',
    slug: 'aws-migration-devsecops',
    description:
      'Migration of a PHP monolith to a secure AWS 3-tier architecture with an automated DevSecOps pipeline.',
    technologies: ['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'SAST', 'DAST'],
    github: 'https://github.com/hibaw4/AWS-Capstone-DevSecOps-Research-Project',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/aws-migration-devsecops/initialarchitecture.jpg',
      'src/assets/screenshots/aws-migration-devsecops/proposedarchitecture.jpg',
      'src/assets/screenshots/aws-migration-devsecops/pipeline.jpg'
    ],
    details: [
      'Audited the PHP monolith for security, technical debt, and availability, then migrated to an AWS 3-tier architecture',
      'Deployed infrastructure with Terraform: VPC, subnets, ASG, bastion, NAT, Secrets Manager, CloudWatch',
      'Implemented secure CI/CD pipelines integrating SAST, Trivy, and DAST with OWASP ZAP',
    ],
    timeframe: '10/2025 - 12/2025',
  },
  {
    name: 'TravelAdvisor360',
    slug: 'traveladvisor360',
    description:
      'Mobile travel planning app that simplifies trip planning, searches, and personalized recommendations.',
    technologies: ['Android (Java)', 'SQLite', 'OpenAI API', 'Geoapify', 'Amadeus'],
    github: 'https://github.com/hibaw4/TravelAdvisor360',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/traveladvisor360/pagedaccueil.jpg',
      'src/assets/screenshots/traveladvisor360/signupsigninpage.jpg',
      'src/assets/screenshots/traveladvisor360/homepage1.jpg',
      'src/assets/screenshots/traveladvisor360/etapesplanificationvoyage.jpg',
      'src/assets/screenshots/traveladvisor360/itineraire.jpg',
      'src/assets/screenshots/traveladvisor360/airecommendation.jpg',
      'src/assets/screenshots/traveladvisor360/chatbot.jpg',
      'src/assets/screenshots/traveladvisor360/experience.jpg',
      'src/assets/screenshots/traveladvisor360/profile.jpg',
    ],
    details: [
      'Designed an intuitive mobile app using Java and Android Studio',
      'Integrated external APIs (OpenAI, Geoapify, Amadeus) for intelligent planning features',
      'Implemented local SQLite database for offline favorites, history, and trip plans',
    ],
    timeframe: '03/2025 - 05/2025',
  },
  {
    name: 'Space Gateway',
    slug: 'space-gateway',
    description:
      'Interactive web app showcasing space exploration data with real-time information and CI/CD.',
    technologies: [
      'Spring Boot',
      'React.js',
      'Docker',
      'microk8s',
      'Jenkins',
      'Prometheus',
      'Grafana',
    ],
    github: 'https://github.com/hibaw4/space-gateway',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/space-gateway/spacegateway1.jpg',
      'src/assets/screenshots/space-gateway/spacegateway2.jpg',
      'src/assets/screenshots/space-gateway/spacegateway3.jpg',
      'src/assets/screenshots/space-gateway/spacegateway4.jpg',
      'src/assets/screenshots/space-gateway/spacegateway5.jpg',
      'src/assets/screenshots/space-gateway/spacegateway6.jpg',
      'src/assets/screenshots/space-gateway/spacegateway7.jpg',
      'src/assets/screenshots/space-gateway/spacegateway8.jpg',
    ],
    details: [
      'Built a web application that displays real-time space data using external APIs',
      'Established a Jenkins CI/CD pipeline with unit tests and automated health checks',
      'Added basic monitoring using Prometheus and Grafana',
    ],
    timeframe: '03/2025 - 05/2025',
  },
  
  {
    name: 'Cosmetic Product Skin Compatibility Prediction',
    slug: 'cosmetic-property-prediction',
    description:
      'Web interface that provides the appropriate skin type based on cosmetic product ingredients using machine learning.',
    technologies: ['Python', 'Jupyter Notebook', 'scikit-learn', 'Sephora Dataset', 'Pandas', 'Seaborn', 'Matplotlib', 'XGBoost'],
    github: 'https://github.com/hibaw4/cosmetic-ingredient-property-predictor',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/cosmetic-property-compatibility/comparaisonmodeles.png',
      'src/assets/screenshots/cosmetic-property-compatibility/interfacedelutilisateur.png'
    ],
    details: [
      'Developed a machine learning model for predicting appropriate skin type from cosmetic product ingredients',
      'Implemented algorithms using scikit-learn and XGBoost for accurate compatibility prediction',
      'Created a web interface with data visualization using Pandas, Seaborn, and Matplotlib',
    ],
    timeframe: '03/2025 - 05/2025',
  },
  {
    name: 'Facial Emotion Recognition',
    slug: 'facial-emotion-recognition',
    description:
      'User interface to detect facial emotions in real-time from the camera using deep learning, transfer learning and CNNs.',
    technologies: ['Deep Learning', 'Transfer Learning', 'CNN', 'Python', 'TensorFlow', 'Keras', 'OpenCV'],
    github: 'https://github.com/hibaw4/facial-emotions-recognition',
    demo: '#',
    screenshots: [],
    details: [
      'Built an interface for detecting facial emotions from camera',
      'Implemented convolutional neural networks (CNNs) with transfer learning using the FER2013 dataset',
      'Integrated computer vision techniques for real-time facial image processing',
    ],
    timeframe: '03/2025 - 05/2025',
  },

  {
    name: 'Internship Management System',
    slug: 'internship-management-system',
    description:
      'Decentralized system using Oracle APEX and Oracle Database for real-time internship offer management and applications with interactive dashboard.',
    technologies: ['Oracle APEX', 'Oracle Database', 'Merise Methodology', 'REST API'],
    github: 'https://github.com',
    demo: '#',
    screenshots: [
      'src/assets/screenshots/internship-management-system/pageinscription.png',
      'src/assets/screenshots/internship-management-system/pageinscription2.png',
      'src/assets/screenshots/internship-management-system/pageconnexion.png',
      'src/assets/screenshots/internship-management-system/pageetudiant.png',
      'src/assets/screenshots/internship-management-system/pagecv.png',
      'src/assets/screenshots/internship-management-system/pageentreprise.png',
      'src/assets/screenshots/internship-management-system/pagegestecole.png',
      'src/assets/screenshots/internship-management-system/pagegeststage.png',
      'src/assets/screenshots/internship-management-system/pagerespoentretien.png',
      'src/assets/screenshots/internship-management-system/pagetuteur.png',
    ],
    details: [
      'Designed and developed a decentralized system following the Merise methodology',
      'Integrated real-time internship offer management and application tracking',
      'Built an interactive dashboard for statistical monitoring and reporting',
    ],
    timeframe: '10/2025 - 11/2025',
  },
]

export default projects
