-- Seed data for Work Order
INSERT INTO toad.workorders (name, description, completed, createdAt, updatedAt) 
VALUES ("Anon", "Scope of Work", 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- Seed Data fror Time Sheet
INSERT INTO toad.timesheets (startTime, EndTime, description, createdAt, updatedAt, WorkOrderId, UserId) 
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Late/Absence Excuse, Lunch Break, Smoke Break, etc.", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1);
-- Seed Data for Users
INSERT INTO toad.users (name, createdAt, updatedAt) 
VALUES ("John Doe",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);