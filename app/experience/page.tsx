import { data as experienceData } from "@/data/experience.data";
import ExperienceList from "../ui/experience/ExperienceList";
import ShowMore from "@/components/ShowMore";

export default function Experience() {

  // TODO: move wrapper as container to components
  return (
    <div className="w-full">
      <div className="mb-24">
        <h1 className="text-4xl font-bold mb-6">
          Experience
        </h1>
        <p className="text-xl">
          You can explore my experience below, which includes periods when I served as a consultant rather than a direct employee. Additionally, you will find my detailed employment history at the bottom of the page
        </p>
      </div>

      <ExperienceList data={experienceData} />
     
    </div>
  )
}
