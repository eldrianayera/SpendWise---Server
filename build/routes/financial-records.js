"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const financial_record_1 = __importDefault(require("../schema/financial-record"));
const router = express_1.default.Router();
router.get("/getAllByUserId/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const records = await financial_record_1.default.find({ userId: userId });
        if (records.length === 0) {
            return res.status(404).send("No records found for this");
        }
        res.status(200).send(records);
    }
    catch (error) {
        res.status(500).send(`error in fetching user's record ${error}`);
    }
});
router.post("/", async (req, res) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new financial_record_1.default(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (error) {
        res.status(500).send(`error in CREATING user's record ${error}`);
    }
});
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await financial_record_1.default.findByIdAndUpdate(id, newRecordBody, { new: true });
        if (!record)
            return res.status(404).send('No matching record found to update ');
        res.status(200).send(record);
    }
    catch (error) {
        res.status(500).send(`error in UPDATING user's record ${error}`);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await financial_record_1.default.findByIdAndDelete(id);
        if (!record)
            return res.status(404).send('No matching record found to delete ');
        res.status(200).send(record);
    }
    catch (error) {
        res.status(500).send(`error in DELETING user's record ${error}`);
    }
});
exports.default = router;
//# sourceMappingURL=financial-records.js.map