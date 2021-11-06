// Task C11
// Create a suitable single SQL instruction that archives all messages by Steve Jobs;
// your instruction should specify the update based
// on the user’s exact name rather than the user’s id.

const archiveSteve = `
UPDATE Messages  SET archive=1 WHERE userid IN (SELECT userid FROM users WHERE friendlyname="Steve Jobs");
`;

module.exports = { archiveSteve };