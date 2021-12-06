import { WapGallery } from "../bankCmps/WapGallery"
import { WapHeader } from "../bankCmps/WapHeader"
import { WapHero } from "../bankCmps/WapHero"

export function DynamicCmp(props) {
    switch (props.cmp.type) {
        case 'wap-header':
            return <WapHeader {...props} />
        case 'wap-gallery':
            return <WapGallery {...props} />
        case 'wap-hero':
            return <WapHero {...props} />

        default:
            return <div>Loading...</div>
    }
}
