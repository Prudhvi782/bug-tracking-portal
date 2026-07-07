import mongoose from "mongoose";

const bugSchema = new mongoose.Schema(
  {
    bugId: String,

    title: String,

    description: String,

    module: String,

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
    },

    severity: {
      type: String,
      enum: ["Minor", "Major", "Critical"],
    },

    status: {
      type: String,
      enum: [
        "Open",
        "Assigned",
        "In Progress",
        "Resolved",
        "Closed",
        "Rejected",
      ],
      default: "Open",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    dueDate: Date,

    screenshot: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Bug ||
  mongoose.model("Bug", bugSchema);