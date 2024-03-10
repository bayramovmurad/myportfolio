import AboutMe from '@/components/about-me'
import Experience from '@/components/expreience'
import Introduction from '@/components/introduction'
import Navbar from '@/components/navbar'
import Services from '@/components/services'


const page = () => {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/>
    </main>
  )
}
export default page