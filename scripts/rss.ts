import { dirname } from 'path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { FeedOptions, Item } from 'feed'
import { Feed } from 'feed'

const DOMAIN = 'http://blog.jlhe.com'
const AUTHOR = {
  name: 'jlhe',
  email: 'hi@blog.jlhe.com',
  link: DOMAIN,
}
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

async function run() {
  await buildBlogRSS()
}

async function buildBlogRSS() {
  const files = await fg('pages/posts/*.md')

  const options = {
    title: 'jlhe',
    description: 'jlhe\' Blog',
    id: 'http://blog.jlhe.com/',
    link: 'http://blog.jlhe.com/',
    copyright: 'CC BY-NC-SA 4.0 2021 © jlhe',
    feedLinks: {
      json: 'http://blog.jlhe.com/feed.json',
      atom: 'http://blog.jlhe.com/feed.atom',
      rss: 'http://blog.jlhe.com/feed.xml',
    },
  }
  const posts: any[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async (i) => {
          const raw = await fs.readFile(i, 'utf-8')
          const { data, content } = matter(raw)

          if (data.lang !== 'en')
            return

          const html = markdown.render(content)
            .replace('src="/', `src="${DOMAIN}/`)

          if (data.image?.startsWith('/'))
            data.image = DOMAIN + data.image

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            author: [AUTHOR],
            link: DOMAIN + i.replace(/^pages(.+)\.md$/, '$1'),
          }
        }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('feed', options, posts)
}

async function writeFeed(name: string, options: FeedOptions, items: Item[]) {
  options.author = AUTHOR
  options.image = 'http://blog.jlhe.com/avatar.png'
  options.favicon = 'http://blog.jlhe.com/logo.png'

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))
  // items.forEach(i=> console.log(i.title, i.date))

  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}

run()
