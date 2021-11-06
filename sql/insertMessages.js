// Task B05
// Extract, reformat and prepare the user’s test message data (illustrated below)
// into a suitable, ‘optimised’ (i.e., minimal fields used) single SQL ‘INSERT’ instruction
// that results in the insertion and correct relationship of each of the specified messages to
// their owner ensuring you also appropriately set the message’s initial archive state (where outlined in the test data).  

const insertMessages = `
INSERT INTO Messages(
    message,
    userid,
    archive)
    VALUES
    ("Always bear in mind that your own resolution to success is more important than any other one thing.", 1000, 0),
    ("An unexamined life is not worth living.", 1010, 0),
    ("Anyone who claims to be a leader must speak like a leader. That means speaking with integrity and truth.", 1007, 0),
    ("Don't go around saying the world owes you a living. The world owes you nothing. It was here first.", 1008, 1),
    ("Don't throw stones at your neighbours, if your own windows are glass.", 1003, 0),
    ("First, have a definite, clear practical ideal, a goal, an objective. Second, have the necessary means to achieve your ends, wisdom, money, materials, and methods. Third, adjust all your means to that end", 1002, 0),
    ("Getting fired from Apple was the best thing that could have ever happened to me. The heaviness of being successful was replaced by the lightness of being a beginner again. It freed me to enter one of the most creative periods of my life", 1011, 0),
    ("How wonderful it is that nobody needs to wait a single moment before starting to improve the world", 1001, 0),
    ("I am not afraid", 1014, 0),
    ("I find that the harder I work, the more luck I seem to have.", 1013, 0),
    ("If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", 1009, 0),
    ("If you really look closely, most overnight successes took a long time.", 1011, 0),
    ("It does not matter how slowly you go as long as you do not stop.", 1004, 0),
    ("Many of life's failures are people who did not realise how close they were to success when they gave up.", 1012, 0),
    ("No one can make you feel inferior without your consent.", 1005, 0),
    ("The only limit to our realisation of tomorrow will be our doubts of today", 1006, 0),
    ("Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbours, catch the trade winds in your sails. Explore, Dream, Discover.", 1008, 0),
    ("You know you are on the road to success if you would do your job and not be paid for it.", 1009, 0);
`
module.exports = { insertMessages };