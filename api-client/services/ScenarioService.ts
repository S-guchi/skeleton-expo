/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Scenario } from '../models/Scenario';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ScenarioService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get List Scenarios
     * @returns Scenario Successful Response
     * @throws ApiError
     */
    public getListScenariosScenarioGet(): CancelablePromise<Array<Scenario>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scenario/',
        });
    }
    /**
     * Create Scenario
     * @returns Scenario Successful Response
     * @throws ApiError
     */
    public createScenarioScenarioPost({
        requestBody,
    }: {
        requestBody: Scenario,
    }): CancelablePromise<Scenario> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/scenario/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Scenario
     * @returns Scenario Successful Response
     * @throws ApiError
     */
    public getScenarioScenarioScenarioIdGet({
        scenarioId,
    }: {
        scenarioId: string,
    }): CancelablePromise<Scenario> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scenario/{scenario_id}',
            path: {
                'scenario_id': scenarioId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Scenario
     * @returns Scenario Successful Response
     * @throws ApiError
     */
    public updateScenarioScenarioScenarioIdPut({
        scenarioId,
        requestBody,
    }: {
        scenarioId: string,
        requestBody: Scenario,
    }): CancelablePromise<Scenario> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/scenario/{scenario_id}',
            path: {
                'scenario_id': scenarioId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Scenario
     * @returns void
     * @throws ApiError
     */
    public deleteScenarioScenarioScenarioIdDelete({
        scenarioId,
    }: {
        scenarioId: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/scenario/{scenario_id}',
            path: {
                'scenario_id': scenarioId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
