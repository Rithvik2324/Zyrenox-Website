import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

export const runtime = "nodejs";

const databasePath = join(process.cwd(), "data", "waitlist.sqlite");

function getDatabase() {
  mkdirSync(dirname(databasePath), { recursive: true });

  const database = new DatabaseSync(databasePath);
  database.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return database;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();

    if (name.length < 2) {
      return Response.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const database = getDatabase();
    database
      .prepare("INSERT OR IGNORE INTO waitlist (name, email) VALUES (?, ?)")
      .run(name, email);
    database.close();

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return Response.json(
      { error: "Unable to join the waitlist right now." },
      { status: 500 },
    );
  }
}
