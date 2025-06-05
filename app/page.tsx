import { HeroSection } from "@/components/HeroSection"
import { ProgrammingTable } from "@/components/ProgrammingTable"
import { ProgrammingCards } from "@/components/ProgrammingCards"
import { HtmlSection } from "@/components/HtmlSection"
import { CodeEditor } from "@/components/CodeEditor"
import { ProgressBar } from "@/components/ProgressBar"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <HeroSection />
      <ProgrammingTable />
      <ProgrammingCards />
      <HtmlSection />
      <CodeEditor />
      <ProgressBar />
    </div>
  )
}
