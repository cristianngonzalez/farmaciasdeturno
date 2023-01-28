import React from "react";

class ListComponent extends React.Component{


   

   render(){
      return(
         <>

            <div className="card border-primary mb-3" >
                <div className="card-body">
                    <h4 className="card-title">SuFarma</h4>
                    <p className="card-text">Avenida Adolfo Alsina 12345</p>
                    <p className="card-text">Horario: De 09:00 a 20:00</p>
                </div>
            </div>

            <div className="card border-primary mb-3" >
                <div className="card-body">
                    <h4 className="card-title">SuFarma</h4>
                    <p className="card-text">Avenida Adolfo Alsina 12345</p>
                    <p className="card-text"><span className="btn btn-success">Abierto</span> Horario: De 09:00 a 20:00</p>
                </div>
            </div>
            
         
         </>
      )
   }
}

export default ListComponent;