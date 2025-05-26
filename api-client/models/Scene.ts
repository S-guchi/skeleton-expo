/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterStateUpdate } from './CharacterStateUpdate';
import type { Choices } from './Choices';
import type { DiceRoll } from './DiceRoll';
/**
 * 1つのシーン（物語の進行単位）の構造。
 *
 * Attributes:
 * scene_id (str): シーンの識別子。
 * title (str): シーンタイトル。
 * description (str): 描写文。TRPG的な演出を含む。
 * background_image_url (str): 背景画像のURL。
 * dice_roll (DiceRoll): ダイス判定の結果。
 * choices (Choices): プレイヤーの選択肢。
 * character_state_update (CharacterStateUpdate): キャラクターの状態の更新。
 * ending (bool): シーンが終了したかどうか。
 */
export type Scene = {
    scene_id: string;
    title: string;
    description: string;
    background_image_url?: string;
    background_image_generation_prompt_english?: string;
    dice_roll: DiceRoll;
    choices: Choices;
    character_state_update: CharacterStateUpdate;
    ending?: boolean;
};

