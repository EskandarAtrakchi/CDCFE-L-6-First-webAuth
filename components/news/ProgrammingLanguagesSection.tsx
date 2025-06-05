"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProgrammingLanguagesSection() {
  const [showChart, setShowChart] = useState(false)

  useEffect(() => {
    if (showChart) {
      // Load Google Charts
      const script = document.createElement("script")
      script.src = "https://www.gstatic.com/charts/loader.js"
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        if (window.google && window.google.charts) {
          window.google.charts.load("current", { packages: ["corechart"] })
          window.google.charts.setOnLoadCallback(drawChart)
        }
      }

      function drawChart() {
        const data = new window.google.visualization.arrayToDataTable([
          ["Programming Language", "Demand"],
          ["Java", 8],
          ["Python", 6],
          ["C++", 4],
          ["C#", 3],
          ["JavaScript", 7],
          ["Solidity", 3],
        ])

        const options = {
          title: "Programming Languages Demand Index (2020)",
          titleTextStyle: {
            color: "#FF5555",
          },
          width: 500,
          height: 500,
          backgroundColor: "transparent",
          legend: {
            textStyle: {
              color: "#FF5555",
            },
          },
        }

        const chart = new window.google.visualization.PieChart(document.getElementById("piechart"))
        chart.draw(data, options)
      }

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showChart])

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">
        Programming languages that are in demand in 2020
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Solidity is a programming language used to create smart contracts on the Ethereum blockchain.
          </p>
          <p className="mb-4">
            It allows developers to build decentralized applications that facilitate, verify, and enforce the
            negotiation or performance of a contract.
          </p>
          <p className="mb-4">
            These applications have the potential to revolutionize industries such as supply chain management, finance,
            and voting systems. Java, Python, C++, C#, and JavaScript are also popular programming languages used in the
            development of a variety of applications, including web, mobile, and desktop applications.
          </p>
          <p className="mb-4">
            These languages have high demand due to their reliability, performance, versatility, and large developer
            communities.
          </p>
        </div>

        <Card className="p-4 flex items-center justify-center">
          {showChart ? (
            <div id="piechart" className="w-full h-80"></div>
          ) : (
            <Button onClick={() => setShowChart(true)}>Show Programming Languages Demand Chart</Button>
          )}
        </Card>
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={() => window.open("/piechart", "_blank")} variant="outline">
          Open Chart in New Window
        </Button>
      </div>
    </div>
  )
}
