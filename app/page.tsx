import Hero from "@/components/hero"
import About from "@/components/about"
import NewReleases from "@/components/new-releases"
import Gallery from "@/components/gallery"
import Awards from "@/components/awards"
import Contact from "@/components/contact"
import News from "@/components/news"

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="new-releases">
        <NewReleases />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="awards">
        <Awards />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

