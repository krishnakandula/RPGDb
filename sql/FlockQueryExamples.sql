/* Count all characters */
SELECT COUNT(*) FROM CHARACTER;

/* Show listing of all male characters */
SELECT character_name, character_id, sex
    FROM CHARACTER
    WHERE sex = TRUE;

/* Show characters that work with armory -- cross join in PSQL */
SELECT * 
    FROM CHARACTER, GENERAL_STORE
    WHERE CHARACTER.market_id = GENERAL_STORE.market_id;

/* Value of of how much exp gained for a mission */
SELECT (AVG(REWARDS.gold))
        / ((SELECT COUNT(*) FROM CHARACTER) * ((SELECT COUNT(*) FROM PARTY) / 2)) "EXP GAINED FROM MISSION"
    FROM REWARDS;

/* Show mission schedule for a party */
SELECT * 
    FROM MISSION
    WHERE party_id IN
    (SELECT party_id 
        FROM PARTY
        LIMIT 1 OFFSET 14
    ) ORDER BY fight_date
    LIMIT 6;