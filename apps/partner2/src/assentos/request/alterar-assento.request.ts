import { PartialType } from '@nestjs/mapped-types';
import { CriarAssentoRequest } from './criar-assento.request';

export class AlterarAssentoRequest extends PartialType(CriarAssentoRequest) {}
