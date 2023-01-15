export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUser = {
  username: string,
  vocation: string,
  level: number,
  password?: string, 
};