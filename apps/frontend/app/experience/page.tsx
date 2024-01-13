import { data as experienceData } from "@/data/experience.data";
import ExperienceList from "../ui/experience/ExperienceList";
import { PageContent } from "@/components/Layout";

export default function Experience() {

  return (
    <PageContent className="flex flex-col">
      <div className="mb-24">
        <h1 className="text-6xl font-bold mb-6">
          Experience
        </h1>
        <p className="text-2xl">
          You can explore my experience below, which includes periods when I served as a consultant. Additionally, you will find my detailed employment history at the bottom of the page
        </p>
      </div>

      <ExperienceList data={experienceData} />
    </PageContent>
  )
}
