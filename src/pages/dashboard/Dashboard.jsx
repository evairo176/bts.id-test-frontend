import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCheckListAction,
  checkListAction,
  deleteCheckListAction,
} from "../../redux/action/AuthAction";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

function Dashboard() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const storeData = useSelector((store) => store?.global);
  const { data, action } = storeData;

  useEffect(() => {
    const getCheckListAll = async () => {
      dispatch(await checkListAction(token));
    };

    getCheckListAll();
  }, [dispatch, token, action]);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      dispatch(await addCheckListAction(values, token));
      //   console.log(values);
    },
    validationSchema: formSchema,
  });

  const deleteCheckList = async (id) => {
    dispatch(await deleteCheckListAction(id, token));
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12">
            {" "}
            <div className="card" style={{ marginTop: "100px" }}>
              <div className="card-header">Dashboard</div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((row, key) => {
                      return (
                        <tr>
                          <td>{key + 1}</td>
                          <td>{row?.name}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteCheckList(row?.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <form onSubmit={formik.handleSubmit} action="">
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="text-danger" style={{ fontSize: "11px" }}>
                        {formik.errors.name}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group m-2">
                    <button className="btn btn-primary" type="submit">
                      add checklist
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

export default Dashboard;
