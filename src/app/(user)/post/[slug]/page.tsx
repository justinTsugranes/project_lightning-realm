import Image from 'next/image'
import {groq} from 'next-sanity'
import urlFor from '../../../../../lib/urlFor'
import {sanityClient} from '../../../../../lib/sanity.client'

type Props = {
  params: {
    slug: string
  }
}

async function Post({params: {slug}}: Props) {
  const query = groq`
  [_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
  }
  `

  const post = await sanityClient.fetch(query, {slug})

  return (
    <article>
      <section>
        <div className="relative">
          <div className="">
            {/* <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            /> */}
          </div>
        </div>
      </section>
    </article>
  )
}

export default Post
