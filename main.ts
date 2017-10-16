document.addEventListener('DOMContentLoaded', function(){
    
    let shapeNameLabel = document.getElementById('shapeText');
    let heightNameLabel = document.getElementById('heightText');
    let widthNameLabel = document.getElementById('widthText');
    let radiusNameLabel = document.getElementById('radiusText');
    let perimeterNameLabel = document.getElementById('perimeterText');
    let areaNameLabel = document.getElementById('areaText');
    let canvas = document.getElementById('canvas');

    document.getElementById('btnSquare').addEventListener('click', (event) => {
        let inputSquareLength = (<HTMLInputElement>document.getElementById('inputSquareLength')).value;
        let height = parseInt(inputSquareLength);
        let width = parseInt(inputSquareLength);
        let square = new Square(height, width);
    });
    document.getElementById('btnRectangle').addEventListener('click', (event) => {
        let inputRectangleHeigth = (<HTMLInputElement>document.getElementById('inputRectangleHeight')).value;
        let inputRectangleWidth = (<HTMLInputElement>document.getElementById('inputRectangleWidth')).value;
        let height = parseInt(inputRectangleHeigth);
        let width = parseInt(inputRectangleWidth);
        let rectangle = new Rectangle(height, width);
    });     
    document.getElementById('btnTriangle').addEventListener('click', (event) => {
        let inputTriangleHeight = (<HTMLInputElement>document.getElementById('inputTriangleHeight')).value;
        let height = parseInt(inputTriangleHeight);
        let width = parseInt(inputTriangleHeight);
        let triangle = new Triangle(height, width); 
    });
    document.getElementById('btnCircle').addEventListener('click', (event) => {
        let inputCircleRadius = (<HTMLInputElement>document.getElementById('inputCircleRadius')).value;
        let radius = parseInt(inputCircleRadius);
        let circle = new Circle(radius);
    });

    class Shape {
        height: number;
        width: number;
        div: HTMLDivElement;
        classCss: string;
        radius: number;
       
        constructor(height, width) {
            this.div = document.createElement('div');
            let x = Math.floor(Math.random() * (600 - width));
            let y = Math.floor(Math.random() * (600 - height));
            this.div.style.top = (`${y}px`);
            this.div.style.left = (`${x}px`);
            this.div.style.width = (`${width}px`);
            this.div.style.height = (`${height}px`);
            this.div.addEventListener('click', (event) => {
               this.describe(width, height); 
            });
            this.div.addEventListener('dblclick', (event) => {
                this.div.remove();
            });
            canvas.appendChild(this.div);
        };
       
        describe(width, height) {
            shapeNameLabel.innerHTML = this.constructor.name;
            widthNameLabel.innerHTML = (this.width).toString() + 'px';
            heightNameLabel.innerHTML = (this.height).toString() + 'px';
        };
    };
    
    class Square extends Shape {
    
        constructor(height, width) {
            super(height, width);
            this.height = height;
            this.width = width;
            this.div.className = (`shapeSquare`);
            console.log(this);
        };
    
        describe(width, height) {
            super.describe(width, height);
            perimeterNameLabel.innerHTML = (Math.floor((height * 2) + (width * 2))).toString() + 'px';
            areaNameLabel.innerHTML = Math.floor(height * width).toString() + 'px<sup>2</sup>';
        };
    };
    
    class Rectangle extends Shape{
    
        constructor(height, width) {
            super(height, width);
            this.height = height;
            this.width = width;
            this.div.className = (`shapeRectangle`);
        };
    
        describe(width, height) {
            super.describe(width, height);
            perimeterNameLabel.innerHTML = (Math.floor((height * 2) + (width * 2))).toString() + 'px';
            areaNameLabel.innerHTML = Math.floor(height * width).toString() + 'px<sup>2</sup>';
        };
    };
    
    class Triangle extends Shape {  
    
        constructor(height, width) {
            super(height, width);
            this.height = height;
            this.width = width;
            this.div.style.borderLeft= (this.height + 'px solid transparent');
            this.div.style.borderBottom= (this.height + 'px solid yellow'); 
            this.div.className = (`shapeTriangle`);
            this.div.style.width = (`0px`);
            this.div.style.height = (`0px`);
        };
    
        describe(width, height) {
            super.describe(width, height);
            perimeterNameLabel.innerHTML = Math.floor(this.height + this.width + Math.sqrt((Math.pow(this.height, 2) + Math.pow(this.width, 2)))).toString() + 'px';
            areaNameLabel.innerHTML = Math.floor(this.height * this.width / 2).toString() + 'px<sup>2</sup>';
        };
    };
    
    class Circle extends Shape {
    
        constructor(radius){
            super((radius * 2), (radius * 2));
            this.radius = radius;
            this.height = NaN;
            this.width = NaN;
            this.div.className = (`shapeCircle`);
        };
    
        describe(height, width) {
            super.describe(height, width);
            radiusNameLabel.innerHTML = (this.radius).toString() + 'px';
            perimeterNameLabel.innerHTML = Math.floor(Math.PI * this.radius * 2).toString() + 'px';
            areaNameLabel.innerHTML = Math.floor(Math.PI * Math.pow(this.radius, 2)).toString() + 'px<sup>2</sup>';
        };
    };
});