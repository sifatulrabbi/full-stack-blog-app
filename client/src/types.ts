export type PostType = {
  _id: string;
  title: string;
  desc: string;
  username: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
  photo: string;
  __v: number;
};

export type CatType = {
  _v: number;
  name: string;
  _id: string;
};

export type UserType = {
  username: string;
  email: string;
  password: string;
  profileImg: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
