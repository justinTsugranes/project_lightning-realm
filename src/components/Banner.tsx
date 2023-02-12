function Banner() {
  return (
    <div className="mx-auto mb-10 flex max-w-7xl flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="text-7xl drop-shadow-md">
          the{' '}
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
            Lightning
          </span>{' '}
          Realm
        </h1>
        <h2 className="mt-3 md:mt-1">
          Welcome to <span className="underline decoration-cyan-500 decoration-4">THE Source</span>{' '}
          for technologies that are shaping the future of web development
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-cyan-200 drop-shadow-md md:mt-2">
        Using cutting-edge tech to provide in-depth coverage of the most modern tools and trends
        {/* in the technology space */}
        {/* | Weekly podcasts & more! */}
      </p>
    </div>
  )
}

export default Banner
