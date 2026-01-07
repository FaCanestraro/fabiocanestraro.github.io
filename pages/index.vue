<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div class="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Greeting -->
          <div class="mb-6 inline-block">
            <span class="text-blue-400 font-mono text-sm tracking-wider uppercase border border-blue-400/30 px-4 py-2 rounded-full bg-blue-400/10">
              Bem-vindo ao meu portfólio
            </span>
          </div>

          <!-- Name -->
          <h1 class="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Fábio Canestraro
          </h1>

          <!-- Title -->
          <p class="text-2xl md:text-3xl text-gray-300 mb-4">
            Desenvolvedor <span class="text-blue-400 font-semibold">Full Stack</span>
          </p>

          <!-- Description -->
          <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformando ideias em experiências digitais incríveis através de código limpo e design inovador
          </p>

          <!-- Tech Stack -->
          <div class="mb-12">
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-6">Tecnologias que domino</p>
            <div class="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              <span class="group px-5 py-2.5 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 border border-indigo-500/30 rounded-xl text-sm font-medium text-indigo-300 hover:border-indigo-400 hover:bg-indigo-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-indigo-500/10">
                PHP
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl text-sm font-medium text-red-300 hover:border-red-400 hover:bg-red-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-red-500/10">
                Laravel
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl text-sm font-medium text-yellow-300 hover:border-yellow-400 hover:bg-yellow-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-yellow-500/10">
                JavaScript
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-xl text-sm font-medium text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-emerald-500/10">
                Vue.js
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-cyan-500/10">
                React
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300 hover:border-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-blue-500/10">
                TypeScript
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-lime-500/10 to-lime-600/10 border border-lime-500/30 rounded-xl text-sm font-medium text-lime-300 hover:border-lime-400 hover:bg-lime-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-lime-500/10">
                Node.js
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-sky-500/10 to-sky-600/10 border border-sky-500/30 rounded-xl text-sm font-medium text-sky-300 hover:border-sky-400 hover:bg-sky-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-sky-500/10">
                MySQL
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-teal-500/10 to-teal-600/10 border border-teal-500/30 rounded-xl text-sm font-medium text-teal-300 hover:border-teal-400 hover:bg-teal-500/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-teal-500/10">
                PostgreSQL
              </span>
              <span class="group px-5 py-2.5 bg-gradient-to-br from-green-600/10 to-green-700/10 border border-green-600/30 rounded-xl text-sm font-medium text-green-300 hover:border-green-500 hover:bg-green-600/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg shadow-green-600/10">
                MongoDB
              </span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/projetos"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              <span class="relative z-10">Ver Projetos</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </NuxtLink>

            <NuxtLink
              to="/contato"
              class="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all"
            >
              Entre em Contato
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold mb-8 text-center">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-colors">
              <div class="text-blue-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Desenvolvimento</h3>
              <p class="text-gray-400">
                Especializado em criar aplicações web modernas e responsivas com as melhores práticas de desenvolvimento
              </p>
            </div>

            <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-400/50 transition-colors">
              <div class="text-purple-400 mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3">Design</h3>
              <p class="text-gray-400">
                Focado em criar interfaces intuitivas e experiências de usuário que encantam e convertem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>