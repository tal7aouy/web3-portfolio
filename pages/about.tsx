/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '@src/containers/framerAnimations'
import Icons from '../src/components/Icons/Icons'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>tal7aouy - Abouts</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Put your description here." />
      </Head>
      <section className=" max-w-5xl w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <motion.div initial="initial" animate="animate" className="divide-y divide-gray-800">
          <div className=" space-y-2 md:space-y-5">
            <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img src="/profile1.jpg" alt="avatar" className="w-48 h-48 rounded-xl" />
              <h3 className="pt-4 text-2xl text-gray-900  dark:text-gray-200 md:text-3xl font-bold leading-8 tracking-tight">
                Mhammed Talhaouy
              </h3>
              <div className="md:text-lg text-gray-800  dark:text-gray-400 mb-2 md:mt-1">Web3 Developer</div>
              <Icons />
            </div>{' '}
            <div className="font-normal lg:pt-4 pb-8 lg:col-span-2 text-base sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <motion.div variants={stagger}>
                <motion.p variants={fadeInUp} className="mb-4">
                  Hello! I&apos;m Mhammed, a Web3 developer based Morocco 🍁.
                </motion.p>
                <motion.p variants={fadeInUp} className="mb-4">
                  I’m a self-taught developer working on all things front-end. I have experience designing and
                  developing applications for the web, from simple landing pages to progressive web applications.
                </motion.p>
                <motion.p variants={fadeInUp} className="mb-4">
                  Currently, I&apos;m a software engineer at{' '}
                  <a
                    className="text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-700 dark:focus:text-indigo-700"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.fiverr.com/"
                  >
                    fiverr
                  </a>{' '}
                  focused on builing blockchain applications
                </motion.p>

                <motion.p variants={fadeInUp} className="mb-4">
                  When I’m not in front of a computer screen, I am probably working out, riding my bike, or reading a
                  book.
                </motion.p>
                <motion.p variants={fadeInUp} className="mb-4">
                  Here are a few technologies I&apos;ve been working with recently:
                </motion.p>
                <motion.ul variants={fadeInUp} className="md:flex ">
                  <div>
                    <li className="mb-0.25">▸ React</li>
                    <li className="mb-0.25">▸ Solidity</li>
                    <li className="mb-0.25">▸ TypeScript</li>
                    <li className="mb-0.25">▸ JavaScript</li>
                  </div>

                  <div className="md:ml-20">
                    <li className="mb-0.25">▸ Laravel</li>
                    <li className="mb-0.25">▸ PHP</li>
                    <li className="mb-0.25">▸ TailwindCss</li>
                    <li className="mb-0.25">▸ Vue </li>
                  </div>
                </motion.ul>
              </motion.div>{' '}
            </div>{' '}
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About
