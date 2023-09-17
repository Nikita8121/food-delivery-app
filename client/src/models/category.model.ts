import { IBase } from 'src/models/base.model';
import { IFile } from 'src/models/file.model';

export interface ICategory extends IBase {
  categoryName: string;
  categoryIcon?: IFile;
}
