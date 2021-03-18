export type createAchivementDto = {
    title: string;
    description: string;
    points: number;
    level: number;
};

export type updateAchivementDto = {
    title?: string;
    description?: string;
    points?: number;
    level?: number;
};

export type manageUserAchivementDto = {
    action: ManageUserAchivementActions;
    achivementsIds: string[];
};

export enum ManageUserAchivementActions {
    ASSIGN = 'assign',
    UNASSIGN = 'unassign',
}
