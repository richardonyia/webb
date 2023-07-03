   /*
          export async function getStaticProps () {
            const exploreData = await fetch("https://links.papareact.com/pyp").
             then (
              (res) => res.json
             );
          
        
               return {
                props: { exploreData },
              };
            }
        
          function Main({exploreData}) {
            return(
               <div className="card">
                <h2 className="availabe"> Available Nearby </h2>
                   
                 
        
              </div>
                  )
                   }

          */


                   import React, { useEffect, useState } from 'react';

                   export async function getStaticProps() {
                     const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
                   
                     return {
                       props: {
                         exploreData: exploreData,
                       },
                     };
                   }
                   
                   export default function Main() {
                    const [exploreData, setExplore] = useState([{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}])
                    useEffect(()=>{
                      async function getStaticProps() {
                        const data = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
                        console.log(data)
                        setExplore(data)
                      }
                      getStaticProps()
                    },[])
                     return (
                       <div className="card">
                         <h2 className="available">Available Nearb5y</h2>
                   
                         {exploreData && Array.isArray(exploreData) ? (
                           exploreData.map((item) => <h1 key={item.id}>{item.location}</h1>)
                         ) : (
                           <p>Loading...</p>
                         )}
                       </div>
                     );
                   }
                   