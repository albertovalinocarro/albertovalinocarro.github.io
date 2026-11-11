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
export const SOURCE_CV_VERSION = "1xgsdll";

export const resumeEs: Resume = {
  name: "Alberto Valiño Carro",
  title: "Desarrollador Full-Stack Senior",
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
      "Nueve años de PHP en producción en Three Ireland, desde un código heredado grande hasta liderar su reconstrucción como aplicación Laravel en AWS. Trabajo práctico desde la base de datos hasta la interfaz, y en la infraestructura que hay debajo.",
    downloadCv: "Descargar CV (PDF)",
    terminalTitle: "Terminal interactiva",
    terminalHint: "El tabulador autocompleta",
    navSkills: "Competencias",
    navExperience: "Experiencia",
    navProjects: "Proyectos",
    navContact: "Contacto",
  },
  typingTitles: [
    "Desarrollador Full-Stack Senior",
    "Desarrollador Laravel y React",
    "PHP · Laravel · AWS",
    "Vue 3 · TypeScript · Laravel",
  ],
  summary:
    "Desarrollador full-stack senior con nueve años de PHP y MySQL en producción en Three Ireland, en aplicaciones que usan más de 350 personas de varias empresas. Actualmente lidero la reconstrucción de una plataforma interna crítica de telecomunicaciones como aplicación Laravel en AWS, con trabajo directo en la arquitectura, el Terraform y la entrega. Donde mejor trabajo es en problemas que empiezan con evidencia, como un informe lento, un bug intermitente o una discrepancia en los datos, y terminan con un cambio testeado que corrige la causa. Puntos fuertes: Laravel, rendimiento en MySQL/MariaDB, APIs REST, colas y React o Vue con TypeScript. Con formación en seguridad (Diploma en Ciberseguridad por UCD) y con herramientas de IA integradas en mi forma de trabajar. Busco un puesto remoto y práctico como desarrollador PHP full-stack senior.",
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
    { label: "Cloud e infraestructura", items: ["AWS", "Terraform (IaC)", "ECS Fargate", "RDS", "ElastiCache", "SQS", "KMS", "Secrets Manager"] },
    { label: "DevOps y CI/CD", items: ["Docker", "GitHub Actions", "CodePipeline / CodeBuild", "ECR", "tfsec / TFLint", "CloudWatch"] },
    { label: "Testing", items: ["PHPUnit", "TDD", "Estándares de revisión de PRs"] },
    { label: "IA", items: ["LangChain", "Integración de LLMs", "Servidores MCP", "Desarrollo asistido por IA"] },
  ],
  experience: [
    {
      role: "Desarrollador líder, modernización de plataforma",
      company: "Three Ireland",
      period: "2025 – Actualidad | Dublín, Irlanda",
      points: [
        "Lidero la reconstrucción de una plataforma interna crítica de telecomunicaciones, de la que dependen a diario más de 250 usuarios de varias empresas: pasa de una aplicación PHP sin framework en un único servidor a una aplicación Laravel 13 en contenedores sobre AWS. Soy responsable de la arquitectura, el plan de hitos, el seguimiento de costes y el informe mensual a la dirección.",
        "Audité el sistema heredado antes de diseñar nada: 33 bases de datos, más de 8.000 tablas, más de 350 vistas y unos 21.000 archivos. Documenté sus procesos en segundo plano, sus integraciones y sus riesgos de seguridad críticos, y basé el plan de migración en esa evidencia.",
        "Diseñé el modelo de cuentas y de red: producción aislada en su propia cuenta de AWS, red por capas con una capa de datos sin salida a Internet y solo datos anonimizados fuera de producción.",
        "Cómputo: ECS Fargate sobre ARM64, con una única imagen endurecida y sin root que ejecuta cinco tipos de proceso (web, workers de Horizon, planificador, migraciones y tareas puntuales de arranque).",
        "Datos: RDS MariaDB con conexiones directas y TLS verificado, y Redis con TLS y autenticación. Sustituí un proxy de base de datos previsto, que añadía coste pero no seguridad real, y reduje en torno a un 10 % el coste mensual previsto de la plataforma.",
        "Seguridad: claves KMS propias, secretos inyectados en ejecución y nunca dentro de la imagen, identidades de base de datos separadas para aplicación, migración y administración, e IAM de mínimo privilegio.",
        "Escribí toda la infraestructura como módulos reutilizables de Terraform, con estado remoto y bloqueo. Cada plan se revisa línea a línea y se analiza con tfsec y TFLint, sin hallazgos altos ni críticos.",
        "Construí el pipeline de CI/CD nativo de AWS (CodePipeline, CodeBuild sobre ARM64, ECR). Cada imagen debe superar 17 controles automáticos antes de publicarse, se etiqueta de forma inmutable y se compila una vez para promocionarse entre entornos.",
        "Pasé a Terraform 15 recursos creados a mano sin crear, destruir ni interrumpir ninguno.",
        "Apliqué los parches de dos vulnerabilidades críticas de ejecución remota de código en PHP en menos de 24 horas desde la publicación de la corrección.",
        "Entregué el entorno de desarrollo en noviembre de 2026; staging y producción están previstos para 2027.",
        "Mantengo un registro de decisiones de arquitectura y un documento vivo del estado del proyecto como fuente única de verdad; trabajo con InfoSec, arquitectos de plataforma y DevOps, y formo a una segunda responsable.",
      ],
    },
    {
      role: "Desarrollador PHP Full-Stack y DBA",
      company: "Three Ireland",
      period: "Jun 2020 – Actualidad | Dublín, Irlanda",
      points: [
        "Construí la API REST en Laravel de una plataforma de gestión de activos de telecomunicaciones con front end en Next.js: modelé jerarquías de activos complejas, eliminé consultas N+1 y llevé la generación de informes a colas sobre Redis, reduciendo la carga de páginas en ~60 %.",
        "Colaboré en una plataforma de datos en la nube para la gestión de activos de telecomunicaciones que habilitó la operación remota y redujo un 30 % el tiempo de intervención en campo.",
        "Desarrollé paneles y herramientas internas en React y Laravel que usan a diario unas 100 personas de distintas empresas y perfiles, incluida la dirección; introduje TypeScript, tests de componentes y un sistema de diseño compartido.",
        "Responsable del desarrollo de funcionalidades en todo el stack Laravel + React: migraciones, modelos Eloquent, clases de servicio, trabajos en cola y componentes React, desde la especificación hasta producción.",
        "Construí y mantuve APIs REST con autenticación Laravel Sanctum, control de acceso por roles mediante policies y gates, y rate limiting para integradores externos.",
        "Llevé los informes de alto volumen a colas asíncronas (Laravel Queues + SQS), desacoplando el trabajo lento de las peticiones HTTP y absorbiendo picos de tráfico.",
        "Refactoricé PHP legacy paso a paso hacia código Laravel testeable orientado a servicios; introduje suites de PHPUnit partiendo de una cobertura casi nula y estándares de revisión de PRs para mantenerla.",
        "Monté entornos de desarrollo con Docker y workflows de GitHub Actions para linting, testing y despliegue.",
        "Revisé código e hice pair programming con compañeros; escribí la documentación de onboarding del equipo.",
      ],
    },
    {
      role: "Desarrollador PHP y administrador de bases de datos",
      company: "Three Ireland",
      period: "Jul 2017 – Jun 2020 | Dublín, Irlanda",
      points: [
        "Mantuve y amplié una aplicación grande en PHP, JavaScript y MySQL de la que dependen más de 250 usuarios de varias empresas, siempre en producción.",
        "Diagnostiqué consultas MySQL lentas con EXPLAIN, índices compuestos y reestructuración de consultas, resolviendo incidencias de rendimiento en producción y reduciendo los tiempos de los informes críticos.",
        "Administré las bases de datos MySQL/MariaDB: cambios de esquema, integridad de datos y rendimiento.",
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
    "Lidero la reconstrucción de una plataforma interna crítica de telecomunicaciones como aplicación Laravel 13 en AWS, con el entorno de desarrollo entregado en noviembre de 2026.",
    "Audité la plataforma heredada (33 bases de datos, más de 8.000 tablas, ~21.000 archivos) antes de modificarla, para que el plan de migración partiera de lo que el sistema hace realmente.",
    "Escribí todo el Terraform y el pipeline de CI/CD nativo de AWS: los mismos módulos para cada entorno, cada cambio revisado como plan y 17 controles automáticos antes de publicar cualquier imagen.",
    "Sustituí un proxy de base de datos previsto por conexiones directas con TLS verificado, reduciendo en torno a un 10 % el coste mensual previsto de la plataforma sin perder seguridad.",
    "Construí la API REST de una plataforma de gestión de activos de telecomunicaciones: modelé jerarquías de activos complejas, eliminé consultas N+1 y llevé la generación de informes a colas sobre Redis, reduciendo la carga de páginas en ~60 %.",
    "Colaboré en una plataforma de datos en la nube para la gestión de activos de telecomunicaciones que habilitó la operación remota y redujo un 30 % el tiempo de intervención en campo.",
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
      summary: "Aplicación full-stack de seguimiento de candidaturas, construida con la Composition API de Vue 3, gestión de estado con Pinia y Supabase Auth con Row Level Security.",
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