import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#0cb3d5]">
          <ArrowUturnLeftIcon className="mr-2 h-5 w-5 text-[#0cb3d5]" />
          Go To Website
        </Link>
        <div className="hidden justify-center rounded-lg border-2 border-[#0cb3d5] p-5 md:flex">
          <h1 className="font-bold text-white">Created by misfitDodo Media</h1>
          <Link className="ml-2 font-bold text-[#0cb3d5]" href="https://www.misfitdodo.com">
            www.misfitdodo.com
          </Link>
        </div>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  )
}

export default StudioNavbar
