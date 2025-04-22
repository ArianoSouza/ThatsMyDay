// src/db.ts
import knex from 'knex';
import config from '../config/knexconfig';

const db = knex(config.development);

export default db;