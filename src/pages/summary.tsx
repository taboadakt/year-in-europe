/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navigation from "../components/Navigation";
import { trips } from "../data";
import Heading from "../components/Heading";
enum Tense {
  past = "past",
  present = "present",
  future = "future",
}
const getTense = ({ start, end }: { start: string; end: string }): Tense => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const today = new Date();
  if (startDate < today && today < endDate) return Tense.present;
  if (endDate < today) return Tense.past;
  return Tense.future;
};

const SummaryPage: React.FC<PageProps> = () => {
  const sortedTrips = trips.sort((a, b): number => {
    const aDate = new Date(a.dates.start);
    const bDate = new Date(b.dates.start);
    if (aDate > bDate) return -1;
    if (aDate < bDate) return 1;
    return 0;
  });
  return (
    <main sx={{ marginBottom: "100px" }}>
      <Navigation />
      <Heading>Trip Summary</Heading>
      <div sx={{ marginX: "10vw" }}>
        {sortedTrips.map((trip, i) => {
          const myTense = getTense(trip.dates);
          const color = myTense === Tense.past ? "secondary" : "primary";
          const fontWeight = myTense === Tense.present ? "bold" : "body";
          return (
            <div
              key={i}
              sx={{ padding: 1, color, fontFamily: "body", fontWeight }}
            >
              {trip.dates.start} - {trip.dates.end}: {trip.city}, {trip.country}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SummaryPage;

export const Head: HeadFC = () => <title>Trip Summary Page</title>;
