import http from "../utils/http";

export const getOrders = async (authtoken: any) =>
  http.get(`admin/orders`, {
    headers: {
      authtoken,
    },
  });

export const getOrdersCount = async (page: number, authtoken: any) =>
  http.get(`admin/orders-count/${page}`, {
    headers: {
      authtoken,
    },
  });

export const getUsers = async (authtoken: any) =>
  http.get(`admin/users`, {
    headers: {
      authtoken,
    },
  });

export const changeStatus = async (
  orderId: string,
  orderStatus: any,
  authtoken: any
) =>
  http.put(
    `admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        authtoken,
      },
    }
  );
