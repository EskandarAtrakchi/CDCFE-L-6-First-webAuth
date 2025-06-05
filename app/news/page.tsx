import { SoliditySection } from "@/components/news/SoliditySection"
import { ProgrammingLanguagesSection } from "@/components/news/ProgrammingLanguagesSection"
import { CryptocurrencySection } from "@/components/news/CryptocurrencySection"

export default function News() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center my-8 text-purple-600 dark:text-purple-400 drop-shadow-md">
        Blockchain technology & programming using Solidity
      </h1>

      <SoliditySection />
      <ProgrammingLanguagesSection />
      <CryptocurrencySection />
    </div>
  )
}
