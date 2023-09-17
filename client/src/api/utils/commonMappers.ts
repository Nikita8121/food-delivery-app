import { IFile } from 'src/models/file.model';
import { FileDto } from './types';
import { SERVER_URL } from '@env';

export  const mapFile = (dto: FileDto): IFile => {
  return {
    id: dto.id,
    name: dto.name,
    url: SERVER_URL + dto.url,
    alternativeText: dto.alternativeText,
    ext: dto.ext,
    createdAt: dto.createdAt,
    updatedAt: dto.updatedAt    
  };
};
