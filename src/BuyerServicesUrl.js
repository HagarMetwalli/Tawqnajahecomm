import ChangePassword from "./component/ChangePassword/ChangePassword";

const BuyerServicesUrl = {
 //Auth
  Login: "user/auth/login",
  Register: "user/auth/register",
  LogOut:"user/auth/logout",
  ChangePassword: "user/auth/change-password",
  ForgetPassword: "user/auth/forget-password",
  ResetPassword: "user/auth/reset-password",

  //categories
  GetCategory: "user/categories",

  //Product
  GetProductList: "user/products?type=normal",
  GetProductById: "/user/products/{id}"
};

export default BuyerServicesUrl;