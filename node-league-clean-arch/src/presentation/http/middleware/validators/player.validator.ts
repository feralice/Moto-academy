import { body, param } from 'express-validator';

export const createPlayerValidator = [
  body('name').notEmpty().withMessage('Player name is required').isString().withMessage('Name must be a string'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
];

export const updatePlayerValidator = [
  param('id').isUUID().withMessage('Invalid player ID'),
  body('name').optional().isString().withMessage('Name must be a string'),
  body('email').optional().isEmail().withMessage('Invalid email format'),
];

export const deletePlayerValidator = [param('id').isUUID().withMessage('Invalid player ID')];
