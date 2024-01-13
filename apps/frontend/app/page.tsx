import { ExperienceTimer } from "./ui/home";

export default function Home() {
  return (
    <div className="whitespace-pre-wrap text-lg flex flex-col gap-6 sm:gap-4 md:gap-3 lg:gap-2" >
      <p>Hej &#128075;</p>
      <p>I am Marek</p>
      <p>Software engineer, specialized in frontend development, focused on React</p>
      <p>Huge fan of TypeScript</p>
      <p>I am actively expanding my knowledge in areas such as backend development, automation testing, and DevOps to broaden my skill set and contribute effectively to diverse projects</p>
      <p>Beyond coding, I thrive in collaborative team settings and find joy in mentoring others</p>
      <p>I have been working with software for <ExperienceTimer /></p>
    </div>
  )
}
