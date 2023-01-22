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
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7ab0a]">
          <h1 className="font-bold text-white">Created by misfitDodo Media</h1>
          <Link className="text-[#f7ab0a] font-bold ml-2" href="https://www.misfitdodo.com">
            www.misfitdodo.com
          </Link>
        </div>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  )
}

export default StudioNavbar
