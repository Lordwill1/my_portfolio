'use client'
import ProfileBar from "./components/ProfileBar"
import AboutMe from "./components/AboutMe"
import BackToTop from "./components/BackToTop"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen h-full p-[2%] bg-smoky-black gap-10">
      <ProfileBar />
      <AboutMe />
      <BackToTop targetId={"top"} />
    </main>
  )
}
