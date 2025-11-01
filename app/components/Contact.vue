<script setup lang="ts">
const contacts = [
  {
    label: 'Email',
    value: 'nebel.mass@gmail.com',
    link: 'mailto:nebel.mass@gmail.com',
    icon: 'lucide:mail',
    external: false
  },
  {
    label: 'Téléphone',
    value: '+33 7 75 72 55 82',
    link: 'tel:+33775725582',
    icon: 'lucide:phone',
    external: false
  },
  {
    label: 'GitHub',
    value: '@Duorly',
    link: 'https://github.com/Duorly',
    icon: 'lucide:github',
    external: true
  }
];
</script>

<template>
  <section id="contact" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Travaillons ensemble
      </h2>

      <p class="text-xl text-slate-300 mb-12 leading-relaxed">
        Je suis actuellement à la recherche d'un <strong class="text-white">CDI en tant que Développeur Full Stack ou
        Tech Lead</strong>.
        N'hésitez pas à me contacter pour discuter de vos projets !
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a
            v-for="contact in contacts"
            :key="contact.label"
            :href="contact.link"
            :target="contact.external ? '_blank' : undefined"
            :rel="contact.external ? 'noopener noreferrer' : undefined"
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
        >
          <UIcon
              class="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform w-8 h-8"
              :name="contact.icon"/>

          <p class="text-sm text-slate-400 mb-2">{{ contact.label }}</p>
          <p class="text-white font-semibold" :class="contact.external ? 'flex items-center justify-center gap-2' : ''">
            {{ contact.value }}
            <svg v-if="contact.external" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </p>
        </a>
      </div>
    </div>
  </section>
</template>