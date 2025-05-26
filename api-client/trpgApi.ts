/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CharactersService } from './services/CharactersService';
import { DefaultService } from './services/DefaultService';
import { ScenarioService } from './services/ScenarioService';
import { SessionService } from './services/SessionService';
import { TrpgAgentService } from './services/TrpgAgentService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class trpgApi {
    public readonly characters: CharactersService;
    public readonly default: DefaultService;
    public readonly scenario: ScenarioService;
    public readonly session: SessionService;
    public readonly trpgAgent: TrpgAgentService;
    public readonly users: UsersService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.characters = new CharactersService(this.request);
        this.default = new DefaultService(this.request);
        this.scenario = new ScenarioService(this.request);
        this.session = new SessionService(this.request);
        this.trpgAgent = new TrpgAgentService(this.request);
        this.users = new UsersService(this.request);
    }
}

