import { AppService } from './app.service';
import { DbService } from './db/db.service';
declare class HelloWorldDto {
    message: string;
}
export declare class AppController {
    private readonly appService;
    private db;
    constructor(appService: AppService, db: DbService);
    getHello(): Promise<HelloWorldDto>;
}
export {};
