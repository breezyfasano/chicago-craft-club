import { getAllPosts, getPostBySlug } from '../../library/api'
import { PortableText } from '@portabletext/react'

function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <section className='container'>
        <PortableText value={post.body} />
      </section>
    </div>
  )
}

export async function getStaticProps({ params }) {
  if (params) {
    const post = await getPostBySlug(params.slug)
    return {
      props: {
        post,
      },
    }
  }
}

export async function getStaticPaths() {
  const res = await getAllPosts()
  const paths = res.map((post) => {
    return {
      params: {
        slug: post.slug.current,
      },
    }
  })
  return { paths, fallback: false }
}

export default Post
