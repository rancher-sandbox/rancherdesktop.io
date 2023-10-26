import React  from 'react'
import { motionListItems } from '@/assets/animations'
import { VideoBox } from '@/components/VideoBox'
import { motion } from 'framer-motion'
import { DownloadButtons } from '@/components/DowloadButtons'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Rancher Desktop by SUSE</title>
        <meta name='description' content='Open source desktop application that provides Kubernetes, Container Management, bundled utilities on the desktop' />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='grid grid-flow-row gap-8 text-sm'>
        {/** 👀 Call to Action section */}
        <div className='dark:bg-customDark bg-gray-100 relative'>
          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-2 mx-auto w-5/6 2xl:w-4/6 py-20'>
            <motion.div initial='hidden' animate='visible' variants={motionListItems} className='self-center'>
              <p className='text-3xl font-thin text-left text-secondary-dark dark:text-primary flex items-center'>
                <img src='/images/icon-rancher-desktop.svg' alt='Rancher Desktop Icon' className='h-12 w-12 mr-4' />
                Rancher Desktop by SUSE
              </p>
              <br/>
              <p className='text-4xl mt-4'>
                Container Management and Kubernetes on the Desktop
              </p>
              <br/>
              <DownloadButtons />
            </motion.div>

            <div className='col-span-1'>
              <VideoBox url='https://www.youtube.com/embed/DKUzfjjuPHI' />
            </div>
          </div>
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <p className='text-3xl my-4 text-left text-secondary-dark dark:text-primary'>Why use Rancher Desktop?</p>
          <div className='grid grid-flow-row md:grid-cols-3 gap-14 mb-10'>
            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Simple Installation</h2>
              <p className='text-bold my-4 text-sm'>Simple installation for macOS, Windows & Linux</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
               macOS and Windows users can simply download the respective installer and install. Linux users can install via popular package managers. Optional auto upgrade feature to automatically download and install new versions.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Configuration options</h2>
              <p className='text-bold my-4 text-sm'>Use with the default configuration or customize to fit your needs.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Ability to choose container engine, Kubernetes version, enable/disable application features. Options to configure networking settings, control access to container repositories, registries and more.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Intuitive Graphical User Interface</h2>
              <p className='text-bold my-4 text-sm'>User friendly GUI features, Dashboards</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Well thought through GUI features to manage images, containers, application configuration and more. Full blown cluster dashboard that helps you explore and manage local Kubernetes resources.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Container Toolchain</h2>
              <p className='text-bold my-4 text-sm'>Build, Pull, Push, Scan images. Run Containers.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                CLI and GUI based features to support day to day tasks in container based development workflows. Integrates well with popular IDEs, other tools in the cloud native ecosystem.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Seamless Kubernetes upgrades</h2>
              <p className='text-bold my-4 text-sm'>Easily test the impact of Kubernetes upgrades on your workloads</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Provides options to seamlessly apply Kubernetes upgrades to your  workloads so that you can detect any problems before they impact production environments.
              </motion.p>
            </div>

            <div>
              <h2 className='text-secondary-dark dark:text-primary font-light text-lg'>Bundled utilities</h2>
              <p className='text-bold my-4 text-sm'>Popular tools out of the box.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Includes most recent versions of popular open source CLI tools such as docker, nerdctl, helm, trivy, and more, eliminating the need for you to obtain and manage these tools separately.
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 Key capabilities */}
        <div className='dark:bg-secondary-dark bg-gray-100 relative'>
          <div className='grid grid-row-2 content-center align-middle md:grid-cols-1 mx-auto w-5/6 2xl:w-4/6 py-10'>
            <p className='text-3xl my-4 text-left text-secondary-dark dark:text-primary'>Key Capabilities</p>
          </div>
          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-2 mx-auto w-5/6 2xl:w-4/6 py-10'>
            <motion.div initial="hidden" animate="visible" variants={motionListItems} className="self-center">
              <h3 className="text-2xl font-thin">Simple Application Configuration</h3>
              <p className="text-lg mt-4">
                Through a user-friendly Preferences dialog, you can easily configure different parts of the application:
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm">
                <li>Configure to auto start Rancher Desktop at machine login</li>
                <li>Choose the Kubernetes version</li>
                <li>Select your container engine</li>
                <li>Configure system resources for the virtual machine (on macOS and Linux)</li>
                <li>Reset Kubernetes or both Kubernetes and the container runtime to default with a single click</li>
                <li>and more...</li>
              </ul>
            </motion.div>

            <div className="col-span-1">
              <img src="/images/macOS_application_tabBehavior.png" alt="Rancher Desktop Kubernetes settings screen" className="img-fluid shadow-xl border-radius-lg max-height-500"/>
            </div>
          </div>

          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-2 mx-auto w-5/6 2xl:w-4/6 py-10'>
            <motion.div initial="hidden" animate="visible" variants={motionListItems} className="self-center">
              <h3 className="text-2xl font-thin">Port Forwarding</h3>
              <p className="text-lg mt-4">
                Port forward your Kubernetes services with the click of a button.
              </p>
            </motion.div>

            <div className="col-span-1">
              <img src="/images/port-forward.png" alt="Rancher Desktop port forwarding menu" className="img-fluid shadow-xl border-radius-lg max-height-500"/>
            </div>
          </div>

          <div className='grid grid-row-2 content-center align-middle gap-14 md:grid-cols-2 mx-auto w-5/6 2xl:w-4/6 py-10'>
            <motion.div initial="hidden" animate="visible" variants={motionListItems} className="self-center">
              <h3 className="text-2xl font-thin">Build and Run Containers</h3>
              <p className="text-lg mt-4">
              Using with <i>nerdctl</i> or the <i>Docker</i> CLI you can build, run, and otherwise work with images and containers.
              </p>
            </motion.div>

            <div className="col-span-1">
              <img src="/images/terminal.gif" alt="Terminal showing docker commands with Rancher Desktop" className="img-fluid shadow-xl border-radius-lg max-height-500"/>
            </div>
          </div>

          <div className='grid grid-row-2 content-center align-middle md:grid-cols-1 mx-auto w-5/6 2xl:w-4/6 py-10'>
            <p className='text-3xl my-8 text-left text-secondary-dark dark:text-primary'>How it works?</p>
            <img src="/images/how-it-works-rancher-desktop.svg" alt="img-shadow" className="w-full mx-auto" />
            <br/>
            <p className="text-gray-700 dark:text-gray-300">
              Rancher Desktop is an Electron-based application that wraps other tools while providing a simple user experience. On macOS and Linux, Rancher Desktop uses a virtual machine to run containerd or Docker and Kubernetes. For Windows systems, it leverages Windows Subsystem for Linux v2. To get started, simply download and run the application.
            </p>
          </div>
        </div>

        {/** 👀 Get involved */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10'>
            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get involved</p>

              <p>Rancher Desktop is an open source project hosted on GitHub.</p>
              <p>Bugs and features are tracked through issues and new code is reviewed through pull requests.</p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/rancher-sandbox/rancher-desktop/issues ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/rancher-sandbox/rancher-desktop/pulls ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get support</p>

              <p>Found an issue or have a problem? Community support happens in the #rancher-desktop channel in Slack and in GitHub Issues, where you can search and file new issues. </p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://slack.rancher.io/ ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Rancher Users Slack
                </a>
                <a href='https://github.com/rancher-sandbox/rancher-desktop/issues ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
