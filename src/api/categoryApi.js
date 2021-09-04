import axiosClient from './axiosClient';

const categoryApi = {
  async getAll(params) {
    const productList = await axiosClient.get('/categories', { params });
    return {
      data: productList,
      category: {
        title: params._title,
      },
    };
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
