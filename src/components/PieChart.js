import React from "react";
import { Expense } from "./Expense";
import { Pie,PieChart,Cell,Tooltip} from 'recharts';

class Chart extends React.Component{

    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042"];

    expense = [new Expense("Miscellenious",1200),new Expense("Education",1000),new Expense("Grocery",500),
    new Expense("Travel",450)]


    CustomTooltip = ({ active, payload, label }) => {
        debugger;
        if (active) {
           return (
           <div
              className="custom-tooltip"
              style={{
                 backgroundColor: "#ffff",
                 padding: "5px",
                 border: "1px solid #cccc"
              }}
           >
              <label>{`${payload[0].name} : ${payload[0].value}`}</label>
           </div>
        );
     }
     return null;
};




    render(){
        return(
            <div>
                <div>Pie Chart</div>
                <PieChart width={730} height={250}>
                    <Pie
                    data = {this.expense}
                    dataKey="amount"
                    nameKey="category"
                    outerRadius={100}
                    fill="green"
                    
                    >

                    {this.expense.map((entry,index)=>
                        <Cell
                        key={`cell - ${index}`}
                        fill={this.COLORS[index % this.COLORS.length]}
                        >
                        </Cell>
                    )}

                    </Pie>
                    <Tooltip content={<this.CustomTooltip/>}/>
                </PieChart>
            </div>
        );
    }
}

export default Chart;