from turtle import *

#We want to make castle

speed(50)
width(10)

#First make squares for castle itself and towers
color('brown')
begin_fill()
penup()
goto(-100, -250)
pendown()

forward(200)
left(90)

forward(300)
left(90)

forward(200)
left(90)

forward(300)
right(90)
end_fill()

begin_fill()
forward(100)
right(90)

forward(400)
right(90)

forward(100)
right(90)

forward(100)
left(180)
end_fill()

penup()
goto(100, 50)
pendown()

begin_fill()
forward(100)
right(90)

forward(100)
right(90)

forward(400)
right(90)

forward(100)
right(60)
end_fill()

#Now we need roofs
penup()
goto(230, 150)
pendown()

color("orange")
begin_fill()

forward(150)
left(120)

forward(150)
left(120)

forward(150)
left(120)
end_fill()

penup()
goto(-70, 140)
pendown()
begin_fill()

forward(150)
left(120)

forward(150)
left(120)

forward(150)
left(90)
end_fill()

#Now lets make windows and door
penup()
goto(0,-250)
pendown()
color('black')
begin_fill()

forward(100)
left(90)

forward(50)
left(90)

forward(100)
left(90)

forward(100)
left(90)

forward(100)
left(90)

forward(50)
left(90)
end_fill()

color('grey')

penup()
goto(-120, 120)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(180, 120)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(-120, 30)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(-120, -60)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(180, 30)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(180, -60)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(90, 30)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(90, -60)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(90, 30)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(-30, -60)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()

penup()
goto(-30, 30)
pendown()
begin_fill()
forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)

forward(60)
right(90)
end_fill()



exitonclick()