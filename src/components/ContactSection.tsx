'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export function ContactSection() {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          Vamos Conversar?
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Estou sempre aberto a novas oportunidades, colaborações ou um bom papo sobre tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-900 text-white border border-zinc-800 shadow-xl">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-800/80 w-fit text-amber-400 mb-6 border border-white/10">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Envie uma mensagem
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-lg">
              Quer discutir um projeto, uma oportunidade de trabalho ou apenas trocar ideias sobre engenharia de software?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
            <a
              href="mailto:echewfa@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 w-fit text-zinc-800 dark:text-zinc-200 mb-6 border border-zinc-200 dark:border-white/5">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Conecte-se
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Acompanhe meus projetos e perfil profissional nas redes.
            </p>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-white/5">
            <a
              href="https://github.com/fabinhose12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-white/5 transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-semibold">
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/fabioechenique/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-white/5 transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs font-semibold">
                <FaLinkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}