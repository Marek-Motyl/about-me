import { PageContent } from "@/components/Layout";
import Link from 'next/link';

export default function Contact() {
  return (
    <PageContent >
      <div className="flex flex-col ">
        <h1 className="text-6xl font-bold mb-12">
          Let&apos;s talk
        </h1>

        <p className="text-2xl max-w-maxText-xl mb-8">
          Thanks for stopping by. If you&apos;ve got an exciting project, a burning question, or just want to geek out about coding, I&apos;m all ears.
        </p>

        <p className="text-lg max-w-maxText-lg mb-4">Feel free to shoot me an email, and let is turn ideas into reality together. Whether it is a game-changing software project or just a friendly chat about the latest tech trends, I&apos;m here for it.</p>

        <div className="flex flex-col gap-2">
          <Link href='mailto:motylmarek90@gmail.com'>motylmarek90@gmail.com</Link>
          <Link href='https://github.com/Marek-Motyl' target="_blank">www.github.com/Marek-Motyl</Link>
          <Link href='https://www.linkedin.com/in/marek-motyl/' target="_blank">www.linkedin.com/in/marek-motyl</Link>
        </div>
      </div>
    </PageContent>
  )
}
