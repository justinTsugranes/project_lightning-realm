import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/lightning-realm.webp"
            height={50}
            width={50}
            alt="logo"
          />
        </Link>
      </div>

      <div>
        <Link
          className="flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 text-center text-sm drop-shadow-md hover:from-pink-500 hover:to-yellow-500 md:text-base"
          href="https://lightning-realm.vercel.app/"
        >
          ENTER THE LIGHTNING REALM
        </Link>
      </div>
    </header>
  )
}

export default Header
