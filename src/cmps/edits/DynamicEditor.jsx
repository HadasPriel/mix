import { TxtEdit } from "./TxtEdit"

export function DynamicEditor(props) {
    switch (props.type) {
        case 'txt':
            return <TxtEdit {...props} />
        default:
            return <div></div>
    }
}