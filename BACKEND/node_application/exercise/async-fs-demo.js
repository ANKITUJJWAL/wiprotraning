const fs = require("fs").promises;
const path = require("path");

async function runDemo() {
  const dirPath = path.join(__dirname, "demo-dir");
  const filePath = path.join(dirPath, "demo.txt");

  try {
    
    await fs.mkdir(dirPath);
    console.log(" Directory created:", dirPath);

   
    await fs.appendFile(filePath, "Hello, this is async FS demo!\n");
    console.log(" File created and text appended:", filePath);

    
    const data = await fs.readFile(filePath, "utf8");
    console.log(" File contents:\n", data);

    await fs.unlink(filePath);
    console.log("File deleted:", filePath);

    await fs.rmdir(dirPath);
    console.log("Directory deleted:", dirPath);

  } catch (err) {
    console.error("Error:", err);
  }
}

runDemo();