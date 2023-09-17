import { IBase } from './base.model';

export interface IFile extends IBase {
  name: string;
  url: string;
  alternativeText: string;
  ext: string
}
