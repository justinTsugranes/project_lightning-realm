import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2  px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/lightning-realm.png"
            height={50}
            width={50}
            alt="logo"
          ></Image>
        </Link>
      </div>

      <div>
        <Link
          className="tet-sm flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-center drop-shadow-md hover:from-pink-500 hover:to-yellow-500 md:text-base"
          href="https://www.totalmusicmarketing.com/contact-us"
        >
          Contact us now
        </Link>
      </div>
    </header>
  )
}

export default Header
