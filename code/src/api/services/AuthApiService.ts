/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequestDto } from '../models/LoginRequestDto';
import type { RegisterRequestDto } from '../models/RegisterRequestDto';
import type { UserDto } from '../models/UserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthApiService {
    /**
     * Register a new user
     * @param requestBody
     * @returns UserDto Created
     * @throws ApiError
     */
    public static register(
        requestBody: RegisterRequestDto,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Resends verification email for logged in user
     * @returns any OK
     * @throws ApiError
     */
    public static resendVerificationEmail(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/me/resend-verification',
        });
    }
    /**
     * Login using registered email and password
     * @param requestBody
     * @returns UserDto OK
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequestDto,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Verify email of registered user
     * @param token
     * @returns any OK
     * @throws ApiError
     */
    public static verifyEmail(
        token: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/me/verify-email',
            query: {
                'token': token,
            },
        });
    }
}
