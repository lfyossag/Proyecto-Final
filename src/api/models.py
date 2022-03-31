from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    lastName = db.Column(db.String(120),unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class OrderCart(db.Model):
    orderCartID = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer, nullable=False)
    productID = db.Column(db.Integer, db.ForeignKey('person.id'),
        nullable=False)
    
    def __repr__(self):
        return '<OrderCart %r>' % self.orderCartID

    def serialize(self):
        return {
            "orderCartID": self.orderCartID,
            "quantity": self.quantity,
            "productID": self.productID
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    lastName = db.Column(db.String(120),unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    productID = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    price = db.Column(db.Integer,unique=False, nullable=True)
    description = db.Column(db.String(256), unique=True, nullable=False)
    category = db.Column(db.String(256), unique=False, nullable=False)
    image = db.Column(db.String(256), unique=False, nullable=False)
    

    def __repr__(self):
        return '<Product %r>' % self.title

    def serialize(self):
        return {
            "productID": self.productID,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            "category": self.category,
            "image": self.image,
        }
