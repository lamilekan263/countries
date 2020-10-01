import React,{ createContext } from 'react';



export const colorContext = createContext();


class ColorContextProvider extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          isLight: true,
          lightColor: {
            bg: "#ffff",
            color: 'black'
          },
          darkColor: {
              bg: "#2b3945",
              color: '#ffffff'
          },
        };
    }
    

    changeButton = () => {
        this.setState({ isLight: !this.state.isLight })
        console.log(this.state.isLight)
    }

    render() {
        return (
            <colorContext.Provider value={{ ...this.state, changeButton : this.changeButton}}>
                { this.props.children}
            </colorContext.Provider>
        )
    }
}


export default ColorContextProvider;