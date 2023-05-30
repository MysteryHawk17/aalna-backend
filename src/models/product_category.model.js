const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  displayImage: {
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/piyush27/image/upload/v1677079091/WhatsApp_Image_2023-02-22_at_8.47.17_PM_agawba.jpg",
    },
  },
<<<<<<< HEAD
  subCategory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory"
    }
  ]
}, { timestamps: true });
=======
});
>>>>>>> parent of ae517d3 (Pagination added and mongoose models updated)

mongoose.model("Product_Category", productCategorySchema);
