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

export function getFilterStoreItem(requestOptions :any) {
  // Convert classify to a single value if it's an array
  if (Array.isArray(requestOptions.classify)) {
    requestOptions.classify = requestOptions.classify[0];
  }

  return axiosInstance
    .get(`/${PRODUCT}/filter`, {
      params: requestOptions,
    })
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

export function buyProduct(product: any) {
  return axiosInstance
    .put(`/${PRODUCT}/buy`, product)
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