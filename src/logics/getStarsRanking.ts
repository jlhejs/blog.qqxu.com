export function getStarsRankingUrl() {
  const users = [
    'jlhejs',
  ]
  const repos = [
    'vueuse/vueuse',
  ]

  const query = [
    ...users.map(i => `user:${i}`),
    ...repos.map(i => `repo:${i}`),
  ].join(' ')

  const url = `https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=${encodeURIComponent(query)}`
  return url
}
