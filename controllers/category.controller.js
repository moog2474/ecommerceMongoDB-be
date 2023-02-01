const fs = require("fs")
const { parse } = require("path")
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/category.json"

exports.getAll = (req, res) => {
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, result: readErr })
        }
        const savedData = JSON.parse(data)
        return res.json({
            status: true, result: savedData
        })
    })
}

exports.create = (req, res) => {
    const { categoryName, link } = req.body;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedDAta = data ? JSON.parse(data) : [];
        const newObj = { id: uuid.v4(), categoryName, link }

        parsedDAta.push(newObj);

        fs.writeFile(dataFile, JSON.stringify(parsedDAta), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: parsedDAta })
        })
    })
}