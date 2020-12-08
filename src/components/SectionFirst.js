import React from 'react';
import Figure from './Figure';


class SectionFirst extends React.Component{
    constructor(props){
        super();    
}
    render(){
        
        return(
            <section className="section-first">
                <div className = {this.props.position}>
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
                    
                    </div>   
                </section>

        )
    }
}

export default SectionFirst;