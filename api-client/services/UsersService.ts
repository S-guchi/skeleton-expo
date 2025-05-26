/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Upsert User
     * @returns User Successful Response
     * @throws ApiError
     */
    public upsertUserUserPost({
        requestBody,
    }: {
        requestBody: User,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User By Id
     * @returns User Successful Response
     * @throws ApiError
     */
    public getUserByIdUserUserIdGet({
        userId,
    }: {
        userId: string,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete User By Id
     * @returns void
     * @throws ApiError
     */
    public deleteUserByIdUserUserIdDelete({
        userId,
    }: {
        userId: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update User By Id
     * @returns User Successful Response
     * @throws ApiError
     */
    public updateUserByIdUserUserIdPut({
        userId,
        requestBody,
    }: {
        userId: string,
        requestBody: User,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
