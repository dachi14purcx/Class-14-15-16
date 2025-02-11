from datetime import datetime

# მომხმარებლის კლასის აღწერა
class User:
    def __init__(self, name, email, role="user"):
        self.name = name
        self.email = email
        self.role = role

    def display_info(self):
        print(f"User: {self.name}\nEmail: {self.email}\nRole: {self.role}")

# სტატიის კლასის აღწერა
class Article:
    def __init__(self, title, content, author):
        self.title = title
        self.content = content
        self.author = author
        self.date_posted = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def display_article(self):
        print(f"Title: {self.title}\nContent: {self.content}\nAuthor: {self.author.name}\nPosted on: {self.date_posted}")

# ადმინისტრატორის კლასის აღწერა
class Admin(User):
    def __init__(self, name, email):
        super().__init__(name, email, role="admin")
    
    def delete_article(self, article):
        print(f"Article '{article.title}' has been deleted by Admin {self.name}.")
    
    def update_article(self, article, new_title, new_content):
        article.title = new_title
        article.content = new_content
        print(f"Article '{article.title}' has been updated by Admin {self.name}.")

# რეალური გამოყენება:
user1 = User("John Doe", "john@example.com")
user2 = User("Jane Smith", "jane@example.com")
admin = Admin("Admin User", "admin@example.com")

article1 = Article("My First Blog Post", "This is the content of my first post.", user1)

# სტატიის ჩვენება
article1.display_article()

# ადმინისტრატორის მოქმედებები
admin.update_article(article1, "Updated Blog Post Title", "Updated content of the post.")
article1.display_article()

admin.delete_article(article1)
