"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/CodeBlock"

export default function WalletGenerator() {
  const [wallet, setWallet] = useState({
    address: "Click on the button below to generate BTC real crypto wallet address",
    type: "BTC",
  })

  const wallets = [
    { address: "mjhEpQ7xzBxfViqC2Cge5gBrvF9DipiTqn", type: "BTC" },
    { address: "mjrBQJuLxxpKC8UDpQX8FR69dEArNQiPTq", type: "BTC" },
    { address: "16NQBpN4FRjDCNHw4vay4qc5py6mTvUMzC", type: "BTC" },
    { address: "17M4YU127o8APdnN9uhQBFpyu8WwFY781V", type: "BTC" },
    { address: "1JCMDjju4rghdDqCZvPbaUDUsvauWcPbMT", type: "BTC" },
    { address: "19Ky1npG5wDoxXMS2Pn618DTk4cG16hLDW", type: "BTC" },
    { address: "1BDUaa278jqZAhiYTwsysioApp4d7fMYq9", type: "BTC" },
  ]

  const generateWallet = () => {
    const randomIndex = Math.floor(Math.random() * wallets.length)
    setWallet(wallets[randomIndex])
  }

  const codeExample = `
let btn = document.querySelector('#new-qoute');
let person = document.querySelector('.person');
let qoute = document.querySelector('.qoute');

const qoutes = [{
  qoute: 'mjhEpQ7xzBxfViqC2Cge5gBrvF9DipiTqn',
  person: 'BTC'
},
// More wallet addresses...
];

btn.addEventListener('click', function() {
  let Random = Math.floor(Math.random() * qoutes.length);
  
  qoute.innerText = qoutes[Random].qoute;
  person.innerText = qoutes[Random].person;
});
  `

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8">Cryptocurrency Wallet Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">BTC Wallet Generator</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="bg-black/50 p-6 rounded-lg w-full mb-6">
              <p className="text-lg font-mono break-all">{wallet.address}</p>
              <p className="text-sm text-right mt-2">{wallet.type}</p>
            </div>
            <Button onClick={generateWallet} className="glow-effect">
              Generate New Address
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code">
              <TabsList className="mb-4">
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <CodeBlock code={codeExample} language="javascript" />
              </TabsContent>
              <TabsContent value="explanation">
                <p className="text-muted-foreground">
                  This wallet generator uses JavaScript to randomly select from a predefined list of Bitcoin addresses.
                  In a real-world application, you would use cryptographic libraries to generate secure, unique wallet
                  addresses.
                </p>
                <p className="text-muted-foreground mt-4">
                  For educational purposes, this demo shows how to implement a basic random selection mechanism. The
                  code selects a random wallet address from an array and displays it to the user.
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Note:</strong> Never use randomly selected addresses for actual cryptocurrency transactions.
                  Always generate unique addresses using proper cryptographic methods.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
