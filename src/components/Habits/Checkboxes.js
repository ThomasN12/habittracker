// import Checkbox from "./Checkbox";
// import { useState, useEffect} from "react";

// const Checkboxes = ({onSaveRowData}) => {

//     const [totalCheckedItem, setTotalCheckedItem] = useState(0);

//     // console.log("tong so o duoc check trong hang la",totalCheckedItem);

//     // const rowCheckedItem = {
//     //     total: totalCheckedItem
//     // }
//     // const rowData = {
//     //     total: totalCheckedItem
//     // }

//     // props.onSaveRowData(rowData);

//     useEffect(() => {
//         onSaveRowData((prevCount) =>{
//             console.log("prevcount la", prevCount)
//             console.log("totalcheckeditem la ", totalCheckedItem)
//             if (prevCount === totalCheckedItem - 1 || prevCount === totalCheckedItem + 1)
//             return prevCount + 1;
//             return totalCheckedItem + prevCount;
//         })
//     },[totalCheckedItem, onSaveRowData]);

//     // props.rowCheckedItem(totalCheckedItem);
    

//     return (
//         <div className="habit__checkboxes">
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//             <Checkbox setCountCheckedItem = {setTotalCheckedItem}></Checkbox>
//         </div>
//     )
// }
// export default Checkboxes;