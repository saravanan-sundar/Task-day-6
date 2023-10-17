class movie{
    constructor( Title, studio, rating){
        this.Title=Title;
        this.studio=studio;
        this.rating=rating|| "no rating";



    }
    getpg13(){
        console.log(`
           Title:${this.Title}
           studio:${this.studio}
          rating:${this.rating}
        `);
    };

    
}
const movie1=new movie("leo", "eon production")
const movie2=new movie("jawan","f production",7.8)
console.log(movie1);
console.log(movie2);
const movieArr=[movie1, movie2]
class checkrating{
    constructor(movies){
        this.movies=movies;


    }
    getpg(){
        const newArry=[]
    this.movies.Array.foreach(movie2 =>{
        if(pg=== "no rating"){

            console.log("error there is no rating");

        }else{
            newArry.push(movie2)
        }
        return newArry;


    });
}
}
const newcheck=new checkrating(movieArr);
console.log(newcheck);
getpg();



//cricle
class circle{
    constructor(radius,color,area){
       this._radius=(radius*2);
       this._color=color;
       
    }
    double(){
        console.log(`
        this.radius:${(radius*2)}
        this.color:${color}
        this.area:${area}
        `)
    }
    get radius(){
        return this._radius;
    }
    get color(){
        return this._color;
    }
    
    
    

}
const mycircle= new circle(5,"red",4)
console.log(mycircle);
console.log(mycircle.color);
console.log(mycircle.radius);
console.log(mycircle.area);

//class

class person{
    constructor(name, age, idno ,city){
        this.name=name;
        this.age=age;
        this.idno=idno;
        this.city=city;
    }
    personfeature(){
        console.log(`
        name:${this.name}
        age:${this.age}
        idno:${this.idno}
        city:${this.city}


        `)
    }
}
const data=new person("saravanan", 28, "b51wd", "bangalore");
console.log(data);
data.personfeature();

//class for uber price

class uber{
    constructor(location, designation, km ){
        this.location=location;
        this.designation=designation;
        this.km=km*14;

    }
    price(){
        console.log(`
            location:${this.location}
            designation:${this.designation}
             price:${this.km}
        `)
    }
}
const myuber=new uber("house", "hosur", 160);
console.log(myuber);
myuber.price();