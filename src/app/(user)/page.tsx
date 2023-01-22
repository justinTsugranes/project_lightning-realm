import {previewData} from 'next/headers'
import {groq} from 'next-sanity'

const query = groq`
*[_type == "post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`

export default function Home() {
  if (previewData()) {
    return <div>Preview mode</div>
  }

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  )
}
