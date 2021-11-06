// Task A01
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Users’ table as illustrated in
// the AdaBoard schema; don’t forget to include the Primary Key and unique constraints.
// Use “strftime('%s','now')” rather than “CURRENT_TIMESTAMP”.
const createUsers =` 
CREATE TABLE IF NOT EXISTS  Users (
    userid INTEGER PRIMARY KEY NOT NULL,
    friendlyname VARCHAR(50)  NOT NULL,
    emailaddress VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(256) DEFAULT  "--blank--" NOT NULL,
    admin INTEGER(1)  DEFAULT 0 CHECK (admin=1 OR admin=0) NOT NULL,
    lastlogin INTEGER(4) DEFAULT (strftime('%s','now')) NOT NULL
);
`
module.exports = { createUsers };
