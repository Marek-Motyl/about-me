import { data as experienceData } from "@/data/experience.data";
import ExperienceList from "../ui/experience/ExperienceList";
import { PageContent } from "@/components/Layout";
import { WorkInProgress } from "@/components/Icons";

export default function Experience() {

  return (
    <PageContent className="flex flex-col">
      <div className="mb-24">
        <h1 className="text-6xl font-bold mb-12">
          Experience
        </h1>
        <p className="text-2xl max-w-maxText-xl">
          You can explore my experience below, which includes periods when I served as a consultant. Additionally, you will find my detailed employment history at the bottom of the page
        </p>
      </div>

      <ExperienceList data={experienceData} />

      <div className="flex flex-col items-center gap-6 mt-28">
        <div>To be continued...</div>
      </div>
      
    </PageContent>
  )
}
