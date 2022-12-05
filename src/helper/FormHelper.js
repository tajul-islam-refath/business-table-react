import cogoToast from "cogo-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
  ErrorToast(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessToast(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
}

export const { ErrorToast, SuccessToast } = new FormHelper();
