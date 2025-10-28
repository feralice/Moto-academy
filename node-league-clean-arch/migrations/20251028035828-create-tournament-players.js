'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tournament_players', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      tournament_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'tournaments', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      player_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'players', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      points: { type: Sequelize.INTEGER, defaultValue: 0 },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    });

    await queryInterface.addConstraint('tournament_players', {
      fields: ['tournament_id', 'player_id'],
      type: 'unique',
      name: 'uq_tournament_player',
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('tournament_players');
  },
};
