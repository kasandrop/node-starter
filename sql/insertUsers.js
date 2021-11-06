// Task B04
// Extract, reformat and prepare the user test data (illustrated below)
// into a suitable single SQL ‘INSERT’ instruction that results in the insertion
// of each of the specified user accounts; ensure you set the default password as “--blank--”
// to indicate no password has been set at this time, the correct administration state and set
// the last login timestamp as 0 (0 = Unix Epoch i.e., Jan 01 1970) to indicate that no previous login attempts have been recorded.

const insertUsers = `
  INSERT INTO Users(
    userid ,
    friendlyname ,
    emailaddress ,
    admin 
    )
   VALUES
   (1000, "Abraham Lincoln",       "abraham@ada.ac.uk",   1), 
   (1001, "Anne Frank",            "anne@ada.ac.uk",      0),
   (1002, "Aristotle",             "aristotle@ada.ac.uk", 0),
   (1003, "Benjamin Franklin",     "benjamin@ada.ac.uk",  0),
   (1004, "Confucius",             "confucius@ada.ac.uk", 0),
   (1005, "Eleanor Roosevelt",     "eleanor@ada.ac.uk",   0),
   (1006, "Franklin D. Roosevelt", "franklin@ada.ac.uk",  0),
   (1007, "Kamala Harris",         "kamala@ada.ac.uk",    1),
   (1008, "Mark Twain",            "mark@ada.ac.uk",      0),
   (1009, "Oprah Winfrey",         "oprah@ada.ac.uk",     1),
   (1010, "Socrates",              "socrates@ada.ac.uk",  0),
   (1011, "Steve Jobs",            "steve@ada.ac.uk",     1),
   (1012, "Thomas A. Edison",      "tom@ada.ac.uk",       0),
   (1013, "Thomas Jefferson",      "thomas@ada.ac.uk",    0),
   (1014, "Alexei Navalny",        "alexei@ada.ac.uk",    1);
`
module.exports = { insertUsers };