'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

import styles from '../../src/app/styles'
import {TitleText, TypingText} from '../components'
import {fadeIn, staggerContainer} from '../../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer('0.1s', '0.2s')}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <Image src="/map.webp" alt="map" className="h-full w-full object-cover" />

        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <Image src="people-01.webp" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <Image src="/people-02.webp" alt="people" className="h-full w-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
          <Image src="people-03.webp" alt="people" className="h-full w-full" />
        </div>
        <div className="absolute top-12 right-64 w-[200px] rounded-[24px] bg-[#5d6680] p-[6px]">
          <Image src="world-01.webp" alt="world" className="h-full w-full" />
        </div>
        <div className="absolute bottom-36 left-72 w-[200px] rounded-[24px] bg-[#5d6680] p-[6px]">
          <Image src="world-02.webp" alt="world" className="h-full w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
