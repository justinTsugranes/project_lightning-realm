import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7ab0a] flex items-center">
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2 text-[#f7ab0a]" />
          Go To Website
        </Link>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  )
}

export default StudioNavbar
