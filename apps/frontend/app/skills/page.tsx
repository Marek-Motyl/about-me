import { WorkInProgress } from "@/components/Icons";
import { PageContent } from "@/components/Layout";

export default function Skills() {
  return (
    <PageContent className="flex justify-center" >
      <div className="flex flex-col items-center gap-6">
        <div> Work in progress</div>
        <WorkInProgress size={64} />
      </div>
    </PageContent>
  )
}
