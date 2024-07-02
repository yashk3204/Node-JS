const path = require("path");
const filePath = "C:/Users/yashk/OneDrive/Desktop/Codes/Node JS/Error Handling/Files/sample1.txt";

console.log(path.dirname(filePath)); // prints path
console.log(path.basename(filePath)); // prints basename of file
console.log(path.extname(filePath)); // prints extension of file
console.log(__dirname);
console.log(__filename);

const fs = require("fs");
const fsPromise = require("fs").promises;
const sampleFile = "sample1.txt";
console.log(path.join(path.dirname(filePath)), sampleFile);

fs.readFile(filePath, (err, data) => {
    if (err) throw new Error("Something went wrong!");
    console.log(data.toString());
});

try{
    const data = fs.readFileSync(path.join(__dirname, "Files", "sample.txt"), "utf-8");
    console.log(data);
} catch (err) {
    console.log(err);
}

const fileReading = async () => {
    try{
        const data = await fsPromise.readFile(filePath, {encoding: "utf-8"});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fileReading();

// Writing to a file

const txtfile = path.join(__dirname, "files", "sample2.txt");
const content = "I love this NodeJS tutorial playlist.";
fs.writeFile(txtfile, content, (err) => {
    if(err) throw new Error("Something went wrong!");
    console.log("Write operation completed successfully!");
});

const writingFile = async () => {
    try {
        await fsPromise.writeFile(txtfile, content);
        await fsPromise.appendFile(txtfile, "\n File has been appended.");
        const data = fsPromise.readFile(txtfile);
        console.log(data.toString());
    } catch (err) {
        console.log(err);
    }
};
writingFile();

/*
    await fsPromise.writeFile(txtfile, "Hello world", {
        flag = "a+",
    });
    The a+ flag adds text to the end of a txt file.
*/
/*
    To renama a file:
    await fs.promises.rename(txtfile, path.join(__dirname, "Files", "newtxt.txt"));
*/