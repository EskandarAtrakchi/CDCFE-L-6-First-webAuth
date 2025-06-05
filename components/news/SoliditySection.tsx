"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SoliditySection() {
  const [showIframe, setShowIframe] = useState(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <p className="mb-6">
          Blockchain is a distributed database that allows for secure and transparent record-keeping and transfer of
          data or assets. Cryptocurrencies, such as Bitcoin and Ethereum, are digital assets that use blockchain
          technology to facilitate secure and decentralized financial transactions.
        </p>

        <p className="mb-6">
          Solidity is a programming language specifically designed for writing smart contracts on the Ethereum
          blockchain. Smart contracts are self-executing contracts with the terms of the agreement between buyer and
          seller being directly written into lines of code.
        </p>

        <p className="mb-6">
          They are stored on the blockchain and can be triggered automatically when certain conditions are met.
        </p>

        <p className="mb-6">
          Using a programming language like Solidity to build on the blockchain allows developers to create
          decentralized applications (DApps) and automate processes in a secure and transparent manner.
        </p>
      </div>

      <div className="bg-muted rounded-lg overflow-hidden h-80">
        {showIframe ? (
          <iframe
            src="https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.8+commit.dddeac2f.js"
            width="100%"
            height="100%"
            title="Solidity IDE"
          ></iframe>
        ) : (
          <div className="h-full flex items-center justify-center">
            <Button onClick={() => setShowIframe(true)}>Load Solidity IDE</Button>
          </div>
        )}
      </div>

      <Button
        onClick={() =>
          window.open(
            "https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.8+commit.dddeac2f.js",
            "_blank",
          )
        }
        className="md:col-span-2"
      >
        Open Solidity IDE in New Window
      </Button>
    </div>
  )
}
