import { Event } from "@/types/index";
import fs from "fs/promises";

import path from 'path';


export const readCSV = async (csvFilePath: string): Promise<Event[]> => {
    try {
      const data = await fs.readFile(csvFilePath, 'utf8'); // Use the passed csvFilePath
      const lines = data.split('\n').map(line => line.trim());
      const headers = lines[0].split(',').map(header => header.trim());
  
      return lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.trim());
        return headers.reduce(({acc, header, idx}:any) => {
          acc[header] = values[idx];
          return acc;
        }, {} as Event);
      });
    } catch (error) {
      console.error('Error reading CSV file:', error);
      throw error; // Re-throw the error for better logging
    }
  };
  

  export const writeCSV = async (csvFilePath: string, events: Event[]): Promise<void> => {
    try {
      const headers = Object.keys(events[0]);
      const rows = events.map((event:any) =>
        headers.map((key) => event[key]).join(",")
      );
      const csv = [headers.join(","), ...rows].join("\n");
      await fs.writeFile(csvFilePath, csv, "utf-8");
    } catch (error) {
      console.error('Error writing CSV file:', error);
      throw error;
    }
  };
  