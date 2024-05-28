export class UserUpgradeStatements {
    userUpgrades = [
        {
        toVersion: 1,
        statements: [
            `CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            active INTEGER DEFAULT 1
            );`
        ]
        },
        
        /* version 2 */
        {
        toVersion: 2,
        statements: [
            `ALTER TABLE users ADD COLUMN cidade TEXT;`,
        ]
        },
        
        /* version 3 */
        {
          toVersion: 3,
          statements: [
              `ALTER TABLE
              users ADD COLUMN email TEXT DEFAULT NULL;`,
          ]
          },
    ]
  }