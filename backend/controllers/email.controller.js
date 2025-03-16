import { Email } from "../models/email.model.js";

// @desc    Send email
// @route   POST /api/v1/email/send
// @access  Private
export const sendEmail = async (req, res) => {
    try {
        const { to, subject, message } = req.body;
        const newEmail = await Email.create({
            from: req.user._id,
            to,
            subject,
            message
        });
        res.status(201).json(newEmail);
    } catch (error) {
        console.error("Send email error:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

// @desc    Get all emails
// @route   GET /api/v1/email
// @access  Private
export const getEmails = async (req, res) => {
    try {
        const emails = await Email.find({ to: req.user.email });
        res.json(emails);
    } catch (error) {
        console.error("Get emails error:", error);
        res.status(500).json({ error: "Failed to get emails" });
    }
};

export const starEmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        const userId = req.user._id;

        const email = await Email.findOne({
            _id: emailId,
            $or: [{ to: userId }, { from: userId }]
        });

        if (!email) {
            return res.status(404).json({ error: "Email not found" });
        }

        email.isStarred = !email.isStarred;
        await email.save();

        res.status(200).json(email);
    } catch (error) {
        console.log("Error in starEmail controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteEmail = async (req, res) => {
    try {
        const emailId = req.params.id;
        const userId = req.user._id;

        const email = await Email.findOne({
            _id: emailId,
            $or: [{ to: userId }, { from: userId }]
        });

        if (!email) {
            return res.status(404).json({ error: "Email not found" });
        }

        if (email.inTrash) {
            email.isDeleted = true;
        } else {
            email.inTrash = true;
        }

        await email.save();

        res.status(200).json({ message: "Email moved to trash" });
    } catch (error) {
        console.log("Error in deleteEmail controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const moveToTrash = async (req, res) => {
    try {
        const emailId = req.params.id;
        const userId = req.user._id;

        const email = await Email.findOne({
            _id: emailId,
            $or: [{ to: userId }, { from: userId }]
        });

        if (!email) {
            return res.status(404).json({ error: "Email not found" });
        }

        email.inTrash = true;
        await email.save();

        res.status(200).json({ message: "Email moved to trash" });
    } catch (error) {
        console.log("Error in moveToTrash controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const saveDraft = async (req, res) => {
    try {
        const { to, subject, body } = req.body;
        const from = req.user._id;

        const draft = new Email({
            from,
            to: to || from, // If no recipient, save as self
            subject: subject || "Draft",
            body: body || "",
            isDraft: true
        });

        await draft.save();

        res.status(201).json(draft);
    } catch (error) {
        console.log("Error in saveDraft controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}; 