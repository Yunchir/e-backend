import pool from "../config/mysql-config.js";

export async function createUser(
  name,
  role,
  password,
  email,
  contact,
  adress_1,
  adress_2,
  user_image
) {
  const rows = new Date();
  let year = rows.getFuulYear();
  let month = rows.getMonth();
  let day = rows.getDate();
  let register_date = `${year}-${month}-${day}`;
  await pool.query(
    `insert into user (name, role, password, email, contact, adress_1, adress_2, user_image, register_date) value(${name},${password},${role},${email},${contact},${adress_1},${adress_2},${user_image})`
  );
  return rows;
}
