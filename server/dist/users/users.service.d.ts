import { DbService } from 'src/db/db.service';
export declare class UsersService {
    private db;
    constructor(db: DbService);
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        hash: string;
        salt: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(email: string, hash: string, salt: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        email: string;
        hash: string;
        salt: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
