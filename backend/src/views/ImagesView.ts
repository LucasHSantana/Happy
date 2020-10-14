import Image from '../models/Image'

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://localhost:3333/src/database/uploads/${image.path}`
        };
    },

    renderMany(image: Image[]){
        return image.map(image => this.render(image))
    }
}