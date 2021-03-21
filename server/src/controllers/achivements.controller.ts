import { Request, Response, NextFunction } from 'express';
import {
    createAchivementDto,
    ManageUserAchivementActions,
    manageUserAchivementDto,
} from '../dtos/achivements.dto';
import { BadRequestError } from '../errors/bad-request.error';
import { Achivement } from '../models/achivement.model';
import { User } from '../models/user.model';
import mongoose from 'mongoose';
import { NotFoundError } from '../errors/not-found.error';

export const getAchivementsController = async (req: Request, res: Response, next: NextFunction) => {
    const achivements = await Achivement.find();

    res.status(200).send(achivements);
};

export const getAchivementController = async (req: Request, res: Response, next: NextFunction) => {
    const achivementId = req.params.id;
    const achivement = await Achivement.findOne({ _id: achivementId });

    if (!achivement) {
        throw new NotFoundError();
    }

    res.status(200).send(achivement);
};

export const getUserAchivementsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('Return all achivements');
};

export const createAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, description, points, level } = req.body as createAchivementDto;

    // -- check if similar achivement already exists
    const similarAchivement = await Achivement.findOne({
        $or: [
            { title: { $eq: title } },
            { $and: [{ points: { $eq: points } }, { level: { $eq: level } }] },
        ],
    });

    if (similarAchivement) {
        throw new BadRequestError(
            'Achivement with similar title or points and level already exists'
        );
    }

    // -- create achivement
    const achivement = Achivement.build({ title, description, points, level });
    await achivement.save();

    res.status(201).send(achivement);
};

export const manageUserAchivementsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userId = req.currentUser!.id;
    const { action, achivementsIds } = req.body as manageUserAchivementDto;
    let updatedUser;

    // -- check if user exists
    updatedUser = await User.findOne({ _id: userId });
    if (!updatedUser) {
        throw new BadRequestError('User does not exist');
    }
    const userAchivements = updatedUser.achivements;

    // -- check if provided achivements exist
    achivementsIds.forEach(async (achivementId) => {
        const existingAchivement = await Achivement.findOne({ _id: achivementId });

        if (!existingAchivement) {
            throw new BadRequestError('Achivement does not exist');
        }

        // -- (un)assign achivements from/to user
        switch (action) {
            case ManageUserAchivementActions.ASSIGN:
                if (!userAchivements.includes(achivementId)) {
                    await User.findByIdAndUpdate(
                        userId,
                        { $push: { achivements: existingAchivement._id } },
                        { new: true, useFindAndModify: true }
                    );
                }
                break;
            case ManageUserAchivementActions.UNASSIGN:
                if (userAchivements.includes(achivementId)) {
                    await User.findByIdAndUpdate(
                        userId,
                        { $pull: { achivements: existingAchivement._id } },
                        { new: true, useFindAndModify: true }
                    );
                }
                break;
            default:
                break;
        }

        // TODO: add mapping from achivement->user (currently not needed)
    });

    res.status(204).send();
};

export const updateAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: implementation (currently not needed)
    res.send('Achivement updated');
};

export const deleteAchivementController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: implementation (currently not needed)
    res.send('Achivement deleted');
};
