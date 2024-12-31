CREATE TABLE userTable (
    userID BIGINT AUTO_INCREMENT PRIMARY KEY, 
    userName VARCHAR(30), -- NOT NULL FALSE because trigger works automatically
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create the trigger
DELIMITER //

CREATE TRIGGER before_insert_userTable
BEFORE INSERT ON userTable
FOR EACH ROW
BEGIN
    -- 69:42 of Michael Steven's 3 Hour Prime Video @D!NG, 10847^2
    SET NEW.userID = (NEW.userID + 9047567) * 117657409; 
	-- SET DEFAULT "####### - User"usertableusertable
    IF NEW.userName IS NULL OR NEW.userName = '' THEN
		SET NEW.userName = CONCAT(NEW.userID, ' - User');
	ELSE
    -- Sanitize and Remove Elements from SQL injections, inner dual protection
		SET NEW.userName = REPLACE(NEW.userName, "'", "");
        SET NEW.userName = REPLACE(NEW.userName, ";", "");
        SET NEW.userName = REPLACE(NEW.userName, "&", "");
    END IF;
    
    SET NEW.createdAt = CURRENT_TIMESTAMP;

END //

DELIMITER ;
