import { data as experienceData } from "@/api/experience.data";
import ExperienceList from "../ui/experience/ExperienceList";
import { Header, PageContent, Paragraph } from "@/components/Layout";

export default function Experience() {
  return (
    <PageContent className="flex flex-col">
      <Header className="mb-12">
        Experience
      </Header>

      <Paragraph variant="main" className="mb-8">
        You can explore my experience below, which includes periods when I served as a consultant. Additionally, you will find my detailed employment history at the bottom of the page
      </Paragraph>

      <ExperienceList data={experienceData} />

      <div className="flex flex-col items-center gap-6 mt-28">
        <div>To be continued...</div>
      </div>
    </PageContent>
  );
}
