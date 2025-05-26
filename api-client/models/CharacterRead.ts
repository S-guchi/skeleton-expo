/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stats } from './Stats';
export type CharacterRead = {
    uid: string;
    user_prompt: string;
    image_prompt: string;
    name: string;
    flavor_text: string;
    image_url?: (string | null);
    race: string;
    stats: Stats;
    created_at?: (string | null);
    id: string;
};

