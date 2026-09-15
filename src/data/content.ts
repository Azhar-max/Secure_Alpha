import {
  ServiceItem,
  CaseStudy,
  Course,
  LearningPath,
  StudentCapstone,
  Mentor,
  VerifiedCertificate
} from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Microservices, distributed event-driven backends, and fault-tolerant REST/gRPC communications designed for high scale.',
    iconName: 'developer_board',
    tags: ['Go', 'Node', 'gRPC', 'Kafka'],
    sla: 'SLA: Sub-35ms P99 Latency',
    architectureDetails: 'Zero-downtime rolling canary deployments, Raft-consensus distributed state stores, and strict type-safe protobuf specifications for cross-system telemetry.'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'React 18+, Next.js, and TanStack state engines engineered for high-concurrency enterprise web portals and mission control rooms.',
    iconName: 'web',
    tags: ['Next.js', 'React 18', 'Tailwind'],
    sla: 'SLA: 100/100 Core Web Vitals',
    architectureDetails: 'Edge-rendered server components with optimistic UI mutations, sub-second hydration, and automated lighthouse regression test suites on every pull request.'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Cross-platform Flutter & native Android applications built with offline-first synchronization and biometric security vaults.',
    iconName: 'devices',
    tags: ['Flutter', 'Kotlin', 'SQLite'],
    sla: 'SLA: 99.9% Crash-Free Users',
    architectureDetails: 'Hardware-backed Android Keystore and iOS Secure Enclave authentication with delta-based binary data reconciliation over intermittent connections.'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design systems, tokenized components, and WCAG 2.1 AA accessible workflows built to reduce cognitive load under critical conditions.',
    iconName: 'design_services',
    tags: ['Figma Tokens', 'WCAG 2.1', 'Design Ops'],
    sla: 'SLA: AAA Contrast Standards',
    architectureDetails: 'Systematic mathematical typography and spacing scales with tokenized style dictionaries that synchronize design assets directly with production codebases.'
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'Automated Playwright, Cypress, and Jest pipelines integrated seamlessly into CI/CD for continuous regression and load stress analysis.',
    iconName: 'fact_check',
    tags: ['Playwright', 'k6', 'Jest'],
    sla: 'SLA: 95%+ Code Coverage',
    architectureDetails: 'Synthetic load simulation running up to 50,000 concurrent virtual clients, API contract diffing, and visual snapshot differential testing.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Threat modeling, OWASP Top 10 mitigation, red team penetration testing, and hardened DevSecOps infrastructure compliance.',
    iconName: 'security',
    tags: ['OWASP', 'ZAP', 'Trivy'],
    sla: 'SLA: Zero Critical CVEs',
    architectureDetails: 'Continuous automated software bill-of-materials (SBOM) scanning, runtime kernel eBPF behavioral anomaly detection, and defense-in-depth zero-trust networks.'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Custom LLM fine-tuning, retrieval-augmented generation (RAG) vector pipelines, and real-time model serving with strict privacy boundaries.',
    iconName: 'psychology',
    tags: ['PyTorch', 'LangChain', 'Qdrant'],
    sla: 'SLA: Sub-200ms TTFT',
    architectureDetails: 'Hybrid vector & semantic sparse search indexes, token streaming protocols, prompt sandboxing with guardrail filters, and local private model quantization.'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Scalable ETL pipelines, clickstream tracking, and real-time streaming dashboards using PostgreSQL, Redis, and ClickHouse.',
    iconName: 'query_stats',
    tags: ['Postgres', 'DuckDB', 'Airflow'],
    sla: 'SLA: 1-Second Aggregation',
    architectureDetails: 'Columnar storage structures with incremental materialized views, high-throughput Apache Kafka topic compaction, and automated cold tier archiving.'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'finshield-core',
    code: 'PROD-ID #4412',
    title: 'FinShield Core',
    subtitle: 'High-Throughput Ledger & Fraud Detection Engine',
    domain: 'FINTECH / CORE BANKING',
    challenge: 'Legacy transactional system saturated at 3,200 req/sec with intolerable 120ms lock delays.',
    solution: 'Re-architected with Node.js asynchronous event streams, Redis cluster caching, and partitioned MongoDB transactional replicas.',
    flowDiagram: '[Client API] ➔ [Redis Edge] ➔ [Mongo Shard]',
    metrics: {
      primaryValue: '18k',
      primaryLabel: 'Req / Sec',
      secondaryValue: '< 30ms',
      secondaryLabel: 'P99 Latency'
    },
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS ECS']
  },
  {
    id: 'omnihealth-telemetry',
    code: 'PROD-ID #6198',
    title: 'OmniHealth Telemetry',
    subtitle: 'HIPAA-Compliant Real-Time Clinical Vitals Platform',
    domain: 'MEDTECH / CLINICAL',
    challenge: 'Ingesting continuous ECG waveforms and telemetry across 14 hospital centers without dropouts or unencrypted hops.',
    solution: 'Deployed Python FastAPI backends paired with secure WebSockets, TLS 1.3 payload encryption, and automated audit trails in Postgres.',
    flowDiagram: '[Bedside Sensor] ➔ [WSS Hub] ➔ [Doctor React UI]',
    metrics: {
      primaryValue: '99.999%',
      primaryLabel: 'Packet Integrity',
      secondaryValue: 'HIPAA',
      secondaryLabel: 'Audited & Pass'
    },
    stack: ['React', 'FastAPI', 'WebSockets', 'Postgres', 'Docker']
  },
  {
    id: 'devops-sentinel',
    code: 'PROD-ID #8820',
    title: 'DevOps Sentinel',
    subtitle: 'Automated Security & Compliance Pipeline',
    domain: 'DEVSECOPS / CLOUD',
    challenge: 'Slow CI/CD velocity caused by manual security sign-offs and fragmented artifact validation.',
    solution: 'Built autonomous Go micro-agents inside Kubernetes runners executing parallel static analysis, OWASP ZAP scans, and signed container attestations.',
    flowDiagram: '[Git Commit] ➔ [Go Micro-Scanner] ➔ [K8s Deploy]',
    metrics: {
      primaryValue: '-78%',
      primaryLabel: 'Audit Cycle Time',
      secondaryValue: '0 Sec',
      secondaryLabel: 'Vulnerability Leak'
    },
    stack: ['Go', 'Kubernetes', 'AWS Lambda', 'OWASP ZAP']
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'mern-architecture',
    title: 'Full-Stack MERN Architecture',
    category: 'web',
    level: 'INTERMEDIATE',
    rating: 4.9,
    reviewsCount: 384,
    description: 'Build scalable enterprise micro-apps using React 18, Node.js, Express, and MongoDB. Learn JWT authentication, state management, and real-time WebSockets.',
    duration: '16 Weeks',
    deliverables: '4 Production Apps',
    format: 'Live Instructor',
    certification: 'Alpha Certified',
    price: 450,
    syllabus: [
      { week: 'Week 01-03', topic: 'Modern React 18 & Advanced Hooks Architecture', lab: 'Build a high-frequency real-time order dashboard' },
      { week: 'Week 04-07', topic: 'Node.js Event Loop, Express API Routing & Middlewares', lab: 'Develop a rate-limited token bucket auth service' },
      { week: 'Week 08-11', topic: 'MongoDB Indexing, Complex Aggregations & Replica Sets', lab: 'Construct an analytics pipeline handling 5M synthetic logs' },
      { week: 'Week 12-16', topic: 'Full-Stack Security, WebSockets, Docker & AWS Capstone', lab: 'Ship CloudVault distributed encrypted storage platform' }
    ]
  },
  {
    id: 'python-backend',
    title: 'Practical Python & Backend Systems',
    category: 'python',
    level: 'BEGINNER • INT',
    rating: 4.8,
    reviewsCount: 290,
    description: 'Master asynchronous Python programming, FastAPI framework, relational database design with PostgreSQL, and automated Redis cache layering.',
    duration: '12 Weeks',
    deliverables: '3 Microservices',
    format: 'Live Instructor',
    certification: 'Alpha Certified',
    price: 380,
    syllabus: [
      { week: 'Week 01-03', topic: 'Python 3.12 Type Hints, Asyncio & Modern Concurrency', lab: 'Concurrent web crawler and data parser' },
      { week: 'Week 04-06', topic: 'FastAPI Rest API Design, Pydantic & Dependency Injection', lab: 'Build asynchronous microservice with OpenAPI 3.1 specs' },
      { week: 'Week 07-09', topic: 'PostgreSQL Relational Schema Design, SQLAlchemy & Alembic', lab: 'Multi-tenant database schema with audit triggers' },
      { week: 'Week 10-12', topic: 'Redis Pub/Sub Caching, Celery Tasks & Dockerized Deploy', lab: 'High-throughput synthetic stress test orchestrator' }
    ]
  },
  {
    id: 'sqa-automation',
    title: 'SQA & Test Automation',
    category: 'sqa',
    level: 'ALL LEVELS',
    rating: 4.9,
    reviewsCount: 412,
    description: 'End-to-end QA engineering. From manual test plan design and Postman API contract testing to modern browser automation using Cypress and Playwright.',
    duration: '10 Weeks',
    deliverables: 'Automated Suites',
    format: 'Live Instructor',
    certification: 'Alpha Certified',
    price: 320,
    syllabus: [
      { week: 'Week 01-02', topic: 'Testing Fundamentals, STLC, Test Plans & Jira Workflows', lab: 'Draft production test matrix for banking flow' },
      { week: 'Week 03-04', topic: 'API Contract Testing with Postman, Newman & Schemas', lab: 'Automate 120 API contract test cases in GitHub Actions' },
      { week: 'Week 05-07', topic: 'Browser Automation with Playwright & Page Object Model', lab: 'Zero-flakiness multi-browser test suite with video logging' },
      { week: 'Week 08-10', topic: 'Synthetic Load Testing with k6 & CI/CD Gating Gates', lab: 'Stress-test staging cluster up to 10k virtual users' }
    ]
  },
  {
    id: 'applied-ai',
    title: 'Applied AI & Data Engineering',
    category: 'python',
    level: 'ADVANCED',
    rating: 4.9,
    reviewsCount: 215,
    description: 'Dive into PyTorch tensor fundamentals, vector embeddings, LangChain RAG pipelines, and automated streaming ingest with MongoDB aggregation pipelines.',
    duration: '14 Weeks',
    deliverables: '2 RAG Pipelines',
    format: 'Live Instructor',
    certification: 'Alpha Certified',
    price: 490,
    syllabus: [
      { week: 'Week 01-03', topic: 'Linear Algebra, PyTorch Tensors & Transformer Architecture', lab: 'Fine-tune a lightweight BERT classifier for intent detection' },
      { week: 'Week 04-07', topic: 'Vector Databases, Embeddings & Chunking Strategies', lab: 'Benchmarking cosine vs dot product in Qdrant & Milvus' },
      { week: 'Week 08-11', topic: 'LangChain & LlamaIndex RAG Orchestration with Guardrails', lab: 'Enterprise document Q&A engine with hallucination guard' },
      { week: 'Week 12-14', topic: 'Real-Time Streaming ETL & Production Model Serving', lab: 'Deploy streaming inference container with sub-150ms latency' }
    ]
  },
  {
    id: 'cybersecurity-defense',
    title: 'Defensive Cybersecurity & AppSec',
    category: 'security',
    level: 'INTERMEDIATE',
    rating: 4.8,
    reviewsCount: 178,
    description: 'Application security hardening, OWASP Top 10 hands-on defense labs, network traffic inspection using Wireshark, and container vulnerability scanning.',
    duration: '12 Weeks',
    deliverables: '5 Live Attack Labs',
    format: 'Live Instructor',
    certification: 'Alpha Certified',
    price: 420,
    syllabus: [
      { week: 'Week 01-03', topic: 'Threat Modeling, STRIDE Methodology & Zero-Trust Principles', lab: 'Perform threat model architecture review for payment API' },
      { week: 'Week 04-06', topic: 'OWASP Top 10 Exploitation & Remediations in Practice', lab: 'Remediate SQLi, SSRF, and JWT bypass vulnerabilities' },
      { week: 'Week 07-09', topic: 'Network Defense, Packet Analysis & Mutual TLS Architecture', lab: 'Investigate simulated DDoS packet dumps with Wireshark' },
      { week: 'Week 10-12', topic: 'Container Security, Trivy, ZAP Automation & SOC-2 Audit', lab: 'Implement zero-critical CVE pipeline gating in Kubernetes' }
    ]
  }
];

