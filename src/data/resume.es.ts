import type { Resume } from "./types";

// Static Spanish translation of the resume in resume.ts.
//
// This replaces the per-visitor LLM translation: the CV rarely changes, so
// translating it once and shipping it in the bundle is instant for visitors,
// costs nothing at runtime, and cannot fail on API quota.
//
// Keeping it in sync: SOURCE_CV_VERSION below records the CV_VERSION hash of
// the English resume this translation was made from. A unit test
// (resume.es.test.ts) fails whenever resume.ts changes without this file
// being retranslated — update the translation, then set SOURCE_CV_VERSION to
// the new hash printed by the failing test.
export const SOURCE_CV_VERSION = "1yj8hi9";

export const resumeEs: Resume = {
  name: "Alberto Valiño Carro",
  title: "Desarrollador PHP Full-Stack",
  email: "albertovcarro@gmail.com",
  location: "Dublín, Irlanda",
  labels: {
    summary: "Resumen profesional",
    skills: "Competencias principales",
    experience: "Experiencia profesional",
    education: "Formación",
    projects: "Logros destacados",
    personalProjects: "Proyectos personales",
    extras: "Información adicional",
    contact: "Contacto",
    contactNameLabel: "Nombre",
    contactNamePlaceholder: "Tu nombre",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "tu@email.com",
    contactMessageLabel: "Mensaje",
    contactMessagePlaceholder: "Tu mensaje...",
    contactSend: "Enviar mensaje",
    contactSending: "Enviando...",
    contactSuccess: "¡Mensaje enviado! Te responderé pronto.",
    contactError: "Algo ha ido mal. Inténtalo de nuevo o escríbeme directamente.",
    heroTagline:
      "Nueve años de PHP y MySQL en producción en Three Ireland — rastreando problemas en sistemas grandes y veteranos y resolviéndolos con cambios pequeños y testeados. Cómodo desde la base de datos hasta la interfaz, y cada vez más en la infraestructura que hay debajo.",
    downloadCv: "Descargar CV (PDF)",
    terminalTitle: "Terminal interactiva",
    terminalHint: "El tabulador autocompleta",
  },
  typingTitles: [
    "Desarrollador PHP Full-Stack",
    "Desarrollador Laravel y React",
    "Desarrollador PHP y DBA",
    "Vue 3 · TypeScript · Laravel",
  ],
  summary:
    "Desarrollador PHP y DBA con nueve años de PHP y MySQL en producción en Three Ireland, la mayor parte dentro de un código grande y veterano del que dependen otros equipos. Donde mejor trabajo es en problemas que empiezan con evidencia — un informe lento, un bug intermitente, una discrepancia en los datos — y terminan con un cambio pequeño y testeado que corrige la causa sin romper lo que depende de ello. Práctico en todo el stack: diseño de esquemas y optimización de consultas, APIs REST, colas asíncronas y frontends en React o Vue. Recientemente también he escrito el Terraform y el CI/CD para migrar una plataforma legacy a AWS. Con mentalidad de seguridad (Diploma en Ciberseguridad por UCD) y con herramientas de IA integradas en mi forma de trabajar. Busco un rol remoto y práctico como desarrollador PHP full-stack.",
  skills: [
    "PHP y Laravel",
    "JavaScript / TypeScript",
    "React / Next.js",
    "Vue 3",
    "Svelte 5 / SvelteKit 2",
    "Diseño de APIs y REST",
    "MySQL / PostgreSQL / MariaDB",
    "Optimización de consultas e indexación",
    "Rendimiento y depuración",
    "Código limpio y TDD",
    "Seguridad y control de acceso",
    "Docker y CI/CD",
    "AWS y Terraform",
    "Python y LangChain",
    "Integración de LLMs y flujos de IA",
  ],
  skillGroups: [
    { label: "Backend", items: ["PHP", "Laravel", "Symfony", "Python", "APIs REST", "OpenAPI"] },
    { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte 5", "Vue 3", "Inertia.js"] },
    { label: "Bases de datos", items: ["MySQL / MariaDB", "PostgreSQL", "Redis", "Optimización de consultas", "Indexación", "Modelado de datos"] },
    { label: "Cloud e infraestructura", items: ["AWS", "Terraform (IaC)", "ECS Fargate", "RDS", "ElastiCache", "SQS", "KMS"] },
    { label: "DevOps y CI/CD", items: ["Docker", "GitHub Actions", "CodePipeline / CodeBuild / CodeDeploy", "Despliegues blue-green", "CloudWatch"] },
    { label: "Testing", items: ["PHPUnit", "TDD", "Estándares de revisión de PRs"] },
    { label: "IA", items: ["LangChain", "Integración de LLMs", "Servidores MCP", "Desarrollo asistido por IA"] },
  ],
  experience: [
    {
      role: "Desarrollador PHP y DBA",
      company: "Three Ireland",
      period: "2017 – Actualidad | Dublín, Irlanda",
      points: [
        "Audité una plataforma legacy de telecomunicaciones crítica para el negocio — 33 bases de datos y ~21.000 archivos — mapeando trabajos en segundo plano, integraciones de pago en vivo y exposiciones de seguridad antes de empezar cualquier migración, y redacté la documentación de auditoría y plan de construcción revisada por arquitectos sénior.",
        "Escribí el Terraform para migrar la plataforma desde un único host EC2 configurado a mano hasta AWS — módulos reutilizables de red, datos, cómputo y pipeline (VPC, ECS Fargate, RDS tras un RDS Proxy con autenticación IAM, ElastiCache, KMS) — de modo que Dev, Staging y Production son el mismo código, revisado como pull requests.",
        "Monté el CI/CD nativo de AWS (CodePipeline / CodeBuild / CodeDeploy) con despliegues blue/green en ECS y rollback, sustituyendo los despliegues manuales por SSH.",
        "Responsable del desarrollo de funcionalidades en todo el stack Laravel + React: migraciones, modelos Eloquent, clases de servicio, trabajos en cola y componentes React, desde la especificación hasta producción.",
        "Refactoricé PHP legacy paso a paso hacia código Laravel testeable orientado a servicios; introduje suites de PHPUnit partiendo de una cobertura casi nula y estándares de revisión de PRs para mantenerla.",
        "Construí y mantuve APIs REST con autenticación Laravel Sanctum, control de acceso por roles mediante policies y gates, y rate limiting para integradores externos.",
        "Llevé los informes de alto volumen a colas asíncronas (Laravel Queues + SQS), desacoplando el trabajo lento de las peticiones HTTP y absorbiendo picos de tráfico.",
        "Diagnostiqué consultas MySQL lentas con EXPLAIN, índices compuestos y reestructuración de consultas, resolviendo incidencias de rendimiento en producción y reduciendo los tiempos de los informes críticos.",
        "Entregué funcionalidades de frontend en React con TypeScript y hooks; mejoré la reutilización de componentes y reduje los bugs de regresión.",
        "Monté entornos de desarrollo con Docker replicando producción y workflows de GitHub Actions para linting, testing y despliegue.",
        "Revisé código e hice pair programming con compañeros; escribí la documentación de onboarding del equipo.",
      ],
    },
    {
      role: "Desarrollador Web",
      company: "BEUTiFi.com",
      period: "Mar 2017 – Jul 2017 | Dublín, Irlanda",
      points: [
        "Desarrollo y mantenimiento de funcionalidades PHP/JS para una plataforma de reservas de belleza.",
      ],
    },
    {
      role: "Desarrollador Web",
      company: "GAIA",
      period: "Sep 2015 – Feb 2016 | A Coruña, España",
      points: [
        "Desarrollo full-stack PHP/JS en proyectos para clientes.",
      ],
    },
  ],
  education: [
    { title: "Diploma en Ciberseguridad – University College Dublin", year: "2024" },
    { title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y en Desarrollo de Aplicaciones Web (DAW) – CPR A Fundación, A Coruña", year: "2013–2017" },
  ],
  projects: [
    "Construí la API REST de una plataforma de gestión de activos de telecomunicaciones — modelé jerarquías de activos complejas, eliminé consultas N+1 y llevé la generación de informes a colas sobre Redis, reduciendo la carga de páginas en ~60 %.",
    "Colaboré en una plataforma de datos en la nube para la gestión de activos de telecomunicaciones que habilitó la operación remota y redujo un 30 % el tiempo de intervención en campo.",
    "Audité una plataforma legacy (33 bases de datos, ~21.000 archivos) antes de modificarla, para que el plan de migración partiera de lo que el sistema hace realmente — incluidos trabajos en segundo plano, integraciones de pago en vivo y exposiciones de seguridad.",
    "Escribí todo el Terraform y el CI/CD para llevar esa plataforma a AWS: el mismo código para cada entorno, revisado como pull requests, con despliegues blue/green y rollback.",
    "Modernicé PHP y JavaScript legacy de forma incremental hacia Laravel y React sin sacarlo de producción, subiendo la cobertura de tests desde casi cero.",
    "Entregué paneles y herramientas internas integradas con AWS que usan a diario equipos multidisciplinares, incluida la dirección.",
  ],
  personalProjects: [
    {
      name: "Trainer Tracker",
      url: "https://trainer-tracker.com",
      period: "Sep 2025 – Actualidad",
      stack: ["SvelteKit 2", "Svelte 5", "Laravel 13", "PostgreSQL", "Redis", "Docker", "Railway"],
      summary: "SaaS full-stack de registro de entrenamientos, construido en solitario desde cero. Frontend con SSR, API REST de backend, desplegado en Railway EU West con auto-despliegue CI/CD en cada push a main.",
      points: [
        "Sistema de doble rol (Atleta / Entrenador) con relaciones mediante tablas pivote: los atletas gestionan entrenamientos, mediciones, plantillas y ejercicios; los entrenadores tienen vista de solo lectura de los datos de sus atletas.",
        "El panel incluye un mapa de calor anual de entrenamientos al estilo GitHub, gráficas de progreso de peso y mediciones, seguimiento de progresión de fuerza por ejercicio y un cálculo de racha de entrenamiento en vivo.",
        "Seguridad: autenticación con tokens Sanctum en cookies httpOnly, rate limiting, CORS restringido al dominio de producción, expiración de tokens a 7 días con purga diaria y análisis de dependencias con Snyk.",
      ],
    },
    {
      name: "Job Tracker",
      url: "https://job-tracker-avc.vercel.app",
      period: "May 2026 – Actualidad",
      stack: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Supabase", "Tailwind CSS v4", "Vercel"],
      summary: "Aplicación full-stack de seguimiento de candidaturas, construida para practicar la Composition API de Vue 3, la gestión de estado con Pinia y Supabase Auth con Row Level Security.",
      points: [
        "Composition API en todo el proyecto: ref, reactive, computed, watch y onMounted usados en stores y vistas.",
        "Stores de Pinia para autenticación, candidaturas y empresas, con acciones asíncronas sobre Supabase y actualizaciones optimistas del estado local.",
        "Vue Router con guardas de navegación, rutas con carga diferida y parámetros dinámicos; Supabase Auth con políticas RLS por usuario.",
      ],
    },
    {
      name: "SyncBridge",
      url: "https://github.com/albertovalinocarro/sync_bridge",
      period: "2025 – Actualidad",
      stack: ["Symfony 7.4", "PHP 8.2", "Messenger", "Redis", "MySQL", "Docker", "PHPUnit"],
      summary: "Middleware de webhooks multicliente centrado en la integridad de los datos, basado en trabajo de integración real.",
      points: [
        "Pipeline asíncrono completo: verificación de webhooks con HMAC-SHA256 → control de idempotencia → persistencia con Doctrine → despacho por Messenger → cola en Redis → worker asíncrono → sincronización saliente con WMS/ERP.",
        "Diseño multicliente con servicios etiquetados de Symfony: se añaden clientes nuevos implementando una interfaz y una entrada de configuración, sin tocar la lógica central.",
        "API REST con ámbito por cliente, autenticación Bearer, filtrado y paginación; comandos de consola para panel de estado y reintento de eventos fallidos; logging estructurado con Monolog incluyendo webhook_event_id y duration_ms por entrada.",
      ],
    },
  ],
  extras: [
    "Bilingüe en inglés y español",
    "Cómodo en equipos distribuidos, 100 % remotos y basados en la comunicación escrita",
    "Infraestructura como código con Terraform — flujo de planificar y revisar, IAM de mínimo privilegio y redes AWS seguras por defecto",
    "Construyendo integraciones con servidores MCP (Model Context Protocol): conectando herramientas LLM con fuentes de datos reales (Google Drive, Gmail, Calendar) para flujos de trabajo agénticos",
    "Web de portfolio construida con React 19, TypeScript, Tailwind v4, Framer Motion y LangChain/OpenAI",
  ],
  socials: {
    email: "albertovcarro@gmail.com",
    github: "https://github.com/albertovalinocarro",
    location: "Dublín, Irlanda",
    linkedin: "https://www.linkedin.com/in/alberto-valino-carr0/",
  },
};