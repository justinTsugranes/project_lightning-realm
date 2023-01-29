'use client'

import {motion} from 'framer-motion'

import styles from '../../src/app/styles'
import {newFeatures} from '../constants'
import {NewFeatures, TitleText, TypingText} from '../components'
import {staggerContainer, fadeIn, planetVariants} from '../../utils/motion'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new in MetaVersus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')} className={`flex-1 ${styles.flexCenter}`}>
        <img
          src="/images/whats-new.png"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
)

export default WhatsNew
