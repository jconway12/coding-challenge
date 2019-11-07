# README

## Schema
### items table:
* id (integer)
* title (string)
* color (string)
* style (string)

### season_tags joins table
* id (integer)
* item_id (integer)
* season_id (integer)

### seasons joins table
* id (integer)
* season (string)

### if time: 
### users table:
auth pattern using BCrypt
* username (string)
* session_token (string)
* password_digest (string)

### to-dos
users should be able to view all items and sort by season

### if time, AWS photo storage


