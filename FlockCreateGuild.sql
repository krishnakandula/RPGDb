CREATE TABLE CHARACTER (
	Character_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Character_id)
	,Character_name VARCHAR(30) NOT NULL
	,Sex BOOLEAN
	,Experience_points INT DEFAULT 0
	,Hit_points INT DEFAULT 0
);
CREATE TABLE ARMORY (
	Market_id VARCHAR(64) NOT NULL
	,Armory_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Market_id, Armory_id)
	,Blacksmith VARCHAR(30)
	,FOREIGN KEY (Market_id) REFERENCES MARKET(Market_id)
);
CREATE TABLE ARMOR (
	Armor_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Armor_id)
);
CREATE TABLE TOOLS (
	Tools_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Tools_id)
);
CREATE TABLE WEAPONS (
	Weapons_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Weapons_id)
);
CREATE TABLE BARRACKS (
	Barracks_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Barracks_id)
	,Barracks_name VARCHAR(30)
);
CREATE TABLE CAFETERIA (
	Barracks_id VARCHAR(64) NOT NULL
	,Cafeteria_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (
		Barracks_id
		,Cafeteria_id
		)
	,Head_chef VARCHAR(30)
	,FOREIGN KEY (Barracks_id) REFERENCES BARRACKS(Barracks_id)
);
CREATE TABLE COLOSSEUM (
	Mission_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Mission_id) REFERENCES MISSION(Mission_id)
	,PRIMARY KEY (Mission_id)
	,Admission_fee INT NOT NULL DEFAULT 100
	,Fight_date_and_time DATE NOT NULL DEFAULT NOW()
);
CREATE TABLE GENERAL_STORE (
	Store_keeper VARCHAR(30)
	,Store_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Market_id) REFERENCES MARKET(Market_id)
	,PRIMARY KEY (
		Market_id,
		Store_id)
);
CREATE TABLE INFIRMARY (
	Head_nurse VARCHAR(30)
	,Barracks_id VARCHAR(64) NOT NULL
	,Infirmary_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Barracks_id) REFERENCES BARRACKS(Barracks_id)
	,PRIMARY KEY (
		Barracks_id
		,Infirmary_id
		)
);
CREATE TABLE INVENTORY (
	Inventory_id VARCHAR(64) NOT NULL
	,Character_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
	,PRIMARY KEY (
		Inventory_id
		,Character_id
		)
	,Gold INT DEFAULT 100
);
CREATE TABLE MAGICIAN (
	Character_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
	,PRIMARY KEY (Character_id)
	,Magic_Points INT DEFAULT 100
	,Type_flag_1 BOOLEAN DEFAULT FALSE
);
CREATE TABLE MARKET (
	Market_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Market_id)
	,Market_name VARCHAR(30)
	,Character_id VARCHAR(64) DEFAULT NULL
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
);
CREATE TABLE MISSION (
	Mission_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Mission_id)
);
CREATE TABLE PARTY (
	Party_name VARCHAR(30) NOT NULL
    ,Party_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Party_id)
);
CREATE TABLE PET (
	Pet_id VARCHAR(64) NOT NULL
	,Character_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
	,PRIMARY KEY (
		Pet_id
		,Character_id
		)
	,Pet_name VARCHAR(30)
	,Health_points INT DEFAULT 100
);
CREATE TABLE QUARTERS (
	Barracks_id VARCHAR(64) NOT NULL
	,Quarters_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (
		Barracks_id
		,Quarters_id
		)
	,Quarter_master VARCHAR(30)
	,FOREIGN KEY (Barracks_id) REFERENCES BARRACKS(Barracks_id)
);
CREATE TABLE QUEST (
	Mission_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Mission_id)
	,Quest_name VARCHAR(30)
	,Quest_giver VARCHAR(30)
	,Location VARCHAR(30)
	,Deadline DATE
	,FOREIGN KEY (Mission_id) REFERENCES MISSION(Mission_id)
);
CREATE TABLE REWARDS (
	Rewards_id VARCHAR(64) NOT NULL
	,Gold INT DEFAULT 100
	,Experience_points INT DEFAULT 100
	,Mission_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Mission_id) REFERENCES MISSION(Mission_id)
	,PRIMARY KEY (
		Rewards_id
		,Mission_id
		)
);
CREATE TABLE FOOD (
	Food_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Food_id)
);
CREATE TABLE POTION (
	Potion_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Potion_id)
);
CREATE TABLE WARRIOR (
	Warrior_id VARCHAR(64) NOT NULL
	,PRIMARY KEY (Warrior_id)
	,Stamina_points INT DEFAULT 100
	,Type_flag_1 BOOLEAN DEFAULT FALSE
	,Type_flag_2 BOOLEAN DEFAULT FALSE
);
CREATE TABLE CHARACTER_SKILL (
	Skill_id VARCHAR(64) NOT NULL
	,Character_id VARCHAR(64)
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
	,PRIMARY KEY (
		Skill_id
		,Character_id
		)
);
CREATE TABLE CHARACTER_FOOD (
	Food_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Food_id) REFERENCES FOOD(Food_id)
	,Character_id VARCHAR(64)
	,Inventory_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id, Inventory_id) REFERENCES INVENTORY(Character_id, Inventory_id)
	,CONSTRAINT Character_Food_Key PRIMARY KEY (
		Food_id
		,Character_id
		,Inventory_id
		)
);
CREATE TABLE STORE_FOOD (
	Food_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Food_id) REFERENCES FOOD(Food_id)
	,General_store_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (General_store_id, Market_id) REFERENCES GENERAL_STORE(Store_id, Market_id)
	,CONSTRAINT Store_food_key PRIMARY KEY (
		Food_id
		,General_store_id
		,Market_id
		)
);
CREATE TABLE CHARACTER_POTION (
	Potion_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Potion_id) REFERENCES POTION(Potion_id)
	,Character_id VARCHAR(64) NOT NULL
	,Inventory_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id, Inventory_id) REFERENCES INVENTORY(Character_id, Inventory_id)
	,CONSTRAINT Character_Potion_Key PRIMARY KEY (
		Potion_id
		,Character_id
		,Inventory_id
		)
	);
