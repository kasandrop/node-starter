// Task C10
// Create a suitable single SQL instruction that deletes all archived messages over 30 days old.

const deleteOldMessages = `
DELETE FROM Messages WHERE archive=1 AND created<(strftime('%s','now','-1 month'));
`;

module.exports = { deleteOldMessages };