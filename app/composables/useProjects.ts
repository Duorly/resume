export interface Project {
    id: string
    title: string
    description: string
    fullDescription: string
    features: string[]
    tags: string[]
    images: string[]
    link: string
    demo: string
    color: string
    icon: string
}

import image1 from '~/assets/images/projects/iticparis/itic-companion-login.png'
import image2 from '~/assets/images/projects/iticparis/itic-companion-dashboard.png'
import image3 from '~/assets/images/projects/iticparis/itic-companion-assignment.png'
import image4 from '~/assets/images/projects/iticparis/itic-companion-note.png'
import image5 from '~/assets/images/projects/iticparis/itic-companion-note2.png'

import iticmobile from '~/assets/images/projects/iticparis-mobile/itic-mobile.png'
import iticmobile2 from '~/assets/images/projects/iticparis-mobile/itic-mobile-2.png'
import iticmobile3 from '~/assets/images/projects/iticparis-mobile/itic-mobile-3.png'
import iticmobile4 from '~/assets/images/projects/iticparis-mobile/itic-mobile-4.png'
import iticmobile5 from '~/assets/images/projects/iticparis-mobile/itic-mobile-5.png'

import bp1 from '~/assets/images/projects/bpc-congo/image1.png'
import bp2 from '~/assets/images/projects/bpc-congo/image2.png'
import bp3 from '~/assets/images/projects/bpc-congo/image3.png'

export const useProjects = () => {
    const { t, tm, rt } = useI18n()

    const projects = computed<Project[]>(() => [
        {
            id: 'itic-teacher',
            title: t('projects.itic_teacher.title'),
            description: t('projects.itic_teacher.description'),
            fullDescription: t('projects.itic_teacher.full_description'),
            features: (tm('projects.itic_teacher.features') as any[] || []).map(f => rt(f)),
            tags: ['Vue.js', 'Nuxt', 'Spring Boot', 'PostgreSQL'],
            images: [image1, image2, image3, image4, image5],
            link: 'https://github.com/Duorly',
            demo: 'https://github.com/Duorly',
            color: 'cyan',
            icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        },
        {
            id: 'itic-student',
            title: t('projects.itic_student.title'),
            description: t('projects.itic_student.description'),
            fullDescription: t('projects.itic_student.full_description'),
            features: (tm('projects.itic_student.features') as any[] || []).map(f => rt(f)),
            tags: ['React', 'Next.js', 'NestJS', 'MongoDB'],
            images: [iticmobile, iticmobile2, iticmobile3, iticmobile4, iticmobile5],
            link: 'https://github.com/Duorly',
            demo: 'https://github.com/Duorly',
            color: 'blue',
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        },
        {
            id: 'banque-postale',
            title: t('projects.banque_postale.title'),
            description: t('projects.banque_postale.description'),
            fullDescription: t('projects.banque_postale.full_description'),
            features: (tm('projects.banque_postale.features') as any[] || []).map(f => rt(f)),
            tags: ['Angular', 'Laravel', 'MySQL', 'AWS'],
            images: [bp1, bp2, bp3],
            link: 'https://github.com/Duorly',
            demo: 'https://github.com/Duorly',
            color: 'purple',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        }
    ])

    const getProjectById = (id: string) => {
        return projects.value.find(p => p.id === id)
    }

    return {
        projects,
        getProjectById
    }
}
