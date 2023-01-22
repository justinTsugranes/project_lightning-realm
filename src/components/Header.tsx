import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex justify-between space-x-2 items-center  font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/TotalMusicMarketingLogo.png"
            width={50}
            height={50}
            alt="logo"
          ></Image>
        </Link>
      </div>

      <div></div>
    </header>
  )
}

export default Header
