import { Helmet } from "react-helmet";

export default function PageTitle(props) {
    return (
        <Helmet>
            <title>{props.name}</title>
            <meta name="title" content={`${props.name}`}/>
            <meta name="description" content={`${props.description}`}/>
            <meta httpEquiv="content-language" content="vi"/>
        </Helmet>
    )
}