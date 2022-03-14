CREATE TABLE employee(
  id UUID DEFAULT uuid_generate_v4 (),
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone VARCHAR,
  vacation_days  TEXT [],
  sickness_days  TEXT [],
  PRIMARY KEY (id)
)
