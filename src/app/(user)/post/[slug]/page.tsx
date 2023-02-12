import Image from 'next/image'
import {groq} from 'next-sanity'
import {PortableText} from '@portabletext/react'
import {RichTextComponents} from '../../../../components/RichTextComponents'
import urlFor from '../../../../../lib/urlFor'
import {sanityClient} from '../../../../../lib/sanity.client'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60 // In seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"] {
      slug,
    }
  `
  const slugs = await sanityClient.fetch(query)
  const slugRoutes = slugs.map((slug: any) => slug.slug.current)

  return slugRoutes.map((slug: any) => ({
    slug,
  }))
}

async function Post({params: {slug}}: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->,
    }
  `

  const post = await sanityClient.fetch(query, {slug})

  return (
    <article className="px-10 pb-28 ">
      <section className="space-y-2 border border-[#0cb3d5] text-white">
        <div className="min-h-56 relative flex flex-col justify-between md:flex-row">
          <div className=" absolute top-0 h-full w-full p-10 opacity-10 blur-sm">
            <Image
              className="mx-auto object-cover object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              height={40}
              width={40}
              fill
            />
          </div>

          <section className="w-full bg-[#0cb3d5] p-5">
            <div className="flex flex-col justify-between gap-y-5 md:flex-row">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* TODO author bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="pt-10 italic">{post.description}</h2>
              <div className="mt-auto flex items-center justify-end space-x-2">
                {post.categories.map((category: any) => (
                  <p
                    key={category._id}
                    className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  )
}

export default Post
