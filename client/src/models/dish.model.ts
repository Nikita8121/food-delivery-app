import { IBase } from 'src/models/base.model';
import { ICategory } from './category.model';
import { IFile } from './file.model';

export interface IDish extends IBase {
  name: string;
  description: string;
  cookingTimeText: string;
  calories: string;
  categories?: ICategory[];
  price: {
    id: number;
    size: string;
    price: string;
  }[];
  image: IFile;
}
