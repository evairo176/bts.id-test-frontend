import React from "react";
import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/action/AuthAction";
const formSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(await registerAction(values, navigate));
    },
    validationSchema: formSchema,
  });
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12">
            <div className="card" style={{ marginTop: "100px" }}>
              <div className="card-header">Register</div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit} action="">
                  <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formik.values.username}
                      onChange={formik.handleChange("username")}
                      onBlur={formik.handleBlur("username")}
                    />
                    {formik.errors.username && formik.touched.username ? (
                      <div className="text-danger" style={{ fontSize: "11px" }}>
                        {formik.errors.username}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-danger" style={{ fontSize: "11px" }}>
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className="text-danger" style={{ fontSize: "11px" }}>
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group m-2">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
