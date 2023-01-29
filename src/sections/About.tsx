'use client'

import {motion} from 'framer-motion'
import {TypingText} from '../components'

import styles from '../../src/app/styles'
import {fadeIn, staggerContainer} from '../../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-secondary-white mt-[8px] text-center text-[20px] font-normal sm:text-[32px]"
      >
        Step into <span className="font-extrabold text-white">the future</span> of web development.
        As pioneers in exploring the latest and greatest in tech, we bring you the inside scoop on
        the tools and trends <span className="font-extrabold text-white">shaping the industry</span>
        . So, gear up and <span className="font-extrabold text-white">join us</span> on this
        thrilling journey through the constantly evolving world of{' '}
        <span className="font-extrabold text-white">web development and emerging technologies</span>
        .
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/images/arrow-down.svg"
        alt="arrow down"
        className="mt-[28px] h-[28px] w-[18px] object-contain"
      />
    </motion.div>
  </section>
)

export default About
