import Image from 'next/image'

import styles from '../app/styles'

const NewFeatures = ({imgUrl, title, subtitle}) => (
  <div className="mx-auto flex min-w-[210px] max-w-7xl flex-1 flex-col sm:max-w-[250px]">
    <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
      <Image src={imgUrl} alt="icon" className="object/contain h-1/2 w-1/2" />
    </div>
    <h1 className="mt-[26px] text-[24px] font-bold leading-[30px] text-white">{title}</h1>
    <p className="mt-[16px] flex-1 text-[18px] font-normal leading-[32px] text-[#b0b0b0] ">
      {subtitle}
    </p>
  </div>
)

export default NewFeatures
