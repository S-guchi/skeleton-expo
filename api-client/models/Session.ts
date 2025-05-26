/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ユーザーのTRPGセッションデータ。
 *
 * Attributes:
 * user_id (str): ユーザーID。
 * session_id (str): セッションの一意識別子。
 * character_id (str): キャラクターID。
 * is_finished (bool): セッションが終了しているかどうか。
 * turn (int): ターン数。
 * created_at (datetime): セッション作成時刻。
 * updated_at (datetime): セッション最終更新時刻。
 */
export type Session = {
    user_id: string;
    session_id?: string;
    character_id: string;
    is_finished?: boolean;
    created_at?: string;
    updated_at?: string;
};

