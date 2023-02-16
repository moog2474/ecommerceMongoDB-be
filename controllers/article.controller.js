const fs = require("fs")
const { parse } = require("path")
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/.json"

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

exports.get = (req, res) => {
    const { id } = req.params
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const myData = JSON.parse(data)
        const savedData = myData.filter((e) => e.id == id)

        return res.json({ status: true, result: savedData })
    })
}

exports.create = (req, res) => {
    const { title, image, category, article, postedDate, addedUser, isPopular, images, link } = req.body;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedDAta = data ? JSON.parse(data) : [];
        const newObj = { id: uuid.v4(), title, image, category, article, postedDate, addedUser, isPopular, images, link }

        parsedDAta.push(newObj);

        fs.writeFile(dataFile, JSON.stringify(parsedDAta), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: parsedDAta })
        })
    })
}

exports.update = (req, res) => {
    const { id, title, image, category, article, postedDate, addedUser, isPopular, images, link } = req.body;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedDAta = JSON.parse(data)
        const updateData = parsedDAta.map((catObj) => {
            if (catObj.id == id) {
                return { ...catObj, title, image, category, article, postedDate, addedUser, isPopular, images, link }
            }
            else {
                return catObj
            }
        });
        fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: updateData })
        })
    })
}

exports.delete = (req, res) => {
    const { id } = req.params;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedData = JSON.parse(data);
        const deletedData = parsedData.filter((e) => e.id != id);

        fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: deletedData })
        })
    })
}