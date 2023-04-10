export interface IProduct {
  id: string,
  title: string,
  price: number,
  images: string[],
  description: string,
  catogory: ICategory
}

interface ICategory {
  id: string,
  name: string
}

export interface createProductDTO extends Omit<IProduct, 'id'| 'catogory'>{
  categoryId: number
}

export interface IUpdateProduct extends Partial<createProductDTO> {}