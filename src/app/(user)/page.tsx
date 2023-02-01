import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import {sanityClient} from '../../../lib/sanity.client'
import {BlogList, PreviewSuspense, PreviewBlogList} from '../../components'
import {About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World} from '../../sections'

const query = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`

export const revalidate = 60

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="animate-pulse text-center text-lg text-[#0cb3d5]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await sanityClient.fetch(query)

  return (
    <div>
      <About />
      <BlogList posts={posts} />
    </div>
  )
}