export const LEARNING_PATHS_DATA: LearningPath[] = [
  {
    id: 'path-a',
    code: 'PATH A',
    title: 'Full-Stack Software Engineer',
    timeline: 'TOTAL TIMELINE: 6 MONTHS',
    steps: [
      { step: '01', phase: 'FOUNDATION', title: 'HTML5, CSS3, Semantic Web', description: 'Semantic DOM layout, CSS grid, accessible styling fundamentals.' },
      { step: '02', phase: 'LOGIC', title: 'JS ES6+, Async & DOM', description: 'Event loop, promises, closures, functional array manipulation.' },
      { step: '03', phase: 'FRONTEND', title: 'React, Hooks & Tailwind', description: 'Component architecture, custom hooks, atomic state management.' },
      { step: '04', phase: 'BACKEND', title: 'Node.js, Express & REST', description: 'REST APIs, middleware security, rate limiting, JWT tokens.' },
      { step: '05', phase: 'DATABASE', title: 'MongoDB & Indexing', description: 'Data modeling, schema validation, aggregation pipelines, replica sets.' },
      { step: '06', phase: 'CAPSTONE', title: 'Live Production App', description: 'Containerized deployment to AWS with custom domain and SSL.' }
    ]
  },
  {
    id: 'path-b',
    code: 'PATH B',
    title: 'Software Quality Assurance Engineer',
    timeline: 'TOTAL TIMELINE: 4.5 MONTHS',
    steps: [
      { step: '01', phase: 'THEORY', title: 'Testing Life Cycle & STLC', description: 'Test methodologies, boundary analysis, equivalence partitioning.' },
      { step: '02', phase: 'EXECUTION', title: 'Test Plans, Cases & Jira', description: 'Writing high-clarity reproduction steps and bug severity matrices.' },
      { step: '03', phase: 'API TESTING', title: 'Postman & Schema Validation', description: 'Automated test scripts in JavaScript, regression collections.' },
      { step: '04', phase: 'AUTOMATION', title: 'Cypress & Playwright', description: 'End-to-end browser automation, parallel worker orchestration.' },
      { step: '05', phase: 'CI/CD INTEGRATION', title: 'GitHub Actions Regression', description: 'Automated test triggers on pull requests with artifact reports.' },
      { step: '06', phase: 'CAPSTONE', title: 'E2E Enterprise Suite', description: 'Complete automated regression harness for an enterprise banking portal.' }
    ]
  },
  {
    id: 'path-c',
    code: 'PATH C',
    title: 'Python Backend & AI Engineer',
    timeline: 'TOTAL TIMELINE: 5.5 MONTHS',
    steps: [
      { step: '01', phase: 'CORE', title: 'Python OOP & Typing', description: 'Object-oriented programming, modern typing, error propagation.' },
      { step: '02', phase: 'DATA LAYER', title: 'SQL, PostgreSQL & ORM', description: 'Relational schema design, indexes, transactional isolation levels.' },
      { step: '03', phase: 'API ENGINE', title: 'FastAPI & Async Tasks', description: 'High-throughput async endpoint design, background task queues.' },
      { step: '04', phase: 'VECTOR STORE', title: 'LangChain & Embeddings', description: 'Vector similarity search, RAG pipelines, chunking models.' },
      { step: '05', phase: 'INFRASTRUCTURE', title: 'Docker Containers & Cloud', description: 'Multi-stage Docker builds, environment secret injection.' },
      { step: '06', phase: 'CAPSTONE', title: 'RAG Agent Platform', description: 'Autonomous research and document answering agent service.' }
    ]
  }
];

