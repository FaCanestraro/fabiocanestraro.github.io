<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span class="text-white font-bold text-xl">FC</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </div>
          <span class="text-xl font-bold text-white hidden sm:block">
            Fábio Canestraro
          </span>
        </NuxtLink>

        <!-- Navigation Links -->
        <ul class="flex gap-8 items-center">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              Início
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/projetos"
              class="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              Projetos
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contato"
              class="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contato
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>