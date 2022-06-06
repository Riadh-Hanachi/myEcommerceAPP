
export const db= [
{name:'souris-usb-havit-ms753-rouge',image: require('../Assets/Images/image1.jpg'), id:'1',price:'20',description:'heigh quality', numberOfReviews:'1000', averageOfReviews:'4.5',category:'SINGLE ORIGIN',recommended:'true',topSeller:'false'},
{name:'ecran-gaming-optix-mag251rx-full-hd',image: require('../Assets/Images/image2.jpg'), id:'2',price:'25', description:'Tunisian product', numberOfReviews:'324', averageOfReviews:'4.9',category:'MULTI FLOWER',recommended:'false',topSeller:'true'},
{name:'haut-parleur-kisonli-v320-noir',image: require('../Assets/Images/image3.jpg'), id:'3',price:'30',description:'healthy', numberOfReviews:'1200', averageOfReviews:'4.2',category:'LOCAL',recommended:'false',topSeller:'false'},
{name:'hub-usb-4-ports-usb-20-avec-interrupteur',image: require('../Assets/Images/image4.jpg'), id:'4',price:'35',description:'Bio, Healthy', numberOfReviews:'1500', averageOfReviews:'4.1',category:'LIGHT TYPES',recommended:'true',topSeller:'true'},
{name:'clavier-usb-macro-k747474',image: require('../Assets/Images/image5.jpg'), id:'5',price:'40',description:'good quality', numberOfReviews:'1900', averageOfReviews:'4.0',category:'SINGLE ORIGIN',recommended:'true'},
{name:'malette-de-portable-156-rose',image: require('../Assets/Images/image6.jpg'), id:'6',price:'45',description:'heigh quality', numberOfReviews:'900', averageOfReviews:'3.9',category:'DARK TYPES',recommended:'false',topSeller:'false'},
{name:'malette-pour-pc-portable-156-rouge',image: require('../Assets/Images/image7.jpg'), id:'7',price:'50',description:'Best quality', numberOfReviews:'570', averageOfReviews:'4.8',category:'SINGLE ORIGIN',recommended:'true',topSeller:'true'},
{name:'webcam-de-conference-sanberg-all-in-1-confcam-4k-4mic',image: require('../Assets/Images/image8.jpg'), id:'8',price:'500',description:'Best quality', numberOfReviews:'570', averageOfReviews:'4.8',category:'SINGLE ORIGIN',recommended:'true',topSeller:'true'}]


export function getProduct(id) {
    return db.find((product) => (product.id == id));
}