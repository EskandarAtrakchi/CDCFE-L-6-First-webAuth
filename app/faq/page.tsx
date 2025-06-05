"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "Where can I learn programming?",
      answer:
        "Here is a link for a TikTok channel to get started: <a href='https://www.tiktok.com/@itiscoded?lang=en' class='text-blue-500 hover:underline'>Click here</a>.",
    },
    {
      question: "What is blockchain?",
      answer:
        "Blockchain is a distributed ledger technology that allows for secure, transparent, and tamper-evident record-keeping. It is often used for applications such as cryptocurrency transactions and supply chain management.",
    },
    {
      question: "What is Solidity?",
      answer:
        "Solidity is a programming language specifically designed for writing smart contracts for the Ethereum blockchain. It is a high-level, object-oriented language that is similar to JavaScript and C++ in syntax.",
    },
    {
      question: "What are smart contracts?",
      answer:
        "Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein are stored and replicated on the blockchain network.",
    },
    {
      question: "How do I get started with web development?",
      answer:
        "To get started with web development, you should learn HTML, CSS, and JavaScript. These are the fundamental technologies of the web. After that, you can explore frameworks like React, Angular, or Vue.js.",
    },
    {
      question: "What programming language should I learn first?",
      answer:
        "Python is often recommended as a first programming language due to its simple syntax and readability. However, the best language to learn first depends on your goals. If you're interested in web development, JavaScript might be a better choice.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Card className="p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  )
}
