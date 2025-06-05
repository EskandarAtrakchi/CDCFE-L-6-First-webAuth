"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CodeEditor() {
  const [showEditor, setShowEditor] = useState(false)

  return (
    <div className="mb-12">
      <Card className="p-4 mb-4">
        {showEditor ? (
          <div className="h-96 border rounded">
            <iframe
              src="https://www.htmlcompiler.ml/"
              width="100%"
              height="100%"
              className="border-none"
              title="HTML Compiler"
            ></iframe>
          </div>
        ) : (
          <div className="flex justify-center items-center h-96 bg-muted/30">
            <Button onClick={() => setShowEditor(true)}>Load Web Development Editor</Button>
          </div>
        )}
      </Card>

      <div className="flex justify-center space-x-4">
        <Button onClick={() => setShowEditor(true)}>Web-DEV</Button>
        <Button onClick={() => window.open("https://www.programiz.com/html/online-compiler/", "_blank")}>
          Full-DEV
        </Button>
      </div>
    </div>
  )
}
