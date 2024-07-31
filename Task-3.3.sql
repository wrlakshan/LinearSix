SELECT
    *
FROM
    USER u
LEFT JOIN groupMembership gm ON
    u.id = gm.userID
LEFT JOIN `group` g ON
    gm.groupID = g.id
WHERE
    u.firstName = 'Victor' AND g.name NOT LIKE 'TEST-%';