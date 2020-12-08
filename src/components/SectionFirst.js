import React from 'react';
import Figure from './Figure';


class SectionFirst extends React.Component{
    constructor(props){
        super();    
}
    render(){
        
        return(
            <section className="section-first">
                {console.log(this.props.info)}
                {this.props.info.map((figure) =>{
                    return(
                        <Figure 
                        name = {figure.name} 
                        source = {figure.source} 
                        handleOnClick = {figure.handleOnClick} 
                        alt = {figure.alt} 
                        go  = {figure.go}
                        key = {figure.name}
                    />
                    )}
                )}
                    
                    
                </section>

        )
    }
}

export default SectionFirst;