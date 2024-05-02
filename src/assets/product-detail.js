import BlackWatch from "./BlackWatch.png"
import BlueWatch from "./BlueWatch.png"
import RedWatch from "./RedWatch.png"
import PurpleWatch from "./PurpleWatch.png"
const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: BlackWatch
        },
        {
            styleName: 'Red Strap',
            imageUrl: RedWatch
        },
        {
            styleName: 'Blue Strap',
            imageUrl: BlueWatch
        },
        {
            styleName: 'Purple Strap',
            imageUrl: PurpleWatch
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;