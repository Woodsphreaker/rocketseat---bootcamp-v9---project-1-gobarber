'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('appointments', 'canceled_at', {
      type: Sequelize.DATE,
      allowNull: true,
    })
  },
  down: queryInterface => {
    return queryInterface.dropColumn('appointments', 'canceled_at')
  },
}
