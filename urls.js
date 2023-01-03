const fs = require("fs");
const process = require("process");
const axios = require("axios");

async function start() {
  const data = await getText();
  const urlArray = convertData(data);
  const reqData = await request(urlArray);
  createFile(reqData);
  return data;
}

async function getText() {
  const newData = await fs.promises.readFile(
    "urls.txt",
    "utf8",
    (error, data) => {
      if (error) {
        console.log("Error reading urls.txt:", error);
        process.kill(1);
      }
      return data;
    }
  );
  return newData;
}

function convertData(data) {
  const urlArray = data.split("\n");
  return urlArray;
}

async function request(urlArray) {
  const reqData = [];
  for (const url of urlArray) {
    try {
      let res = await axios.get(url);
      reqData.push({ [ url ] : res.data })
      // createFile(url, res.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
    }
  }
  return reqData;
}

function createFile(reqData) {
  for (const data of reqData) {
    const url = Object.keys(data)[0];
    const fileName = name(url);
    const text = Object.values(data)[0];
    fs.writeFile(`created-files/${fileName}`, text, "utf8", function (err) {
      if (err) {
        console.error(`Couldn't write ${fileName}: ${err}`);
        process.exit(1);
      }
      console.log(`Created ${fileName}`);
    });
  };
}

function name(url) {
  strStart = url.indexOf("/") + 2;
  strEnd = url.indexOf(".");
  const fileName = `${url.slice(strStart, strEnd)}.html`;
  return fileName;
}

const path = process.argv[2];

if (path === "urls.txt") {
  start();
} else {
  console.error(`Error!!! ${path} not valid!`, error);
}
