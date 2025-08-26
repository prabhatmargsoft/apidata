const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Student = require('../models/student');

// ✅ Get all students
router.get('/', (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// ✅ Add new student
router.post('/', (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    });

    student.save()
        .then(result => {
            console.log(result);
            res.status(200).json({ newStudent: result });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

// ✅ Delete student (POST)
router.post('/delete', async (req, res, next) => {
    try {
        const { id } = req.body;  // { "id": "studentId" }
        if (!id) return res.status(400).json({ message: "Student ID required" });

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            deletedStudent
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});

// ✅ Update student (POST)
router.post('/update', async (req, res, next) => {
    try {
        const { id, name, email, phone, gender } = req.body;

        if (!id) return res.status(400).json({ message: "Student ID required" });

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, email, phone, gender },
            { new: true } // return updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student updated successfully",
            updatedStudent
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});

module.exports = router;
