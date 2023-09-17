import { IBase } from 'src/models/base.model';
import { ICategory } from './category.model';

export interface IDish extends IBase {
  name: string;
  description: string;
  cookingTimeText: string;
  calories: string;
  categories?: ICategory;
}
