---
slug: lowercase-email
title: Lowercase Email
authors: [lil5]
tags:
  - v1
---

Server version 1.8.8 release adds `linux/arm` support and forces emails to be lowercased.

Adding linux ARM support was integral to keeping stupidwebauthn working with my Mac M2 machine. Here's the bug report if you're interested: https://github.com/oven-sh/bun/issues/15204 .

An additional migration automatically forces all emails to be lowercased. :warning: take care to check if there are any user accounts that have a duplicate already.

This sql query (sqlite) will show any email addresses that will conflict during the migration.
```sql
SELECT group_concat(email) as conflicting_email, lower(email) as lemail, COUNT(*) as n FROM users
GROUP BY lemail
HAVING n > 1
ORDER by lemail
```
