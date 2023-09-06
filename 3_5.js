let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};

car.description(); // works

/* setTimeout(car.description, 200); // fails -> Because the context of "this"
 isn't stored when the function is being passed as a reference. */

    setTimeout(() => car.description(), 200) // 5A. works

// 5B.

let car2 = {...car}

car2.year = 1920;

setTimeout(() => car2.description(), 400)
// 5C. Uses the updated values of the car since it's been cloned and the value has been reassigned to 1920.


// 5D.

car.description = car.description.bind(car);
// car.description has now been bound and will remain fixed for new clones.

setTimeout(car.description, 600);

// 5E.

let car3 = {...car, make:"Bugatti", year: 1920};

setTimeout(() => car3.description(), 800);

setTimeout(() => console.log(car3), 1000);

/* Since car.description has now been bound, the new copy will not provide an updated description
with the changed properties, even though the object itself has been updated.*/