export const CAPSTONES_DATA: StudentCapstone[] = [
  {
    id: 'cloud-vault',
    title: 'CloudVault',
    subtitle: 'Encrypted Distributed File Distribution',
    description: 'End-to-end client-side AES-256 file encryption before multipart S3 streaming, complete with time-expiring cryptographic download tokens.',
    badge: 'MERN + AWS S3',
    year: 'CAPSTONE 2024',
    author: 'Sarah K.',
    authorOutcome: 'Now Junior Dev at Fintech Inc.',
    githubUrl: 'https://github.com/secure-alpha/cloudvault-showcase',
    liveDemoUrl: 'https://cloudvault-demo.alpha-academy.dev',
    techTags: ['React 18', 'Node.js', 'AWS S3', 'AES-256', 'Tailwind']
  },
  {
    id: 'test-pilot',
    title: 'TestPilot',
    subtitle: 'Automated Synthetic API Stress Test Runner',
    description: 'Synthetic health probe generator with automated k6 integration that benchmarks microservice latency degradation under spike traffic patterns.',
    badge: 'PYTHON / FASTAPI / K6',
    year: 'CAPSTONE 2024',
    author: 'Ahmed R.',
    authorOutcome: 'Now SQA Automation Engineer',
    githubUrl: 'https://github.com/secure-alpha/testpilot-runner',
    liveDemoUrl: 'https://testpilot.alpha-academy.dev',
    techTags: ['FastAPI', 'k6', 'Docker', 'PostgreSQL', 'WebSockets']
  },
  {
    id: 'health-pulse',
    title: 'HealthPulse',
    subtitle: 'Medical Appointment & Triage Engine',
    description: 'Real-time clinical triage room scheduler featuring role-based access controls, automatic SMS alerts, and encrypted record logging.',
    badge: 'REACT / NODE / MONGO',
    year: 'CAPSTONE 2024',
    author: 'Marcus T.',
    authorOutcome: 'Now Full-Stack Dev at MedTech Co',
    githubUrl: 'https://github.com/secure-alpha/healthpulse-triage',
    liveDemoUrl: 'https://healthpulse.alpha-academy.dev',
    techTags: ['React', 'Express', 'MongoDB', 'Twilio API', 'JWT']
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'david-vance',
    name: 'David Vance',
    role: 'Principal Cloud Architect @ Secure Alpha',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaDl4QvXPvXdlA_V2Pjv9r3zKtcjFTHIlUJkR4q1aADnydZ7uitFSGA40U0tfJqnY8xO7QrEvIEGsNIKofi24_6K4hxm5r3AaRFuzzXuUFz7eVbNDfsRW6yZ6dQg91EU_VJSJp3ApeLnzt1JEDHBBkAauZjE-DsiIsRBEnj-0OlJYkpoKFd7eli9bG30pbnn51jxRV5Argj8-9HctIvaMLgh_OwO7NUuSYc_s4dS5GGSop1qYnU0CA',
    bio: '12+ years in high-concurrency systems. Architected distributed cloud infrastructure handling 50M+ monthly transactions.',
    teaches: ['Full-Stack MERN Architecture', 'Cloud Native Deployment'],
    credential: 'EX-FINTECH LEAD',
    handle: '@dvance-core'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head of Security & Auditing @ Secure Alpha',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvYQtpNe9TVvuduci2NQNcrK90mYqB56iTZRXy5JgiWh4Of2XehMrL-CiJ8RpyCyP8oFZok4SaBT3IY6rCRhAI9oJnv3qm9eP0YDbS0W2iALKa8jWQyojrg-ieTSjx7Tmr1UZnUU2K5_E5oR__Ini0BJclCW01MtowztwFl4q44EMni-L-v0ex1mASD1RgEP0XtmHPssOREovkUdFYuXfG_lewW2vkcxVkUREianVNZEZs2CGsaLgs',
    bio: 'Offensive and defensive security researcher. Leads threat modeling, SOC-2 readiness audits, and zero-day patch pipelines.',
    teaches: ['Defensive Cybersecurity & AppSec', 'Cryptographic Zero-Trust Systems'],
    credential: 'OSCP / CISSP',
    handle: '@elena-sec'
  },
  {
    id: 'tariq-mansoor',
    name: 'Tariq Mansoor',
    role: 'Lead Test Architect @ Secure Alpha',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFL7zQDFzNIo-866BxM73Mn57VZT-s4-rChwM-udkeTfCDHm85OWQ5F6TudxgHqFNG1d1trNi-swIFylbRhIaxFbjYPo8-AWkC7asME6NGxmpWh1LkqKfdAUIiaZhPQiwEqI0FIxwcOnBr5aE8KnCrNtdSpO8_xarhRySCZiqomI3k9qcO8QMH5vnMKiVjdQL8AE-FwKjcTRU3y5PgCCptOhas0npEYaxdxtLV4bXbKfy_Xc4OHECX',
    bio: 'Automated testing specialist who built synthetic regression matrices across 40+ client production deployments.',
    teaches: ['SQA & Test Automation', 'Playwright / Cypress Pipelines'],
    credential: 'SDET SPECIALIST',
    handle: '@tmansoor-qa'
  }
];

