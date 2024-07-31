SELECT
    u.id,
    u.firstName,
    u.lastName,
    g.id,
    g.name
FROM
    USER u
JOIN groupMembership gm ON
    u.id = gm.userID
JOIN `group` g ON
    gm.groupID = g.id
WHERE
    u.created < g.created;