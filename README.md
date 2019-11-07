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

### explination/ refactor
the reason I have a season_tag table rather than a season_id or season directly on the item itself was initially for scalability purposes. Given time, I would have liked to include a variety of different types of tags for matching items to different occasions, etc, but due to time constraints started out with just using only a season tag

season model is a bit unnecessary given it is an array of length 4 (would allow for easier transition to different types of tags)

dont need season_tags in frontend (reducer), normalized state in the backend

### Next Task
Add season_tags to the new item form so that items can be filtered by season
Styling => better UX

### Features
* Users can see all items 
* Users can filter items by season tags
* Users can add new items 

### Highlights
* normalized backend state
* potential for new types of tags/ scalability