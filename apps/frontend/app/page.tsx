import { PageContent } from "@/components/Layout";
import { ExperienceTimer } from "./ui/home";

export default function Home() {
  return (
    <PageContent>
      <div className="whitespace-pre-wrap text-lg md:text-xl flex flex-col gap-6 sm:gap-4 md:gap-3" >
        <p className="font-bold" >Hej &#128075;</p>
        <p>I am Marek</p>
        <p>Full stack developer, specialized in frontend, focused on React</p>
        <p>Huge fan of TypeScript</p>
        <p>I am actively expanding my knowledge in areas such as backend development, automation testing, and DevOps to broaden my skill set and contribute effectively to diverse projects</p>
        <p>Beyond coding, I thrive in collaborative team settings and find joy in mentoring others</p>
        <p>I have been working with software for <ExperienceTimer /></p>
      </div>
    </PageContent>
  )
}
