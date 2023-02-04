'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'

import styles from '../app/styles'
import {startingFeatures} from '../constants'
import {StartSteps, TitleText, TypingText} from '../components'
import {staggerContainer, fadeIn, planetVariants} from '../../utils/motion'

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer('0.1s', '0.2s')}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
        <Image
          src="/images/get-started.png"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText
          title="| How Metaversus Works"
          textStyles={'text-[14px] font-normal text-secondary-white'}
        />
        <TitleText
          title={<>Get started with just a few clicks</>}
          textStyles={'mt-[8px] text-[40px] font-bold text-white md:text-[64px]'}
        />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''}${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted
