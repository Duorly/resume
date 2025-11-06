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
  <section id="menu_contact" class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('work_together') }}
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
            class="block"
        >
          <UiSpotlightCard
              class-name="border border-slate-700/50 hover:border-cyan-500/50"
              spotlight-color="rgba(6, 182, 212, 0.15)"
          >
            <div class="flex flex-col items-center p-2 group">
              <UIcon
                  class="mb-4 text-cyan-400 group-hover:scale-110 transition-transform"
                  :name="contact.icon"
                  size="28"
              />

              <p class="text-sm text-slate-400 mb-2">{{ contact.label }}</p>
              <p
                  class="text-white font-semibold"
                  :class="contact.external ? 'flex items-center justify-center gap-2' : ''">
                {{ contact.value }}
                <UIcon v-if="contact.external" name="mi:external-link" size="22"/>
              </p>
            </div>
          </UiSpotlightCard>
        </a>
      </div>
    </div>
  </section>
</template>