import { body, param } from 'express-validator';

export const createLeagueValidator = [
  body('name').notEmpty().withMessage('League name is required').isString().withMessage('League name must be a string'),
];

export const updateLeagueValidator = [
  param('id').isUUID().withMessage('Invalid league ID'),
  body('name').notEmpty().withMessage('League name is required').isString().withMessage('League name must be a string'),
];

export const deleteLeagueValidator = [param('id').isUUID().withMessage('Invalid league ID')];
