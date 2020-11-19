import React, { useState } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';

const Graph = (props) =>{

    const {arpu} = props.data
    const {cpa} = props.data
    const {ctr} = props.data
    const {cpi} = props.data
    const {spend} = props.data 
    const {d7_roas} = props.data
    const {installs} = props.data
    const {impressions} = props.data
    const {cohort_revenue} = props.data
    const {unique_purchases} = props.data
    const {d7_purchase_value} = props.data
    const {cpm} = props.data
    const {d1_purchase_value} = props.data
    const [value,setInputValue] = useState('cpa')
    const [data,setdata] = useState(arpu)

    const handleChange = (e) =>{
        setInputValue(e.target.value)
        const name = e.target.value 
        // console.log(name)
        // setdata(e.target.value)
        if(name === "ctr"){
        setdata(ctr)}

        if(name === "spend"){
            setdata(spend)}
        

        if(name === "cpa"){
            setdata(cpa) }

        if(name === "cpi"){
            setdata(cpi) }

        if(name === "arpu"){
            setdata(arpu) }
        
        if(name === "d7_roas"){
            setdata(d7_roas) }

        if(name === "installs"){
            setdata(installs) }

        if(name === "impressions"){
            setdata(impressions) }

        if(name === "cohort_revenue"){
            setdata(cohort_revenue) }

        if(name === "unique_purchases"){
            setdata(unique_purchases) }

        if(name === "d7_purchase_value"){
            setdata(d7_purchase_value) }
            
        if(name === "d1_purchase_value"){
            setdata(d1_purchase_value) }

        if(name === "cpm"){
            setdata(cpm) }

        }
    console.log(props.data)
    console.log(data)

    return(
        <>
            <form style={{textAlign:"center"}}>
                <label>
                <select value={value} onChange={(e) => handleChange(e)}>
                    <option value="cpa">cpa</option>
                    <option value="cpi">cpi</option>
                    <option value="ctr">ctr</option>
                    <option value="arpu">arpu</option>
                    <option value="spend">spend</option>
                    <option value="d7_roas">d7_roas</option>
                    <option value="arpu">installs</option>
                    <option value="impressions">impressions</option>
                    <option value="cohort_revenue">cohort_revenue</option>
                    <option value="unique_purchases">unique_purchases</option>
                    <option value="d7_purchase_value">d7_purchase_value</option>
                    <option value="cpm">cpm</option>
                    <option value="d1_purchase_value">d1_purchase_value</option>
                    
                </select>
                </label>
            </form>
            <BarChart width={1050} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 6" />
                <XAxis dataKey="adaccount_id" angle={-10}  textAnchor="end"  />
                <YAxis />
                <Legend />
                <Bar dataKey="pre" fill="#8884d8" />
                <Bar dataKey="post" fill="#82ca9d" />
            </BarChart>
        </>

    )

}

export default Graph;
