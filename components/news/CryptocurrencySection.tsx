"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CryptocurrencySection() {
  const [showPrices, setShowPrices] = useState(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div className="md:col-span-3">
        <p className="mb-4">
          Cryptocurrencies are digital or virtual currencies that use cryptography for secure financial transactions.
          Bitcoin, which was created in 2009, is the first and most widely known cryptocurrency. Since then, numerous
          cryptocurrencies have been created, and their popularity has grown significantly in recent years.
        </p>

        <p className="mb-4">
          One of the main reasons for the rise in cryptocurrencies is the increasing acceptance of them as a legitimate
          form of payment and investment. In the past decade, the value of many cryptocurrencies has increased
          significantly. For example, the price of Bitcoin, the largest and most well-known cryptocurrency, has gone up
          from less than $1 in 2010 to over $50,000 in 2021. Other cryptocurrencies have also seen significant price
          increases.
        </p>

        <p className="mb-4">
          However, it's important to note that the prices of cryptocurrencies are highly volatile and can fluctuate
          significantly over short periods of time. This means that investing in cryptocurrencies carries a high level
          of risk, and it's important for individuals to carefully consider their investment decisions before committing
          any funds.
        </p>
      </div>

      <Card className="p-4 flex items-center justify-center">
        {showPrices ? (
          <div className="w-full h-full">
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes"
              width="100%"
              height="409px"
              scrolling="auto"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
              style={{ border: 0, margin: 0, padding: 0 }}
            ></iframe>
          </div>
        ) : (
          <Button onClick={() => setShowPrices(true)}>Show Live Crypto Prices</Button>
        )}
      </Card>

      <div className="md:col-span-4 flex justify-center">
        <Button onClick={() => window.open("/live-prices", "_blank")} variant="outline">
          Open Live Prices in New Window
        </Button>
      </div>
    </div>
  )
}
