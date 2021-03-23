const fs = require("fs/promises");
const axios = require("axios");
const argv = process.argv;

async function cat(argv, output=None) {
  let secondArgv = argv[2];

  if (secondArgv.includes("http")) {
    webcat(secondArgv);
  } else {
      try {
        let contents = await fs.readFile(secondArgv, "utf8");
        if (output) {
          
        }
        console.log("file contents: ", contents);
      } catch (err) {
        console.log(err);
        process.exit(1);
    }
  }
}

cat(argv);

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
