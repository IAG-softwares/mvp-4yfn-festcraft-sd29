import Database from 'better-sqlite3'
import { v4 as uuidv4 } from 'uuid'

let db = null

export const initDatabase = () => {
  db = new Database('app.db')
  db.pragma('journal_mode = WAL')


  db.exec(`
    CREATE TABLE IF NOT EXISTS concept (
      id TEXT NOT NULL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      danceStyle TEXT NOT NULL,
      format TEXT NOT NULL,
      targetAudience TEXT NOT NULL,
      estimatedBudget INTEGER,
      capacityRange TEXT,
      innovationScore INTEGER NOT NULL,
      feasibilityScore INTEGER NOT NULL,
      status TEXT NOT NULL,
      createdDate TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.exec(`
    CREATE TABLE IF NOT EXISTS innovation (
      id TEXT NOT NULL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      applicableConcepts TEXT,
      implementationCost INTEGER,
      impactLevel INTEGER NOT NULL,
      complexity TEXT NOT NULL,
      status TEXT NOT NULL,
      dateAdded TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `)

  console.log('Database initialized')
}

export const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

export const generateId = () => uuidv4()
