<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
    <!-- Navigation -->
    <nav
        :class="[
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
              NM
            </div>
            <span class="font-bold text-xl">Nebel Massengo</span>
          </div>

          <div class="hidden md:flex space-x-8">
            <a
                v-for="item in menuItems"
                :key="item"
                :href="`#${item.toLowerCase().replace(/\s+/g, '-').replace(/à/g, 'a')}`"
                class="hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              {{ item }}
            </a>
          </div>

          <button
              @click="isMenuOpen = !isMenuOpen"
              class="md:hidden text-white"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-slate-950/98 backdrop-blur-lg">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <a
              v-for="item in menuItems"
              :key="item"
              :href="`#${item.toLowerCase().replace(/\s+/g, '-').replace(/à/g, 'a')}`"
              class="block px-3 py-2 hover:bg-slate-800 rounded-lg transition-colors"
              @click="isMenuOpen = false"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-16">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8 inline-block">
          <div class="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl shadow-cyan-500/50 animate-pulse">
            NM
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Nebel Massengo
        </h1>

        <p class="text-2xl md:text-3xl mb-4 text-cyan-300 font-semibold">
          Développeur Full Stack
        </p>

        <p class="text-lg md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
          6 ans d'expérience en développement web et mobile, architecture logicielle et cloud (AWS, GCP).
          Passionné par la création de solutions performantes et l'accompagnement technique d'équipes.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a
              href="mailto:nebel.mass@gmail.com"
              class="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Me contacter
          </a>
          <a
              href="https://github.com/Duorly"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +33 7 75 72 55 82
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Île-de-France
          </div>
        </div>

        <div class="mt-16 animate-bounce">
          <svg class="w-8 h-8 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="a-propos" class="py-20 px-4 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          À propos
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-cyan-400">Profil</h3>
            <p class="text-slate-300 leading-relaxed">
              Développeur Full Stack avec <strong>6 ans d'expérience</strong>, spécialisé dans la conception de solutions robustes et optimisées.
              Expert en architecture logicielle et déploiement cloud, j'ai piloté des projets en méthodologie agile et accompagné des équipes techniques vers l'excellence.
            </p>
          </div>

          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <h3 class="text-2xl font-bold mb-4 text-cyan-400">Recherche</h3>
            <div class="space-y-3 text-slate-300">
              <p><strong class="text-white">Type de poste :</strong> CDI - Développeur Full Stack / Tech Lead</p>
              <p><strong class="text-white">Disponibilité :</strong> Immédiate</p>
              <p><strong class="text-white">Mobilité :</strong> Île-de-France</p>
              <p><strong class="text-white">Permis :</strong> B</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="competences" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Compétences Techniques
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div
              v-for="(category, index) in skillCategories"
              :key="index"
              class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div class="flex items-center gap-3 mb-6">
              <svg :class="`text-${category.color}`" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
              </svg>
              <h3 :class="`text-2xl font-bold text-${category.color}`">{{ category.title }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="(skill, i) in category.skills"
                  :key="i"
                  :class="`px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium hover:bg-${category.color.split('-')[0]}-600/20 hover:text-${category.color.split('-')[0]}-300 transition-colors`"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experiences" class="py-20 px-4 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Expériences Professionnelles
        </h2>

        <div class="space-y-6">
          <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-cyan-400 mb-2">{{ exp.title }}</h3>
                <p class="text-xl text-white font-semibold">{{ exp.company }}</p>
                <p class="text-slate-400">{{ exp.location }}</p>
              </div>
              <div class="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="font-medium">{{ exp.period }}</span>
              </div>
            </div>
            <ul class="space-y-2 mt-4">
              <li
                  v-for="(task, i) in exp.tasks"
                  :key="i"
                  class="flex items-start gap-3 text-slate-300"
              >
                <span class="text-cyan-400 mt-1">▹</span>
                <span>{{ task }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="formation" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Formation
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div
              v-for="(edu, index) in education"
              :key="index"
              class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <svg class="text-cyan-400 mb-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h3 class="text-xl font-bold text-white mb-2">{{ edu.degree }}</h3>
            <p class="text-cyan-400 font-semibold mb-2">{{ edu.school }}</p>
            <p class="text-slate-400 text-sm mb-2">{{ edu.level }}</p>
            <p class="text-slate-500 text-sm">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 bg-slate-900/50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Travaillons ensemble
        </h2>

        <p class="text-xl text-slate-300 mb-12 leading-relaxed">
          Je suis actuellement à la recherche d'un <strong class="text-white">CDI en tant que Développeur Full Stack ou Tech Lead</strong>.
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
            <svg class="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon" />
            </svg>
            <p class="text-sm text-slate-400 mb-2">{{ contact.label }}</p>
            <p class="text-white font-semibold" :class="contact.external ? 'flex items-center justify-center gap-2' : ''">
              {{ contact.value }}
              <svg v-if="contact.external" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </p>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-slate-800">
      <div class="max-w-6xl mx-auto text-center text-slate-400">
        <p>© 2025 Nebel Massengo - Tous droits réservés</p>
        <p class="text-sm mt-2">Développeur Full Stack • 6 ans d'expérience • Île-de-France</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = ['À propos', 'Compétences', 'Expériences', 'Formation', 'Contact'];

const skillCategories = [
  {
    title: 'Backend',
    color: 'cyan-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['PHP (Laravel, Symfony)', 'Java (Spring Boot)', 'Python', 'Node.js (Express, NestJS)']
  },
  {
    title: 'Frontend',
    color: 'purple-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['Vue.js', 'Nuxt', 'React', 'Angular']
  },
  {
    title: 'Cloud & DevOps',
    color: 'blue-400',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    skills: ['AWS', 'GCP', 'Cloudflare']
  },
  {
    title: 'Outils & Méthodologies',
    color: 'green-400',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: ['Docker', 'CI/CD (Jenkins, Github Actions)', 'Git', 'Jira', 'Scrum/Agile']
  }
];

const experiences = [
  {
    title: 'Tech Lead',
    company: 'XKSGROUP',
    location: 'Cergy, France',
    period: 'Oct 2024 - Présent',
    tasks: [
      'Conception d\'architecture technique et validation des choix technologiques',
      'Revue de code et gestion de la dette technique',
      'Mentorat et accompagnement des développeurs',
      'Documentation et veille technologique'
    ]
  },
  {
    title: 'Tech Lead Backend',
    company: 'FASEYA',
    location: 'Dakar, Sénégal',
    period: 'Mai - Sept 2024',
    tasks: [
      'Développement backend et déploiement sur AWS',
      'Gestion de la dette technique et choix d\'architectures',
      'Encadrement technique des développeurs',
      'Mise en œuvre de bonnes pratiques'
    ]
  },
  {
    title: 'Tech Lead / Chef de projet',
    company: 'Nanocreatives',
    location: 'Brazzaville, Congo',
    period: 'Oct 2023 - Mars 2024',
    tasks: [
      'Conception et développement de solutions logicielles',
      'Déploiement d\'applications sur cloud Linux',
      'Pilotage de projets agiles',
      'Gestion DNS et certificats de sécurité'
    ]
  },
  {
    title: 'Consultant IT',
    company: 'UNFPA (Nations Unies)',
    location: 'Brazzaville, Congo',
    period: 'Sept - Nov 2023',
    tasks: [
      'Déploiement de la plateforme GLPI',
      'Collecte des besoins secteur santé',
      'Production de rapports statistiques',
      'Supervision des agents GLPI'
    ]
  },
  {
    title: 'Consultant Développeur',
    company: 'AGRER - Union Européenne',
    location: 'Brazzaville, Congo',
    period: 'Janv - Juin 2022',
    tasks: [
      'Développement d\'une application agricole',
      'Pilotage de projet et coordination d\'équipes',
      'Collaboration avec la délégation UE',
      'Formation de plus de 300 utilisateurs'
    ]
  }
];

const education = [
  {
    degree: 'Mastère Expert Lead Développeur Fullstack',
    school: 'ITIC Paris',
    level: 'Niveau 7 (BAC +5)',
    period: '2024 - 2026'
  },
  {
    degree: 'Bachelor Développeur Concepteur d\'Application',
    school: 'OpenClassrooms',
    level: 'Niveau 6 (BAC +3/4)',
    period: '2022 - 2023'
  },
  {
    degree: 'Licence en Informatique',
    school: 'Université Marien Ngouabi',
    level: 'Brazzaville',
    period: '2018 - 2021'
  }
];

const contacts = [
  {
    label: 'Email',
    value: 'nebel.mass@gmail.com',
    link: 'mailto:nebel.mass@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    external: false
  },
  {
    label: 'Téléphone',
    value: '+33 7 75 72 55 82',
    link: 'tel:+33775725582',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    external: false
  },
  {
    label: 'GitHub',
    value: '@Duorly',
    link: 'https://github.com/Duorly',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    external: true
  }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .8;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>