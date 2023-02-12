import {Header, Banner, Footer} from '@/components'
// import {About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World} from '../../sections'
import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="relative ">
          <Header />
          <Banner />
        </div>

        <div className="relative">
          {/* <About /> */}
          <div className="gradient-03 z-0" />
          {children}
          {/* <Explore /> */}
          {/* <div className="gradient-04 z-0" /> */}
        </div>

        {/* <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div> */}

        {/* <World /> */}

        {/* <div className="relative">
          <Insights />
          {children}
          <div className="gradient-04 z-0" />
          <Feedback />
        </div> */}

        <div className="relative">
          <div className="footer-gradient" />
          <Footer />
        </div>
      </body>
    </html>
  )
}
