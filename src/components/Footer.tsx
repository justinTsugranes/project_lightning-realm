'use client'

import Link from 'next/link'
import {motion} from 'framer-motion'
import {socials} from '../constants'

import styles from '../app/styles'
import {footerVariants} from '../../utils/motion'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} relative py-8 `}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white drop-shadow-md md:text-[64px]">
          Enter the Realm
        </h4>

        {/* TODO: add conditional route: (userIsLoggedIn ? content : signup) */}
        <Link
          className="flex h-fit items-center gap-[12px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-6 text-center text-sm drop-shadow-md hover:from-pink-500 hover:to-yellow-500 md:text-base "
          href="https://lightning-realm.vercel.app"
        >
          {/* <img
            src="/images/headset.svg"
            alt="headset"
            className="h-[24px] w-[24px] object-contain"
          /> */}
          <span className="text-[16px] font-normal text-white">ENTER THE LIGHTNING REALM</span>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold text-white drop-shadow-md">
            theLightningRealm
          </h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright 2022 - theLightningRealm. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.url}>
                <img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="h-[24px] w-[24px] cursor-pointer object-contain drop-shadow-md"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)

export default Footer
