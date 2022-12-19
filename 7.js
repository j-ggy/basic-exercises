const obj1 = {
    clothes: [],
    putOnClothes(item) {
        if (this.clothes.includes(item)) {
            console.log("Already wearing item!")
            throw Error("already wearing");
        } else {
            this.clothes.push(item);
            console.log(this.clothes);
        }
    }
}

obj1.putOnClothes("hat");
obj1.putOnClothes("socks");
obj1.putOnClothes("briefs");
obj1.putOnClothes("hat");
