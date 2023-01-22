function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">
          Total{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">
            Music
          </span>{' '}
          Marketing
        </h1>
        <h2 className="mt-3 md:mt-1">
          Welcome to <span className="underline decoration-4 decoration-cyan-500">THE Source</span>{' '}
          for marketing in the Musosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Thrive in the New Music Business | Weekly seminars & more!
      </p>
    </div>
  )
}

export default Banner
