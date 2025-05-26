/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Session } from '../models/Session';
import type { StartSessionInput } from '../models/StartSessionInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get List Sessions
     * @returns Session Successful Response
     * @throws ApiError
     */
    public getListSessionsSessionGet(): CancelablePromise<Array<Session>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/session/',
        });
    }
    /**
     * Create Session
     * @returns Session Successful Response
     * @throws ApiError
     */
    public createSessionSessionPost({
        requestBody,
    }: {
        requestBody: StartSessionInput,
    }): CancelablePromise<Session> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/session/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Session
     * @returns Session Successful Response
     * @throws ApiError
     */
    public getSessionSessionSessionIdGet({
        sessionId,
    }: {
        sessionId: string,
    }): CancelablePromise<Session> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/session/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Session
     * @returns Session Successful Response
     * @throws ApiError
     */
    public updateSessionSessionSessionIdPut({
        sessionId,
        requestBody,
    }: {
        sessionId: string,
        requestBody: Session,
    }): CancelablePromise<Session> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/session/{session_id}',
            path: {
                'session_id': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Session
     * @returns void
     * @throws ApiError
     */
    public deleteSessionSessionSessionIdDelete({
        sessionId,
    }: {
        sessionId: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/session/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
