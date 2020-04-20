# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false, add_index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_mamay :grops, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :groups_usres
- has_many :users, through: :groups_usres
- has_many :messages

## groups_usresテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user_id|string|null: false, foreign_key: true|
|group_id|string|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :messeges
