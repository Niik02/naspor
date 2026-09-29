/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MessageCircle,
  Leaf,
  Flower2,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  Mail,
  Phone,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Exact URLs and data provided
const IMAGES = {
  logo: 'https://i.postimg.cc/qMZ6sQ4P/Design-sem-nome.png',
  product: 'https://i.postimg.cc/9FNwd1c5/Chat-GPT-Image-29-de-set-de-2026-20-19-49.png',
  gardener: 'https://i.postimg.cc/xTdbNBV0/Chat-GPT-Image-29-de-set-de-2026-20-19-44.png',
};

const WHATSAPP_URL =
  'https://wa.me/5519993296054?text=' +
  encodeURIComponent('Olá, Naspor! Eu me interessei pelo produto Ouro Verde e quero saber mais informações.');

const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJO84iepeNyJQR4xmycxwa6Ho';

export default function App() {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-[84px] sm:min-h-[96px] py-2 sm:py-2.5 flex items-center justify-between">
          {/* Lado Esquerdo: Logo da Naspor */}
          <a
            href="#"
            className="flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-md"
            aria-label="Página inicial - Naspor"
          >
            {!imgErrors.logo ? (
              <img
                src={IMAGES.logo}
                alt="Naspor"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[220px] sm:max-w-[300px] md:max-w-[360px] object-contain drop-shadow-xs scale-110 sm:scale-125 origin-left"
                onError={() => handleImgError('logo')}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-900">
                NASPOR
              </span>
            )}
          </a>

          {/* Lado Direito: Botão Falar no WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] transition-all duration-150 shadow-sm shadow-emerald-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" aria-hidden="true" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 2. HERO — PRIMEIRA DOBRA */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
          {/* Fundo sutil e elegante com toque botânico */}
          <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-50/60 via-white to-white pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Coluna de Conteúdo */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Tag sutil sem ser pill chamativa */}
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide text-emerald-800 uppercase mb-3 sm:mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Ouro Verde · Alimento Completo para Plantas</span>
                </div>

                {/* Título Forte */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
                  Suas plantas merecem uma nutrição completa.
                </h1>

                {/* Subtítulo */}
                <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-6 max-w-xl">
                  Conheça o <strong className="text-neutral-900 font-semibold">Ouro Verde</strong>: alimento completo para plantas, em uma fórmula líquida concentrada que rende até 20 litros.
                </p>

                {/* Destaque Visual do Principal Diferencial Comercial */}
                <div className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 p-3.5 sm:px-5 sm:py-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-2xl mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white shrink-0">
                      <Droplets className="w-5 h-5 text-emerald-200" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-bold tracking-wider text-emerald-800">
                        Alto Rendimento
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-emerald-950">
                        100 mL <span className="text-emerald-700 font-bold">→</span> até 20 litros
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão Principal Grande */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] transition-all shadow-lg shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                    <span>QUERO SABER MAIS</span>
                    <ArrowRight className="w-5 h-5 text-emerald-200" aria-hidden="true" />
                  </a>
                </div>

                {/* Micro-prova de confiança */}
                <p className="text-xs text-neutral-500 mt-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                  <span>Atendimento rápido e orientações direto com a equipe Naspor</span>
                </p>
              </div>

              {/* Coluna da Imagem Principal do Produto */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Moldura limpa e elegante para destacar a embalagem */}
                  <div className="relative rounded-3xl bg-neutral-50 border border-neutral-100 p-4 sm:p-6 shadow-sm overflow-hidden flex items-center justify-center">
                    {!imgErrors.product ? (
                      <img
                        src={IMAGES.product}
                        alt="Frasco de Ouro Verde - Alimento completo e fertilizante líquido concentrado para plantas de 100 mL"
                        className="w-full h-auto max-h-[440px] object-contain rounded-2xl transition-transform hover:scale-[1.02] duration-300"
                        onError={() => handleImgError('product')}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full aspect-square flex flex-col items-center justify-center text-center p-6 bg-emerald-50 rounded-2xl">
                        <Leaf className="w-16 h-16 text-emerald-700 mb-3" />
                        <span className="font-bold text-lg text-emerald-950">Ouro Verde</span>
                        <span className="text-sm text-emerald-800">Frasco 100 mL · Rende até 20L</span>
                      </div>
                    )}

                    {/* Destaque sutil flutuante sobre a imagem */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm border border-neutral-200/80 rounded-xl p-3 shadow-md">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-neutral-900">Fórmula Concentrada</span>
                        <span className="font-bold text-emerald-800">100 mL</span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Nutrição completa para plantas mais bonitas e saudáveis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SEÇÃO — O QUE O OURO VERDE PODE FAZER PELAS SUAS PLANTAS */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-neutral-50/70 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-semibold text-emerald-800 uppercase tracking-wider block mb-2">
                Benefícios Claros
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Mais cuidado para suas plantas
              </h2>
            </div>

            {/* 4 Cards de Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Folhagens mais verdes */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5">
                  <Leaf className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Folhagens mais verdes
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Auxilia na nutrição das plantas, contribuindo para uma aparência mais bonita e saudável das folhagens.
                </p>
              </div>

              {/* Card 2: Flores mais vibrantes */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5">
                  <Flower2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Flores mais vibrantes
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Auxilia no desenvolvimento de flores com aparência mais vibrante.
                </p>
              </div>

              {/* Card 3: Raízes mais fortes */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5">
                  <Sprout className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Raízes mais fortes
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Sua proposta inclui auxiliar na nutrição das raízes.
                </p>
              </div>

              {/* Card 4: Plantas mais saudáveis */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Plantas mais saudáveis
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Nutrição completa para ajudar a manter suas plantas bonitas e saudáveis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SEÇÃO DE DESTAQUE — RENDIMENTO */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              {/* Efeito decorativo sutil */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-800/60 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-950/80 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-300 mb-3">
                  Economia e Praticidade
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                  100 mL que rendem até 20 litros
                </h2>

                <p className="text-base sm:text-lg text-emerald-100 font-medium max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  Concentrado, prático e fácil de diluir conforme a orientação de uso do produto.
                </p>

                {/* Comparativo visual de rendimento */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">100 mL</span>
                    <span className="text-xs sm:text-sm text-emerald-200 mt-1">Frasco concentrado</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm sm:text-base">
                      <Droplets className="w-5 h-5" />
                      <span>Fácil Diluição</span>
                      <ArrowRight className="w-4 h-4 hidden sm:inline" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-emerald-300">Até 20 Litros</span>
                    <span className="text-xs sm:text-sm text-emerald-100 mt-1">Prontos para regar suas plantas</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-emerald-950 bg-white hover:bg-emerald-50 active:scale-[0.98] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                    <span>Tirar dúvidas sobre o rendimento</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SEÇÃO COM A JARDINEIRA */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-neutral-50/70 border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Imagem da Jardineira */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-md">
                  {!imgErrors.gardener ? (
                    <img
                      src={IMAGES.gardener}
                      alt="Jardineira aplicando e cuidando das plantas com praticidade usando o alimento vegetal Ouro Verde"
                      className="w-full h-auto max-h-[460px] object-cover object-center"
                      onError={() => handleImgError('gardener')}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full aspect-4/3 flex flex-col items-center justify-center p-8 bg-emerald-50 text-center">
                      <Sprout className="w-16 h-16 text-emerald-700 mb-3" />
                      <span className="font-bold text-lg text-emerald-950">
                        Cuidado simples e prático
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Conteúdo Contextual */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
                <span className="text-xs sm:text-sm font-semibold text-emerald-800 uppercase tracking-wider block mb-2">
                  Uso Prático no Dia a Dia
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-snug mb-4">
                  Cuide das suas plantas de forma simples e prática.
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
                  O Ouro Verde foi desenvolvido para oferecer uma forma prática de complementar a nutrição das suas plantas.
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] transition-all shadow-md shadow-emerald-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                  <span>FALAR COM A NASPOR</span>
                  <ChevronRight className="w-5 h-5 text-emerald-200" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. SEÇÃO — POR QUE OURO VERDE? */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs sm:text-sm font-semibold text-emerald-800 uppercase tracking-wider block mb-2">
                Resumo Essencial
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Por que Ouro Verde?
              </h2>
            </div>

            {/* Checklist limpo e direto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                <span className="text-base font-medium text-neutral-900">
                  Alimento completo para plantas
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                <span className="text-base font-medium text-neutral-900">
                  Fórmula líquida concentrada
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                <span className="text-base font-medium text-neutral-900">
                  Frasco de 100 mL
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                <span className="text-base font-medium text-neutral-900">
                  Rendimento de até 20 litros
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CTA FINAL */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-emerald-50/60 border-y border-emerald-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Quer saber mais sobre o Ouro Verde?
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
              Fale diretamente com a Naspor e tire suas dúvidas sobre o produto.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl text-base sm:text-lg font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] transition-all shadow-lg shadow-emerald-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-6 h-6 text-emerald-300" aria-hidden="true" />
              <span>FALAR COM A NASPOR NO WHATSAPP</span>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. AVALIAÇÃO DA EMPRESA */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
              Já conhece a Naspor?
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 mb-6">
              Sua opinião é muito importante para nós.
            </p>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 active:scale-[0.98] transition-all border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              {/* Google G icon representation */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.14z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>AVALIAR A NASPOR NO GOOGLE</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 9. RODAPÉ */}
      {/* ========================================================================= */}
      <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-10 border-t border-neutral-800 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-neutral-800">
            {/* Coluna 1: Marca Naspor */}
            <div className="lg:col-span-4">
              <span className="text-xl font-extrabold text-white tracking-tight block mb-3">
                Naspor
              </span>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Nutrição completa para plantas mais bonitas e saudáveis com o Ouro Verde.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Falar no WhatsApp oficial</span>
                </a>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Avaliar no Google</span>
                </a>
              </div>
            </div>

            {/* Coluna 2: Informações de Contato */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-semibold mb-3">Contato & Atendimento</h4>
              <ul className="space-y-2.5 text-neutral-400">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+551993296054"
                    className="hover:text-white transition-colors"
                  >
                    +55 19 93296-054
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:contato@naspor.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@naspor.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>08:00 às 17:00</span>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Endereço */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-semibold mb-3">Endereço</h4>
              <p className="flex items-start gap-2.5 text-neutral-400 leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  R. Hermínio Berton, 259 - Jardim Sacilotto, Artur Nogueira - SP, 13167-352
                </span>
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Naspor. Todos os direitos reservados.</p>
            <p>Ouro Verde — Alimento Completo para Plantas</p>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 10. BOTÃO FLUTUANTE DO WHATSAPP (MOBILE & DESKTOP) */}
      {/* ========================================================================= */}
      <aside
        aria-label="Atendimento rápido pelo WhatsApp"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full shadow-lg shadow-black/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          aria-label="Abrir conversa no WhatsApp da Naspor"
        >
          {/* Ícone com ponto de presença online */}
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white text-transparent" aria-hidden="true" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-200 border-2 border-[#25D366] rounded-full animate-pulse" />
          </div>
          <span className="text-sm font-bold tracking-tight pr-1 hidden sm:inline">
            Falar no WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
