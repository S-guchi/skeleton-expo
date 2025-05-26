/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Character } from '../models/Character';
import type { CharacterCreate } from '../models/CharacterCreate';
import type { CharacterRead } from '../models/CharacterRead';
import type { GenerateImageInput } from '../models/GenerateImageInput';
import type { GenerateImageOutput } from '../models/GenerateImageOutput';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CharactersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get List Characters
     * @returns CharacterRead Successful Response
     * @throws ApiError
     */
    public getListCharactersCharacterGet(): CancelablePromise<Array<CharacterRead>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/character/',
        });
    }
    /**
     * Create Character By Payload
     * @returns CharacterRead Successful Response
     * @throws ApiError
     */
    public createCharacterByPayloadCharacterPost({
        requestBody,
    }: {
        requestBody: CharacterCreate,
    }): CancelablePromise<CharacterRead> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/character/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Character By Id
     * @returns CharacterRead Successful Response
     * @throws ApiError
     */
    public getCharacterByIdCharacterCharacterIdGet({
        characterId,
    }: {
        characterId: string,
    }): CancelablePromise<CharacterRead> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/character/{character_id}',
            path: {
                'character_id': characterId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Character By Id
     * @returns CharacterRead Successful Response
     * @throws ApiError
     */
    public updateCharacterByIdCharacterCharacterIdPut({
        characterId,
        requestBody,
    }: {
        characterId: string,
        requestBody: Character,
    }): CancelablePromise<CharacterRead> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/character/{character_id}',
            path: {
                'character_id': characterId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Character By Id
     * @returns void
     * @throws ApiError
     */
    public deleteCharacterByIdCharacterCharacterIdDelete({
        characterId,
    }: {
        characterId: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/character/{character_id}',
            path: {
                'character_id': characterId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Generate Character Image
     * @returns GenerateImageOutput Successful Response
     * @throws ApiError
     */
    public generateCharacterImageCharacterCharacterIdImagePost({
        characterId,
        requestBody,
    }: {
        characterId: string,
        requestBody: GenerateImageInput,
    }): CancelablePromise<GenerateImageOutput> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/character/{character_id}/image',
            path: {
                'character_id': characterId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
