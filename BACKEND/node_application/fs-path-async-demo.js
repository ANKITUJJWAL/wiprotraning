//Every method returns a Promise
const fs = require("fs/promises");
const path = require("path");


async function createAndReadDemo() {
  try {
    // Join sub-directory to current directory
    const dirname = path.join(__dirname, "demo-new-dir");
    console.log("Joined Path:", dirname);


    // Create directory
    await fs.mkdir(dirname, { recursive: true });
    console.log("Directory created successfully:", dirname);


    // Join filename
    const filename = path.join(dirname, "demo-file.txt");
    console.log("Joined Path:", filename);


    // Create file
    await fs.writeFile(filename, "This is a demo file.");
    console.log("File created successfully:", filename);


    console.log("Reading file asynchronously...");


    // Read file
    const data = await fs.readFile(filename, "utf8");
    console.log("File content:", data);


  } catch (err) {
    console.error("Error:", err);
  }
}


// Call user-defined async function
createAndReadDemo();
