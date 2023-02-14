const fs = require("fs");
const { parse } = require("path");
const uuid = require("uuid");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myKey = "123456789!@#$&*";


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
    const { userName, password, userType, firstName, lastName, email, } = req.body;

    fs.readFile(dataFile, "utf-8", async (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedDAta = data ? JSON.parse(data) : [];

        const newPassword = bcrypt.hash(password, saltRounds)

        const newObj = {
            id: uuid.v4(),
            userName,
            password: newPassword,
            userType,
            firstName,
            lastName,
            email,
            favoriteProduct: [],
            createdData: Date.now()
        };

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
    const {
        userName,
        password,
        userType,
        firstName,
        lastName,
        email,
        favoriteProduct,
        lastLoginDate
    } = req.body;

    fs.readFile(dataFile, "utf-8", (readErr, data) => {
        if (readErr) {
            return res.json({ status: false, message: readErr })
        }

        const parsedData = JSON.parse(data)

        const updateData = parsedData.map((userObj) => {
            if (userObj.id == id) {
                return {
                    ...userObj,
                    userName,
                    password,
                    userType,
                    firstName,
                    lastName,
                    email,
                    favoriteProduct,
                    lastLoginDate,
                    updatedDate: Date.now()
                }
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

exports.login = (req, res) => {

    const { userName, password, email } = req.body;

    if (!userName || !email || !password)
        return res.json({
            status: false,
            message: "medeellee bvren buglunu vv"
        });

    fs.readFile(dataFile, "utf-8", async (readErr, data) => {
        if (readErr) {
            return res.json({ staus: false, message: readErr })
        }

        const parsedData = data ? JSON.parse(data) : [];
        let user;
        for (let i = 0; i < parsedData.length; i++) {
            if (email == parsedData[i].email || userName == parsedData[i].userName) {
                const decrypt = await bcrypt.compare(password + myKey, parsedData[i].password);

                if (decrypt) {
                    user = {
                        id: parsedData[i].id,
                        email: parsedData[i].email,
                        lastname: parsedData[i].lastname,
                        firstname: parsedData[i].firstname,
                    };
                    break;
                }
            }
        }

        console.log(user);
        if (user) {
            return res.json({
                status: true,
                result: user,
            })
        } else {
            return res.json({
                status: false,
                message: "Tanii email eswel nuuts ug buruu bna",
            });
        }
    });
}
