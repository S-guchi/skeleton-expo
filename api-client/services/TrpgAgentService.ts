/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Scene } from '../models/Scene';
import type { SceneRequest } from '../models/SceneRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TrpgAgentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Generate Scene
     * @returns Scene Successful Response
     * @throws ApiError
     */
    public generateSceneTrpgAgentGenerateScenePost({
        requestBody,
    }: {
        requestBody: SceneRequest,
    }): CancelablePromise<Scene> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trpg_agent/generate_scene',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
