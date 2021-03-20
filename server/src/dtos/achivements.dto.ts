import mongoose from 'mongoose'

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
    achivementsIds: mongoose.Types.ObjectId[];
};

export enum ManageUserAchivementActions {
    ASSIGN = 'assign',
    UNASSIGN = 'unassign',
}
