import { UPDATE } from './dataFatchActions';
import { DataAction } from './interfaces';

export const CRUD_UPDATE = 'CRUD_UPDATE';
export const CRUD_UPDATE_LOADING = 'CRUD_UPDATE_LOADING';
export const CRUD_UPDATE_SUCCESS = 'CRUD_UPDATE_SUCCESS';
export const CRUD_UPDATE_FAILURE = 'CRUD_UPDATE_FAILURE';

export const crudUpdate = (resource: string, data): DataAction => ({
  type: CRUD_UPDATE,
  payload: { data },
  meta: {
    resource,
    fetch: UPDATE
  }
});
