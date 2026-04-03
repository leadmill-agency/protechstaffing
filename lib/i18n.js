import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEN from '@/locales/en/common.json'
import homeEN from '@/locales/en/home.json'
import employersEN from '@/locales/en/employers.json'
import jobSeekersEN from '@/locales/en/jobSeekers.json'
import aboutEN from '@/locales/en/about.json'
import industriesEN from '@/locales/en/industries.json'
import locationsEN from '@/locales/en/locations.json'
import jobsEN from '@/locales/en/jobs.json'
import applyEN from '@/locales/en/apply.json'

import commonES from '@/locales/es/common.json'
import homeES from '@/locales/es/home.json'
import employersES from '@/locales/es/employers.json'
import jobSeekersES from '@/locales/es/jobSeekers.json'
import aboutES from '@/locales/es/about.json'
import industriesES from '@/locales/es/industries.json'
import locationsES from '@/locales/es/locations.json'
import jobsES from '@/locales/es/jobs.json'
import applyES from '@/locales/es/apply.json'

import commonVI from '@/locales/vi/common.json'
import homeVI from '@/locales/vi/home.json'
import employersVI from '@/locales/vi/employers.json'
import jobSeekersVI from '@/locales/vi/jobSeekers.json'
import aboutVI from '@/locales/vi/about.json'
import industriesVI from '@/locales/vi/industries.json'
import locationsVI from '@/locales/vi/locations.json'
import jobsVI from '@/locales/vi/jobs.json'
import applyVI from '@/locales/vi/apply.json'

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('protech-lang') : null

i18n.use(initReactI18next).init({
  resources: {
    en: { common: commonEN, home: homeEN, employers: employersEN, jobSeekers: jobSeekersEN, about: aboutEN, industries: industriesEN, locations: locationsEN, jobs: jobsEN, apply: applyEN },
    es: { common: commonES, home: homeES, employers: employersES, jobSeekers: jobSeekersES, about: aboutES, industries: industriesES, locations: locationsES, jobs: jobsES, apply: applyES },
    vi: { common: commonVI, home: homeVI, employers: employersVI, jobSeekers: jobSeekersVI, about: aboutVI, industries: industriesVI, locations: locationsVI, jobs: jobsVI, apply: applyVI },
  },
  lng: savedLang || 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('protech-lang', lng)
  }
})

export default i18n
