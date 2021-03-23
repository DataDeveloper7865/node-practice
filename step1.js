const fs = require("fs/promises");
const argv = process.argv;

async function cat(argv) {
    try {
        let contents = await fs.readFile(argv[2], "utf8")
        console.log("file contents: ", contents)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }

}

cat(argv);