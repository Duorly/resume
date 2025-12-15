<script setup lang="ts">
const { t } = useI18n()

const testimonials = computed(() => [
  {
    user: {
      name: 'Soumya',
      description: t('testimonials.student_superprof_female'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.superprof.fr/ingenieur-logiciel-diplome-6ans-experience-accompagne-niveaux-maitrise-developpement.html',
    quote:
      'Parfait ! Nebel a toujours sur répondre à mes attentes ainsi que de gérer les bug que j\'ai pu générer. disponible à l\'écoute il est très pro dans son milieu je le recommande à 1000%'
  },
  {
    user: {
      name: 'Samy',
      description: t('testimonials.student_superprof'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.superprof.fr/ingenieur-logiciel-diplome-6ans-experience-accompagne-niveaux-maitrise-developpement.html',
    quote:
      "Parfait ! Je recommande vivement Nebel pour ses cours de développement web. Sa pédagogie est géniale et ses compétences techniques m'ont permis de maîtriser tous les aspects de mon projet. Toujours patient et disponible, il sait expliquer clairement les concepts complexes. Grâce à son accompagnement de qualité, j'ai non seulement réussi mon projet mais aussi acquis des bases solides en développement web."
  },
  {
    user: {
      name: 'Hugo Larcher',
      description: t('testimonials.student_superprof'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.superprof.fr/ingenieur-logiciel-diplome-6ans-experience-accompagne-niveaux-maitrise-developpement.html',
    quote:
      'Parfait ! Les cours que je passe avec Nebel sont très instructifs. Il m\'explique par schéma afin d\'intégrer au mieux l\'information indispensable. Il explique très bien et propose des leçons de soutiens afin de continuer à côté si jamais le sujet n\'est pas bien compris. Professionnel et je le recommande vivement !'
  },
  {
    user: {
      name: 'Yatma GUEYE',
      description: t('testimonials.cto'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0',
    quote:
      'J\'ai eu à travailler avec Nebel dans le cadre du développement d\'une application SaaS https://yatouze.com\n' +
      'Nebel a été recruté en tant que développeur Full Stack Nest JS. Il a très vite pris des initiatives pour nous proposer de mieux architecturer le projet; cela démontre sa capacité d\'adaptation et la valeur ajoutée qu\'il peut apporter dans une équipe.\n' +
      'Je recommande vivement Nebel pour son expertise dans le développement logiciel et son sérieux dans le travail en équipe.'
  },
  {
    user: {
      name: 'Vanessa',
      description: t('testimonials.student_superprof_female'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.superprof.fr/ingenieur-logiciel-diplome-6ans-experience-accompagne-niveaux-maitrise-developpement.html',
    quote:
      'Parfait ! Je suis très satisfaite des cours que je suis actuellement avec Nebel pour la création de mon site sous WordPress. Ses explications sont très claires et m\'aident vraiment à progresser. Grâce à lui, j’avance dans la construction de mon site tout en comprenant mieux les différentes fonctionnalités de WordPress. Je recommande vivement Nebel à toute personne qui souhaite apprendre à créer ou améliorer son site de manière efficace.'
  },
  {
    user: {
      name: 'Jamila',
      description: t('testimonials.student_superprof_female'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: 'https://www.superprof.fr/ingenieur-logiciel-diplome-6ans-experience-accompagne-niveaux-maitrise-developpement.html',
    quote:
      "Parfait ! J'ai particulièrement apprécié l'approche de Nebel dans le cadre de mon projet. Il s'est montré très à l'écoute de mes attentes, prenant le temps de bien comprendre mes besoins et mes objectifs. Cette qualité d'écoute attentive a permis d'instaurer une communication claire et fluide dès le départ."
  },
  {
    user: {
      name: 'Ousseynou Koné',
      description: t('testimonials.dev_architect'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: "https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0",
    quote:
      'A highly intelligent and versatile individual, Duorli stands out for his exceptional skills in software engineering. Beyond his technical expertise, he has accumulated a broad range of experiences across multiple domains, having had the opportunity to work in various fields and adapt successfully to diverse challenges. I can attest that without a doubt as his coworker and friend .'
  },
  {
    user: {
      name: 'Mérite Kioungou',
      description: t('testimonials.fullstack_dev'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: "https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0",
    quote:
      "J’ai eu la chance de collaborer avec Nebel dans le cadre de nombreux projets, et je peux affirmer sans doute que c'est l'un des meilleurs mentors et développeurs avec qui il m'ait été donné de travailler.\n" +
      "\n" +
      "En plus de solides compétences techniques dans les tous les aspects du développement d'applications, il se distingue par une capacité de compréhension et d'accompagnement pour son équipe pour laquelle il sait créer un climat de confiance, encourager l’autonomie tout en étant toujours disponible pour guider et débloquer les situations.\n" +
      "\n" +
      "Travailler avec Nebel, c’est apprendre en continu, progresser, et atteindre ses objectifs de façon pérenne\n" +
      " dans une ambiance conviviable. Je le recommande les yeux fermés !"
  },
  {
    user: {
      name: 'Seth Mukinayi Kasalu',
      description: t('testimonials.software_architect'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: "https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0",
    quote:
      "Un profil très professionnel et bon sur le plan technologique. Maitrise parfaite des outils de développement et de l'accélération du secteur du numérique."
  },
  {
    user: {
      name: 'Smile MBAMBI',
      description: t('testimonials.consultant'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: "https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0",
    quote:
      "Nebel est un bon développeurs, nous avons travaillé ensemble dans des grands projets et il m'a personnellement épaté par sa précision et sa logique de raisonnement.\n" +
      "Je vous le recommande et je suis certain que vous ne serez pas déçu."
  },
  {
    user: {
      name: 'Josy Rigis BANZOUZI',
      description: t('testimonials.flutter_dev'),
      avatar: {
        src: '',
        loading: 'lazy'
      }
    },
    to: "https://www.linkedin.com/in/nebel-mass/details/recommendations/?detailScreenTabIndex=0",
    quote:
      "J’ai eu le plaisir de collaborer avec Duorli Nebel Massengo en tant que développeur pendant un an chez XKSGROUP, ainsi que dans le cadre d’autres missions techniques. Il s’est démarqué par sa maîtrise des langages de programmation, des frameworks modernes, ainsi que par ses solides compétences en architecture logicielle. Duorli a notamment su concevoir et structurer des applications robustes, évolutives et bien organisées, en appliquant les bonnes pratiques d’ingénierie logicielle."
  }
])
</script>

<template>
  <section id="menu_contact" class="py-20 px-4 bg-gray-100 dark:bg-slate-900/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('testimonials.title') }}
      </h2>
      <div class="flex flex-col gap-4 w-full">
        <UMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
          <UPageCard v-for="(testimonial, index) in testimonials" :key="index" variant="subtle"
            :description="testimonial.quote" :ui="{
              description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
            }" class="w-96 shrink-0">
            <template #footer>
              <UUser size="xl" :to="testimonial.to ?? null" target="_blank" :name="testimonial.user.name"
                :description="testimonial.user.description" :avatar="testimonial.user?.avatar" :ui="{
                  description: 'text-left',
                  name: 'text-left',
                }" />
            </template>
          </UPageCard>
        </UMarquee>
        <UMarquee pause-on-hover reverse :overlay="false"
          :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
          <UPageCard v-for="(testimonial, index) in testimonials" :key="index" variant="subtle"
            :description="testimonial.quote" :ui="{
              description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
            }" class="w-80 shrink-0">
            <template #footer>
              <UUser v-bind="testimonial.user" size="xl"
                :ui="{ description: 'line-clamp-1 text-left', name: 'text-left' }" />
            </template>
          </UPageCard>
        </UMarquee>
      </div>
    </div>
  </section>
</template>
