export interface AdminRole {
    id?: string;
    nom?: string;
    accessright?: string;
}
export interface Admin {
    adminId?: string;
    adminUsername?: string;
    adminPassword?: boolean;
    adminRole?: string;
    
}