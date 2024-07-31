SELECT
   g.name
FROM
    `group` g
LEFT JOIN `groupmembership` gm
ON gm.groupID = g.id
WHERE gm.groupID IS Null AND g.name LIKE 'TEST-%';


