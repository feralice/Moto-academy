import { body, param } from 'express-validator';

export const createTournamentValidator = [
  body('leagueId').notEmpty().withMessage('leagueId is required').isUUID().withMessage('leagueId must be a valid UUID'),

  body('name').notEmpty().withMessage('Tournament name is required').isString().withMessage('name must be a string'),

  body('date').notEmpty().withMessage('date is required').isISO8601().withMessage('date must be in YYYY-MM-DD format'),

  body('numRounds')
    .notEmpty()
    .withMessage('numRounds is required')
    .isInt({ min: 1 })
    .withMessage('numRounds must be a positive integer'),
];

export const updateTournamentValidator = [
  param('id').isUUID().withMessage('Invalid tournament ID'),
  body('leagueId').optional().isUUID().withMessage('Invalid leagueId'),
  body('name').optional().isString(),
  body('date').optional().isISO8601().withMessage('Invalid date format'),
  body('numRounds').optional().isInt({ min: 1 }),
];

export const deleteTournamentValidator = [param('id').isUUID().withMessage('Invalid tournament ID')];

export const addPlayerToTournamentValidator = [
  param('id').isUUID().withMessage('Invalid tournament ID'),
  body('playerId').notEmpty().withMessage('playerId is required').isUUID().withMessage('playerId must be a valid UUID'),
  body('points').optional().isInt({ min: 0 }).withMessage('points must be a non-negative integer'),
];
