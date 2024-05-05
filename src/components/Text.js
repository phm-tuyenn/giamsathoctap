import { TypeAnimation } from 'react-type-animation';

export default function Text(props) {
    return <TypeAnimation style={props.style} sequence={[props.text]} speed={50}/>
}