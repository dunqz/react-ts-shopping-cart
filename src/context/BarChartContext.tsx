// import { useState } from "react";
// import { BarChart } from "../components/charts/BarChart";
// import {StoreData} from "../data/data"

// export function BarChartContext(){
//     const [storeData, setStoreData] = useState({
//         labels: StoreData.map((data) => data.year),
//         datasets: [{
//             label: "Product Sold",
//             data: StoreData.map((data)=>data.productName)
//         }],
//     })
    
//     return (
//         <div>
//             <BarChart chartData={storeData} />
//         </div>
//     )
// }