'use client'
import ProfileBar from "../components/ProfileBar"
import MyJourney from "../components/MyJourney"
import BackToTop from "../components/BackToTop"


export default function Home() {
  return (
    <main className="w-full min-h-screen h-full p-[2%] bg-smoky-black gap-10">
      <ProfileBar />
      <MyJourney />
      <BackToTop targetId={"top"} />
    </main>
  )
}
