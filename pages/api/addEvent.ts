import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library

const CSV_FILE_PATH = path.join(process.cwd(), "public/data/event_data.csv");

export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const event = req.body;
    console.log("event123456790", event);
    const newEvent = { ...event, id: uuidv4() };
    const formattedEvent = {
      ...newEvent.addNewEvent,
      id: newEvent.id,
    };
    fs.readFile(CSV_FILE_PATH, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading CSV file:", err);
        return res.status(500).json({ message: "Failed to read CSV file" });
      }

      const parsedResult = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
      });

      let parsedData: any[] = parsedResult.data;
      parsedData.push(formattedEvent);
      const updatedCSV = Papa.unparse(parsedData);
      fs.writeFile(CSV_FILE_PATH, updatedCSV, "utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing CSV file:", writeErr);
          return res.status(500).json({ message: "Failed to write CSV file" });
        }
        res
          .status(200)
          .json({ message: "Event added successfully", data: newEvent });
      });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
