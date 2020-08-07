import knex from "knex";
import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .string("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("create_at")
      .notNullable()
      .defaultTo("now()");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
