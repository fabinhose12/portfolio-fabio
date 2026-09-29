'use client';

import { BentoCard } from '@/components/ui/BentoCard';
import { Mail, ArrowUpRight, Code2, Server, Database, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface Project {
  title: string;
  category: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'DualSenseReader',
    category: 'Desktop & Web Integration',
    description:
      'Aplicação em C# utilizando WebSockets e HidSharp para leitura em tempo real dos inputs do comando PlayStation 5 DualSense com renderização reativa no navegador.',
    techs: ['C#', '.NET', 'WebSockets', 'TypeScript', 'React'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Tournament & Match Manager',
    category: 'Backend & System Architecture',
    description:
      'Sistema robusto de gestão de torneios e partidas com arquitetura RESTful, documentação Swagger e modelagem relacional.',
    techs: ['C#', 'ASP.NET Core', 'SQL Server', 'Swagger'],
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    title: 'Task Manager Service',
    category: 'Backend API & Security',
    description:
      'Serviço backend de gestão de tarefas com autenticação via tokens JWT, ORM Prisma e documentação interativa.',
    techs: ['NestJS', 'Prisma', 'PostgreSQL', 'JWT', 'TypeScript'],
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    title: 'Behind the Lyrics',
    category: 'Full-Stack Web App',
    description:
      'Plataforma de música reativa em React integrada com APIs de streaming para exibição de letras sincronizadas em tempo real.',
    techs: ['React', 'Node.js', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 px-6 py-12 md:py-24 max-w-6xl mx-auto font-sans antialiased">
      {/* Header / Badges */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300">Disponível para novos projetos</span>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors"
          >
            <span className="w-4 h-4 text-zinc-300 inline-flex items-center justify-center">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors"
          >
            <span className="w-4 h-4 text-zinc-300 inline-flex items-center justify-center">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>

      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          Desenvolvedor <br />
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
            Full-Stack
          </span>
        </h1>
        <p className="text-lg text-zinc-400 font-normal leading-relaxed">
          Especializado em arquiteturas web modernas, APIs de alta performance e experiências digitais fluidas com foco em usabilidade e design sofisticado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoCard className="md:col-span-2 flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="p-3 w-fit rounded-2xl bg-zinc-800/80 border border-white/5 mb-4">
              <Code2 className="w-6 h-6 text-zinc-200" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Engenharia de Software & Web</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
              Construção de aplicações end-to-end integrando interfaces reativas com ecossistemas robustos no backend, bancos de dados relacionais e orientados a documentos.
            </p>
          </div>
          <div className="flex gap-2 mt-6 flex-wrap">
            {['TypeScript', 'Next.js', 'React', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full bg-zinc-800/60 border border-white/5 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="p-3 w-fit rounded-2xl bg-zinc-800/80 border border-white/5 mb-4">
              <Server className="w-6 h-6 text-zinc-200" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Backend & APIs</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Criação de RESTful APIs, arquitetura de microsserviços e integração contínua.
            </p>
          </div>
          <div className="flex gap-2 mt-6 flex-wrap">
            {['C# / .NET', 'NestJS', 'PHP', 'Docker'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full bg-zinc-800/60 border border-white/5 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="p-3 w-fit rounded-2xl bg-zinc-800/80 border border-white/5 mb-4">
              <Database className="w-6 h-6 text-zinc-200" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Bancos de Dados</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Modelagem e consultas performáticas em SQL Server, PostgreSQL, MySQL e MongoDB.
            </p>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-2 flex items-center justify-between min-h-[220px]">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Vamos construir algo juntos?</h3>
            <p className="text-zinc-400 text-sm max-w-md">
              Aberto a oportunidades, projetos freelance ou colaborações em aplicações de grande escala.
            </p>
          </div>
          <a
            href="mailto:seu-email@exemplo.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Contato
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </BentoCard>
      </div>

      <section className="mt-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-400 text-sm">
            Sistemas end-to-end, APIs de alta performance e aplicações integradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              className={`flex flex-col justify-between ${
                project.featured ? 'md:col-span-2 min-h-[300px]' : 'min-h-[280px]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors border border-white/5"
                        title="Ver código no GitHub"
                      >
                        <span className="w-3.5 h-3.5 inline-flex items-center justify-center">
                          <FaGithub />
                        </span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors border border-white/5"
                        title="Ver demonstração ao vivo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap pt-4 border-t border-white/5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/50 text-zinc-300 border border-white/5 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </section>
    </main>
  );
}