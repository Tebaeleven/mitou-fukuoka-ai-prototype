class Scene {
    constructor() {
        this.object = [];
    }
    Create(obj,id) {
        if (obj === "cube") {
            var min = 1;
            var max = 10;
            let temp = {
                shape: "cube",
                id: id,
            };
            this.object.push(temp);
        }
    }
    Play(obj) {
        console.log(Object.values(this.object).find((obj) => obj.id === 2));
    }
}

export default Scene

