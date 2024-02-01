const { render } = require("ejs");
const connection = require("../config/dataBase");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
} = require("../services/CRUDServiecs");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let [results, fields] = await connection.query(
    `INSERT INTO	Users(email,name,city)
    VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.send("CREATE USER SECCEED");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); //x<-y
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postDeleteUser,
  postHandleRemoveUser,
};
