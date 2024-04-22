import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

const weekdaySelection: React.FC = () => {
    const data =[
        {label:'Monday', value:'monday'},
        {label:'Tuesday', value:'tuesday'},
        {label:'Wednesday', value:'wednesday'},
        {label:'Thursday', value:'thursday'},
        {label:'Friday', value:'friday'},
        {label:'Saturday', value:'Saturday'},
        {label:'Sunday', value:'sunday'}
    ];
    const [value, setValue] = React.useState("");
    const handleSelectionChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <Select
            label="Class Days"
            placeholder="Select Class day"
            selectionMode="multiple"
            className="max-w-xs"
        >
            {data.map((day) => (
                <SelectItem key={day.value} value={day.value}>
                    {day.label}
                </SelectItem>
            ))}
        </Select>
    );
}
export default weekdaySelection;