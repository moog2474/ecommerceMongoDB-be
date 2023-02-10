const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/users.json"

exports.getAll = (req, res) => {
    fs.readFile(dataFile, "utf-8", (readErr, data) => {

        if (readErr) {
            return res.json({ status: false, result: readErr })
        }
        const savedData = JSON.parse(data);
        return res.json({ status: true, result: savedData })
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
    const { userName, password, userType, firstName, lastName } = req.body;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedDAta = data ? JSON.parse(data) : [];
        const newObj = { id: uuid.v4(), userName, password, userType, firstName, lastName };

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
    const { id } = req.params
    const { userName, password, userType, firstName, lastName } = req.body;
    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }
        const parsedData = JSON.parse(data)
        const updateData = parsedData.map((userObj) => {
            if (userObj.id == id) {
                return { ...userObj, userName, password, userType, firstName, lastName }
            }
            else {
                return userObj;
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
        const parsedDAta = JSON.parse(data);
        const deletedData = parsedDAta.filter((e) => e.id != id);

        fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
            if (writeErr) {
                return res.json({ status: false, message: writeErr })
            }
            return res.json({ status: true, result: deletedData })
        })
    })
}