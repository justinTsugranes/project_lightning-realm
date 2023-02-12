import Image from 'next/image'

const StudioLogo = (props: any) => {
  const {renderDefault} = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="/lightning-realm.webp"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
