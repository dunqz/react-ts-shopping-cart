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

export function uploadImage(image: any, productName: string) {
  return axiosInstance
    .post(`/${PRODUCT}/upload/${productName}`, image)
    .then((response: any) => {
      return response.data;
    })
    .catch((e) => {
      return e.data;
    });
}

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
