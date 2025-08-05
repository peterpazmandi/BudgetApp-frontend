/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserApiService {
    /**
     * Gets logged in user info
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getUserInfo(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users',
            errors: {
                404: `Not Found`,
            },
        });
    }
}
