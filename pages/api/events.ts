
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

const CSV_FILE_PATH = path.join(process.cwd(), 'public/data/event_data.csv');

export default function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { updatedEvent, eventId } = req.body;

    fs.readFile(CSV_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to read CSV file' });
      }

      // Parse the CSV data
      const parsedResult = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
      });

      let parsedData: any[] = parsedResult.data;

      // Debug logs
      console.log('eventId:', eventId);
      console.log('parsedData before update:', parsedData);

      // Find the event by id
      const eventIndex = parsedData.findIndex((event: any) => String(event.id) === String(eventId));

      if (eventIndex !== -1) {
        // Ensure the updatedEvent has the same keys as the original event
        parsedData[eventIndex] = { ...parsedData[eventIndex], ...updatedEvent };
        console.log('Updated Event:', parsedData[eventIndex]);
      } else {
        return res.status(404).json({ message: 'Event not found' });
      }

      // Convert the updated array back to CSV format
      const updatedCSV = Papa.unparse(parsedData);

      // Debug log for the updated CSV
      console.log('updatedCSV:', updatedCSV);

      // Write the updated CSV back to the file
      fs.writeFile(CSV_FILE_PATH, updatedCSV, 'utf8', (writeErr) => {
        if (writeErr) {
          return res.status(500).json({ message: 'Failed to write CSV file' });
        }

        // Respond with success message
        res.status(200).json({ message: 'Event updated successfully', data: updatedEvent });
      });
    });
  } else if (req.method === 'GET') {
    // Handle GET request to fetch CSV data

    fs.readFile(CSV_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to read CSV file' });
      }

      // Parse the CSV data
      const parsedResult = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
      });

      let parsedData: any[] = parsedResult.data;

      // Respond with the parsed data
      res.status(200).json({ data: parsedData });
    });
  } else {
    // For non-POST and non-GET requests, return a 405 method not allowed
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
