'use client';

import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function ContactSection() {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          Vamos Conversar
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Envie uma mensagem direta ou entre em contato para parcerias e projetos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 w-fit text-zinc-800 dark:text-zinc-200 mb-6 border border-zinc-200 dark:border-white/5">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">E-mail Direct</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Fique à vontade para me mandar uma mensagem.
            </p>
          </div>
          <a
            href="mailto:seuemail@exemplo.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:underline"
          >
            Enviar e-mail
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 w-fit text-zinc-800 dark:text-zinc-200 mb-6 border border-zinc-200 dark:border-white/5">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Redes Sociais</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Acompanhe meu trabalho ou mande um DM.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fabinhose12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:underline"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fabioechenique/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:underline"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}