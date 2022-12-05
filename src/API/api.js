import axios from "axios";
import { setData, setTotal } from "../redux/state-slice/data";
import { ErrorToast } from "../helper/FormHelper";
import store from "../redux/store/store";
const baseUrl = "http://localhost:5000/api/v1";

export const getSearchResults = async (pageNo, perPage, searchParams) => {
  let url = `${baseUrl}/ProductList/${pageNo}/${perPage}/${searchParams}`;
  try {
    const res = await axios.get(url);
    if (res.status === 200 && res.data["status"] == "success") {
      if (res.data["data"][0]["Rows"].length > 0) {
        store.dispatch(setData(res.data["data"][0]["Rows"]));
        store.dispatch(setTotal(res.data["data"][0]["Total"][0]["count"]));
      } else {
        store.dispatch(setData([]));
        store.dispatch(setTotal([]));
        ErrorToast("No data found");
      }
    } else {
      ErrorToast("Something went worng");
    }
  } catch (err) {
    store.dispatch(setData([]));
    store.dispatch(setTotal([]));
    ErrorToast("Something went worng");
  }
};
