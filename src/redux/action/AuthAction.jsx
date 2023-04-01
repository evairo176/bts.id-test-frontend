import axios from "axios";
import { BASE_API } from "../../config/baseUrl";
import { toast } from "react-toastify";
import { setAction, setData, setLoading } from "./GlobalAction";

const registerAction = (data, navigate) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${BASE_API.url}/register`, data)
    .then((response) => {
      dispatch(setLoading(false));
      toast.success("Registered successfully");
      navigate("/login");
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error("Register failed");
      console.log(error);
    });
};

const loginAction = (data, navigate) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${BASE_API.url}/login`, data)
    .then((response) => {
      console.log();
      const token = response.data.data.token;
      localStorage.setItem("token", `Bearer ${token}`);

      dispatch(setLoading(false));
      toast.success("Login successfully");
      navigate("/dashboard");
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error("Login failed");
      console.log(error);
    });
};

const checkListAction = (token) => (dispatch) => {
  dispatch(setLoading(true));

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  axios
    .get(`${BASE_API.url}/checklist`, config)
    .then((response) => {
      dispatch(setData(response.data.data));
      dispatch(setLoading(false));
      toast.success("Proccess View All successfully");
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error("Proccess View All Failed");
      console.log(error);
    });
};

const addCheckListAction = (data, token) => (dispatch) => {
  dispatch(setLoading(true));

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  axios
    .post(`${BASE_API.url}/checklist`, data, config)
    .then((response) => {
      dispatch(setAction(response.data));
      dispatch(setLoading(false));
      toast.success("Add checklist successfully");
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error("Add checklist Failed");
      console.log(error);
    });
};

const deleteCheckListAction = (id, token) => (dispatch) => {
  dispatch(setLoading(true));

  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };

  axios
    .delete(`${BASE_API.url}/checklist/${id}`, config)
    .then((response) => {
      dispatch(setAction(response.data));
      dispatch(setLoading(false));
      toast.success("Delete checklist successfully");
    })
    .catch((error) => {
      dispatch(setLoading(false));
      toast.error("Delete checklist Failed");
      console.log(error);
    });
};

export {
  registerAction,
  loginAction,
  checkListAction,
  addCheckListAction,
  deleteCheckListAction,
};
