# Chat-Space
Ruby on Railsを使用したWebサービスです。
TECH::CAMP受講中に作成いたしました。

<img width="1440" alt="スクリーンショット 2020-05-12 11 57 33" src="https://user-images.githubusercontent.com/63936582/83638609-5ecf6c80-a5e4-11ea-9018-4a019e6ebae4.png">

## Description
ログイン機能、グループ機能付きのチャットアプリです。




 # chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages

# groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group






