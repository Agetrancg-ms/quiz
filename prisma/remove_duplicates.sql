DELETE FROM "Question"
WHERE id NOT IN (
  SELECT MIN(id)
  FROM "Question"
  GROUP BY text, "difficultyLevel"
);
