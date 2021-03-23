const fs = require("fs/promises");
const axios = require("axios");
const argv = process.argv;

let secondArgv = argv[2];

function run(secondArgv) {
  if (secondArgv.includes("http")) {
    webcat(secondArgv);
  } else {
    cat(secondArgv);
  }
}

async function cat(secondArgv) {
  try {
    let contents = await fs.readFile(secondArgv, "utf8");
    console.log("file contents: ", contents);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function webcat(url) {
  try {
    let content = await axios.get(url);
    console.log("url content: ", content.data);
  } catch (err) {
    if (err.response.status === 404) {
      console.log("PAGE NOT FOUND, SORRY!!!!");
    }
    process.exit(1);
  }
}

run(secondArgv);
