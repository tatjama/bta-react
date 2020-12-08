import React from 'react';
import SelectForm from '../components/SelectForm';
import SectionFirstFeedback from '../components/SectionFirstFeedback';
import {useAppContext} from '../libs/contextLib';

const Feedbacks = ()=>{
    const { isUserAuthenticated} = useAppContext();      
    console.log( isUserAuthenticated)
    
    return(
        <div className="page-feedback">
            <header className="header" id="header-feedback">
                <div id="message" style={{"color": "rgb(29, 150, 187)"}}></div>
                <SelectForm/>
            </header>
    <div className="wrapper" >
        <h3>Feedback</h3>
            <SectionFirstFeedback/>
            <h2>TOP ADVISER </h2>
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, fugit velit theophrastus sit ne, eros feugait no ius. Dicant tincidunt cum et, iuvaret nominati quaestio ei qui. Laoreet concludaturque eam no, illud deseruisse est te. Inani dolorum est et, eirmod euismod oporteat cu pri.
                        Erant sonet eruditi at quo, minim lucilius ei vix. Sed soluta euismod ei. Ad alia adipisci sed. Mea ea zril facilisis. Pro decore nominati ad, no dictas alterum eam. Et usu ancillae salutandi, in eos hinc doming. Agam deterruisset
                        eum te, assentior complectitur eu his. Tation oporteat et qui. Quidam blandit eu vim, laudem equidem theophrastus et vim. Feugiat graecis dissentiet an pri, has an utroque legendos. Commodo alterum suscipit mei ei. Duo vitae scaevola
                        in, usu falli viderer in. Mea eu duis vidit repudiare, ut has putant mollis rationibus. Sit alia homero quaeque et, usu erroribus accusamus te, ea vix fastidii accusata maiestatis. Ex usu verterem comprehensam. Soleat aliquam ex
                        pro, fuisset facilisis repudiare ea pro. Ceteros intellegam in sed, pri tempor placerat ea, ne est verear scripta. Nec in odio partem repudiandae, vix omnesque quaestio liberavisse ad, sumo decore eu cum. Mea eu mucius insolens,
                        ei erant accumsan consequat est. Ut vis solet detracto appellantur. Eu inani errem ludus sit, vim convenire argumentum id, ne exerci laoreet vituperatoribus eos. Ut eam quando ceteros. Quo ut partiendo vituperata.
                    </p>
                </section>        
    </div>


        </div>
    )
}

export default Feedbacks;