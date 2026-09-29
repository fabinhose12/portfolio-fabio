'use client';

import { GraduationCap, Cpu } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
          Sobre & Arquitetura
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Visão geral sobre formação, metodologia de desenvolvimento e valores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card Formação */}
        <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 w-fit text-zinc-800 dark:text-zinc-200 mb-6 border border-zinc-200 dark:border-white/5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Formação de Impacto
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              Estudante de Engenharia de Software e Sistemas de Informação.
            </p>
          </div>
          <span className="text-xs font-semibold font-mono text-zinc-600 dark:text-zinc-300 uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1.5 rounded-lg w-fit border border-zinc-200/60 dark:border-white/5">
            UniCesumar
          </span>
        </div>

        {/* Card Código Limpo */}
        <div className="md:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 shadow-sm transition-colors">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 w-fit text-zinc-800 dark:text-zinc-200 mb-6 border border-zinc-200 dark:border-white/5">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Código Limpo & Performance
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
              Foco em código legível, tipagem estática rigorosa com TypeScript e C#, padronização de arquiteturas RESTful no backend e modelagem de dados eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-100 dark:border-white/5">
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-white/5 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-500 dark:text-zinc-400 block mb-1">
                Qualidade
              </span>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                TypeScript / C#
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-white/5 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-500 dark:text-zinc-400 block mb-1">
                Performance
              </span>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Next.js / NestJS
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-white/5 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono text-zinc-500 dark:text-zinc-400 block mb-1">
                Arquitetura
              </span>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                SQL / PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}