/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserDto = {
    readonly id?: string;
    readonly createdDate?: string;
    readonly createdBy?: string;
    readonly modifiedDate?: string;
    readonly modifiedBy?: string;
    readonly email: string;
    readonly familyName: string;
    readonly givenName: string;
    readonly gender: UserDto.gender;
    readonly emailVerified: boolean;
};
export namespace UserDto {
    export enum gender {
        MALE = 'MALE',
        FEMALE = 'FEMALE',
    }
}

