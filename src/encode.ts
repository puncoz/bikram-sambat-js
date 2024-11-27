import * as fs from "node:fs"

import daysInMonths from "@/data/days-in-months.json"

const encoded = Object.entries(daysInMonths).reduce((acc, [year, daysInMonth]) => {
  const binaryDifferences = daysInMonth
    .map((days) => (days - 29).toString(2).padStart(2, "0"))
    .reverse()
    .join("")

  return { ...acc, [year]: parseInt(binaryDifferences, 2) }
}, {})

const encodedFilepath = "./src/data/encoded-mappings.json"

fs.writeFile(encodedFilepath, JSON.stringify(encoded, null, 2), (err) => {
  if (err) {
    console.error("Error writing encoded file:", err)
  } else {
    console.log(`Encoded mappings written to ${encodedFilepath}`)
  }
})
