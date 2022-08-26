// Sanity CMS Methods
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'yz069ur9',
  dataset: 'production',
  apiVersion: '2022-08-01',
  token: `${process.env.SANITY_API_TOKEN}`,
  useCdn: false,
})

// Sanity Client queries with GROQ - sanity.io/docs/how-queries-work
// IMPORTANT: !(_id in path("drafts.**")) appended returns all published pages (Filters out drafts of pages)

export async function getAllPosts() {
  try {
    const data = await client.fetch(`*[_type == 'post' &&
    !(_id in path("drafts.**"))]`)
    return data
  } catch (err) {
    console.log(err)
  }
}

export async function getPostBySlug(slug) {
  try {
    const allPosts = await getAllPosts()
    const post = allPosts.find((post) => post.slug.current === slug)
    if (!post) throw new Error('Unable to find post by slug')
    return post
  } catch (err) {
    console.log(err)
  }
}
