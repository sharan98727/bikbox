import { Collapse } from 'antd';
import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import './index.css';
import Graph from './Graph';


const Start= () => {

    const { Panel } = Collapse;

    function callback(key) {
    console.log(key);
    }


    const [data,setData] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    async function getData() {
        const result = await fetch(`http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true`)
        const getresults =  await result.json();
        setData(getresults.data);
        console.log(getresults);
    }


    const rows = data.map((item,id) =>{
        return(
            <Collapse defaultActiveKey={[id]} onChange={callback}>
                        <Panel header={
                            <div style={{display:"flex"}}>
                                <span style={{marginRight:"auto",fontWeight:"bold"}}>{item.feature}</span>
                                <span >{item.description}</span>
                            </div>} 
                            key={id}>
                            <Graph data={item.data}/>
                          
                        </Panel>
            </Collapse>
        )
    })

        return(
            <div style={{marginLeft:"20px", marginRight:"20px"}}>
                {rows}
            </div>
        )
}

export default Start;