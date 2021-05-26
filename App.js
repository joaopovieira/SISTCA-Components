import './App.css';
import React, {useState} from 'react';

function App() {
  const [numb1, setnumb1] = useState("");
  const [string, setstring] = useState("");
  const [list, setlist] = useState([]);
  var quantity=0;
  var existcomp=0;

  const addlist= ()=>{
    setlist([
        ...list, 
        {
          quant: numb1,
          comp: string
        },
      ]);
  };
  
  function deletelist(){
    const newlist = list.filter((val)=> val.comp !==string);
    setlist(newlist);

  }
  return (
    <div className="division">
        <div>
          <div className="subdivision">
            <h1>
              Add Component
            </h1>
            <label>Component</label>
            <input type="text"  
                    onChange={(v)=>{setstring(v.target.value);}}
              />
            <label>Quantity</label>
            <input type="number" min="0" 
                    className="numb"
                    onChange={(v)=>{setnumb1(v.target.value);}}
              />
              
              {()=>existcomp=0}
                
              {list.map((val)=>{ 
                 if (string === val.comp){
                    { existcomp=1};
                    return( <input disabled type="text" 
                            id="alertyellow" 
                            value="Existent Component"/>)
                    }
               })} 

                { string ==="" && existcomp===0?
                    <input disabled type="text" id="alertred" 
                        value="Required Item"
                    /> 
                    : ""
                }      
                { numb1 ==="" && string !=="" && existcomp===0?
                    <input disabled type="text" id="alertred"
                         value="Required Quantity"
                    /> 
                    : ""
                }
                {numb1 !=="" && string!=="" && existcomp===0?
                        <input disabled type="text" id="alertgreen" 
                            value="Good"
                        /> 
                        : ""
                } 
              <div>
                { numb1 ==="" || string ==="" || existcomp===1 ?
                  <button disabled > Submit </button> 
                  : <button enabled onClick={addlist} > Submit</button>                  
                } 
                { existcomp!==1  ?
                  <button disabled   > Delete </button> 
                  : <button enabled onClick={deletelist}> Delete</button>                  
                } 
              </div>
              
          </div>
          <div className="subdivision">

              {()=>quantity=0} 
              {list.map((val)=>{
                 quantity+=1*val.quant; 
              })}  
                
              Quantity Total: {quantity}
                
              </div>
        </div>
        <div className="table">

          <div className="row">
                <div className="tabletitle" >Component</div>
                <div className="tabletitle" >Quantity</div>
          </div>

          {list.map((val)=>{
               return (
                   <div className= "row">
                        <div className="tablerow" >{val.comp} </div>
                        <div className="tablerow" >{val.quant} </div>
                    </div>
                ) 
           })} 
            
        </div>
        
    </div>
  );
}

export default App;