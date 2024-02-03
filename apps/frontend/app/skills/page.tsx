import { softSkills, techSkills } from "@/api/skills.data";
import { Header, PageContent, Paragraph } from "@/components/Layout";
import SkillsSection from "../ui/skills/SkillsSection";

export default function Experience() {
  return (
    <PageContent className="flex flex-col">
      <Header className="mb-12">
        Skills
      </Header>
      <Paragraph variant="main" className="mb-8">
        In my career, I embrace the idea of continuous development. For me, education is not a destination but an ongoing journey.
        I&apos;m enthusiastic about growing, adapting to new things, and I realize that each experience is an opportunity to learn and refine my skills. I enjoy pushing boundaries and diving into challenges.
      </Paragraph>

      <div className="flex flex-col md:flex-row gap-6 ">
        <SkillsSection skills={softSkills} sectionName="Soft skills:" />
        <SkillsSection skills={techSkills} sectionName="Technical skills:" />
      </div>
    </PageContent>
  );
}
