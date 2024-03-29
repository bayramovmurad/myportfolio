import AboutMe from '@/components/about-me'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Introduction from '@/components/introduction'
import Navbar from '@/components/navbar'
import Portfolio from '@/components/portfolio'
import Services from '@/components/services'



const page = () => {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}
export default page