import type { Talk } from '~/types'

export const talks: Talk[] = [
  {
    series: 'Anthony\'s Road to Open Source - Part 3',
    title: 'Yak Shaving',
    description: 'The art of yak shaving and how it can help you to build better open source projects.',
    presentations: [
      {
        date: '2024-07-06',
        location: 'Shenzhen, China',
        conference: 'VueConf Shenzhen',
        conferenceUrl: 'https://vue.w3ctech.com/',
        recording: 'https://www.bilibili.com/video/BV1XT421r7xy',
        pdf: 'https://talks.antfu.me/2024-07-06/pdf',
        spa: 'https://talks.antfu.me/2024/vueconf-shenzhen',
      },
      {
        date: '2024-10-19',
        location: 'Tokyo, Japan',
        conference: 'Vue Fes Japan',
        conferenceUrl: 'https://vuefes.jp/2024/en/',
      },
    ],
  },
]

talks.forEach((talk) => {
  talk.presentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

talks.sort((a, b) => {
  return new Date(b.presentations[0].date).getTime() - new Date(a.presentations[0].date).getTime()
})
