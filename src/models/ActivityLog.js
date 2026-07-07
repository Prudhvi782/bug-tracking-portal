import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    bugId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bug",
    },

    action: String,

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ActivityLog ||
  mongoose.model("ActivityLog", activityLogSchema);