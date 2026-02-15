// models/Supplier.js
const mongoose = require("mongoose");
const Counter = require("./COUNTER.JS");

const supplierSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, // auto-increment numeric id
    name: { type: String, required: true },
    contactEmail: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, // basic email regex
    },
    phone: { type: String },
    address: { type: String },
    taxId: { type: String, unique: true, sparse: true }, // unique if provided
    active: { type: Boolean, default: true },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

// Auto-increment id before saving
supplierSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "supplierId" },        // counter name
      { $inc: { seq: 1 } },         // increment sequence
      { new: true, upsert: true }   // create if not exists
    );
    this.id = counter.seq;          // assign auto-incremented id
  }
  next();
});

// Ensure indexes
supplierSchema.index({ id: 1 }, { unique: true });
supplierSchema.index({ taxId: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model("Supplier", supplierSchema);