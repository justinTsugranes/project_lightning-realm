import {previewData} from 'next/headers'

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
