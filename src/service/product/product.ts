import axiosInstance from "../axios/axiosInstance";

const PRODUCT = "product";

export function getAllProduct() {
  return axiosInstance
    .get(`/${PRODUCT}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}

export function uploadImage(image: FormData, productName: string) {
  return axiosInstance
    .post(`/${PRODUCT}/upload/${productName}`, image, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure this header is set
      },
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}

//Resolved [org.springframework.web.multipart.support.MissingServletRequestPartException: Required request part 'image' is not present]
export function addProduct(formData: FormData) {
  return axiosInstance
    .post(`/${PRODUCT}/addproduct`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}

export function createProduct(product: any) {
  return axiosInstance
    .post(`/${PRODUCT}`, product)
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}


//TODO: dapat ig click sa register ma close ang login, nya add ug back to login from register
//      finish ang email verification set up
//      update ang backend sa user

//      use mobx to close login when register is open, vice-versa