export const CERTIFICATES_DATABASE: Record<string, VerifiedCertificate> = {
  'SA-2024-8841': {
    id: 'SA-2024-8841',
    recipient: 'Sarah K.',
    course: 'Full-Stack MERN Architecture',
    date: '2024-10-18',
    grade: 'Honors (98.4%)',
    hash: '0x8f31b7a2d480e92ca5e6284f931d51a774619b0f8cb214',
    status: 'valid'
  },
  'SA-2024-1092': {
    id: 'SA-2024-1092',
    recipient: 'Ahmed R.',
    course: 'SQA & Test Automation Masterclass',
    date: '2024-11-04',
    grade: 'Distinction (96.8%)',
    hash: '0x3c99a1b412ff082e6d55bc8129e3a7638841529a7c3b21',
    status: 'valid'
  },
  'SA-2024-4419': {
    id: 'SA-2024-4419',
    recipient: 'Marcus T.',
    course: 'Practical Python & Backend Systems',
    date: '2024-09-22',
    grade: 'High Pass (94.2%)',
    hash: '0x17b4c9e8832a0d1f7e6b52a9483c71a06912384a5e921d',
    status: 'valid'
  },
  'SA-2024-9901': {
    id: 'SA-2024-9901',
    recipient: 'Chloe Dupont',
    course: 'Defensive Cybersecurity & AppSec',
    date: '2024-12-01',
    grade: 'Honors (99.1%)',
    hash: '0x7e812d4a5b9c0e3f2a1b4c5d6e7f8091a2b3c4d5e6f7a8',
    status: 'valid'
  }
};

export const BRAND_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1WuTxF_C8mB16Gb8Fjlh56JSvF5EEVfD3okP0A5H5tCkKKZ9b71Wzl98aQSypCtJk2Y2x7ZRxMbUl6Ht135JnbKjXKObj1N5PhByzm8B7AxQbhS5N8MtDq6JPz2ohE-ezjRRQgvq6yqy8_a0dom3Okb2o_0q4Sx4-BSLmh1FKIc1c9T8kqtH79a1ovVtV3Oj0YIzZCvGXsYkwja3rGwY39BW2pEROJ7xru7EPCYGLKD7txUmax6tYbXiUw';
