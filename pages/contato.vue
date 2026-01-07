<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <Header />

    <main class="container mx-auto px-4 pt-32 pb-20">
      <!-- Header Section -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Vamos Conversar
        </h1>
        <p class="text-xl text-gray-400">
          Tenho um projeto em mente? Estou sempre aberto a novas oportunidades e colaborações
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-blue-400">Envie uma Mensagem</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                placeholder="Seu nome"
                required
              />
            </div>

            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                placeholder="seu@email.com"
                required
              />
            </div>

            <!-- Subject Input -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500"
                placeholder="Sobre o que você quer falar?"
                required
              />
            </div>

            <!-- Message Textarea -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-500 resize-none"
                placeholder="Sua mensagem..."
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Info Cards -->
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-400/50 transition-colors">
            <div class="flex items-start gap-4">
              <div class="bg-blue-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">E-mail</h3>
                <a href="mailto:fabiocanestraro@hotmail.com.br" class="text-gray-400 hover:text-blue-400 transition-colors">
                  fabiocanestraro@hotmail.com.br
                </a>
              </div>
            </div>
          </div>

          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-400/50 transition-colors">
            <div class="flex items-start gap-4">
              <div class="bg-purple-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Localização</h3>
                <p class="text-gray-400">
                  Curitiba, Brasil
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-400/50 transition-colors">
            <div class="flex items-start gap-4">
              <div class="bg-green-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Telefone</h3>
                <a href="tel:+5541991771845" class="text-gray-400 hover:text-green-400 transition-colors">
                  +55 (41) 99177-1845
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div class="flex gap-4">
              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/fabio-canestraro/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-12 h-12 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://www.instagram.com/fabiocanestraro/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-12 h-12 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-pink-400 hover:bg-pink-400/10 transition-all"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Formulário enviado:', form.value)
  alert('Mensagem enviada com sucesso! (Isso é apenas uma demonstração)')

  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
