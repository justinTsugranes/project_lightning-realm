import {Reference, Slug} from 'sanity'

type Base = {
  _createdAt: string
  _updatedAt: string
  _id: string
  _rev: string
  _type: string
}

interface Post extends Base {
  author: Author
  body: Block[]
  categories: Category[]
  mainImage: Image
  slug: Slug
  title: string
  description: string
}

interface Author extends Base {
  name: string
  image: Image
  bio: Block[]
  slug: Slug
}

interface Image {
  _type: 'image'
  asset: Reference
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Block {
  _type: 'block'
  _key: string
  children: Span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
  _type: 'span'
  _key: string
  marks: string[]
  text: string
}

interface Category extends Base {
  title: string
  description: string
}

interface MainImage {
  _type: 'image'
  asset: Reference
}

interface Title {
  _type: 'string'
  current: string
}

interface TextStyles {
  color: string
  fontSize: string
}
