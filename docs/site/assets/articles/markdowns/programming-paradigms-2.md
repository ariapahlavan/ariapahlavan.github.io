<br>

Now let's compare procedural and object-oriented programming.

The table below shows us that procedural and
object-oriented have many similarities, and
their main difference is with their basic elements.
The object-oriented paradigm heavily rely on objects 
whereas you would mostly deal with subroutines in 
procedural languages.

<br>

|      criteria      |   procedural   | object-oriented |
|:------------------:|:--------------:|:---------------:|
|   basic elements   |   subroutines  |     objects     |
|        state       |    stateful    |     stateful    |
|        data        |     mutable    |     mutable     |
| parallel execution | not a good fit | not a good fit  |
| order of execution |     matters    |     matters     |

<br>

Object-oriented languages are more popular of the two paradigms 
mainly because objects enable features like polymorphism,
encapsulation, and inheritance.

For example, the code below shows that Circle and Square
are inheriting the `draw` functionality from Shape (inheritance) and
restrict access to some of their members (encapsulation). Further,
we see that `shape` can accept both of Circle and Square instances
and execute their corresponding `draw` method (polymorphism).

<br>

```Java
interface Shape {
    void draw();
}

class Circle implements Shape {
    private int radius;
  
   Circle(int radius) {
       this.radius = radius; 
   }
  
    @Override void draw() { 
        log.info("Drawing a circle -- r={}", radius); 
    }
}

class Square implements Shape {
  @Override void draw() {
    log.info("Drawing a square"); 
  }
}

class Main {
  public static void main(String[] args) {
    Shape shape = new Circle();
    shape.draw(); // output: "Drawing a circle -- r=2"
    
    shape = new Square();
    shape.draw(); // output: "Drawing a square"
  }
}
```

<br>

In comparison, the procedural code below only have simple
subroutines for drawing circle or square without sharing 
any common logic. Also, `radius` is a global variable 
that can be accessed or modified by any subroutine.

<br>

```C
int32_t radius = 2;

void drawCircle() {
  printf("Drawing a circle -- r=%d", radius);
}

void drawSquare() {
  printf("Drawing a square");
}

int main(int argc, char *argv[]) {
  drawCircle(); // output: "Drawing a circle -- r=2"
  drawSquare(); // output: "Drawing a square"
}
```
<br> 

Why would we bother learning about other programming paradigms? 
Seems like we already have a couple of OK paradigms that we 
can use, right? Maybe! 🤔

We are mostly comfortable working with single-threaded application
because, not until recently, applications used to be simple and 
only had to process a low amount of data.


