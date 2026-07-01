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
export const SOURCE_CV_VERSION = "qgmdj7";

export const resumeEs: Resume = {
    name: "Alberto Valiño Carro",
    title: "Desarrollador Full-Stack PHP Sénior",
    email: "albertovcarro@gmail.com",
    location: "Dublín, Irlanda / A Coruña, España",

    labels: {
        summary: "Resumen profesional",
        skills: "Competencias principales",
        experience: "Experiencia profesional",
        education: "Formación académica",
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
            "Más de 8 años construyendo sistemas en producción con PHP, Laravel, React y AWS — responsable de las funcionalidades de principio a fin, desde el diseño del esquema hasta el último píxel.",
        downloadCv: "Descargar CV (PDF)",
        terminalTitle: "Terminal interactiva",
        terminalHint: "El tabulador autocompleta",
    },

    typingTitles: [
        "Desarrollador Full-Stack PHP Sénior",
        "Desarrollador Laravel y React Sénior",
        "Desarrollador PHP y JavaScript Sénior",
        "Desarrollador Full-Stack Sénior",
    ],

    summary:
        "Desarrollador Full-Stack Sénior con más de 8 años escribiendo PHP (Laravel) y JavaScript (React) en producción. Trabajo en todas las capas del stack: diseño de esquemas, optimización de consultas, contratos de API REST, colas de trabajos asíncronos y arquitectura de componentes React. Me responsabilizo de las funcionalidades de principio a fin, depuro a fondo en cualquier punto del stack y dejo el código mejor de lo que lo encontré, de forma medible. Busco un rol remoto full-stack técnicamente exigente donde contribuir al éxito del producto a largo plazo.",

    skills: [
        "PHP y Laravel",
        "Python y LangChain",
        "JavaScript / TypeScript",
        "React / Next.js",
        "Svelte 5 / SvelteKit 2",
        "Vue 3",
        "Diseño de APIs y REST",
        "MySQL / PostgreSQL",
        "AWS y arquitectura cloud",
        "Docker y CI/CD",
        "Diseño de sistemas",
        "Rendimiento y optimización",
        "Integración de LLMs y flujos de IA",
        "Código limpio y TDD",
    ],

    skillGroups: [
        { label: "Backend", items: ["PHP", "Laravel", "Symfony", "Python", "APIs REST", "OpenAPI"] },
        { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte 5", "Vue 3"] },
        { label: "Bases de datos", items: ["MySQL", "PostgreSQL", "Redis", "Optimización de consultas", "Indexación"] },
        { label: "Cloud y DevOps", items: ["AWS (EC2, S3, SQS, RDS)", "Docker", "GitHub Actions", "CI/CD", "Despliegues blue-green"] },
        { label: "Testing", items: ["PHPUnit", "TDD", "Estándares de revisión de PRs"] },
        { label: "IA", items: ["LangChain", "Integración de LLMs", "Servidores MCP", "Flujos de trabajo con IA"] },
    ],

    experience: [
        {
            role: "Desarrollador de Software Full-Stack Sénior",
            company: "Three.ie",
            period: "2017 – Actualidad | Dublín, Irlanda",
            points: [
                "Responsable del desarrollo de funcionalidades en todo el stack Laravel + React: migraciones, modelos Eloquent, clases de servicio, trabajos en cola y componentes React, desde la especificación hasta producción.",
                "Refactoricé PHP legacy enmarañado hacia código Laravel testeable orientado a servicios; introduje suites de PHPUnit partiendo de una cobertura casi nula e implanté estándares de revisión de PRs.",
                "Construí y mantuve APIs RESTful con endpoints versionados y documentación OpenAPI; autenticación con Laravel Sanctum.",
                "Diseñé colas de trabajos asíncronos (Laravel Queues + SQS) para informes de alto volumen, desacoplando operaciones lentas de las peticiones HTTP y absorbiendo picos de tráfico con solvencia.",
                "Optimicé consultas MySQL lentas usando EXPLAIN, índices compuestos y reestructuración de consultas, resolviendo incidencias de rendimiento en producción y reduciendo significativamente los tiempos de los informes críticos.",
                "Entregué funcionalidades de frontend en React con TypeScript y hooks; mejoré la reutilización de componentes y reduje los bugs de regresión.",
                "Monté entornos de desarrollo con Docker replicando producción y escribí workflows de GitHub Actions para linting, testing y despliegues blue-green en AWS EC2.",
                "Menté a desarrolladores júnior mediante revisión de código, pair programming y documentación de onboarding.",
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
                "Soporte full-stack en proyectos para clientes.",
            ],
        },
    ],

    education: [
        { title: "Diploma en Ciberseguridad – UCD Dublín", year: "2024" },
        { title: "Grado en Desarrollo de Software", year: "2013–2017" },
    ],

    projects: [
        "Lideré el desarrollo de una plataforma de datos en la nube para la gestión de activos de telecomunicaciones, habilitando la operación remota y reduciendo un 30 % el tiempo de intervención en campo.",
        "Construí aplicaciones web a medida para flujos de trabajo específicos del negocio, aumentando la adopción por parte de usuarios no técnicos.",
        "Modernicé sistemas legacy de PHP y JavaScript refactorizándolos hacia una arquitectura escalable con Laravel y React, mejorando notablemente la mantenibilidad y la cobertura de tests.",
        "Encabecé la migración a AWS (S3, SQS, RDS, EC2, IAM, CloudWatch) y GitHub, agilizando el CI/CD y reforzando las prácticas de seguridad.",
        "Entregué herramientas SaaS y paneles integrados con AWS utilizados por equipos multidisciplinares, incluida la dirección.",
    ],

    personalProjects: [
        {
            name: "Trainer Tracker",
            url: "https://trainer-tracker.com",
            period: "Sep 2025 – Actualidad",
            stack: ["SvelteKit 2", "Svelte 5", "Laravel 12", "PostgreSQL", "Redis", "Docker", "Railway"],
            summary: "SaaS full-stack de registro de entrenamientos, construido en solitario desde cero. Frontend con SSR, API REST de backend, desplegado en Railway EU West con auto-despliegue CI/CD en cada push a main.",
            points: [
                "Sistema de doble rol (Atleta / Entrenador) con relaciones mediante tablas pivote: los atletas gestionan entrenamientos, mediciones, plantillas y ejercicios; los entrenadores tienen vista de solo lectura de los datos de sus atletas.",
                "El panel incluye un mapa de calor anual de entrenamientos al estilo GitHub, gráficas de progreso de peso y mediciones, seguimiento de progresión de fuerza por ejercicio y un cálculo de racha de entrenamiento en vivo.",
                "Seguridad de nivel de producción: autenticación con tokens Sanctum en cookies httpOnly, rate limiting, CORS restringido al dominio de producción, expiración de tokens a 7 días con purga diaria y análisis de dependencias con Snyk.",
            ],
        },
        {
            name: "Job Tracker",
            url: "https://job-tracker-avc.vercel.app",
            period: "May 2026 – Actualidad",
            stack: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Supabase", "Tailwind CSS v4", "Vercel"],
            summary: "SaaS full-stack de seguimiento de candidaturas de empleo, construido para demostrar la Composition API de Vue 3, la gestión de estado con Pinia y Supabase Auth con Row Level Security.",
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
            summary: "Plataforma middleware de webhooks multicliente de nivel de producción, que replica una arquitectura de integración del mundo real.",
            points: [
                "Pipeline asíncrono completo: verificación de webhooks con HMAC-SHA256 → control de idempotencia → persistencia con Doctrine → despacho por Messenger → cola en Redis → worker asíncrono → sincronización saliente con WMS/ERP.",
                "Arquitectura multicliente con servicios etiquetados de Symfony: se añaden clientes nuevos implementando una interfaz y una entrada de configuración, sin tocar la lógica central.",
                "API REST con ámbito por cliente, autenticación Bearer, filtrado y paginación; comandos de consola para panel de estado y reintento de eventos fallidos; logging estructurado con Monolog incluyendo webhook_event_id y duration_ms por entrada.",
            ],
        },
    ],

    extras: [
        "Bilingüe en inglés y español",
        "Mentor y compañero de equipo colaborativo",
        "Construyendo integraciones con servidores MCP (Model Context Protocol): conectando herramientas LLM con fuentes de datos reales (Google Drive, Gmail, Calendar) para flujos de trabajo agénticos",
        "Web de portfolio construida con React 19, TypeScript, Tailwind v4, Framer Motion y LangChain/OpenAI",
    ],

    socials: {
        email: "albertovcarro@gmail.com",
        github: "https://github.com/albertovalinocarro",
        location: "Dublín, Irlanda / A Coruña, España",
        linkedin: "https://www.linkedin.com/in/alberto-valino-carr0/",
    },
};
