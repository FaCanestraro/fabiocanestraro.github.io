<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <Header />

    <main class="container mx-auto px-4 pt-32 pb-20">
      <!-- Header Section -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Meus Projetos
        </h1>
        <p class="text-xl text-gray-400">
          Projetos profissionais desenvolvidos com foco em performance, segurança e escalabilidade
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        <!-- Project 1: Middleware E-commerce -->
        <div class="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            <svg class="w-20 h-20 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">Enterprise</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
              Middleware E-commerce Vtex & Wake
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Middleware robusto para integração de gateways de pagamento com plataformas Vtex e Wake. Solução que transformou a empresa em provedor oficial de pagamentos, atendendo todas as regras e requisitos das plataformas.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30">PHP</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Laravel</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">APIs REST</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">Webhooks</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Integração Enterprise</span>
            </div>
          </div>
        </div>

        <!-- Project 2: Intranet -->
        <div class="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10"></div>
            <svg class="w-20 h-20 text-green-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">Internal</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
              Intranet Corporativa
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Sistema interno completo para gestão de tarefas diárias dos colaboradores. Plataforma centralizada para processos internos, comunicação e produtividade da equipe.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">Vue.js</span>
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30">PHP</span>
              <span class="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">MySQL</span>
              <span class="px-3 py-1 bg-lime-500/20 text-lime-400 text-xs rounded-full border border-lime-500/30">Node.js</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span>Gestão de Equipes</span>
            </div>
          </div>
        </div>

        <!-- Project 3: API Portal RH -->
        <div class="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10"></div>
            <svg class="w-20 h-20 text-purple-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded">Sistema RH</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
              API Portal RH
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Sistema completo de gestão de recursos humanos, incluindo controle de funcionários, folhas de pagamento, benefícios e processamento automatizado de dados.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Laravel</span>
              <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">APIs REST</span>
              <span class="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full border border-teal-500/30">PostgreSQL</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">Redis</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Gestão de Folha de Pagamento</span>
            </div>
          </div>
        </div>

        <!-- Project 4: Segurança -->
        <div class="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-red-400/50 transition-all duration-300 hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10"></div>
            <svg class="w-20 h-20 text-red-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded">Segurança</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">
              Implementações de Segurança
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Implementação de camadas avançadas de segurança em aplicações web, incluindo criptografia SHA256, assinaturas HMAC, ofuscação de JavaScript, OAuth 2.0 e autenticação de dois fatores (2FA).
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">SHA256</span>
              <span class="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">HMAC</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">OAuth 2.0</span>
              <span class="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full border border-pink-500/30">2FA</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>Segurança Avançada</span>
            </div>
          </div>
        </div>

        <!-- Project 5: Otimizações -->
        <div class="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2">
          <div class="h-48 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-amber-600/10"></div>
            <svg class="w-20 h-20 text-yellow-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded">Performance</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              Otimizações de Performance
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              Refatoração e otimização de fluxos críticos, como a disponibilização de DDA. Redução impressionante de 45 minutos para ~30 segundos no processamento de arquivos FTP com boletos e atualizações.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full border border-indigo-500/30">PHP</span>
              <span class="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">Otimização</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">FTP</span>
              <span class="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Refatoração</span>
            </div>

            <div class="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <span>99.3% mais rápido (45min → 30s)</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
</script>
