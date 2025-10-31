import { param } from 'express-validator';

export const getPlayersWithPointsValidator = [
  param('id').notEmpty().withMessage('league id is required').isUUID().withMessage('league id must be a valid UUID'),
];
