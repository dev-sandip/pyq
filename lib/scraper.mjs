import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

// Object to store all semester data
const allSemesterData = {};

async function scrape(url, semesterKey) {
  try {
    // Load page
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results = [];

    const pageTitle = $("h1.blink").text().trim();
    console.log(`Scraping data for: ${semesterKey} - ${pageTitle}`);

    // Extract links and text
    $('tr[bgcolor="lightgreen"] a').each((i, el) => {
      const text = $(el).text().trim();
      const link = $(el).attr("href");

      if (text && link) {
        results.push({
          text: text,
          link: link
        });
      }
    });

    // Store in the main object
    allSemesterData[semesterKey] = results;
    console.log(`Found ${results.length} subjects for ${semesterKey}`);

  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    // Store empty array for failed scrapes
    allSemesterData[semesterKey] = [];
  }
}

const urlsWithKeys = [
  { url: "https://digitalnce.com/ioe_questions/1stsem.php", key: "1st_Semester" },
  { url: "https://digitalnce.com/ioe_questions/2ndsem.php", key: "2nd_Semester" },
  { url: "https://digitalnce.com/ioe_questions/3rdsem.php", key: "3rd_Semester" },
  { url: "https://digitalnce.com/ioe_questions/4thsem.php", key: "4th_Semester" },
  { url: "https://digitalnce.com/ioe_questions/5thsem.php", key: "5th_Semester" },
  { url: "https://digitalnce.com/ioe_questions/6thsem.php", key: "6th_Semester" },
  { url: "https://digitalnce.com/ioe_questions/7thsem.php", key: "7th_Semester" },
  { url: "https://digitalnce.com/ioe_questions/8thsem.php", key: "8th_Semester" }
];

async function main() {
  console.log("Starting IOE Questions scraping...\n");

  // Scrape all semesters
  for (const { url, key } of urlsWithKeys) {
    await scrape(url, key);
    // Small delay between requests to be respectful to the server
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Save all data to a single JSON file
  const outputFileName = "IOE_Past_Year_Questions.json";
  fs.writeFileSync(outputFileName, JSON.stringify(allSemesterData, null, 2));

  // Display summary
  console.log("\n" + "=".repeat(50));
  console.log("SCRAPING COMPLETED SUCCESSFULLY!");
  console.log("=".repeat(50));
  console.log(`Data saved to: ${outputFileName}`);

  // Show statistics
  let totalSubjects = 0;
  Object.keys(allSemesterData).forEach(semester => {
    const count = allSemesterData[semester].length;
    totalSubjects += count;
    console.log(`${semester}: ${count} subjects`);
  });

  console.log(`\nTotal subjects across all semesters: ${totalSubjects}`);
  console.log("=".repeat(50));
}

main()
  .then(() => console.log("\n✅ All done! You can now use the JSON file with your UI component."))
  .catch(error => console.error("❌ An error occurred during scraping:", error.message));