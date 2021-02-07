import { Select } from 'antd';
const { Option } = Select;
export default function LanguageSelect(props:any) {
    const onChange = (value: string) => {
        console.log(value);
        props.setLanguage(value)
    }

    return (
        <Select
            onChange={onChange}
            defaultValue="0"
            style={{ width: 120 }}>
            <Option value="0">C++</Option>
            <Option value="1">Java</Option>
            <Option value="2" disabled>
                JavaScript</Option>
            <Option value="3" disabled>Python</Option>
        </Select>
    )
}