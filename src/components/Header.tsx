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
            height={50}
            width={50}
            alt="logo"
          ></Image>
        </Link>
      </div>

      <div>
        <Link
          className="px-5 py-3 tet-sm md:text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex items-center rounded-full text-center drop-shadow-md"
          href="https://www.totalmusicmarketing.com/contact-us"
        >
          Contact us now
        </Link>
      </div>
    </header>
  )
}

export default Header
