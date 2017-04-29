/* Count all characters */
SELECT COUNT(*) FROM CHARACTER;

/* Show listing of all male characters */
SELECT character_name, character_id
    FROM CHARACTER
    WHERE sex = TRUE;

/* Show characters that work with armory -- cross join in PSQL */
SELECT * 
    FROM CHARACTER, GENERAL_STORE
    WHERE CHARACTER.market_id = GENERAL_STORE.market_id;

/* Value of of an occurrence */
