class Car{
    constructor({
        id,
        name,
        imageUrl,
        price,
        category,
        description
    }){
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
        this.price = price
        this.category = category
        this.description = description
    }
}

const carHolder = {}

const resolvers = {
    getCars : () => { return new Car(carHolder[id]) },
    createCar: ({input}) => {
        let id = nanoid();
        carHolder[id] = input
        return new Car(input)
     }
}

export default resolvers;

