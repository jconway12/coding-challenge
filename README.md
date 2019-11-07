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

### explination
the reason I have a season_tag table rather than a season_id or season directly on the item itself was initially for scalability purposes. Given time, I would have liked to include a variety of different types of tags for matching items to different occasions, etc, but due to time constraints started out with just using only a season tag


