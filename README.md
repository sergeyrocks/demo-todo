# To-do List (Test Project)

We need to create a single list to-do app.
There is no authentication required for this app.

The app should display a single to-do list. Anyone can add, remove, or mark complete items in the list.

The only field a to-do list item has is a text description. That is required to add an item to the to-do list.

- When someone adds an item to the list it should save it to the database.
- When someone marks an item on the list complete it should update it in the database and show the item as marked complete.
- When someone removes the item from the list it should soft-delete the item and remove it from the list.



## Scope

- [ ] I should be able to view all of the items in the to-do list.
- [ ] I should be able to add an item to the list
- [ ] I should be able to remove an item from the list
- [ ] I should be able to mark an item from the list as complete

There are no design requirements for this task. You can install Tailwind or Bootstrap for basic styling if you prefer or include no styling at all. 


### Technical Requirements
- Database: Mysql or PostgreSQL
- API backend: Laravel
- Frontend: React.js (with typescript and React hooks)

****
#### Nice to have but not required:
- Use Repository Pattern
- Use Laravel's APiResource for API responses

****
### App installation:
- app requires docker
- `cp .env.example .env`
- `composer install`
- `sail up -d` (`./vendor/bin/sail up` if you don't have an alias)
- `sail php artisan migrate`
- optionally you can seed some tasks - `sail php artisan db:seed`
