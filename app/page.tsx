import AboutMe from '@/components/about-me'
import Introduction from '@/components/introduction'
import Navbar from '@/components/navbar'


const page = () => {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction/>
      <AboutMe/>
    </main>
  )
}
export default page