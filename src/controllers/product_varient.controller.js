const subCategoryDB = require("../models/subcategory");
const asynchandler = require("express-async-handler");
const {
  errorRes,
  internalServerError,
  successRes,
} = require("../utility/index");
const test = async (req, res) => {
  successRes(res, '');
}
const addSubCategory = asynchandler(async (req, res) => {
  const name = req.body.name;
  if (!name) {
    errorRes(res, 400, "invalid input");
    return;
  }
  const findName = await subCategoryDB.findOne({ name: name });
  if (findName) {
    errorRes(res, 400, "Sub category already exists cannot add");
    return;
  }
  const newSubcategory = new subCategoryDB({
    name: name
  })
  const savedSubCategory = await newSubcategory.save();
  if (savedSubCategory) {
    successRes(res, savedSubCategory);
  }
  else {
    internalServerError(res, "Error in saving the varient");
  }


})
const getAllSubCategory = asynchandler(async (req, res) => {
  const getAllSubCategory = await subCategoryDB.find({}).sort('name');
  if (getAllSubCategory) {
    successRes(res, getAllSubCategory);
  }
  else {
    internalServerError(res, "Error in getting varient");
  }
})

const deleteSubCategory = asynchandler(async (req, res) => {
  const id = req.params.id;
  const findName = await subCategoryDB.findOne({ _id: id });
  if (findName) {
    const deletedSubCategory = await subCategoryDB.findByIdAndDelete({ _id: id });
    if (deletedSubCategory) {
      successRes(res, deletedSubCategory);
    }
    else {
      internalServerError(res, "Cannot delete SubCategory");
    }
  }
  else {

    errorRes(res, 404, "Cannot find the SubCategory");
  }
})

const getASubCategory = asynchandler(async (req, res) => {
  const id = req.params.id;
  const findName = await subCategoryDB.findOne({ _id: id });
  if (findName) {
    successRes(res, findName);
  }


  else {

    errorRes(res, 404, "Cannot find the SubCategory");
  }
})
module.exports = { test, addSubCategory, getAllSubCategory,getASubCategory,deleteSubCategory };