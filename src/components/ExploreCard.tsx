'use client'

import {motion} from 'framer-motion'

import styles from '../../src/app/styles'
import {fadeIn} from '../../utils/motion'

// Declare the ExploreCard component
const ExploreCard = ({id, imgUrl, title, index, active, handleClick}) => (
  // Render a div element with the specified variants and class names
  <motion.div
    // Apply the specified fadeIn animation with the given parameters
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      // Conditionally apply a different set of flex values based on the active prop
      active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    } ease-out-flex flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.7s]`}
    // Set the onClick event handler to the handleClick prop function
    onClick={() => handleClick(id)}
  >
    {/* Render an img element with the specified src, alt, and class names */}
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {/* Conditionally render either a h3 element or a div element based on the active prop */}
    {active !== id ? (
      // {/* Render a h3 element with the specified class names */}
      <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {/* Render the title prop */}
        {title}
      </h3>
    ) : (
      // {/* Render a div element with the specified class names */}
      <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
        {/* Render a div element with the specified class names */}
        <div
          className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px]  rounded-[24px]`}
        >
          {/* Render an img element with the specified src, alt, and class names */}
          <img src="/headset.svg" alt="headset" className="h-1/2 w-1/2 object-contain" />
        </div>
        {/* Render a paragraph element with the specified class names */}
        <p className="text-[16px] font-normal uppercase leading-[20px] text-white">
          Enter The Metaverse
        </p>
        <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">{title}</h2>
      </div>
    )}
  </motion.div>
)

export default ExploreCard
