'use client';

import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Code2, 
  Server, 
  Database, 
  FolderGit2, 
  Sparkles 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Home() {
  const projects = [
    {
      title: 'Behind the Lyrics',
      description: 'Aplicação musical interativa em React com sincronização de letras e integração com Spotify.',
      techs: ['React', 'JavaScript', 'CSS Modules', 'Spotify API'],
      link: 'https://github.com/fabinhose12',
    },
    {
      title: 'DualSenseReader',
      description: 'Aplicação C# de alto desempenho utilizando Fleck WebSockets e HidSharp para leitura em tempo real do comando PS5.',
      techs: ['C#', '.NET', 'WebSockets', 'HidSharp'],
      link: 'https://github.com/fabinhose12/dualsense-reader',
    },
    {
      title: 'Tournament & Match API',
      description: 'API RESTful completa para gestão de torneios e partidas com arquitetura robusta e documentação Swagger.',
      techs: ['ASP.NET Core', 'C#', 'SQL Server', 'Swagger'],
      link: 'https://github.com/fabioechenique',
    },
    {
      title: 'Task Management System',
      description: 'Serviço backend moderno para gestão de tarefas com autenticação JWT e validação de dados.',
      techs: ['NestJS', 'TypeScript', 'Prisma', 'JWT'],
      link: 'https://github.com/fabinhose12/ToDo',
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-4 py-8 sm:py-12 md:px-12 max-w-6xl mx-auto transition-colors duration-300">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
      >
        <div className="md:col-span-2 flex flex-col justify-between min-h-[280px] p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-white/10 text-xs text-zinc-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Engenharia de Software & Sistemas
              </div>
              <ThemeToggle />
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Desenvolvedor Full Stack & Backend.
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Foco no desenvolvimento de APIs de alta performance, interfaces modernas e arquiteturas escaláveis utilizando TypeScript, C#, Node.js e ecossistema React.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="https://github.com/fabinhose12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-all border border-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fabioechenique/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-all border border-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Cartão Tech Stack */}
        <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-base font-bold text-zinc-900 dark:text-white">
                Tech Stack Principal
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Disponível para novos projetos" />
            </div>

            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-white/5">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-1">
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">React</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">Next.js</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">TypeScript</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">Tailwind CSS</span>
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-white/5">
                    <Server className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-1">
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">C# (.NET)</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">Node.js</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">NestJS</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">PHP</span>
                </div>
              </div>

              {/* Bancos de Dados */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-white/5">
                    <Database className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">Bancos de Dados</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-1">
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">SQL Server</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">PostgreSQL</span>
                  <span className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Secção de Projetos */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
              Projetos em Destaque
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Sistemas, APIs e aplicações web que desenvolvi recentemente.
            </p>
          </div>
          <FolderGit2 className="w-6 h-6 text-zinc-400 dark:text-zinc-600 hidden sm:block" />
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-all border border-zinc-200 dark:border-white/5"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-white/5">
                {project.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-mono border border-zinc-200/60 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AboutSection />

      <ContactSection />
    </main>
  );
}