CREATE TABLE STORE_POTION (
	Potion_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Potion_id) REFERENCES POTION(Potion_id)
	,General_store_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (General_store_id, Market_id) REFERENCES GENERAL_STORE(Store_id, Market_id)
	,CONSTRAINT Store_Potion_Key PRIMARY KEY (
		Potion_id
		,General_store_id
		,Market_id
		)
	);
CREATE TABLE ARMORY_ARMOR (
	Armor_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Armor_id) REFERENCES ARMOR(Armor_id)
	,Armory_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Armory_id, Market_id) REFERENCES ARMORY(Armory_id, Market_id)
	,CONSTRAINT Armory_Armor_Key PRIMARY KEY (
		Armor_id
		,Armory_id
		,Market_id
		)
	);
CREATE TABLE CHARACTER_ARMOR (
	Armor_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Armor_id) REFERENCES ARMOR(Armor_id)
	,Character_id VARCHAR(64) NOT NULL
	,Inventory_id VARCHAR(64) NOT NULL
    ,FOREIGN KEY (Character_id, Inventory_id) REFERENCES INVENTORY(Character_id, Inventory_id)
	,CONSTRAINT Character_Armor_key PRIMARY KEY (
		Armor_id
		,Character_id
		,Inventory_id
		)
);
CREATE TABLE CHARACTERS_JOINS_A_PARTY (
	Character_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id) REFERENCES CHARACTER(Character_id)
	,Party_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Party_id) REFERENCES PARTY(Party_id)
	,PRIMARY KEY (
		Character_id
		,Party_id
		)
);
CREATE TABLE PARTY_PARTICIPATES_IN_MISSION (
	Party_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Party_id) REFERENCES PARTY(Party_id)
	,Mission_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Mission_id) REFERENCES MISSION(Mission_id)
	,PRIMARY KEY (
		Party_id
		,Mission_id
		)
);
CREATE TABLE ARMORY_TOOL (
	Tools_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Tools_id) REFERENCES TOOLS(Tools_id)
	,Armory_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Armory_id, Market_id) REFERENCES ARMORY(Armory_id, Market_id)
	,CONSTRAINT Armory_Tool_Key PRIMARY KEY (
		Tools_id
		,Armory_id
		,Market_id
		)
	);
CREATE TABLE CHARACTER_TOOL (
	Tools_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Tools_id) REFERENCES TOOLS(Tools_id)
	,Character_id VARCHAR(64) NOT NULL
	,Inventory_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id, Inventory_id) REFERENCES INVENTORY(Character_id, Inventory_id)
	,CONSTRAINT Character_Tool_Key PRIMARY KEY (
		Tools_id
		,Character_id
		,Inventory_id
		)
	);
CREATE TABLE ARMORY_WEAPON (
	Weapons_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Weapons_id) REFERENCES WEAPONS(Weapons_id)
	,Armory_id VARCHAR(64) NOT NULL
	,Market_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Armory_id, Market_id) REFERENCES ARMORY(Armory_id, Market_id)
	,CONSTRAINT Armory_Weapon_Key PRIMARY KEY (
		Weapons_id
		,Armory_id
		,Market_id
		)
	);
CREATE TABLE CHARACTER_WEAPON (
	Character_id VARCHAR(64) NOT NULL
	,Weapons_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Weapons_id) REFERENCES WEAPONS(Weapons_id)
	,Inventory_id VARCHAR(64) NOT NULL
	,FOREIGN KEY (Character_id, Inventory_id) REFERENCES INVENTORY(Character_id, Inventory_id)
	,CONSTRAINT Character_Weapon_Key PRIMARY KEY (
		Weapons_id
		,Character_id
		,Inventory_id
		)
	);