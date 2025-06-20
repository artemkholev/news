export interface IPost {
  createdAt: string;
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  date: string;
}

export interface IAuthor {
  id: number;
  name: string;
  email: string;
}
