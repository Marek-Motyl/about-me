import { Header, PageContent, Paragraph } from "@/components/Layout";
import Link from 'next/link';

export default function Contact() {
  return (
    <PageContent >
      <div className="flex flex-col ">
        <Header className="mb-12">
          Let&apos;s talk
        </Header>

        <Paragraph variant="main" className="mb-8">
          Thanks for stopping by. If you&apos;ve got an exciting project, a burning question, or just want to geek out about coding, I&apos;m all ears.
        </Paragraph>

        <Paragraph variant="assistive" className="mb-8">Feel free to shoot me an email, and let is turn ideas into reality together. Whether it is a game-changing software project or just a friendly chat about the latest tech trends, I&apos;m here for it.</Paragraph>

        <div className="flex flex-col items-start gap-2">
          <Link href='mailto:motylmarek90@gmail.com'>motylmarek90@gmail.com</Link>
          <Link href='https://github.com/Marek-Motyl' target="_blank">www.github.com/Marek-Motyl</Link>
          <Link href='https://www.linkedin.com/in/marek-motyl/' target="_blank">www.linkedin.com/in/marek-motyl</Link>
        </div>
      </div>
    </PageContent>
  )
}
