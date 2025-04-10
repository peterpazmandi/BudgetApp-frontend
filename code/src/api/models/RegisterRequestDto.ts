/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegisterRequestDto = {
    username: string;
    email: string;
    password: string;
    familyName?: string;
    givenName?: string;
    gender?: RegisterRequestDto.gender;
};
export namespace RegisterRequestDto {
    export enum gender {
        MALE = 'MALE',
        FEMALE = 'FEMALE',
    }
}

