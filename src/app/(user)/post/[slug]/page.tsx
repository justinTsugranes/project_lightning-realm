import Image from 'next/image'
import {groq} from 'next-sanity'
import {PortableText} from '@portabletext/react'
import urlFor from '../../../../../lib/urlFor'
import {sanityClient} from '../../../../../lib/sanity.client'

type Props = {
  params: {
    slug: string
  }
}

async function Post({params: {slug}}: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      author-> {
        name,
        image
      }
      ,categories[]->,
    }
  `
  // [_type == "post" && slug.current == $slug][0] {
  //   ...,
  //   author->,
  //   categories[]->,}

  const post = await sanityClient.fetch(query, {slug})

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#0cb3d5] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className=" absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-5 bg-[#0cb3d5] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
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
              <h2 className="italix pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Post
