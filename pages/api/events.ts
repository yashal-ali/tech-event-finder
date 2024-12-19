import fs from "fs";
import path from "path";
import Papa from "papaparse";

const CSV_FILE_PATH = path.join(process.cwd(), "public/data/event_data.csv");

export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { updatedEvent, eventId } = req.body;

    fs.readFile(CSV_FILE_PATH, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Failed to read CSV file" });
      }
      const parsedResult = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
      });

      let parsedData: any[] = parsedResult.data;
      console.log("eventId:", eventId);
      console.log("parsedData before update:", parsedData);
      const eventIndex = parsedData.findIndex(
        (event: any) => String(event.id) === String(eventId)
      );

      if (eventIndex !== -1) {
        parsedData[eventIndex] = { ...parsedData[eventIndex], ...updatedEvent };
        // console.log("Updated Event:", parsedData[eventIndex]);
      } else {
        return res.status(404).json({ message: "Event not found" });
      }
      const updatedCSV = Papa.unparse(parsedData);
      // console.log("updatedCSV:", updatedCSV);

      fs.writeFile(CSV_FILE_PATH, updatedCSV, "utf8", (writeErr) => {
        if (writeErr) {
          return res.status(500).json({ message: "Failed to write CSV file" });
        }
        res
          .status(200)
          .json({ message: "Event updated successfully", data: updatedEvent });
      });
    });
  } else if (req.method === "GET") {
    fs.readFile(CSV_FILE_PATH, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ message: "Failed to read CSV file" });
      }
      const parsedResult = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
      });

      let parsedData: any[] = parsedResult.data;
      res.status(200).json({ data: parsedData });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
