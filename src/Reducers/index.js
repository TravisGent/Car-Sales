export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FEATURE":
        let newObj = state.additionalFeatures.find(item => (
          item.id === action.payload
        ))

        let newVar = 0;
        for(let i = 0; i < (state.car.features.length); i++) {
          newVar += (state.car.features[i].price);
        }

        return {
          ...state,
          
          car: {
            ...state.car,
            features: [...state.car.features, newObj]
          },

          additionalFeatures: state.additionalFeatures.filter(item => (
            item.id !== action.payload
          )),
          additionalPrice: newVar
        }

      case "REMOVE_FEATURE":
        let newObjTwo = state.car.features.find(item => (
          item.id === action.payload
        ))

        let newVarTwo = 0;
        for(let i = 0; i < (state.additionalFeatures.length); i++) {
          newVarTwo -= (state.additionalFeatures[i].price);
        }

        return {
          ...state,
          additionalFeatures: [
            ...state.additionalFeatures, 
            newObjTwo
          ],

          car: {
            ...state.car,
            features: state.car.features.filter(item => (
              item.id !== action.payload
            ))
          }
        }
        
      default:
        return state;
    }
  }